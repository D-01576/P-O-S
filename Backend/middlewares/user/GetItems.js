const {Item } = require("../../DB");

async function getAllItems(req, res) {
    try {
        const Items = await Item.find({});

        res.status(200).json({ Items });
    } catch (error) {
        console.error("Error in getAllClients:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = getAllItems;
