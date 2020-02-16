export const setTextFilter = text => {
  return {
    type: "SET_TEXT",
    text
  };
};

export const sortByAmount = () => {
  return {
    type: "SORTBY_AMOUNT"
  };
};

export const sortByDate = () => {
  return {
    type: "SORTBY_DATE"
  };
};

export const setStartDate = startDate => {
  return {
    type: "SET_START_DATE",
    startDate
  };
};

export const setEndDate = endDate => {
  return {
    type: "SET_END_DATE",
    endDate
  };
};
