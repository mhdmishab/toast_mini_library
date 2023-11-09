import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CountryProps, ToastProps } from "../../utils/types/Types";

export const apiCall=createAsyncThunk('toaster/api',async()=>{
    try{
        const response=(await fetch('https://api.knowmee.co/api/v1/master/get-country-list')).json()
        return response;
    }catch(error){
        throw error;
    }
})

 interface ToastInitialState {
  messages: ToastProps[];
  apiLoading:boolean
  apiFullfilled:boolean
  countries:CountryProps[]
  countdown: number | undefined;
}


const initialState: ToastInitialState = {
  messages: [], 
  apiLoading:false,
  apiFullfilled:false,
  countries:[],
  countdown: undefined,
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ToastProps>) => {
      state.messages = [action.payload,...state.messages];
    },
    removeMessage: (state, action: PayloadAction<string>) => {
      state.messages = state.messages.filter(
        (message) => message.id !== action.payload
      );
    },
    setCountdown: (state, action: PayloadAction<number | undefined>) => {
        state.countdown = action.payload;
  }
},
  extraReducers:(builder)=>{
    builder
    .addCase(apiCall.pending,(state)=>{
        state.apiLoading=true;
    })
    .addCase(apiCall.rejected,(state)=>{
        state.apiLoading=false;
    })
    .addCase(apiCall.fulfilled,(state,action)=>{
        state.apiLoading=false;
        state.countries = action.payload?.responseData || [];
        state.apiFullfilled=true
    })
  }
});

export const { addMessage, removeMessage, setCountdown } = toastSlice.actions;

export default toastSlice.reducer;
