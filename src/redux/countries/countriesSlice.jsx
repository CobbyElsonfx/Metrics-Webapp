import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (region) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}?fields=name,latlng,area,flags`,
    );
    const data = await response.json();
    return data;
  },
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchCountries.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      }))
      .addCase(fetchCountries.rejected, (state, action) => ({
        loading: false,
        data: [],
        error: action.error.message,
      }));
  },
});

export { fetchCountries };
export default countriesSlice.reducer;
