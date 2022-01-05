import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import HabitsPage from "./components/HabitsPage";
import TodayPage from "./components/TodayPage";
import HistoricPage from "./components/HistoricPage";

export default function App() {

     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<SignUpPage />} />
                    <Route path="/habitos" element={<HabitsPage />} />
                    <Route path="/hoje" element={<TodayPage />} />
                    <Route path="/historico" element={<HistoricPage />} />
               </Routes>
          </BrowserRouter>
     );
}