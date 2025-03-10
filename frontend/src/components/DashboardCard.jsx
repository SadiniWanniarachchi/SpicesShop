import React from "react";
import { FaPepperHot, FaBox, FaUsers, FaDollarSign } from "react-icons/fa";

const data = [
    { title: "Total Spices", value: "1,200 kg", icon: <FaPepperHot size={40} className="text-[#7c493c]" /> },
    { title: "Packaged Products", value: 453, icon: <FaBox size={40} className="text-[#7c493c]" /> },
    { title: "Employees", value: 25, icon: <FaUsers size={40} className="text-[#7c493c]" /> },
    { title: "Monthly Revenue", value: "$120,000", icon: <FaDollarSign size={40} className="text-[#7c493c]" /> },
];

const DashboardCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-14 font-kulim">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="bg-white shadow-xl p-6 rounded-lg flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300"
                >
                    <span>{item.icon}</span>
                    <div>
                        <p className="text-2xl font-bold text-black">{item.value}</p>
                        <p className="text-lg text-[#484240]">{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardCards;