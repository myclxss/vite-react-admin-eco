import { GlobalProvider } from './context/GlobalState'

import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import IncomeExpenses from './components/IncomeExpenses'
import ExpenseChart from './components/ExpenseChart'

function App() {
  return (
    <GlobalProvider>
      <div className='bg-zinc-950 text-white h-screen flex justify-center items-center'>
        <div className='container mx-auto w-3/6'>
          <div className='bg-zinc-800 p-7 rounded-lg flex gap-x-10'>
            <div>
              <h1 className='text-4xl font-bold'>Manejo Ingresos</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className='flex flex-col flex-1 text-center'>
              <p className=''><span className='text-yellow-300 font-bold'>NOTA: </span>Si es tu primera vez en la pagina, al igresar un dato, recarga la pagina</p>
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App