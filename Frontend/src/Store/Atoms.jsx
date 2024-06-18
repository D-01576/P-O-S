import { atom } from "recoil";

export const CurrentUrl = atom({
    key: "CurrentURL",
    default: ""
})

export const recenttransaction = atom({
    key: "recenttransaction",
    default:  [
        {
            name: "Client",
            role : "jkajsd",
            status : "Paid",
            invoiceNumber :12,
            amount : 23
        },{
            name: "Client",
            role : "jkajsd",
            status : "Pending",
            invoiceNumber :12,
            amount : 23,
            date:"lkmsad"
        },{
            name: "Client",
            role : "jkajsd",
            status : "Pending",
            invoiceNumber :12,
            amount : 23
        },{
            name: "Client",
            role : "jkajsd",
            status : "Pending",
            invoiceNumber :12,
            amount : 23
        },{
            name: "Client",
            role : "jkajsd",
            status : "Pending",
            invoiceNumber :12,
            amount : 23
        }
    ]
})

export const recentprojects = atom({
    key: "recentprojects",
    default:  [
        {
            name: "Client",
            role : "jkajsd",
            status : "Paid",
            detailtitle: "kjs"
        }, {
            name: "Client",
            role : "jkajsd",
            status : "Paid",
            detailtitle: "kjs"
        }, {
            name: "Client",
            role : "jkajsd",
            status : "Paid",
            detailtitle: "kjs"
        }, {
            name: "Client",
            role : "jkajsd",
            status : "Paid",
            detailtitle: "kjs"
        }
    ]
})