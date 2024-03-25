import './App.css';
import Header from './components/header/header';
import Humanazing from './components/humanizing-section/humanazing';
import Different from './components/different-section/different';
import FindOut from './components/findOut/findOut';

function App() {
  return (
    <main className='container'>
      <Header/>
      <Humanazing/>
      <Different/>
      <FindOut/>
      <footer className='footer'></footer>
    </main>
  );
}

export default App;
