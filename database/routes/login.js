const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const auth = require("../data");
const data = auth.authentication;
const app = express();

const studentData = require("../data/students");

app.use(cookieParser());
app.use(bodyParser.json());

router.get("/", (req, res) => {
    if (!req.session.user) {
        res.render('users/login', {title: "Register & Rate-Login", style: "style.css"});
    }
    else {
        res.redirect("/mainPage");
    }
});

router.post("/login", async (req, res) => {

    let user = req.body.username;
    let password = req.body.password;

    if (user && password) {
        let userCheck = await data.checkUsername(user);
        let passCheck = await data.matchPassword(user, password);
        
        if (userCheck && passCheck.status) {
            let user = {
                username: passCheck.studentgo.userName,
                profile: passCheck.studentgo.profile
            }
            req.session.user = user;
            res.redirect("/mainPage")
        }
        else {
            res.render("users/login",
                {
                    title: "Register & Rate-Login",
                    style: "style.css",
                    message: passCheck.message,
                    status: false
                }
            )
        }

    }
});

function checkAuthenticated(req, res, next) {
    if (req.session.user) {
        next();
    }
    else {
        res.status(403).render("users/error", { style: "error.css", title: "ERROR", err: "ERROR : 403 Forbidden. You are not Logged In. Please Login to continue." });
    }
};

router.get("/mainPage", checkAuthenticated, async (req, res) => {
    try{
        let loginUser = req.session.user; // cannot use it because it will not be updated
        const user = await studentData.getByUserName(loginUser.username);
        res.render("users/mainPage",
        {
            user: user.profile,
            title: "Register & Rate-Dashboard",
            style: "test.css"
        });
    }
    catch(e){
        res.status(500).json({error:e});
    }
});

router.get("/logout", checkAuthenticated, (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
    res.clearCookie('AuthCookie');
    res.render("users/logout", {title: "Register & Rate-Logout", style: "style.css"});
});
    
});


module.exports = router;
