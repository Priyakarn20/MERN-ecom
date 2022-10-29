import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Login from './pages/login';
import Signup from './pages/signup';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
<Route path="/" element = {<h1>Product listing Component</h1>}/>
<Route path="/add" element = {<h1>Add Product Component</h1>}/>
<Route path="/update" element = {<h1>Update Product </h1>}/>
<Route path="/logout" element = {<h1>logout</h1>}/>
<Route path="/profile" element = {<h1>Profile</h1>}/>
<Route path="/login" element = {<Login/>}/>
<Route path="/signup" element = {<Signup/>}/>

      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
