import React, { useState , useEffect } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';


let DUMMY_EXPENSE = [];

const App = () => {



    const [expenses , setExpenses] = useState(DUMMY_EXPENSE);

    function fetchData(){
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
    } 

    useEffect(() =>{
        fetchData();
    } , []);

    


    const addExpenseHandler = (expense) => {
        fetch('http://localhost/sample-api/api/create.php' , {
            method : 'POSt' ,
            body: JSON.stringify(expense) , 
            headers :{
                'content-type' : 'application/json'
            }
        }).then(
            response => {
                fetchData();
            }
        );
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