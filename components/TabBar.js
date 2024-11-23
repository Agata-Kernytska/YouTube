import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // Вибір іконок для вкладок
        let iconName;
        let translatedLabel; // Перекладена назва вкладки
        switch (route.name) {
          case 'Home':
            iconName = isFocused ? 'home' : 'home-outline';
            translatedLabel = 'Головна';
            break;
          case 'Trending':
            iconName = isFocused ? 'flame' : 'flame-outline';
            translatedLabel = 'Популярне';
            break;
          case 'Subscriptions':
            iconName = isFocused ? 'albums' : 'albums-outline';
            translatedLabel = 'Підписки';
            break;
          case 'Library':
            iconName = isFocused ? 'library' : 'library-outline';
            translatedLabel = 'Бібліотека';
            break;
          case 'Profile':
            iconName = isFocused ? 'person' : 'person-outline';
            translatedLabel = 'Профіль';
            break;
          default:
            iconName = 'ellipse-outline';
            translatedLabel = label;
        }

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}
          >
            <Ionicons name={iconName} size={24} color={isFocused ? 'red' : 'gray'} />
            <Text style={{ color: isFocused ? 'red' : 'gray', fontSize: 12 }}>
              {translatedLabel}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabBar;
