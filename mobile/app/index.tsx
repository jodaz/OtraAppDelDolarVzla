import { View, ScrollView, SafeAreaView, StatusBar, StyleSheet, ActivityIndicator, Image, Platform, useWindowDimensions } from 'react-native';
import { Text } from '@/components/Themed';
import React from 'react';
import { useExchangeRates } from '@/hooks/use-exchange-rates';
import { RatesCard } from '@/components/RatesCard';
import { TopHeader } from '@/components/TopHeader';
import { CreditsFooter } from '@/components/CreditsFooter';
import { GradientBackground } from '@/components/GradientBackground';

export default function TasasScreen() {
  const { data, isLoading: loading } = useExchangeRates();
  const { width } = useWindowDimensions();
  const isDesktop = Platform.OS === 'web' && width > 768;

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#14b8a6" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <GradientBackground>
        <StatusBar barStyle="light-content" />

        {/* Dynamic background particles (simulated) */}
        <View style={[styles.particle, { top: 80, left: 40, width: 8, height: 8, backgroundColor: '#14b8a6', opacity: 0.4 }]} />
        <View style={[styles.particle, { top: 160, right: 80, width: 12, height: 12, backgroundColor: '#a855f7', opacity: 0.3 }]} />
        <View style={[styles.particle, { bottom: 240, left: '25%', width: 8, height: 8, backgroundColor: '#2dd4bf', opacity: 0.2 }]} />
        <View style={[styles.particle, { top: '50%', right: 40, width: 8, height: 8, backgroundColor: '#c084fc', opacity: 0.25 }]} />
        <View style={[styles.particle, { top: '75%', left: 40, width: 4, height: 4, backgroundColor: '#5eead4', opacity: 0.5 }]} />

        <TopHeader />

        <ScrollView contentContainerStyle={[styles.scrollContent, isDesktop && styles.desktopScrollContent]}>
          {/* Rates Card Component */}
          <View style={isDesktop ? styles.desktopCardContainer : styles.mobileCardContainer}>
            <RatesCard data={data} />
          </View>

          <View style={styles.footerButtonContainer}>
            <CreditsFooter />
          </View>
        </ScrollView>
      </GradientBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  particle: {
    position: 'absolute',
    borderRadius: 9999,
  },
  scrollContent: {
    paddingTop: 20,
    alignItems: 'center',
    paddingBottom: 40,
    flexGrow: 1,
  },
  desktopScrollContent: {
    justifyContent: 'center',
    paddingTop: 40,
  },
  desktopCardContainer: {
    width: '100%',
    maxWidth: 600,
  },
  mobileCardContainer: {
    width: '100%',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 20,
  },
  headerTitleRow: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 4,
  },
  headerIcon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    color: '#F1C40F',
    fontSize: 18,
  },
  footerButtonContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  footerButtonText: {
     display: 'none',
  }
});

