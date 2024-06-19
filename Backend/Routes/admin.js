const { Router } = require("express");
const AdminLog = require("../middlewares/admin/AdminSignin");
const { AdminVerify } = require("../middlewares/admin/AdminVerify");
const CreateUser = require("../middlewares/admin/CreateUser");
const getUser = require("../middlewares/admin/getuser");
const getTotalSaleAmounts = require("../middlewares/admin/getsellamounts");
const { Verify } = require("../middlewares/admin/verify");

const admin = Router();

admin.post("/signin", AdminLog);
admin.post("/create",AdminVerify,CreateUser)
admin.get("/users",AdminVerify,getUser)
admin.get("/sales",AdminVerify,getTotalSaleAmounts)
admin.post("/verify",Verify)

module.exports = {
    admin
};
