import { Route, Routes } from 'react-router-dom';
import './App.css';
import SearchForm from './components/searchForm';
import Lyrics from './components/lyrics'
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SearchForm />} />
            <Route path="/lyrics/:id" element={<Lyrics />} />

        </Routes>
    );
}

export default App;
