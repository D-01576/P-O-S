import React, { useEffect } from 'react';
import { Stats } from './stats';
import {icons} from "../../../constants"
import { useVerify } from '../Verify';

export function AdminDashboard() {
    useEffect(()=>{
        useVerify()
    },[])
    const data = [
        {
            text: "Client",
            number: 12,
            icon : icons.client
        },{
            text: "Invoices",
            number: 12,
            icon : icons.invoice
        },{
            text: "invoiced",
            number: 12,
            icon : icons.invoiced
        },{
            text: "paid",
            number: 12,
            icon : icons.paid
        }
    ]

    return (
        <div className='flex flex-col justify-center items-center pb-px'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-16 max-w-[1100px] mx-auto'>
                <Stats text={data[0].text} number={data[0].number}  icon={data[0].icon}  />
                <Stats text={data[1].text} number={data[1].number}  icon={data[1].icon}  />
                <Stats text={data[2].text} number={data[2].number}  icon={data[2].icon}  />
                <Stats text={data[3].text} number={data[3].number}  icon={data[3].icon}  />
            </div>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 max-w-[1100px] mx-auto'>
            <Recents name="Recent Transacton" transactions={transactions}></Recents>
            <Recents name="Recent Projects" Projects={Projects}></Recents>
            </div> */}
        </div>
    );
}
