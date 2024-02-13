import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'
import Home from './Components/Home';
import AddNew from './Components/AddNew';
import Footer from './Components/Footer';
import Edit from './Components/Edit';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Redirect from './Components/Redirect';
import { PageNotFound } from './Components/PageNotFound';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddNew />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/redirect/:id" element={<Redirect />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
