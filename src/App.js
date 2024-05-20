import './App.css';
import Header from './components/header/header';
import Humanazing from './components/humanazing-section/humanazing';
import Different from './components/different-section/different';
import FindOut from './components/findOut/findOut';
import Footer from './components/footer/footer';

import './App.css'

function App() {
  return (
    <main className='container'>
      <Header />

      <Humanazing />

      <Different />

      <FindOut />
      
      <Footer />
    </main>
  );
}

export default App;
