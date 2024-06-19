const {Item } = require("../../DB");

async function createItem(req, res) {
    try {
        const {item,price} = req.body;

        const newItem = new Item({
            item,
            price
        });

        await newItem.save();

        res.status(201).json({ message: "Item created successfully", Item : newItem });
    } catch (error) {
        console.error("Error in createItem:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = createItem;