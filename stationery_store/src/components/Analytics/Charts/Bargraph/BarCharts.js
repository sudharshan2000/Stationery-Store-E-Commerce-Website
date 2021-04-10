import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';


const BarCharts = ({barData}) =>{
    return(
        <React.Fragment>
            <BarChart width={600} height={400} data={barData}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 80, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="value" fill="#8884d8" barSize={30} />
    <Bar dataKey="rating" fill="rgb(50,214,32,0.5)" barSize={30} />
  </BarChart>
        </React.Fragment>
    );
}

export default BarCharts;