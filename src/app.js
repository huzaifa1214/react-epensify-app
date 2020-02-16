import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import { Provider } from "react-redux";
import "./styles/styles.scss";

const store = configureStore();
// store.subscribe(() => {
//   const state = store.getState();
//   console.log(store.getState());
//   console.log("Expenses: ", getVisibleExpenses(state.expenses, state.filters));
// });

const expenseOne = store.dispatch(
  addExpense({ description: "first", amount: "232", createdAt: 4 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "second", amount: "25232", createdAt: 10 })
);

const expenseThree = store.dispatch(
  addExpense({ description: "third", amount: "2332", createdAt: 3 })
);
const expenseFour = store.dispatch(
  addExpense({ description: "fourth", amount: "332", createdAt: 1 })
);

// store.dispatch(removeExpense(expenseOne.expense.id));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 111 }));

// store.dispatch(setTextFilter("s"));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(1));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(5));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
