import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import List from './components/List';

function App() {
  return (
    <div>
      <h1>TODO</h1>
      <div className="container">
        <List />
      </div>
    </div>
  );
}

export default App;
