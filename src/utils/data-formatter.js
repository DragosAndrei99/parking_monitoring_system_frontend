const formatData = (inputData) => {
  const date = new Date(inputData);

  const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const formattedString = date.toLocaleString('en-US', options);
  return formattedString;
}

export default formatData;