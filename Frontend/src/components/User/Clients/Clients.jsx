import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Clients } from '../../../Store/Atoms';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddClientPopup from './Addclient';
import { useVerify } from '../Verify';
import { MdAdd, MdDelete } from 'react-icons/md';

export function Client() {
    useEffect(() => {
        useVerify();
    }, []);

    const clients = useRecoilValue(Clients);
    const setClients = useSetRecoilState(Clients);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const deleteClient = async (clientId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:3000/user/deleteclient',
                { clientId: clientId },
                {
                    headers: {
                        'authorization': token
                    }
                }
            );

            if (response.status !== 200) {
                throw new Error('Failed to delete client');
            }
            setClients((prevClients) => ({
                ...prevClients,
                clients: prevClients.clients.filter(client => client._id !== clientId),
            }));
        } catch (error) {
            console.error('Error deleting client:', error);
        }
    };

    if (!Array.isArray(clients.clients)) {
        return <div className='text-center text-gray-500'>No clients available.</div>;
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300'>
            <div className='w-full max-w-5xl bg-white shadow-lg rounded-lg p-8'>
                <div className='flex justify-between items-center mb-8'>
                    <h1 className='text-2xl font-bold text-gray-700'>Client Management</h1>
                    <button
                        className='flex items-center bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300'
                        onClick={() => setIsPopupOpen(true)}
                    >
                        <MdAdd className='mr-2' /> Add Client
                    </button>
                </div>
                <div className='divide-y divide-gray-200'>
                    {clients.clients.map((client, index) => (
                        <div key={index} className='flex justify-between items-center py-6 px-4 hover:bg-gray-50 transition duration-300'>
                            <div>
                                <p className='text-lg font-medium text-gray-900'>{client.email}</p>
                                <p className='text-sm text-gray-500'>{client._id}</p>
                            </div>
                            <div className='text-right'>
                                <button
                                    className='flex items-center text-sm md:text-base bg-red-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-red-600 transition duration-300'
                                    onClick={() => deleteClient(client._id)}
                                >
                                    <MdDelete className='mr-1' /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isPopupOpen && <AddClientPopup onClose={() => setIsPopupOpen(false)} />}
        </div>
    );
}
