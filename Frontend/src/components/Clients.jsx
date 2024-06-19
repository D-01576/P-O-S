import { useRecoilValue } from 'recoil';
import { Clients } from '../Store/Atoms';

export function Client() {
    const clients = useRecoilValue(Clients);

    if (!Array.isArray(clients)) {
        return <div>No clients available.</div>;
    }

    return (
        <div>
            {clients.map((client, index) => (
                <div key={index} className="flex items-center w-[900px] justify-between p-4 bg-white">
                    <div className="flex flex-col">
                        <span className="font-semibold text-xs md:text-[18px]">{client.name}</span>
                        <span className="text-gray-500 text-xs md:text-[16px]">{client.email}</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-gray-500 text-xs md:text-[16px]">{client.phone}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
