import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Route, Routes } from "react-router-dom";
import { Details } from "./pages/Details";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { useState } from "react";

function App() {

  const [countries, setCountries] = useState([]);
   return (
     <>
       <Header />
       <Main>
         <Routes>
           <Route exact path="/" element={<HomePage />} />
           <Route path="/country/:name" element={<Details />} />
           <Route path="*" element={<NotFound />} />
         </Routes>
       </Main>
     </>
   );
}


export default App;
