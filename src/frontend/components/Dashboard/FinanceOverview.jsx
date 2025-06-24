import React from 'react'
import CustomPieChart from '../Charts/CustomPieChart';


const COLORS=["#875CF5","#FA2C37","#FF6900"];
const FinanceOverview = ({totalBalance,totalIncome,totalExpense}) => {
    const balanceData = [
  { name: "Total Balance", amount: Number(totalBalance) },
  { name: "Total Expense", amount: Number(totalExpense) },
  { name: "Total Income", amount: Number(totalIncome) },
];

  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Financial Overview</h5>
        </div>
        <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`$${totalBalance}`}
        colors={COLORS}
        showTextAnchor
        />

    </div>
  )
}

export default FinanceOverview