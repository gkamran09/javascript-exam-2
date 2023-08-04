const getNumberType = (number) => {
  if (number === 0) {
    return null;
  } 
  
  else if (number % 2 === 0) {
    return 'even number';
  } 

  else {
    return 'odd number';
  }
};

export default getNumberType;
