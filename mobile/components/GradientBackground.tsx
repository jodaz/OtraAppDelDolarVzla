import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

interface GradientBackgroundProps {
  children: React.ReactNode;
}

export function GradientBackground({ children }: GradientBackgroundProps) {
  return (
    <View style={styles.container}>
      {/* Base solid color */}
      <View style={[StyleSheet.absoluteFill, { backgroundColor: '#178B3E' }]} />
      
      {/* Gradient overlay based on Figma properties */}
      <LinearGradient
        // Using #030705 as the dark color with varying opacities
        colors={[
          'rgba(3, 7, 5, 1)',
          'rgba(3, 7, 5, 0.90)',
          'rgba(3, 7, 5, 0.70)',
          'rgba(3, 7, 5, 0)',
        ]}
        locations={[0, 0.20, 0.7, 1]}
        style={StyleSheet.absoluteFill}
      />
      
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
