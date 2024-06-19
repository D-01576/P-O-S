const { Client } = require("../../DB");

async function getAllClients(req, res) {
    try {
        const clients = await Client.find({});

        res.status(200).json({ clients });
    } catch (error) {
        console.error("Error in getAllClients:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = getAllClients;
