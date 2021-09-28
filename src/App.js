import './App.css';
import MyNav from './components/MyNav'
import Welcome from './components/Welcome'
import Latest from './components/Latest'
import MyFooter from './components/MyFooter'

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <Latest />
      <MyFooter />
    </div>
  );
}

export default App;
