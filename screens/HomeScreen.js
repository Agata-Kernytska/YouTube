import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import VideoItem from '../components/VideoItem';
import Header from '../components/Header';

const HomeScreen = () => {
  const videos = [
    { id: '1', title: 'Відео 1', channel: 'Канал A' },
    { id: '2', title: 'Відео 2', channel: 'Канал B' },
    { id: '3', title: 'Відео 3', channel: 'Канал C' },
  ];

  return (
    <View style={styles.container}>
      {/* Кастомний хедер */}
      <Header title="Головна" />
      {/* Список відео */}
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoItem video={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
