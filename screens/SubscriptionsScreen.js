import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const subscribedChannels = [
  { id: '1', channel: 'Tech Insider', videos: '5 нових відео' },
  { id: '2', channel: 'Design Daily', videos: '2 нових відео' },
  { id: '3', channel: 'Code World', videos: '1 нове відео' },
];

const SubscriptionsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Підписки</Text>
      <FlatList
        data={subscribedChannels}
        renderItem={({ item }) => (
          <View style={styles.channelItem}>
            <View style={styles.avatar} />
            <View style={styles.channelDetails}>
              <Text style={styles.channelName}>{item.channel}</Text>
              <Text style={styles.channelVideos}>{item.videos}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
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
  list: {
    paddingBottom: 20,
  },
  channelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
  },
  channelDetails: {
    marginLeft: 15,
    flex: 1,
  },
  channelName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  channelVideos: {
    fontSize: 14,
    color: '#666',
  },
});

export default SubscriptionsScreen;
