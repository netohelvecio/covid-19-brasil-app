import React from 'react';
import { StyleSheet } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';

export default function Loading({ loading }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
  });

  return (
    <SkeletonContent
      containerStyle={styles.container}
      isLoading={loading}
      boneColor="#c9c6e7"
      highlightColor="#a5a0d8"
      animationType="pulse"
      layout={[
        {
          key: 'text1',
          width: '70%',
          height: 26,
        },
        {
          key: 'chart1',
          width: '100%',
          flex: 1,
          marginTop: 20,
        },
        {
          key: 'text2',
          width: '70%',
          height: 26,
          marginTop: 20,
        },
        {
          key: 'chart2',
          width: '100%',
          flex: 1,
          marginTop: 20,
        },
      ]}
    />
  );
}
