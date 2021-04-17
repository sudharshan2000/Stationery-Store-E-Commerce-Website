import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';


const BarCharts = ({ barData }) => {
    return (
        <React.Fragment>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={600} height={700} data={barData}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="value" fill="#8884d8" barSize={30} />
                    <Bar dataKey="rating" fill="rgb(50,214,32,0.5)" barSize={30} />

                    <Legend width={100} wrapperStyle={{ top: 180, right: 300, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                </BarChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}

export default BarCharts;