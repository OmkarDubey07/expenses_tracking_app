import Expenses from './components/Expenses/Expenses';

const App = () => {
    // let expenseDate = new Date(2022,6,18);
    // let expenseTitle = "School fee";
    // let expenseAmount = 300;
    let expenses =[
        {
            id : 'e1',
            title: 'School Fee',
            amount: 250,
            date: new Date(2022,6,18)
        },
        {
            id : 'e2',
            title: 'Mobile bill',
            amount: 2500,
            date: new Date(2022,5,18)
        },
        {
            id : 'e3',
            title: 'Electric bill',
            amount: 3500,
            date: new Date(2022,7,18)
        },
        {
            id : 'e4',
            title: 'Books',
            amount: 200,
            date: new Date(2022,4,18)
        }
    ];


    return(
        <div>
            <h2>Expense Tracking</h2>
            <Expenses item = { expenses } />

        </div>
    );
}

export default App;