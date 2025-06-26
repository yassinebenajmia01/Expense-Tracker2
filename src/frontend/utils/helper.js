import moment from "moment";

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getInitials = (name) =>{
  if(!name) return "";
  const words = name.split("");
  let initials = "";

  for(let i=0; i<Math.min(words.length,2); i++){
    initials += words[i][0];
  }
  return initials.toUpperCase();
};

export const addThousandsSeparator = (num) =>{
  if(num == null || isNaN(num)) return "";
  const [integerPart, fractionPart]= num.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return fractionPart
  ? `${formattedInteger}.${fractionPart}`
  : formattedInteger;
};
export const prepareExpenseBarChartData = (data= []) => {

  
  const formattedData = data.map(item => ({
    month: item.date ? item.date.slice(0, 7) : "Unknown", // Extract month from date
    amount: item.amount || 0,
  }));

  console.log("Formatted Data:", formattedData); // Check the processed data
  return formattedData;
};

export const prepareIncomeBarChartData=(data=[] )=>{
  const sortedData=[...data].sort((a,b) => new Date(a.date) - new Date(b.date) );
  const chartData=sortedData.map((item) => ({
    month:moment(item?.date).format("Do MMM "),
    amount:item?.amount,
    source:item?.source,
  })) ;
  return chartData;
};

export const prepareExpenseLineBarChartData=(data = []) =>{
  const sortedData= [...data].sort((a,b) => new Date(a.date) - new Date(b.date));
  const chartData= sortedData.map((item) => ({
    month :moment(item?.date).format("Do MMM"),
    amount: item?.amount,
    category:item?.category,
  }));
  return chartData;
}


