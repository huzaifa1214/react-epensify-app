import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const addExpense = ({
  description = "",
  notes = "",
  amount = 0,
  createdAt = 0
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuid(),
      description,
      notes,
      amount,
      createdAt
    }
  };
};

const removeExpense = id => {
  return {
    type: "REMOVE_EXPENSE",
    id
  };
};

const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates
  };
};

const expenseReducerData = [];
const expenseReducer = (state = expenseReducerData, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id)
          return {
            ...expense,
            ...action.updates
          };
        else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const setTextFilter = text => {
  return {
    type: "SET_TEXT",
    text
  };
};

const sortByAmount = () => {
  return {
    type: "SORTBY_AMOUNT",
  };
};

const sortByDate = () => {
  return {
    type: "SORTBY_DATE",
  };
};

const setStartDate = startDate => {
  return {
    type: "SET_START_DATE",
    startDate
  };
};

const setEndDate = endDate => {
  return {
    type: "SET_END_DATE",
    endDate
  };
};

const filterReducerData = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerData, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.text
      };
    case "SORTBY_AMOUNT":
      return {
        ...state,
        sortBy: 'amount'
      };
    case "SORTBY_DATE":
      return {
        ...state,
        sortBy: 'date'
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate})=>{
      return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt>= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt<=endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return textMatch && startDateMatch && endDateMatch;
      }).sort((a,b)=>{
        if(sortBy==='date'){
          return a.createdAt<b.createdAt ? 1 :-1;
        }
        else if(sortBy==='amount'){
          return a.amount<b.amount ?1:-1;
        }
      })
}

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  console.log(store.getState());
  console.log("Expenses: ",getVisibleExpenses(state.expenses,state.filters))
});

const expenseOne = store.dispatch(
  addExpense({ description: "first", amount: "232", createdAt:4 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "second", amount: "432",createdAt:10 })
);

store.dispatch(removeExpense(expenseOne.expense.id));

store.dispatch(editExpense(expenseTwo.expense.id,{amount:111}));

store.dispatch(setTextFilter("fst"));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(1));
store.dispatch(setStartDate());
store.dispatch(setEndDate(5));


