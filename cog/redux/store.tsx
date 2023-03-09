import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./actions/dummySagas";
import airLineSlice from "./reducer/airLineSlice";


const sagaMiddleWare = createSagaMiddleware()


const store = configureStore({
    reducer:{
        data:airLineSlice
    },
    middleware:[sagaMiddleWare]
})

sagaMiddleWare.run(rootSaga)

// export type RootState = ReturnType<typeof store.getState>

export default store