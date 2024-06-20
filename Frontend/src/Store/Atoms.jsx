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
            return res.data
        }catch{
            console.log("error")
        }
        }
    })
})

export const itemsatom = atom({
    key: "itemsatom",
    default: selector({
        key: "itemsselecter",
        get : async ()=>{
            try{
            const token = localStorage.getItem("token")
            const res = await axios.get("http://localhost:3000/user/items",{
                headers: {
                    authorization: token
                }
            })
            console.log(res.data)
            return res.data
        }catch{
            console.log("jaksdf")
        }
        }
    })
})

export const usersatom = atom({
    key: "usersatom",
    default: selector({
        key: "userselecter",
        get : async ()=>{
            try{
            const token = localStorage.getItem("admintoken")
            const res = await axios.get("http://localhost:3000/admin/users",{
                headers: {
                    authorization: token
                }
            })
            console.log(res.data)
            return res.data
        }catch{
            console.log("jaksdf")
        }
        }
    })
})