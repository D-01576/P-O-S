import React, { useState } from 'react';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { usersatom } from '../../../Store/Atoms';

const AddUserPopup = ({ onClose }) => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const setUser = useSetRecoilState(usersatom);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('admintoken');
            console.log("j")
            const response = await axios.post('http://localhost:3000/admin/create', userData, {
                headers: {
                    'authorization': token
                }
            });
            console.log("asdmjb")
            
                setUser((prevUsers) => ({
                    ...prevUsers,
                    usersWithTotalSales: [...prevUsers.usersWithTotalSales, response.data.user],
                }));
                onClose();
        } catch (error) {
            console.error('Error adding client:', error);
            alert('Error adding client. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded shadow-lg max-w-[500px]">
                <h2 className="text-xl mb-4">Add New User</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={userData.name} 
                        onChange={handleChange} 
                        required 
                        className="mb-2 p-2 border rounded" 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={userData.email} 
                        onChange={handleChange} 
                        required 
                        className="mb-2 p-2 border rounded" 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={userData.password} 
                        onChange={handleChange} 
                        required 
                        className="mb-4 p-2 border rounded" 
                    />
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="mr-2 bg-gray-500 text-white p-2 rounded">Cancel</button>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add User</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUserPopup;
