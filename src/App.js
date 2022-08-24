import React, { useState , useEffect } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';


let DUMMY_EXPENSE = [];

const App = () => {

    const [expenses , setExpenses] = useState(DUMMY_EXPENSE);

    useEffect(() =>{
        
        fetch('http://localhost/sample-api/api/read.php').then(
        response => {
            return response.json();
        }
        ).then(
        data => {
            console.log(data);
            setExpenses(data);
        }
    );
    } , []);

    


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