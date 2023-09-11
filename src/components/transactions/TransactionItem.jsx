import { useGlobalState } from "../../context/GlobalState"

export function TransactionItem({ transaction }) {

    const { deleteTransaction } = useGlobalState()

    return (
        <li className="bg-zinc-600 text-white px-3 py-3 rounded-lg mb-2 w-full flex justify-between items-center ">
            <p className="text-sm">{transaction.description} </p>
            <div>
                <span>${transaction.amount}</span>
                <button 
                    className="bg-red-500 px-6 rounded-lg ml-5 font-bold"
                    onClick={() => {
                    deleteTransaction(transaction.id)
                }}>X</button>
            </div>
        </li>
    )
}

export default TransactionItem