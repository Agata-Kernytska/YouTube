import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; // Використовуємо SafeAreaProvider
import HomeScreen from './screens/HomeScreen';
import TrendingScreen from './screens/TrendingScreen';
import SubscriptionsScreen from './screens/SubscriptionsScreen';
import LibraryScreen from './screens/LibraryScreen';
import ProfileScreen from './screens/ProfileScreen';
import TabBar from './components/TabBar'; // Імпорт кастомного TabBar

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider> {/* Додаємо SafeAreaProvider */}
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false, // Вимикаємо стандартний заголовок
            }}
            tabBar={(props) => <TabBar {...props} />} // Підключення кастомного TabBar
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Trending" component={TrendingScreen} />
            <Tab.Screen name="Subscriptions" component={SubscriptionsScreen} />
            <Tab.Screen name="Library" component={LibraryScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    фbackgroundColor: '#fff',
  },
});

export default App;
