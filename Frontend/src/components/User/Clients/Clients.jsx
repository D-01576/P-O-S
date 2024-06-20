import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Clients } from '../../../Store/Atoms';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddClientPopup from './Addclient';
import { useVerify } from '../Verify';

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
                        'authorization':  token
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
        return <div>No clients available.</div>;
    }

    return (
        <div className='flex justify-center items-center h-[90vh]'>
            <div className='flex flex-col items-center justify-center md:items-end border-b p-[40px] w-[270px] md:w-[1000px] bg-gray-50 rounded'>
                <button
                    className="bg-blue-500 text-white p-2 rounded-md shadow-sm hover:bg-blue-600"
                    onClick={() => setIsPopupOpen(true)}
                >
                    + Add Client
                </button>
                {clients.clients.map((client, index) => (
                    <div key={index} className="flex items-center w-[260px] md:w-[900px] justify-between border-b-b p-4">
                        <div className="flex flex-col">
                            <span className="font-semibold text-xs md:text-[15px]">{client.email}</span>
                            <span className="text-gray-500 text-xs md:text-[15px]">{client._id}</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <button
                                className='text-[10px] md:text-[18px] bg-red-500 p-[6px] rounded text-[white]'
                                onClick={() => deleteClient(client._id)}
                            >
                                delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {isPopupOpen && <AddClientPopup onClose={() => setIsPopupOpen(false)} />}
        </div>
    );
}
