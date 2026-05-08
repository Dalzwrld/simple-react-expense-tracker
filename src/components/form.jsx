import React, { useState, useEffect } from 'react'

function Form({ addExpense }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    date: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
    
    addExpense({...formData, price: parseFloat(formData.price)});
        
    setFormData({
        name: "",
        description: "",
        category: "",
        price: "",
        date: ""
    });
  }

  return (
    <form className="border border-[#d8d8d8] rounded-2xl w-100 p-6 flex flex-col gap-5 shadow-[0_4px_12px_rgba(0,0,0,0.25)]" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-2xl font-[DM_Sans] font-semibold">
                Add Expense
            </h3>

            <h5 className="text-gray-800 font-medium font-(font-sans)">
                Enter your expense details below
            </h5>
        </div>

        <input 
            type="text" 
            placeholder="Enter expense name" 
            className="border-b border-gray-300 p-2 outline-green-500 text-sm" 
            value={formData.name} 
            onChange={
                (event) => 
                    {setFormData((prev) => ({...prev, name: event.target.value}))}
            }
            required
        />
        <input 
            type="text" 
            placeholder="Enter expense description" 
            className="border-b border-gray-300 p-2 outline-green-500 text-sm" 
            value={formData.description} 
            onChange={
                (event) => 
                    {setFormData((prev) => ({...prev, description: event.target.value}))}
            }
            required 
        />
        <input 
            type="text" 
            placeholder="Enter expense category" 
            className="border-b border-gray-300 p-2 outline-green-500 text-sm" 
            value={formData.category} 
            onChange={
                (event) => 
                    {setFormData((prev) => ({...prev, category: event.target.value}))}
            }
            required 
        />
        <input 
            type="number" 
            placeholder="Enter price" 
            className="border-b border-gray-300 p-2 outline-green-500 text-sm" 
            value={formData.price} 
            onChange={
                (event) => 
                    {setFormData((prev) => ({...prev, price: event.target.value}))}
            }
            required 
        />
        <input 
            type="date"
            className="border-b border-gray-300 p-2 outline-green-500 text-grey-300 text-sm" 
            value={formData.date} 
            onChange={
                (event) => 
                    {setFormData((prev) => ({...prev, date: event.target.value}))}
            }
            required 
        />

        <button type="submit" className="border-none rounded-xl p-2 w-full text-md bg-green-500 hover:bg-green-700 cursor-pointer mt-2">
            Submit
        </button>
    </form>
  )
}

export default Form