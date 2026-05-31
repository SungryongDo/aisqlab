import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function App(){
 return (
  <div>
   <nav className='nav'>
    <h2>AI & Software Quality Research Lab</h2>
   </nav>
   <section className='hero'>
    <h1>Advancing Trustworthy AI and Software Quality</h1>
    <p>AI, Software Engineering, Safety-Critical Systems, and Industrial Innovation</p>
   </section>
   <section className='cards'>
    <div className='card'>AI & Software Engineering</div>
    <div className='card'>Process Models</div>
    <div className='card'>Safety-Critical Systems</div>
    <div className='card'>Industrial Convergence</div>
   </section>
  </div>
 )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
