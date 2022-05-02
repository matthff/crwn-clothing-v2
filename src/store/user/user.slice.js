import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
    currentUser: null
};

const userSlice = createSlice({
    name: 'user',
    initialState: INITAL_STATE,
    reducers: {
        setCurrentUser(state, action) {
            const { payload } = action;
            state.currentUser = payload;
        }
    }
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
