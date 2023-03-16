import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userSlice from "./reducer/userSlice";
import teamSlice from "./reducer/teamSlice";
import metricSlice from "./reducer/metricSlice";
import memberSlice from "./reducer/memberSlice";

const sagaMiddelWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userSlice,
    teams: teamSlice,
    metric: metricSlice,
    members: memberSlice,
  },
  middleware: [sagaMiddelWare],
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
