import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("/data.json")
            .then((res) => setData(res.data))
            .catch((e) => console.log(e));
    }, []);
    console.log(data);
    const investment = data?.map((v) => v.investment);
    const revenue = data?.map((v) => v.revenue);
    return (
        <section className="container flex flex-wrap justify-between gap-4 p-20 mt-40">
            <div className="w-1/3">
                {/* bar Chart */}
                <AreaChart
                    width={730}
                    height={250}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#8884d8"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#8884d8"
                                stopOpacity={0}
                            />
                        </linearGradient>
                        <linearGradient
                            id="colorPv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#82ca9d"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#82ca9d"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="investment"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />
                    <Area
                        type="monotone"
                        dataKey="sell"
                        stroke="#82ca9d"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                    />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#2ca9da"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                    />
                </AreaChart>
            </div>

            <div className="w-1/3">
                {/* bar Chart */}
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sell" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <Bar dataKey="investment" fill="#2ca9da" />
                </BarChart>
            </div>

            <div className="w-1/3">
                {/* line chart */}
                <LineChart
                    width={730}
                    height={250}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    <Line
                        type="monotone"
                        dataKey="investment"
                        stroke="#2ca9da"
                    />
                </LineChart>
            </div>
            <div className="w-1/3">
                {/* Radar chart */}
                <RadarChart
                    outerRadius={90}
                    width={730}
                    height={250}
                    data={data}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="month" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar
                        name="Sell"
                        dataKey="sell"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                    <Radar
                        name="Revenue"
                        dataKey="revenue"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.6}
                    />
                    <Radar
                        name="Investment"
                        dataKey="investment"
                        stroke="#2ca9da"
                        fill="#2ca9da"
                        fillOpacity={0.6}
                    />
                    <Legend />
                </RadarChart>
            </div>

            <div className="w-1/3">
                {/* Scatter plot */}
                <PieChart width={730} height={250}>
                    <Pie
                        data={data}
                        dataKey="investment"
                        nameKey="Investment"
                        cx="50%"
                        cy="50%"
                        outerRadius={50}
                        fill="#8884d8"
                    />
                    <Pie
                        data={data}
                        dataKey="sell"
                        nameKey="Sell"
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#82ca9d"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </div>
        </section>
    );
};

export default Dashboard;
