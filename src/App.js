import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import HabitsPage from "./components/HabitsPage";
import TodayPage from "./components/TodayPage";
import HistoryPage from "./components/HistoryPage";
import { useState } from "react";

export default function App() {
     const [token, setToken] = useState('');

     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<LoginPage setToken={setToken} />} />
                    <Route path="/cadastro" element={<SignUpPage />} />
                    <Route path="/habitos" element={<HabitsPage />} />
                    <Route path="/hoje" element={<TodayPage token={token} />} />
                    <Route path="/historico" element={<HistoryPage />} />
               </Routes>
          </BrowserRouter>
     );
}