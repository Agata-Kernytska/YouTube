import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VideoItem = ({ video }) => {
  return (
    <View style={styles.container}>
      <View style={styles.thumbnail} />
      <View style={styles.details}>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.channel}>{video.channel}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 100,
    height: 60,
    backgroundColor: '#ddd',
  },
  details: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  channel: {
    fontSize: 14,
    color: '#666',
  },
});

export default VideoItem;
