import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5"
import { Button } from "../components/Button";
import { CountryDetails } from "./details/CountryDetails";
import { searchByCountry } from "../config";
import { Info } from "./details/Info";


export const Details = () => {
   const { name } = useParams();
  const navigate = useNavigate();
   const [country, setCountry] = useState(null);

  
    useEffect(() => {
      axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
    }, [name]);

return (
  <div>
    <Button onClick={() => navigate(-1)}>
      <IoArrowBack /> Back
    </Button>
    {country && <Info {...country} navigate={navigate} />}
    {/* <CountryDetails name={name} navigate={navigate} />
    fdgdg {name} */}
  </div>
);
};
