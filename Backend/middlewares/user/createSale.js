const { Sale, Client } = require("../../DB");

async function createsell(req,res){
    try {
        const [userId,clientId,items,totalAmount,vehicleDetails] = req.body
        const newSale = new Sale({
            userId,
            clientId,
            items,
            totalAmount,
            vehicleDetails
        });
        await newSale.save();
        res.json(newSale)
    } catch (error) {
    }
};