import './App.css';
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Profile from './components/content/profile/profile'
import MessagesContainer from './components/content/messages/messagesContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(props) {
  return (
    <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div  className="content">
                <Routes>
                    <Route path="/profile" element={<Profile stor={props.stor}/>} />
                    <Route path="/messages" element={<MessagesContainer />} />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
