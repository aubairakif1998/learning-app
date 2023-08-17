import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface User {
    id: string;
    username: string;
    email: string;
    isVerfied: boolean;
    isAdmin: boolean;
}

export interface UserState {
    value: User | null; // Use the User interface type
}

const initialState: UserState = {
    value: null, // Initialize as null or whatever makes sense
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.value = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

