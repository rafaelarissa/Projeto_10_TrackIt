import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/LoginPage";
import HabitsPage from "./components/LoginPage";
import TodayPage from "./components/LoginPage";
import HistoricPage from "./components/LoginPage";

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