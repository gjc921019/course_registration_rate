// Author: Kenneth Mason

const loginRoutes = require("./login");
const studentRoutes = require("./students");
const courseRoutes = require("./courses");
//const mainRoutes = require("./main");
const express = require("express");
const app = express();

const constructorMethod = app => {
	app.use("/ajax", express.Router().get("*",async(req,res) =>{
	  res.status(200).send("Valid course IDs are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16");
	}));
	app.use("/", loginRoutes);
  app.use("/students", studentRoutes);
  app.use("/courses", courseRoutes);

  app.use("*", (req, res) => {
      res.redirect("/");
    });
};

constructorMethod(app);
module.exports = constructorMethod;
