import './App.css';
import Header from './components/header/header';
import Humanazing from './components/humanizing-section/humanazing';

function App() {
  return (
    <main className='container'>
      <Header/>
      <Humanazing/>
      <section className='different'></section>
      <section className='find-out'></section>
      <footer className='footer'></footer>
    </main>
  );
}

export default App;
