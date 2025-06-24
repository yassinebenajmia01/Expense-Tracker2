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
export const prepareExpenseBarChartData = (data) => {
  console.log("Raw Data in prepareExpenseBarChartData:", data);

  // Example of returning formatted data:
  const formattedData = data.map(item => ({
    month: item.date ? item.date.slice(0, 7) : "Unknown", // Extract month from date
    amount: item.amount || 0,
  }));

  console.log("Formatted Data:", formattedData); // Check the processed data
  return formattedData;
};
