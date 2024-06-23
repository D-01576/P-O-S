const { Sale, Client } = require("../../DB");

async function UserStatus(req, res) {
    try {
        const [userId] = req.body;
        const Sales = await Sale.findOne({userId});
        
    } catch (error) {
        console.error("Error in getTotalSaleAmounts:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = UserStatus;
