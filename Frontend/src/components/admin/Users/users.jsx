import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useVerify } from '../Verify';
import { usersatom } from '../../../Store/Atoms';
import AddUserPopup from './adduser';

export function Users() {
    useEffect(() => {
        useVerify();
    }, []);
    
    const Users = useRecoilValue(usersatom);
    const setClients = useSetRecoilState(usersatom);
    console.log(Users)


    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // const deleteClient = async (userId) => {
    //     try {
    //         const token = localStorage.getItem('token');

    //         const response = await axios.post('http://localhost:3000/admin/delete', 
    //             { clientId: clientId }, 
    //             {
    //                 headers: {
    //                     'authorization':  token
    //                 }
    //             }
    //         );

    //         if (response.status !== 200) {
    //             throw new Error('Failed to delete client');
    //         }
    //         setClients((prevClients) => ({
    //             ...prevClients,
    //             clients: prevClients.clients.filter(client => client._id !== clientId),
    //         }));
    //     } catch (error) {
    //         console.error('Error deleting client:', error);
    //     }
    // };

    // if (!Array.isArray(clients.clients)) {
    //     return <div>No clients available.</div>;
    // }

    return (
        <div className='flex justify-center items-center min-h-[90vh]'>
            <div className='flex flex-col items-center justify-center md:items-end border-b p-[40px] w-[270px] md:w-[1000px] bg-gray-50 rounded'>
                <button
                    className="bg-blue-500 text-white p-2 rounded-md shadow-sm hover:bg-blue-600"
                    onClick={() => setIsPopupOpen(true)}
                >
                    + Add Client
                </button>
                {Users.usersWithTotalSales.map((user, index) => (
                    <div key={index} className="flex items-center w-[260px] md:w-[900px] justify-between border-b-b p-4">
                        <div className="flex flex-col">
                            <span className="font-semibold text-xs md:text-[15px]">{user.user.name}</span>
                            <span className="text-gray-500 text-xs md:text-[15px]">{user.user.email}</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-gray-500 text-xs md:text-[15px]">Total Sales</span> 
                            <span className="font-semibold text-xs md:text-[15px]">{user.totalSalesCount}</span>
                        </div>
                    </div>
                ))}
            </div>
            {isPopupOpen && <AddUserPopup onClose={() => setIsPopupOpen(false)} />}
        </div>
    );
}
