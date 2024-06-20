const { Item } = require("../../DB");

async function deleteItem(req, res) {
    try {
        const {itemId} = req.body; 

        const item = await Item.findById(itemId);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }

        await Item.findByIdAndDelete(itemId);

        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        console.error("Error in deleteItem:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = deleteItem;
