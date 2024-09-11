import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Simulated API call
const fakeApi = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ count: Math.floor(Math.random() * 100) });
      }, 1000); // Simulates a 1-second delay
    });
};
export const fetchInitialCount = createAsyncThunk(
    'counter/fetchInitialCount',
    async () => {
      const response = await fakeApi();
      return response.count;
    }
  );

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        status: 'idle',
        error: null
    },

    reducers:{
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    },

    extraReducers:(builder) => {
        builder
        .addCase(fetchInitialCount.pending, (state) => {
            state.status = 'loading'
        })

        .addCase(fetchInitialCount.fulfilled, (state, action) => {
            state.status ='succeeded'
            state.value = action.payload
        })
       .addCase(fetchInitialCount.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
       })
    }
})

export  const {increment, decrement,incrementByAmount} = counterSlice.actions

export default counterSlice.reducer