import {createAsyncThunk} from '@reduxjs/toolkit/src/createAsyncThunk';
import {handleUserLogin} from '../../utils/auth';
import {createSlice} from '@reduxjs/toolkit';

export const userLogin = createAsyncThunk('user/login', async data => {
  const response = await handleUserLogin(data);
  return response;
});

const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: {
      roll_number: '',
      password: '',
      erp_token: '',
    },
  },
  reducers: {
    clearLogin(state, action) {
      state.user = {
        roll_number: '',
        password: '',
        erp_token: '',
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      if (action.payload) {
        state.user.roll_number = action.payload.roll_number;
        state.user.password = action.payload.password;
      }
    });
  },
});

export default appSlice.reducer;
export const {clearLogin} = appSlice.actions;
