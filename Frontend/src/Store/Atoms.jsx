import { atom, atomFamily, selector } from "recoil";
import axios from "axios"

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
        },
        {
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
        }
    ]
})

export const Clients = atom({
    key: "Clients",
    default: selector({
        key: "clientselecter",
        get : async ()=>{
            try{
            const token = localStorage.getItem("token")
            const res = await axios.get("http://localhost:3000/user/clients",{
                headers: {
                    authorization: token
                }
            })
            console.log(res.data.clients)
            return res.data
        }catch{
            console.log("j")
        }
        }
    })
})