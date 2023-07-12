import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Route, Routes } from "react-router-dom";
import { Details } from "./pages/Details";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { useState, useEffect } from "react";
import axios from "axios";
import { ALL_COUNTRIES } from "./config";

function App() {

  const [countries, setCountries] = useState([]);
    useEffect(() => {
      if (!countries.length) {
        axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
      }
    }, []);
   return (
     <>
       <Header />
       <Main>
         <Routes>
           <Route exact path="/" element={<HomePage countries={countries} setCountries={setCountries} />} />
           <Route path="/country/:name" element={<Details />} />
           <Route path="*" element={<NotFound />} />
         </Routes>
       </Main>
     </>
   );
}


export default App;
