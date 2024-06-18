import React from 'react';
import {InvoiceItem} from './InvoiceItem';
import { icons } from '../constants';
import { Project } from './Project';

export function Recents(props) {
    if(props.name === "Recent Transacton"){
        return (
            <div className="flex flex-col mt-4 p-4 rounded-md max-h-[530px] w-[515px] border-b">
              <h2 className="text-lg font-semibold">{props.name}</h2>
              <div>
                {props.transactions.map((transaction) => (
                  <InvoiceItem
                    key={transaction.invoiceNumber} 
                    role={transaction.role}
                    name={transaction.name}
                    invoiceNumber={transaction.invoiceNumber}
                    status={transaction.status}
                    amount={transaction.amount}
                    date={transaction.date}
                  />
                ))}
              </div>
            </div>
          );
    }
    if(props.name === "Recent Projects"){
        return (
            <div className="flex flex-col mt-4 p-4 rounded-md max-h-[530px] w-[515px] border-b">
              <h2 className="text-lg font-semibold">{props.name}</h2>
              <div>
                {props.Projects.map((project,index) => (
                    <div className='flex justify-between items-center'>
                        <img src={icons.project} alt="" className='h-6 w-6 ' />
                        <Project
                            key={index} 
                            name={project.name}
                            role={project.role}
                            status={project.status}
                            detailtitle={project.detailtitle}
                        />
                    </div>
                ))}
              </div>
            </div>
          );
    }
}
