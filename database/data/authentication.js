const mongoCollections = require("./mongoCollections");
const users = mongoCollections.students;
const bcrypt = require('bcrypt');


const checkUsername = async (username) => {
            const studentCollection = await users();
            const studentgo = await studentCollection.findOne({ userName: username });
            if (studentgo === null) 
                { 
                    return false 
                }

            return true
    };

const matchPassword = async (username, password) => {
            
            const saltRounds = 16;
            const studentCollection = await users();
            const studentgo = await studentCollection.findOne({ userName: username });

            if(studentgo !== null) {
                if (username === studentgo.userName) {
                    var hash = bcrypt.hashSync(studentgo.password, saltRounds);
                    if (!bcrypt.compareSync(password, hash)) {
                        return {
                            status: false,
                            message: "The provided password is Wrong!"
                        }
                    }    
                     return {
                        status: true,
                        studentgo
                    } 
                }
            }
        else {
                return {
                    status: false,
                    message: "No user found!"
                }
        }
    };
module.exports = {
    checkUsername,
    matchPassword
};

