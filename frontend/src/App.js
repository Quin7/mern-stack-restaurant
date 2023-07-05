import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <main className='pt-16'>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default App;
