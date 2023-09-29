import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchAirPollution = createAsyncThunk(
  'airPollution/fetchAirPollution',
  async ({ lat, lon }) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=1d1d9e533d0b8b9f372b4f4b9a24b5ac`,
    );
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();

    return data;
  },
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const airPollutionSlice = createSlice({
  name: 'airPollution',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirPollution.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchAirPollution.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      }))
      .addCase(fetchAirPollution.rejected, (state, action) => ({
        loading: false,
        data: null,
        error: action.error.message,
      }));
  },
});

export { fetchAirPollution };
export default airPollutionSlice.reducer;
