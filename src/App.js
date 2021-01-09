import './App.css';

import AddItem from './components/AddItem';

function App() {
  return (
    <div>
      <h1>TODO</h1>
      <div className="container">
        <AddItem />
      </div>
    </div>
  );
}

export default App;
