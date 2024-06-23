import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddItemPopup from './Additem';
import { itemsatom } from '../../../Store/Atoms';
import { useVerify } from '../Verify';
import { MdAdd, MdDelete } from 'react-icons/md';

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
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300'>
            <div className='w-full max-w-5xl bg-white shadow-lg rounded-lg p-8'>
                <div className='flex justify-between items-center mb-8'>
                    <h1 className='text-2xl font-bold text-gray-700'>Item Management</h1>
                    <button
                        className='flex items-center bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300'
                        onClick={() => setIsPopupOpen(true)}
                    >
                        <MdAdd className='mr-2' /> Add Item
                    </button>
                </div>
                <div className='divide-y divide-gray-200'>
                    {items.Items.map((item, index) => (
                        <div key={index} className='flex justify-between items-center py-6 px-4 hover:bg-gray-50 transition duration-300'>
                            <div className='flex flex-col'>
                                <p className='text-lg font-medium text-gray-900'>{item.item}</p>
                                <p className='text-sm text-gray-500'>{item._id}</p>
                            </div>
                            <div className='text-right flex items-center'>
                                <p className='text-lg font-semibold text-gray-700 mr-4'>{item.price}</p>
                                <button
                                    className='text-sm bg-red-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-red-600 transition duration-300'
                                    onClick={() => deleteItem(item._id)}
                                >
                                    <MdDelete className='mr-1' /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isPopupOpen && <AddItemPopup onClose={() => setIsPopupOpen(false)} />}
        </div>
    );
}
