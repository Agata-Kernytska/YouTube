import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const trendingVideos = [
  { id: '1', title: 'Вірусне відео 1', views: '3.2M', channel: 'Канал трендів' },
  { id: '2', title: 'Останні новини', views: '2.8M', channel: 'Новинний хаб' },
];

const TrendingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Популярні відео</Text>
      <FlatList
        data={trendingVideos}
        renderItem={({ item }) => (
          <View style={styles.videoItem}>
            <View style={styles.thumbnail} />
            <View style={styles.videoDetails}>
              <Text style={styles.videoTitle}>{item.title}</Text>
              <Text style={styles.videoChannel}>{item.channel}</Text>
              <Text style={styles.videoViews}>{item.views} переглядів</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.videoList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  thumbnail: {
    width: 120,
    height: 70,
    backgroundColor: '#ddd',
  },
  videoDetails: {
    flex: 1,
    marginLeft: 10,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  videoChannel: {
    fontSize: 14,
    color: '#666',
  },
  videoViews: {
    fontSize: 12,
    color: '#999',
  },
});

export default TrendingScreen;
