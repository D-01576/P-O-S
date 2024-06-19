const { User, Sale } = require("../../DB");

async function getUser(req, res) {
    try {
        const users = await User.find({});
        const usersWithTotalSales = [];

        for (const user of users) {
            const totalSales = await Sale.find({ userId: user._id });
            const totalSalesCount = totalSales.length;
            const totalSalesAmount = totalSales.reduce((total, sale) => total + sale.totalAmount, 0);

            usersWithTotalSales.push({
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                },
                totalSalesCount,
                totalSalesAmount
            });
        }

        res.status(200).json({ usersWithTotalSales });
    } catch (error) {
        console.error("Error in getUsersWithTotalSales:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = getUser;
