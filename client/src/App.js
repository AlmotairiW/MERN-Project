
import './App.css';
import Main from './views/Main';
import ViewArt from './views/ViewArt'
import {Router} from '@reach/router'
import {useState} from 'react'

function App() {
  const [articles, setArticles] = useState([]);
  return (
    <div className="App">
      <Router> 
        <Main path='/' articles={articles}  setArticles={setArticles} />
            <ViewArt path="/view/:id" articles={articles}  />
      </Router>
    </div>
  );
}

export default App;
