import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, Stack } from 'expo-router';
import { strategies } from '../constants/tradingData';

// 1. Define what a "Strategy" looks like
interface Strategy {
  id: string;
  title: string;
  difficulty: number;
  description: string;
  color: string;
  fullGuide?: string; // The '?' means it's optional
  proTip?: string;
}

export default function DayTradingScreen() {
  // 2. Add the type definition to the function argument
  // We tell TS: "expect an object that contains an item, and that item is a Strategy"
  const renderStrategy = ({ item }: { item: Strategy }) => (
    /* FIX: Ensure <Link> wraps ONLY the TouchableOpacity.
       Do not put comments directly inside the <Link> tags.
    */
    <Link href={`/strategy/${item.id}` as any} asChild>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <View style={[styles.badge, { backgroundColor: item.color }]}>
              <Text style={styles.badgeText}>Diff: {item.difficulty}/10</Text>
            </View>
          </View>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      {/* This configures the header bar at the top */}
      <Stack.Screen 
        options={{
          title: 'Day Trading 101', 
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: '#000',
        }} 
      />

      <Text style={styles.mainHeader}>Day Trading 101</Text>
      
      <Text style={styles.subText}>
        Select a strategy below to learn more. Start with lower difficulty methods.
      </Text>


      <FlatList
        data={strategies}
        keyExtractor={(item) => item.id}
        renderItem={renderStrategy}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  mainHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});