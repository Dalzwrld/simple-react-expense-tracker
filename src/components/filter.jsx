import React, { useState } from 'react'
import { Search } from 'lucide-react'

function Filter({ searchExpense, setSearchExpense }) {
  return (
    <div className="border-2 rounded-xl border-[#d8d8d8] focus-within:border-green-500 p-3 flex items-center justify-between w-50 h-11 gap-1 shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
      <Search className="size-4 object-cover" />

      <input 
        type="text" 
        placeholder="Search Expenses..." 
        className="p-2 flex w-full h-full gap-1 text-sm font-[DM_Sans] text-gray-600 outline-none"
        value={searchExpense}
        onChange={
          (event) => 
            setSearchExpense(event.target.value)
        }
      />
    </div>
  )
}

export default Filter