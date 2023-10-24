// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/home'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {


  return (
    <>
      <Home name='Pokemon' />
      <ReactQueryDevtools initialIsOpen />

    </>
  )
}

export default App
