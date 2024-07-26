import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
import ChatProvider from './context/ChatProvider';
import Practice from './Pages/Practice';

function App() {
  return (
    <div className="App">
      <Router>
        <ChatProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chats" element={<ChatPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/prac" element={<Practice />} />
            
          </Routes>
        </ChatProvider>
      </Router>
    </div>
  );
}

export default App;
