
// import React, { Component } from 'react';


// import Navbar from './components/navBar'
// import TextBanner from './components/text-banner'
// import DescProducts from './components/texto-produtos'
// import Produtos from './components/vitrine';
// import Category from './components/categorias';

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Navbar />
//                 <TextBanner />
//                 <DescProducts />
//                 <Produtos />
//                 <Category />
//             </div>
//             );
//         }
// }
  
//   export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

 
function App() {
  return (
    <>
    {/* <Router>
      <div className='App'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link> 
       <Link to='/user/meunome'>User</Link>
      </div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        
      </Routes>
    </Router> */}

    <h1>Home APP</h1>
    
    <Link to="/about">About</Link>
    
    </>
  );
}
 
export default App;

//HOME.jsx
// import React, { Component } from 'react';


// import Navbar from './navBar';
// import TextBanner from './text-banner';
// import DescProducts from './texto-produtos';
// import Produtos from './vitrine';
// import Category from './categorias';

// class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <Navbar />
//                 <TextBanner />
//                 <DescProducts />
//                 <Produtos />
//                 <Category />
//             </div>
//             );
//         }
// }
  
//   export default Home;
