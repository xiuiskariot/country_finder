import { useState } from "react";
import { CustomSelect } from "./CustomSelect";
import { Search } from "./Search";
import styled from "styled-components";

const WrapperS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media(min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center
  }
`

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

export const Controls = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("")


  return (
    <WrapperS>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </WrapperS>
  );
};
