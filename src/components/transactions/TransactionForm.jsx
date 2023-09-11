import React, { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState'

function TransactionForm() {

  const { addTransaction } = useGlobalState()
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
    setAmount(0)
    setDescription("");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder='Ingresa una descripcionA'
          onChange={(e) => setDescription(e.target.value)}
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
          value={description}
           />

        <input
          type="number"
          step={"0.01"}
          placeholder='Ingresa una cantidad'
          onChange={(e) => setAmount(e.target.value)}
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full' 
          value={amount}
          />

        <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full'>
          Añade la Transaccion
        </button>
      </form>
    </div>
  )
}

export default TransactionForm