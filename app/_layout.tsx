import { Drawer } from 'expo-router/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="certifications"
          options={{
            drawerLabel: 'Certifications',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="document-attach-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="projects"
          options={{
            drawerLabel: 'Projects',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="bookmark-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </SafeAreaProvider>
  );
}