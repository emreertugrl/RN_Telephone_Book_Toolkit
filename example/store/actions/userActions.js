import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {BASE_URL} from '../../service/urls';

// ilk kısımda slice(reducer) verilen isim, users/
//  ikinci ksıımda fonksiyonun adını veririz. /getUsers
const getUsers = createAsyncThunk('Users/getUsers', async params => {
  const response = await getRequest(BASE_URL, params);

  return response.data.results;
});

export {getUsers};
