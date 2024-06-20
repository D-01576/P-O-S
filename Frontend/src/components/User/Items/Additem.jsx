import React, { useState } from 'react';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { itemsatom } from '../../../Store/Atoms';

const AddItemPopup = ({ onClose }) => {
    const [itemData, setItemData] = useState({
        item: "",
        price: ""
    });

    const setItems = useSetRecoilState(itemsatom);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItemData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:3000/user/createitem', itemData, {
                headers: {
                    'authorization': token
                }
            });

            console.log(response.data.Item)
            if (response.data.Item) {
                setItems((prevItems) => ({
                    ...prevItems,
                    Items: [...prevItems.Items, response.data.Item],
                }));
                onClose();
            }
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded shadow-lg max-w-[500px]">
                <h2 className="text-xl mb-4">Add New Item</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="item" placeholder="Item Name" value={itemData.item} onChange={handleChange} required className="mb-2 p-2 border rounded" />
                    <input type="number" name="price" placeholder="Price" value={itemData.price} onChange={handleChange} required className="mb-2 p-2 border rounded" />
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="mr-2 bg-gray-500 text-white p-2 rounded">Cancel</button>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItemPopup;
