import './App.css';
import SideNav from './pages/SideNav';
import TopBar from './pages/TopBar'

function App() {
  return (
    <div className="App">
      <SideNav />
      <div className='app-cntr'>
        <TopBar />
      </div>
    </div>
  );
}

export default App;
