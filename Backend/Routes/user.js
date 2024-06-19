const {Router} = require("express");
const userSignIn = require("../middlewares/user/Usersignin");
const { UserVerify } = require("../middlewares/user/Userverify");
const createClient = require("../middlewares/user/CreateClient");
const deleteClient = require("../middlewares/user/DeleteClient");
const getAllClients = require("../middlewares/user/GetClients");
const { Verify } = require("../middlewares/user/verify");

const user = Router();

user.post("/signin", userSignIn);
user.post("/createclient",UserVerify,createClient)
user.post("/deleteclient",UserVerify,deleteClient)
user.get("/clients",UserVerify,getAllClients)
user.post("/verify",Verify)
module.exports = {
    user
}