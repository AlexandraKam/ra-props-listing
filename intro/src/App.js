import './App.css';
import Listing from './components/Listing';
import jsonData from './data/etsy.json';

function App() {
  // const jsonData = '';
  // const data = JSON.parse(jsonData);
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <Listing items={jsonData} />
      </div>
    </div>
  );
}

export default App;