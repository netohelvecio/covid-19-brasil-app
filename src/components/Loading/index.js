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
          key: 'someId',
          width: 140,
          height: 20,
          marginTop: 12,
          marginLeft: 16,
        },
        {
          key: 'someOtherId',
          width: 120,
          height: 20,
          marginTop: 20,
          marginLeft: 16,
        },
      ]}
    />
  );
}
