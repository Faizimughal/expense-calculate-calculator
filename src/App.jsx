
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [expense, setExpense] = useState('');
  const [income, setIncome] = useState('');
  const [remaining, setRemaining] = useState('');

  const subtraction = () => {
    const remainingAmount = parseFloat(income) - parseFloat(expense);
    setRemaining(remainingAmount.toFixed(2));
  };
  const delData = () => {
    setExpense('');
    setIncome('');
    setRemaining('');
  };

  return (
    <div>
      <label htmlFor="expense">Expense:</label>
      <input
        type="number"
        id="expense"
        value={expense}
        placeholder="Enter your expense"
        onChange={(e) => setExpense(e.target.value)}
        style={{background : 'red' , color : 'white' }}
      />
      <br /><br />
      <label htmlFor="income">Income:</label>
      <input
        type="number"
        id="income"
        value={income}
        placeholder="Enter your income"
        onChange={(e) => setIncome(e.target.value)}
        style={{background : 'green' , color : 'white' }}
      />
      <br /><br />
      <textarea
        cols="30"
        rows="10"
        placeholder="Remaining"
        value={`Remaining: ${remaining}`}
        readOnly
      ></textarea>
      <br /><br />
      <button type="button" onClick={subtraction}>
        Submit
      </button>
      <button type='button' onClick={delData}>
        Delete
      </button>
    </div>
  );
};

export default App;
            