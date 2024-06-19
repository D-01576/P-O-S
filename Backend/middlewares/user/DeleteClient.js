const { Client } = require("../../DB");

async function deleteClient(req, res) {
    try {
        const {clientId} = req.body; 

        const client = await Client.findById(clientId);
        if (!client) {
            return res.status(404).json({ message: "Client not found" });
        }

        await Client.findByIdAndDelete(clientId);

        res.status(200).json({ message: "Client deleted successfully" });
    } catch (error) {
        console.error("Error in deleteClient:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = deleteClient;
