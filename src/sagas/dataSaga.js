import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../actions/dataActions';
import { Alert, Space } from 'antd';
function* fetchDataSaga() {
        try {
      
         const response = yield call(axios.get, 'https://api.collectapi.com/corona/countriesData', {
           headers: {
              'Content-Type': 'application/json',
              'Authorization': 'apikey 6ijruQn9cpQ3sTrbqIYPu0:0ERlfTOFw05EAMYjeAIfBr'
            }
         });
          yield put(fetchDataSuccess(response.data.result));
      } catch (error) {
         yield put(fetchDataFailure(error));
         <Space
           direction="vertical"
           style={{
            width: '100%',
           }}
           >
           <Alert message="veri alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin." type="error" />
         </Space>
       }
}

function* dataSaga() {
  yield takeLatest(fetchDataRequest, fetchDataSaga);
}

export default dataSaga;
