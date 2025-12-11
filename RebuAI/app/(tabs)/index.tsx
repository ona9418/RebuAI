import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; // <--- Import Link

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to RebuAI</Text>
      
      {/* This is the button to your new page */}
      <Link href="/daytrading" style={styles.button}>
        <Text style={styles.buttonText}>Go to Day Trading 101 →</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});