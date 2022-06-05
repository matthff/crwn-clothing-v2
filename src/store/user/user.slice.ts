import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { User } from "firebase/auth";

type UserSliceState = {
    currentUser: User | null    
}

const initialState: UserSliceState = {
    currentUser: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser(state: UserSliceState, action: PayloadAction<User>) {
            const { payload } = action;
            state.currentUser = payload;
        }
    }
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
