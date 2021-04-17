import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip , ResponsiveContainer} from 'recharts';


const LineCharts = ({lineData}) => {

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
            <LineChart width={700} height={300} data={lineData} margin={{ top: 5, right: 20, bottom: 5, left: 0}}>
                <Line type="monotone" dataKey="value" stroke="rgb(3,76,157)" />
                <CartesianGrid stroke="#000" strokeDasharray="1 1" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
            </ResponsiveContainer>
        </>
    );
};

export default LineCharts;