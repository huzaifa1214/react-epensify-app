import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from './ExpenseListFilters'

const main = () => {
  return (
    <div>
      <p>this is a main component</p>
      <ExpenseListFilters/>
      <ExpenseList />
    </div>
  );
};

export default main;
