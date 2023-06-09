import { Route, Routes } from 'react-router-dom';
import './App.css';
import SearchForm from './components/searchForm';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SearchForm />} />
        </Routes>
    );
}

export default App;
