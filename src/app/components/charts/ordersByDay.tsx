import formatCurrency from "@/utils/formatCurrency";
import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    {value: 600, date: "2025-12-12"},
    {value: 300, date: "2025-12-11"},
    {value: 500, date: "2025-12-09"},
    {value: 600, date: "2025-12-01"},
    {value: 800, date: "2025-12-13"},
    {value: 500, date: "2025-12-14"},
    {value: 500, date: "2025-12-15"},
    {value: 450, date: "2025-12-16"}
]


const ChartByDay =() => {
    return(
        <ResponsiveContainer width="100%" minHeight={300}>
        <LineChart data={data}> 
            <CartesianGrid strokeDasharray="3 3" stroke="#010203"/>
            <XAxis dataKey="date" stroke="#010203"/>
            {/* <YAxis tickFormatter={tick => formatCurrency(tick)}/> */}
            <YAxis stroke="#010203"/>
            <Tooltip formatter={value => formatCurrency(value as number)}  />
            <Line connectNulls dataKey="value" type="monotone" stroke="#c80815" fill="#c80815" name="Valor"/>
        </LineChart>
        </ResponsiveContainer>
    )
}

export default ChartByDay