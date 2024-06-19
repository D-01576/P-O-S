const jwt = require("jsonwebtoken");
const { Admin } = require("../../DB");
const secretkey = "Nissar"

async function AdminLog(req, res) {
    console.log(Admin)
    const { username, password } = req.body;
    try {
        console.log("k")
        const admin = await Admin.findOne({ username });
        console.log(admin)
        if (admin) {
            if (admin.password === password) {
                const token = jwt.sign({username: admin.username},secretkey);
                res.status(200).json({ token }); 
            } else {
                res.status(401).json({ message: "Incorrect password" });
            }
        } else {
            res.status(404).json({ message: "Admin not found" });
        }
    } catch (error) {
        console.error("Error in AdminLog:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = AdminLog;
