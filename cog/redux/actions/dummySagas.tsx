
import { takeEvery,put,all,delay,fork,call } from '@redux-saga/core/effects'
import { loadGetApi } from '../Config/BaseUrl';
import { fetchDataSuccess, fetchDataFailure } from '../reducer/airLineSlice';


export function* onLoadAirLine(){
    yield takeEvery("airline/fetchData",onLoadAirLineAsync)
}

export function* onLoadAirLineAsync() :any {
    try{
        const response = yield call(loadGetApi);
        if(response.status === 200){
            console.log("response",response)
            // yield delay(500);
            yield put(fetchDataSuccess(response.data));
        }
    }catch(error:any){
        yield put(fetchDataFailure(error.response.data));
    }
}

const dummySagas = [
    fork(onLoadAirLine)
]

export default function* rootSaga(){
    yield all([...dummySagas])
}