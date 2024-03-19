import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ data, setData, setEdit, setExpenseAmount, setExpense, setId, setTotalExpenseAmount, expenseAmount }) => {

    const handleEdit = (id) => {
        const tempExpenses = data.find((item) => item.id === id);
        //console.log(tempExpenses);
        setExpenseAmount(tempExpenses.expenseAmount);
        setExpense(tempExpenses.expenseName);
        setEdit(true);
        setId(id);
    }
    const handleDelete = (id) => {
        //const index = data.findIndex((item) => item.id === id);
        const tempExpenses = data.filter((item) => item.id !== id);
        setData(tempExpenses);
        setTotalExpenseAmount(Math.abs(tempExpenses.reduce((total, expense) => total - parseFloat(expense.expenseAmount), 0)));
        //console.log(tempExpenses, index);
        setEdit(false);
    }

    return (
        <>
            {
               data.length <= 0 ? <div className="col-span-12">No expenses</div>
               : data.map((item, index) => {
                    return (
                        <div className="col-span-6 sticky bg-slate-50 p-4 mb-5 sm:mb-0" key={index}>
                            <p className='font-semibold text-1xl pb-3'>{item.expenseName} </p>
                            <p className='text-2xl pb-3 font-bold'>₹ <span className='text-orange-400'>{item.expenseAmount}</span></p>
                            
                            <div className='flex gap-3 justify-end small_icon'>
                                <FaRegEdit onClick={() => handleEdit(item.id)} />
                                <MdDelete onClick={() => handleDelete(item.id)} />
                            </div>

                        </div>
                    )
                })
            }
        </>
    )
}

export default ExpenseList