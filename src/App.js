import './App.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import SideNav from './pages/SideNav';
import TopBar from './pages/TopBar'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <SideNav />
      <div className='app-cntr'>
        <TopBar 
          pageName = "Dashboard"
        />

        <Dashboard></Dashboard>

      </div>
    </div>
  );
}

export default App;
