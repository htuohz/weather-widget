import citySuggestionsReducer from "../../store/reducers/citySuggestionsSlice";

it("should return the initial state", () => {
  expect(citySuggestionsReducer(undefined, { type: undefined })).toEqual([]);
});
