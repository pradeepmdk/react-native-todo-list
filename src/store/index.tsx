import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {createMigrate, persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import authSlice from './slice/authSlice';
import todoSlice from './slice/todoSlice';

const migrations = {
  0: (state: any) => {
    return {
      ...state,
    };
  },
};
const persistConfig = {
  key: 'root',
  version: 0,
  blacklist: ['todo'],
  migrate: createMigrate(migrations, {debug: false}),
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  auth: authSlice,
  todo: todoSlice,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const clearStore = () => {
  AsyncStorage.clear();
};

export const logoutStore = () => {
  clearStore();
  return {
    type: 'LOGOUT',
    payload: null,
  };
};

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
