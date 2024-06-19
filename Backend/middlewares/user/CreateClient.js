const { Client } = require("../../DB");

async function createClient(req, res) {
    try {
        const { customerName, phone, email, address, state, city, pincode, vehicleDetails } = req.body;

        const newCustomer = new Client({
            customerName,
            phone,
            email,
            address,
            state,
            city,
            pincode,
            vehicleDetails
        });

        await newCustomer.save();

        res.status(201).json({ message: "Customer created successfully", Client: newCustomer });
    } catch (error) {
        console.error("Error in createCustomer:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = createClient;