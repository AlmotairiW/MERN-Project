
import './App.css';
import Main from './views/Main';
import ViewArt from './views/ViewArt'
import Favorites from './views/Favorites'
import {Router} from '@reach/router'
import {useState} from 'react'

function App() {
  const [articles, setArticles] = useState([]);
  return (
    //header
    <div className="App">
          <div>
        <section className="curved">

        <ul>
            <li><a href="/">Search</a></li>
            <li><a href="/favorites">Favorites</a></li>
        </ul>
        </section>
   </div>
   
      <Router> 
            <Main path='/' articles={articles}  setArticles={setArticles} />
            <ViewArt path="/view/:id" articles={articles}  />
            <Favorites path='/favorites'/>
      </Router>
    </div>
  );
}

export default App;
