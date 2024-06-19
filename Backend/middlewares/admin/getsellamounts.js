const { Sale } = require("../../DB");

async function getTotalSaleAmounts(req, res) {
    try {
        const totalSales = await Sale.find({});
        const unpaidSales = await Sale.find({ isPaid: false });
        const paidSales = await Sale.find({ isPaid: true });

        const totalSaleAmount = totalSales.reduce((total, sale) => total + sale.totalAmount, 0);
        const unpaidSaleAmount = unpaidSales.reduce((total, sale) => total + sale.totalAmount, 0);
        const paidSaleAmount = paidSales.reduce((total, sale) => total + sale.totalAmount, 0);

        const saleAmounts = {
            totalSaleAmount,
            unpaidSaleAmount,
            paidSaleAmount
        };

        res.status(200).json({ saleAmounts, totalSales, unpaidSales, paidSales });
    } catch (error) {
        console.error("Error in getTotalSaleAmounts:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = getTotalSaleAmounts;
