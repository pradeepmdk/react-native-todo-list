import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {logoutStore, useAppDispatch} from '../../store';

export default function LogOut() {
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(logoutStore());
  };

  return (
    <View>
      <Button mode="elevated" onPress={() => logout()}>
        Logout
      </Button>
    </View>
  );
}
