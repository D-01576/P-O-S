import React from 'react';

export function Stats({ icon, text, number, background }) {
    return (
        <div className="flex flex-col justify-center p-8 rounded-md h-40  w-56 border-b">
            <img src={icon} alt={`${text} icon`} className="h-8 w-8 p-1 rounded-full border object-contain" />
            <h3 className='text-md'>{text}</h3>
            <h1 className="font-bold text-3xl pt-2">{number}</h1>
        </div>
    );
}
