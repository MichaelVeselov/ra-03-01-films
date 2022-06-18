import Stars from './components/Stars';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div>
        <Stars count={1} />
        <Stars count={6} />
        <Stars count={'string'} />
        <Stars count={2} />
        <Stars count={3} />
        <Stars count={4} />
        <Stars count={5} />
      </div>
    </div>
  );
}

export default App;
