const {Router} = require("express");
const userSignIn = require("../middlewares/user/Usersignin");
const { UserVerify } = require("../middlewares/user/Userverify");
const createClient = require("../middlewares/user/CreateClient");
const deleteClient = require("../middlewares/user/DeleteClient");
const getAllClients = require("../middlewares/user/GetClients");
const { Verify } = require("../middlewares/user/verify");
const createItem = require("../middlewares/user/CreateItem");
const deleteItem = require("../middlewares/user/DeleteItem");
const getAllItems = require("../middlewares/user/GetItems");

const user = Router();

user.post("/signin", userSignIn);
user.post("/createclient",UserVerify,createClient)
user.post("/deleteclient",UserVerify,deleteClient)
user.get("/clients",UserVerify,getAllClients)
user.post("/createitem",UserVerify,createItem)
user.post("/deleteitem",UserVerify,deleteItem)
user.get("/items",UserVerify,getAllItems)
user.post("/verify",Verify)
module.exports = {
    user
}