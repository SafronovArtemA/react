import './App.css';
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Profile from './components/content/profile/profile'
import Messages from './components/content/messages/messages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div  className="content">
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/messages" element={<Messages />} />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
