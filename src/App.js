import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import HabitsPage from "./components/HabitsPage";
import TodayPage from "./components/TodayPage";
import HistoryPage from "./components/HistoryPage";
import ImageContext from "./contexts/ImageContext";

export default function App() {
     const [token, setToken] = useState('');
     const [image, setImage] = useState('');

     return (
          <ImageContext.Provider value={{ image, setImage }}>
               <BrowserRouter>
                    <Routes>
                         <Route path="/" element={<LoginPage setToken={setToken} />} />
                         <Route path="/cadastro" element={<SignUpPage />} />
                         <Route path="/habitos" element={<HabitsPage token={token} />} />
                         <Route path="/hoje" element={<TodayPage token={token} />} />
                         <Route path="/historico" element={<HistoryPage />} />
                    </Routes>
               </BrowserRouter>
          </ImageContext.Provider>
     );
}