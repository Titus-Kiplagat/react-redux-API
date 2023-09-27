import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (_, { rejectWithValue }) => {
	try {
		const response = await fetch("https://randomuser.me/api/?results=10");
		const data = await response.json();
		return data.results;
	} catch (error) {
		return rejectWithValue(error.message)
	}
});

const usersSlice = createSlice({
  name: "users",
  initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.isLoading = false;
				state.users = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			});
	},
});

export default usersSlice.reducer;
