const ExpenseForm = ({
  expenseName,
  handleChange,
  expenseAmount,
  handleSubmit,
  handleAmount,
  edit,
}) => {
  return (
    <>
    <div className="bg-slate-200 p-5">
    <div className="text-center font-semibold uppercase">
    Add new transaction
  </div>
  
      <div className="mt-5">
        <input
          type="text"
          name="expenseName"
          id="expenseName"
          placeholder="e.g. Rent, Groceries, Food, etc."
          className="block w-full rounded-0 border py-3 px-4 sm:text-sm sm:leading-6"
          value={expenseName}
          onChange={handleChange}
        />
      </div>
      <div className="mt-5">
        <input
          placeholder="e.g. ₹ 10000"
          name="expenseAmount"
          id="amount"
          type="number"
          className="block w-full rounded-0 border py-3 px-4 sm:text-sm sm:leading-6"
          value={expenseAmount}
          onChange={handleAmount}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="mt-5 flex w-full justify-center rounded-0 bg-orange-400 py-3 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {edit ? 'Edit' : 'Submit'}
      </button>
      </div>
    </>
  );
};

export default ExpenseForm;
