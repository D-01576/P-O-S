import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { useVerify } from '../Verify';
import { usersatom } from '../../../Store/Atoms';
import AddUserPopup from './adduser';
import { MdAdd } from 'react-icons/md';

export function Users() {
    useEffect(() => {
        useVerify();
    }, []);
    
    const users = useRecoilValue(usersatom);
    const setUsers = useSetRecoilState(usersatom);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300'>
            <div className='w-full max-w-5xl bg-white shadow-lg rounded-lg p-8'>
                <div className='flex justify-between items-center mb-8'>
                    <h1 className='text-2xl font-bold text-gray-700'>User Management</h1>
                    <button
                        className='flex items-center bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300'
                        onClick={() => setIsPopupOpen(true)}
                    >
                        <MdAdd className='mr-2' /> Add User
                    </button>
                </div>
                <div className='divide-y divide-gray-200'>
                    {users.usersWithTotalSales.map((user, index) => (
                        <div key={index} className='flex justify-between items-center py-6 px-4 hover:bg-gray-50 transition duration-300'>
                            <div>
                                <p className='text-lg font-medium text-gray-900'>{user.user.name}</p>
                                <p className='text-sm text-gray-500'>{user.user.email}</p>
                            </div>
                            <div className='text-right'>
                                <p className='text-sm text-gray-500'>Total Sales</p>
                                <p className='text-lg font-semibold text-gray-900'>{user.totalSalesCount}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isPopupOpen && <AddUserPopup onClose={() => setIsPopupOpen(false)} />}
        </div>
    );
}
