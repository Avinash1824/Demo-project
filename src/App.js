
import './App.css';
import Card1 from './Components/Card1';
import ContacUs from './Components/ContacUs';
import FAQMenu from './Components/FAQMenu';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    
    
    
    <Card1/>
    <Features/>
    <FAQMenu/>
    <ContacUs/>
    
    </div>
    <Footer/>
    </>
  );
}

export default App;
