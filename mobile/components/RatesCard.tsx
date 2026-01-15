import { View, Text, StyleSheet, Image } from 'react-native';
import { DollarSign, Euro } from 'lucide-react-native';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ExchangeData } from '../stores/exchange-store';

import { formatNumber } from '../utils/format';

interface RatesCardProps {
  data: ExchangeData | undefined;
}

export function RatesCard({ data }: RatesCardProps) {
  const formattedDate = data?.lastUpdate
    ? format(new Date(data.lastUpdate), "dd/MM/yy hh:mm:ss a", { locale: es })
    : '';

  const getCurrencyIcon = (label: string) => {
    const lowerLabel = label.toLowerCase();
    switch (true) {
      case lowerLabel.includes('usdt'):
        return <Image source={require('../assets/images/logos/usdt.png')} style={{ width: 24, height: 24 }} />;
      case lowerLabel.includes('euro'):
      case lowerLabel.includes('eur'):
        return <Euro size={24} color="#14b8a6" />;
      default:
        return <DollarSign size={24} color="#14b8a6" />;
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Tasas del día</Text>

      <View style={styles.ratesList}>
        {data?.rates.map((rate) => (
          <View key={rate.id} style={styles.rateItem}>
            <View style={styles.rateLabelContainer}>
              <View style={styles.iconContainer}>
                {getCurrencyIcon(rate.label)}
              </View>
              <Text style={styles.rateLabel}>{rate.label}</Text>
            </View>
            <View style={styles.rateValueContainer}>
              <Text style={styles.rateValueText}>{formatNumber(rate.value)}</Text>
              <Text style={styles.rateCurrency}>{rate.currency}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.updateText}>
          Última actualización: {formattedDate}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#1c1c1e',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: '#2c2c2e',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  ratesList: {
    gap: 16,
  },
  rateItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#262628',
    borderWidth: 1,
    borderColor: '#333335',
  },
  rateLabel: {
    color: '#9ca3af',
    fontSize: 18,
    fontWeight: '500',
  },
  rateLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(20, 184, 166, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rateValueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  rateValueText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 4,
  },
  rateCurrency: {
    color: '#9ca3af',
    fontSize: 18,
  },
  footer: {
    marginTop: 32,
    alignItems: 'center',
  },
  updateText: {
    color: '#6b7280',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});
