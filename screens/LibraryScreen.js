import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const playlists = [
  { id: '1', name: 'Улюблені', videos: 28 },
  { id: '2', name: 'Illustrator', videos: 18 },
  { id: '3', name: 'Відео, які сподобалися', videos: 478 },
  { id: '4', name: 'Photoshop - ретушування зображень', videos: 6 },
];

const LibraryScreen = () => {
  return (
    <View style={styles.container}>
      {/* Розділ Історія, Мої відео */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.row}>
          <Ionicons name="time-outline" size={24} color="#555" />
          <Text style={styles.rowText}>Історія</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Ionicons name="videocam-outline" size={24} color="#555" />
          <Text style={styles.rowText}>Мої відео</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Ionicons name="bookmark-outline" size={24} color="#555" />
          <Text style={styles.rowText}>Дивитися пізніше</Text>
        </TouchableOpacity>
      </View>

      {/* Розділ Доступно офлайн */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Доступно офлайн</Text>
        <View style={styles.row}>
          <Ionicons name="cloud-offline-outline" size={24} color="#555" />
          <Text style={styles.rowText}>0 відео</Text>
        </View>
      </View>

      {/* Розділ Плейлисти */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Плейлисти (А-Я)</Text>
        <FlatList
          data={playlists}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.playlist}>
              <View style={styles.playlistDetails}>
                <Ionicons name="list-outline" size={24} color="#555" />
                <View style={styles.playlistTextContainer}>
                  <Text style={styles.playlistName}>{item.name}</Text>
                  <Text style={styles.playlistVideos}>{item.videos} відео</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward-outline" size={24} color="#ccc" />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  rowText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
  playlist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  playlistDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playlistTextContainer: {
    marginLeft: 10,
  },
  playlistName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  playlistVideos: {
    fontSize: 14,
    color: '#888',
  },
});

export default LibraryScreen;
