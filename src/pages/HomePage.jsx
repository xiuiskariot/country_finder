import axios from "axios";
import { useState, useEffect } from "react";
import { List } from "../components/MainSection/List";
import { Card } from "../components/MainSection/Card";
import { Controls } from "../components/Controls";
import { ALL_COUNTRIES } from "../config";

import { useNavigate } from "react-router-dom";

export const HomePage = ({countries, setCountries}) => {
  

  const [filtredCountries, setFiltredCountries] = useState(countries)

  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter(el => el.region.includes(region))
    }
    if (search) {
      data = data.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
    }
    setFiltredCountries(data)
  }
  
  useEffect(()=> {handleSearch()},[countries])

  const navigate = useNavigate();

  return (
    <>
      <Controls onSearch={handleSearch } />
      <List>
        {filtredCountries.map((el) => {
          const countryInfo = {
            img: el.flags.png,
            name: el.name,
            info: [
              {
                title: "Population",
                description: el.population.toLocaleString(),
              },
              {
                title: "Region",
                description: el.region,
              },
              {
                title: "Capital",
                description: el.capital,
              },
            ],
          };

          return (
            <Card
              key={el.name}
              {...countryInfo}
              onClick={() => navigate(`/country/${el.name}`)}
            />
          );
        })}
      </List>
    </>
  );
};
