import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router'; // Import hooks
import { strategies } from '../../constants/tradingData'; // Import data

export default function StrategyDetailScreen() {
  // 1. Get the ID passed from the previous screen
  const { id } = useLocalSearchParams();

  // 2. Find the specific strategy in our data array
  const strategy = strategies.find((s) => s.id === id);

  // Safety check: If ID is wrong or data missing
  if (!strategy) {
    return (
      <View style={styles.container}>
        <Text>Strategy not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Update the top header title dynamically */}
      <Stack.Screen options={{ title: strategy.title }} />

      <View style={[styles.banner, { backgroundColor: strategy.color }]}>
        <Text style={styles.bannerText}>Difficulty: {strategy.difficulty}/10</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.header}>What is {strategy.title}?</Text>
        <Text style={styles.bodyText}>{strategy.fullGuide}</Text>

        <View style={styles.tipBox}>
          <Text style={styles.tipTitle}>💡 Pro Tip:</Text>
          <Text style={styles.tipText}>{strategy.proTip}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  banner: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: { padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  bodyText: { fontSize: 16, lineHeight: 24, color: '#333', marginBottom: 20 },
  tipBox: {
    backgroundColor: '#FFF8E1', // Light yellow for tips
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#FFC107',
  },
  tipTitle: { fontWeight: 'bold', marginBottom: 5, fontSize: 16 },
  tipText: { fontSize: 15, color: '#555' },
});