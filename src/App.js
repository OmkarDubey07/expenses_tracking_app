import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';


let DUMMY_EXPENSE = [
    {
        id: 'e1',
        title: 'School Fee',
        amount: 250,
        date: new Date(2022, 6, 18)
    },
    {
        id: 'e2',
        title: 'Mobile bill',
        amount: 2500,
        date: new Date(2022, 5, 18)
    },
    {
        id: 'e3',
        title: 'Electric bill',
        amount: 3500,
        date: new Date(2022, 7, 18)
    },
    {
        id: 'e4',
        title: 'Books',
        amount: 200,
        date: new Date(2022, 4, 18)
    }
];

const App = () => {

    const [expenses , setExpenses] = useState(DUMMY_EXPENSE);

    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense , ...expenses];
        setExpenses(updatedExpense);
    };


    return (
        <div>
            <h2>Expense Tracking</h2>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />

        </div>
    );
}

export default App;