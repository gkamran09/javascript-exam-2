const getTheExactNumber = (numbers) => {

  const multiplesOf3 = numbers.filter((number) => number % 3 === 0);
  multiplesOf3.sort((a, b) => b - a);
  return multiplesOf3[0];
}

export default getTheExactNumber;