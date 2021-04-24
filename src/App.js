import React from 'react'
import Header from './components/Header/Header.js'
import Main from './components/Content/Main.js'
import Footer from './components/Footer/Footer.js'

function App() {
  return (
   <div className='wrapper'>
     <Header/>
     <Main />
     <Footer />
   </div>
  );
}

export default App;
