import React from 'react';

export function Stats({ icon, text, number, background }) {
    return (
        <div className="h-20 w-28 flex flex-col justify-center p-4 rounded-md md:h-40  md:w-56 border-b">
            <img src={icon} alt={`${text} icon`} className="h-8 w-8 p-1 rounded-full border object-contain md:h-10 md:w-10" />
            <h3 className='text-xs md:text-sm'>{text}</h3>
            <h1 className="font-bold text-xl md:text-3xl">{number}</h1>
        </div>
    );
}
