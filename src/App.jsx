import { useState, useEffect } from "react";
import './App.css'
import ExpenseForm from './components/expenseform'
import ExpenseList from "./components/expenselist";
import { v4 as uuidv4 } from 'uuid';

const initialExpenses = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : [];

function App() {
  const [edit, setEdit] = useState(false);
  const [expenseName, setExpense] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [data, setData] = useState(initialExpenses);
  const [mainid, setId] = useState(0);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(data));
  }, [data]);

  const id = uuidv4().slice(0, 8);
  
  const handleChange = (e) => {
    setExpense(e.target.value);
  }
  const handleAmount = (e) => {
    setExpenseAmount(e.target.value);
  }

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expenseName !== '' && expenseAmount > 0) {
      if (edit) {
        let tempExpenses = data.map((item) => {
          return item.id === mainid ? { ...item, expenseName, expenseAmount } : item;
        });
        setData(tempExpenses);
        setExpense("");
        setExpenseAmount("");
        setEdit(false);
      } else {
        setData([...data, { id, expenseName, expenseAmount, today}])
        setExpense("");
        setExpenseAmount("");
      }

      setTimeout(() => {
        const totalExpenses = data.reduce((total, expense) => total + parseFloat(expense.expenseAmount), 0);
        if (data.length > 0) {
          document.querySelector('.total-expenses').textContent = ` ₹ ${totalExpenses}`;
        }
        
      }, 0);

  }

}
  return (
    <>
      <div className="bg-emerald-700 py-2">
        <h2 className="text-center sm:text-2xl font-bold leading-9 tracking-tight text-white uppercase">
          Daily Expenses Tracker
        </h2>
      </div>
      <div className="container mx-auto md:px-6 lg:px-16 xl:px-32">
        <div className="lg:grid grid-cols-12 gap-6 pt-5 px-5 sm:px-0 md:pt-10 lg:pt-20">
          <div className="col-span-4 sticky bg-slate-200 p-5">
            <div className="p-1 text-center font-semibold uppercase">
              Add new transaction    
            </div>
            <ExpenseForm expenseName={expenseName} edit={edit} handleChange={handleChange} expenseAmount={expenseAmount} handleSubmit={handleSubmit} handleAmount={handleAmount} />
          </div>
          <div className="col-span-8">
            <h2 className="bg-slate-200 px-5 py-2 font-semibold mt-5 lg:mt-0 mb-5"> EXPENSE
            <span className='text-red-600 font-semibold total-expenses'></span></h2>
            <div className="md:grid grid-cols-12 gap-4">
              <ExpenseList data={data} edit={edit} setId={setId} setEdit={setEdit} setExpense={setExpense} setExpenseAmount={setExpenseAmount} setData={setData} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
