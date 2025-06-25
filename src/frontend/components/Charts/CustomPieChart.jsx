import React from 'react';
import{
    PieChart,Pie,Cell,Tooltip,ResponsiveContainer,Legend,
} from "recharts";
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';const CustomPieChart = ({ data, label, totalAmount, colors, showTextAnchor }) => {
  // Fallback for empty or undefined data
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No data available to display the chart.
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={CustomTooltip} />
        <Legend content={CustomLegend} />
        {showTextAnchor && (
          <>
            <text
              x="50%"
              y="50%"
              dy={-25}
              textAnchor="middle"
              fill="#666"
              fontSize="14px"
            >
              {label}
            </text>
            <text
              x="50%"
              y="50%"
              dy={8}
              textAnchor="middle"
              fill="#333"
              fontSize="24px"
              fontWeight="semi-bold"
            >
              {totalAmount}
            </text>
          </>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};


export default CustomPieChart