import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {useAppDispatch} from '../../store';
import {Button, Text, TextInput} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export default function SignUp() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<any>>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <View style={style.root}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}
      <View style={{marginTop: 10}} />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      <View style={{marginTop: 10}} />
      <Button
        mode="elevated"
        buttonColor="#ff7f5aef"
        textColor="white"
        onPress={handleSubmit(onSubmit)}>
        Sign Up
      </Button>
      <View style={{marginTop: 10}} />

      <Text
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={{textAlign: 'center'}}>
        Already have account? Login
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    padding: 10,
  },
});
