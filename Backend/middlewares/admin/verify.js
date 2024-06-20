const jwt = require("jsonwebtoken");
const { Admin } = require("../../DB");
const secret = "Nissar"

async function Verify(req, res) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ status: "Token is missing" });
    }

    jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ status: "Token invalid" });
        }
        const email = decoded.email;
        try {
            const userr = await Admin.findOne({ email: email });
            if (userr) {
                return res.status(201).json({ status: "success"});
            } else {
                return res.status(403).json({ status: "Admin not found" });
            }
        } catch (error) {
            console.log("jjansjdjfjsdfsa")
            return res.status(500).json({ status: "Internal Server Error" });
        }
    });
}

module.exports = {
    Verify
}
