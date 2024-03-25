import './App.css';
import Header from './components/header/header';
import Humanazing from './components/humanizing-section/humanazing';
import Different from './components/different-section/different';

function App() {
  return (
    <main className='container'>
      <Header/>
      <Humanazing/>
      <Different/>
      <section className='find-out'></section>
      <footer className='footer'></footer>
    </main>
  );
}

export default App;
