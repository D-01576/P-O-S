const { Sale, Client } = require("../../DB");

async function getTotalSaleAmounts(req, res) {
    try {
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999);

        const firstDayOfMonth = new Date(todayStart.getFullYear(), todayStart.getMonth(), 1);
        const lastDayOfMonth = new Date(todayStart.getFullYear(), todayStart.getMonth() + 1, 0, 23, 59, 59, 999);

        const totalSales = await Sale.find({});
        const unpaidSales = await Sale.find({ isPaid: false });
        const paidSales = await Sale.find({ isPaid: true });

        const totalSaleAmount = totalSales.reduce((total, sale) => total + sale.totalAmount, 0);
        const unpaidSaleAmount = unpaidSales.reduce((total, sale) => total + sale.totalAmount, 0);
        const paidSaleAmount = paidSales.reduce((total, sale) => total + sale.totalAmount, 0);

        const todaySales = await Sale.find({ date: { $gte: todayStart, $lte: todayEnd } });
        const todaySaleAmount = todaySales.reduce((total, sale) => total + sale.totalAmount, 0);

        const monthlySales = await Sale.find({ date: { $gte: firstDayOfMonth, $lte: lastDayOfMonth } });
        const monthlySaleAmount = monthlySales.reduce((total, sale) => total + sale.totalAmount, 0);

        const totalClients = await Client.countDocuments();

        const totalInvoiceAmount = totalSaleAmount; 

        const saleAmounts = {
            totalSaleAmount,
            unpaidSaleAmount,
            paidSaleAmount,
            todaySaleAmount,
            monthlySaleAmount,
            totalClients,
        };

        res.status(200).json({ saleAmounts, totalSales, unpaidSales, paidSales });
    } catch (error) {
        console.error("Error in getTotalSaleAmounts:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = getTotalSaleAmounts;
