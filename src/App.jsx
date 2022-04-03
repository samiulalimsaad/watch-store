import { Route, Routes } from "react-router-dom";
import NotFound from "./404";
import Blog from "./Blog";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Navbar from "./Navbar";
import Reviews from "./Review";

function App() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
