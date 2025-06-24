import moment from 'moment';
import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransactionInfoCard from './TransactionInfoCard';

const RecentTransactions = ( {transactions, onSeeMore}) => {
  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Recent Transactions</h5>
            <button className='card-btn' onClick={onSeeMore}>
                SeeAll <LuArrowRight className='text-base'/>
            </button>
        </div>

        <div className='mt-6'>
            {transactions?.slice(0, 5)?.map((item) => (
    <TransactionInfoCard
        key={item._id}
        title={item.type === 'expense' ? item.category : item.source}
        icon={item.icon}
        date={moment(item.date).format("Do MMM YYYY")}
        amount={item.amount}
        type={item.type}
        hideDeleteBtn
    />
))}

        </div>
    </div>
  );
};

export default RecentTransactions