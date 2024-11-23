import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Аватар та ім'я профілю */}
      <View style={styles.profileInfo}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Можна замінити на URL аватара
          style={styles.avatar}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.name}>Іван Іваненко</Text>
          <Text style={styles.email}>ivanivanenko@gmail.com</Text>
        </View>
      </View>

      {/* Список налаштувань */}
      <View style={styles.settingsList}>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Налаштування акаунту</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Конфіденційність</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Сповіщення</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Допомога і підтримка</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={[styles.settingText, styles.logoutText]}>Вийти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
  },
  profileDetails: {
    marginLeft: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  settingsList: {
    marginTop: 20,
  },
  settingItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  logoutText: {
    color: '#e53935',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
