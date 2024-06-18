import React from 'react';
import { Status } from './status';

export function Project(props){
    console.log("sjkd")
  return (
    <div className="flex items-center w-[450px] justify-between p-4 bg-white">
      <div className="flex flex-col">
        <span className="font-semibold text-md">k{props.name}</span>
        <span className="text-gray-500 text-sm">{props.role}</span>
      </div>
      <Status text={props.status} />
      <div className="flex flex-col items-end">
        <span className="text-gray-500 text-sm">{props.detailtitle}</span>
      </div>
    </div>
  );
};