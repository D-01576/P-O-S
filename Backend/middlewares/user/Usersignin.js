const jwt = require("jsonwebtoken");
const { User } = require("../../DB");
const secret = "Nissar"

async function userSignIn(req, res) {
    console.log("d")
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: "Incorrect password" });
        }
        const token = jwt.sign({ userId: user._id },secret);

        res.status(200).json({ message: "Sign in successful", token });
    } catch (error) {
        console.error("Error in userSignIn:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = userSignIn;
