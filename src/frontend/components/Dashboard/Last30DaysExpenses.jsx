import React, { useEffect, useState } from 'react'
import { prepareExpenseBarChartData } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

const Last30DaysExpenses = ({data}) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            const result = prepareExpenseBarChartData(data);
            setChartData(result);
        }
    }, [data]);

    // Render loading or empty state if no data
    if (chartData.length === 0) {
        return <div>No data available for the chart.</div>;
    }

    return (
        <div className='card col-span-1'>
            <div className='flex items-center justify-between'>
                <h5 className='text-lg'>Last 30 Days Expenses</h5>
            </div>
            <CustomBarChart data={chartData} />
        </div>
    );
}

export default Last30DaysExpenses;
