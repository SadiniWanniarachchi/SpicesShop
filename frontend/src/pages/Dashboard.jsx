import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCards from "../components/DashboardCard";
import NewEmployee from "../components/NewEmployee";
import SalesBarChart from '../components/SalesBarChart';



const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Topbar />
                <main className="p-6 bg-white">
                    <DashboardCards />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-40">

                        <NewEmployee />
                        <SalesBarChart />

                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
