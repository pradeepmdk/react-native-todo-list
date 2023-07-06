import BottomSheet from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useAppDispatch} from '../../store';
import {setIsListType} from '../../store/slice/todoSlice';

export default function BottomSheetWithButtons() {
  const dispatch = useAppDispatch();
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['40%', '40%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const onSelect = (type: number) => {
    dispatch(setIsListType(type));
  };

  return (
    <View style={styles.root}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <Button mode="contained" onPress={() => onSelect(1)}>
            List1
          </Button>
          <View style={{marginTop: 10}} />
          <Button mode="contained" onPress={() => onSelect(2)}>
            List2
          </Button>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
