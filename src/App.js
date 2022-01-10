import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import HabitsPage from "./components/HabitsPage";
import TodayPage from "./components/TodayPage";
import HistoryPage from "./components/HistoryPage";
import ImageContext from "./contexts/ImageContext";
import TokenContext from "./contexts/TokenContext";

export default function App() {
     const tokenOnLocalStorage = localStorage.getItem("token");
     const [token, setToken] = useState(tokenOnLocalStorage);
     const [image, setImage] = useState('');

     function setAndPersistToken(token) {
          setToken(token);
          localStorage.setItem("token", token);
     }

     return (
          <TokenContext.Provider value={{ token, setToken, setAndPersistToken }}>
               <ImageContext.Provider value={{ image, setImage }}>
                    <BrowserRouter>
                         <Routes>
                              <Route path="/" element={<LoginPage />} />
                              <Route path="/cadastro" element={<SignUpPage />} />
                              <Route path="/habitos" element={<HabitsPage />} />
                              <Route path="/hoje" element={<TodayPage />} />
                              <Route path="/historico" element={<HistoryPage />} />
                         </Routes>
                    </BrowserRouter>
               </ImageContext.Provider>
          </TokenContext.Provider>
     );
}