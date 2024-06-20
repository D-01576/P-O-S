import React, { useState } from 'react';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { Clients } from '../../../Store/Atoms';

const AddClientPopup = ({ onClose }) => {
    const [clientData, setClientData] = useState({
        customerName: '',
        phone: '',
        email: '',
        address: '',
        state: '',
        city: '',
        pincode: '',
        gstNumber: '',
    });

    const setClients = useSetRecoilState(Clients);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClientData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:3000/user/createclient', clientData, {
                headers: {
                    'authorization': token
                }
            });
            
            console.log(response.data.Client)
            if (response.data.Client) {
                console.log("jj")
                setClients((prevClients) => ({
                    ...prevClients,
                    clients: [...prevClients.clients, response.data.Client],
                }));
                console.log("kksd")
                onClose();
            }
        } catch (error) {
            console.error('Error adding client:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded shadow-lg max-w-[500px] ">
                <h2 className="text-xl mb-4">Add New Client</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="customerName" placeholder="Customer Name" value={clientData.customerName} onChange={handleChange} required className="mb-2 p-2 border rounded" />
                    <input type="text" name="phone" placeholder="Phone" value={clientData.phone} onChange={handleChange} required className="mb-2 p-2 border rounded" />
                    <input type="email" name="email" placeholder="Email" value={clientData.email} onChange={handleChange} required className="mb-2 p-2 border rounded" />
                    <input type="text" name="address" placeholder="Address" value={clientData.address} onChange={handleChange} required className="mb-2 p-2 border rounded" />
                    <input type="text" name="state" placeholder="State" value={clientData.state} onChange={handleChange} required className="mb-2 p-2 border rounded" />
                    <input type="text" name="city" placeholder="City" value={clientData.city} onChange={handleChange} required className="mb-2 p-2 border rounded" />
                    <input type="text" name="pincode" placeholder="Pincode" value={clientData.pincode} onChange={handleChange} className="mb-2 p-2 border rounded" />
                    <input type="text" name="gstNumber" placeholder="GST Number" value={clientData.gstNumber} onChange={handleChange} className="mb-4 p-2 border rounded" />
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="mr-2 bg-gray-500 text-white p-2 rounded">Cancel</button>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Client</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClientPopup;