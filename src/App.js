import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer'
import Cartitems from './components/Cartitems';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CartContainer />
      <Cartitems />
    </div>
  );
}

export default App;
