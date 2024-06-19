const mongoose = require("mongoose");

const dbName = "LPKSDJKFN"
const MONGO_URI = `mongodb://sarfaraz01576:3KQPtlC1WKVqm8aX@ac-si9dluk-shard-00-00.e0cgrm7.mongodb.net:27017,ac-si9dluk-shard-00-01.e0cgrm7.mongodb.net:27017,ac-si9dluk-shard-00-02.e0cgrm7.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-12tgl7-shard-0&authSource=admin&retryWrites=true&w=majority&appName=xype1`;

mongoose.connect(MONGO_URI)

// Admin model
const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// User model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Client model
const clientSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },
});

// Item model
const itemSchema = new mongoose.Schema({
    item: { type: String, required: true },
    price: { type: Number, required: true },
});

// Sale model
const saleSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true }],
    totalAmount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    isPaid: { type: Boolean, default: false },
    vehicleDetails: {
        make: { type: String, required: true },
        model: { type: String, required: true },
        speedometerReading: { type: String},
        registrationNumber: { type: String, required: true },
        gstNumber: { type: String },
    },
});

const Admin = mongoose.model("admins", adminSchema);
const User = mongoose.model("User", userSchema);
const Client = mongoose.model("Client", clientSchema);
const Item = mongoose.model("Item", itemSchema);
const Sale = mongoose.model("Sale", saleSchema);

const createDefaultAdmin = async () => {
    try {
        const adminCount = await Admin.countDocuments({});
        if (adminCount > 0) {
            console.log('Admin already exists');
        } else {
            const admin = new Admin({
                username: 'admin123',
                password: 'admin123',
            });
            await admin.save();
            console.log('Default admin created successfully');
        }
    } catch (error) {
        console.error('Error creating default admin:', error);
    } 
};

createDefaultAdmin();

module.exports = {
    Admin,
    User,
    Client,
    Item,
    Sale
};