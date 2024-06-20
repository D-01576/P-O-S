import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddItemPopup from './Additem';
import { itemsatom } from '../../../Store/Atoms';
import { useVerify } from '../Verify';

export function Items() {
    useEffect(() => {
        useVerify();
    }, []);
    
    const items = useRecoilValue(itemsatom);
    const setItems = useSetRecoilState(itemsatom);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const deleteItem = async (itemId) => {
        try {
            const token = localStorage.getItem('token');

            const response = await axios.post('http://localhost:3000/user/deleteitem', 
                { itemId: itemId }, 
                {
                    headers: {
                        'authorization':  token
                    }
                }
            );

            if (response.status !== 200) {
                throw new Error('Failed to delete item');
            }
            setItems((prevItems) => ({
                ...prevItems,
                Items: prevItems.Items.filter(item => item._id !== itemId),
            }));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };
    return (
        <div className='flex justify-center items-center h-[90vh]'>
            <div className='flex flex-col items-end border-b p-[40px] bg-gray-50 rounded'>
                <button
                    className="bg-blue-500 text-white p-2 rounded-md shadow-sm hover:bg-blue-600"
                    onClick={() => setIsPopupOpen(true)}
                >
                    + Add Item
                </button>
                {items.Items.map((item, index) => (
                    <div key={index} className="flex items-center w-[900px] justify-between border-b-b p-4">
                        <div className="flex flex-col">
                            <span className="font-semibold text-xs md:text-[15px]">{item.item}</span>
                            <span className="text-gray-500 text-xs md:text-[15px]">{item._id}</span>
                        </div>
                        <span className="text-gray-500 text-xs md:text-[15px]">{item.price}</span>
                        <div className="flex flex-col items-end">
                            <button
                                className='bg-red-500 p-[6px] rounded text-[white]'
                                onClick={() => deleteItem(item._id)}
                            >
                                delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {isPopupOpen && <AddItemPopup onClose={() => setIsPopupOpen(false)} />}
        </div>
    );
}
