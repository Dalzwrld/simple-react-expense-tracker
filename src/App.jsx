import React, { useState, useEffect } from 'react'
import Filter from './components/filter'
import Form from './components/form'
import Table from './components/table'

function App() {  
  const [expenses, setExpenses] = useState([]);
  const [searchExpense, setSearchExpense] = useState("");

  const filteredExpenses = expenses.filter((expense) => {
    return (
      expense.name?.toLowerCase().includes(searchExpense.toLowerCase()) || expense.description?.toLowerCase().includes(searchExpense.toLowerCase())
    );
  });

  useEffect(() => {
      fetch('http://localhost:3000/expenses')
      .then((res) => res.json())
      .then((data) => setExpenses(data))
      .catch((err) => console.error("Failed to add expense", err));
  }, []);

  function addExpense(newExpense) {
    fetch("http://localhost:3000/expenses", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(newExpense),
    })
      .then((res) => res.json())
      .then((data) => {
        setExpenses((prev) => [...prev, data]);
      })
      .catch((err) => console.error("Failed to add expense:", err)); 
  }

  return (
    <div className="w-full h-screen flex flex-col px-40 py-5 gap-4 bg-[#f4f4f4] font-[DM_Sans] text-400">
      <div className="w-full h-25 flex flex-col items-center justify-center gap-2 mb-5">
        <h1 className="text-5xl font-[Cormorant_Garamond] font-bold">Expense tracker</h1>
        <h5 className="text-md text-gray-500 font-[DM_Sans]">Start taking control of your finances and life. Record, categorize and analyze your spending.</h5>
      </div>

      <div className="flex w-auto h-auto gap-8">
        <div className="">
          <Form addExpense={addExpense} />
        </div>

        <div className="flex flex-col items-start w-auto h-auto gap-10 mx-8">
          <div className="">
            <Filter 
              searchExpense={searchExpense}
              setSearchExpense={setSearchExpense}
            />
          </div>

          <div className="">
            <Table expenses={filteredExpenses} />
          </div>
        </div> 
      </div>
    </div>
  )
}

export default App
