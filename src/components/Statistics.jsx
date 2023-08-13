import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";
const Statistics = () => {
    const [number, setNumber] = useState([]);
    useEffect(() => {
        axios.get('/Marks.json')
        .then(data => {
const loadedData = data.data;
// console.log(loadedData);
const numberData = loadedData.map(number => {
    const markInfo = {
        title: number.title,
        marks: number.marks,
    }
    return markInfo;
})
// console.log(numberData);
setNumber(numberData)

        });
    }, [])



    return (
        <div>
            <AreaChart 
            width={500}
        height={200}
        data={number}
        >
         <Area
          connectNulls
          type="monotone"
          dataKey="marks"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <XAxis dataKey={name}></XAxis>
        <YAxis></YAxis>
        </AreaChart>
        </div>
    );
    
};


export default Statistics;