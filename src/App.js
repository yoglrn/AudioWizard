import './App.css';
import MainApp from './components/MainApp/MainApp';
import TopNav from './components/TopNav/TopNav';
import LeftNav from './components/LeftNav/LeftNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <LeftNav />
      <MainApp />
    </div>
  );
}

export default App;
