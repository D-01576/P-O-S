const jwt = require("jsonwebtoken");
const { User } = require("../../DB");
const secret = "Nissar"

async function UserVerify(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ status: "Token is missing" });
    }

    jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ status: "Token invalid" });
        }
        const userId = decoded.userId;
        try {
            const userr = await User.findOne({ _id: userId });
            if (userr) {
                req.body.userId = userId;
                next();
            } else {
                return res.status(403).json({ status: "User not found" });
            }
        } catch (error) {
            return res.status(500).json({ status: "Internal Server Error" });
        }
    });
}

module.exports = {
    UserVerify
}
