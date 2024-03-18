import { useState, useEffect } from "react";

const ExpenseForm = () => {
  const [edit, setEdit] = useState(false);
  const [expenseName, setExpense] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [data, setData] = useState();


  const handleChange = (e) => {
    setExpense(e.target.value);
  } 

  const handleAmount = (e) =>{
    setExpenseAmount(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
    setData([{expenseName: expenseName, expenseAmount: expenseAmount}])

    // setExpense("");
    // setExpenseAmount("");

  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Daily Expenses Tracker
        </h2>
      </div>
      {expenseName}
      
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        
          <div>

            <div className="mt-2">
              <input
                type="text"
                placeholder="e.g. Rent, Groceries, Food, etc."
                className="block w-full rounded-0 border py-3 px-4 sm:text-sm sm:leading-6"
                value={expenseName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>

            <div className="mt-2">
              <input
                placeholder="e.g. ₹ 100"
                type="number"
                className="block w-full rounded-0 border py-3 px-4 sm:text-sm sm:leading-6"
                value={expenseAmount}
                onChange={handleAmount}
              />
            </div>
          </div>  

          <div>
            <button
              onSubmit={handleSubmit}
              className="flex w-full justify-center rounded-0 bg-orange-400 py-3 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {edit ? 'Edit' : 'Submit'}
            </button>
          </div>
        


      </div>
    </div>
  );
};

export default ExpenseForm;
