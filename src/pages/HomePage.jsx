import axios from "axios";
import { useState, useEffect } from "react";
import { List } from "../components/MainSection/List";
import { Card } from "../components/MainSection/Card";
import { Controls } from "../components/Controls";
import { ALL_COUNTRIES } from "../config";

import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [countries, setCountries] = useState([]);
  

  const navigate = useNavigate();
  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
  }, []);
  return (
    <>
      <Controls />
      <List>
        {countries.map((el) => {
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
