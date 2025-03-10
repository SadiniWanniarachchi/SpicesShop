import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const SalesBarChart = () => {
    const data = [
        { name: "Jan", sales: 4000, fill: "#8B5E38" },  // Warm brown
        { name: "Feb", sales: 3000, fill: "#6F4F34" },  // Dark brown
        { name: "Mar", sales: 2000, fill: "#5C4035" },  // Medium brown
        { name: "Apr", sales: 800, fill: "#7E4B3C" },   // Muted brown
        { name: "May", sales: 4500, fill: "#A76D4B" },   // Light brown
    ];
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-[#351108] text-white px-3 py-2 rounded-md text-sm shadow-md">
                    <p>{payload[0].value} sales</p>
                </div>
            );
        }
        return null;
    };

    const RoundedBar = (props) => {
        const { x, y, width, height, fill } = props;
        const radius = 10;

        return (
            <path
                d={`M ${x},${y + height} 
          L ${x},${y + radius} 
          Q ${x},${y} ${x + radius},${y} 
          L ${x + width - radius},${y} 
          Q ${x + width},${y} ${x + width},${y + radius} 
          L ${x + width},${y + height} 
          Z`}
                fill={fill}
            />
        );
    };

    return (
        <div className="bg-white shadow-2xl rounded-lg p-6 font-kulim">
            <h2 className="font-bold text-2xl text-[#000000] mb-6">Spice Product Sales</h2>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data} barCategoryGap={30} width={650}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis
                        dataKey="name"
                        tick={{ fill: "#6B7280", fontSize: 14 }}
                        axisLine={{ stroke: "#E5E7EB" }}
                    />
                    <YAxis
                        tick={{ fill: "#6B7280", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                        dataKey="sales"
                        shape={<RoundedBar />}
                        barSize={50}
                        isAnimationActive={false}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesBarChart;