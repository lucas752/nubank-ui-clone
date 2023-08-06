import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';
import { Account } from './components/Account';
import { RoundedOptions } from './components/RoundedOptions';
import { MyCards } from './components/MyCards';
import { ServicesAnnouncements } from './components/ServicesAnnouncements';
import { CreditCard } from './components/CreditCard';
import { Loan } from './components/Loan';
import { PaymentAssistant } from './components/PaymentAssistant';
import { DiscoverMore } from './components/DiscoverMore';

const data = [
  {
    component: <Header/>
  },
  {
    component: <Account/>
  },
  {
    component: <RoundedOptions/>
  },
  {
    component: <MyCards/>
  },
  {
    component: <ServicesAnnouncements/>
  },
  {
    component: <CreditCard/>
  },
  {
    component: <Loan/>
  },
]

export function Home() {
    return (
        <ScrollView style={styles.container}>
          <Header/>
          <Account/>
          <RoundedOptions/>
          <MyCards/>
          <ServicesAnnouncements/>
          <CreditCard/>
          <Loan/>
          <PaymentAssistant/>
          <DiscoverMore/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
});