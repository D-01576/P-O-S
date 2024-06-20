import React from 'react';
import { Status } from './status';

export function InvoiceItem(props){
    console.log("sjkd")
  return (
    <div className="flex items-center md-[260px] md:w-[450px] justify-between p-4 bg-white">
      <div className="flex flex-col">
        <span className="font-semibold text-xs md:text-[18px]">k{props.name}</span>
        <span className="text-gray-500 text-xs md:text-[16px]">{props.role}</span>
      </div>
      <span className="text-blue-500 cursor-pointer text-xs md:text-[18px]">{props.invoiceNumber}</span>
      <Status text={props.status} />
      <div className="flex flex-col items-end">
        <span className="text-xl font-semibold text-xs md:text-[18px]">${props.amount}</span>
        <span className="text-gray-500 text-xs md:text-[15px]">{props.date}</span>
      </div>
    </div>
  );
};