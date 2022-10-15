import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchCitySuggestions,
  selectCitySuggestions,
} from "../../store/reducers/citySuggestionsSlice";
import Suggestions from "./suggestions/Suggestions";
import _ from "lodash";
import styled from "styled-components";

export default function SearchBar() {
  const citySuggestions = useAppSelector(selectCitySuggestions);
  const dispatch = useAppDispatch();
  const [term, setTerm] = useState("");
  const delayedQuery = _.debounce((q) => getSuggestions(q), 500);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const handleChange = (event: any) => {
    setTerm(event.target.value);
    if (!event.target.value) {
      return;
    }
    delayedQuery(event.target.value);
  };
  const getSuggestions = (query: string) => {
    dispatch(fetchCitySuggestions(query));
  };
  return (
    <SearchBarWrapper>
      <label htmlFor="search">Search:</label>
      <input
        title="search for cities"
        aria-label="Enter a city name"
        type="search"
        id="search"
        name="search"
        onChange={handleChange}
        value={term || ""}
        placeholder="Enter a city name"
        onFocus={() => setSuggestionsVisible(true)}
        onBlur={() => setTimeout(() => setSuggestionsVisible(false), 200)}
      />
      {suggestionsVisible && (
        <Suggestions
          suggestions={citySuggestions}
          setSuggestionsVisible={setSuggestionsVisible}
        />
      )}
    </SearchBarWrapper>
  );
}

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
  width: fit-content;
  padding: 5px;
`;
