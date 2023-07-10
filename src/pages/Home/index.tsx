import React, { useEffect } from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import LogOut from '../Logout';
import BottomSheetWithButtons from './BottomSheetWithButtons';
import {useAppDispatch, useAppSelector} from '../../store';
import Todo from '../Todo';
import { setIsListType } from '../../store/slice/todoSlice';

export default function Home() {
  const listType = useAppSelector(state => state.todo.listType);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setIsListType(1));
  }, [])
  return (
    <View style={{...style.root, backgroundColor: listType ? '#fff' : 'grey'}}>
      <LogOut></LogOut>
      <Todo/>
      {/* {listType == 0 && <BottomSheetWithButtons />} */}
    </View>
  );
}

const style = StyleSheet.create({
  root: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: 'grey',
  },
});

