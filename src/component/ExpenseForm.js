import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.expense ? props.expense.description : "",
      note: this.props.expense ? props.expense.note : "",
      amount: this.props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: this.props.expense
        ? moment(props.expense.createdAt)
        : moment(),
      focused: false,
      error: ""
    };
  }

  onChangeDescription = e => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };
  onChangeNote = e => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  };
  onChangeAmount = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount
      }));
    }
  };
  onDateChange = createdAt => {
    this.setState(() => ({
      createdAt
    }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      focused
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please add description and amount !!"
      }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onChangeDescription}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onChangeAmount}
          />
          <textarea
            placeholder="About a note to your description(optional)"
            value={this.state.note}
            onChange={this.onChangeNote}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <div>
            <button>Add Expense</button>
            {this.state.error && <p>{this.state.error}</p>}
          </div>
        </form>
      </div>
    );
  }
}
