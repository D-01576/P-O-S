import React from 'react';
import { Homechild1 } from './homechild1';
import { Stats } from './stats';
import {icons} from "../constants"
import { Recents } from './recents';
import { useRecoilValue } from 'recoil';
import { recentprojects, recenttransaction } from '../Store/Atoms';

export function Dashboard() {
    const transactions = useRecoilValue(recenttransaction)
    const Projects = useRecoilValue(recentprojects)

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
            <Homechild1 />
            <div className='flex justify-between w-[1100px]'>
                <Stats text={data[0].text} number={data[0].number}  icon={data[0].icon}  />
                <Stats text={data[1].text} number={data[1].number}  icon={data[1].icon}  />
                <Stats text={data[2].text} number={data[2].number}  icon={data[2].icon}  />
                <Stats text={data[3].text} number={data[3].number}  icon={data[3].icon}  />
            </div>
            <div className='flex justify-between  w-[1100px]'>
            <Recents name="Recent Transacton" transactions={transactions}></Recents>
            <Recents name="Recent Projects" Projects={Projects}></Recents>
            </div>
        </div>
    );
}
