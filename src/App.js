import './App.css';
import Layout from './componentes/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Import pages
import { Home } from "./pages/Home"
import Footer from './componentes/Footer';


function App() {
 return (
  <BrowserRouter>

   <Layout />

   <div className="container">
    <Routes>
     <Route path="/" element={<Home />} />


    </Routes>
   </div>
   <Footer />
  </BrowserRouter>

 );
}

export default App;
