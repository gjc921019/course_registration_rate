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
        
            const studentCollection = await users();
            const studentgo = await studentCollection.findOne({ userName: username });

            if(studentgo !== null) {
                let userName = studentgo.username;
                if (userName === username) {
                    if (!bcrypt.compareSync(password, studentgo.hashedPass)) {
                        return {
                            status: false,
                            message: "The provided password is Wrong!"
                    }
                } else {
                    return {
                            status: true,
                            studentgo
                    }
                }
            }
        }
        
        return {
            status: false,
            message: "No user found!"
        }
    };
module.exports = {
    checkUsername,
    matchPassword
};

