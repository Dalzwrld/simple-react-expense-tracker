import React from 'react'

function Table({ expenses }) {
  return (
    <div className="w-full">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                My Expenses
            </h2>
        </div>

        <table className="w-full border-collapse text-sm my-6">
            <thead className="border-b-2 border-green-500">
                <tr className="">
                    {["Expense", "Description", "Category", "Price", "Date"].map((head) => (
                        <th key={head} className={`text-[11px] uppercase tracking-widest font-medium text-green-600 pb-3 pt-1 px-3 text-left`}>
                            {head}
                        </th>
                    ))}
                </tr>
            </thead>    
    
            <tbody>
                {expenses.map((expense, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-3 py-3.5 text-gray-800 w-30">{expense.name}</td>
                        <td className="px-3 py-3.5 max-w-60">{expense.description}</td>
                        <td className="px-3 py-3.5 text-green-900 font-semibold max-w-40">{expense.category}</td>
                        <td className="px-3 py-3.5 font-mono font-medium text-green-400 max-w-50">
                            KES {parseFloat(expense.price).toLocaleString("en-KE", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="px-3 py-3.5 text-gray-500 max-w-50">{expense.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>  
  )
}

export default Table