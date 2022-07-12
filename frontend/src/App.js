import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Games from './screens/Games';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">S.K. Games</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<Games />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
