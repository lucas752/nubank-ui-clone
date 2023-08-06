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
import { Navbar } from './components/Navbar';

export function Home() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
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
        <View style={styles.navbarContainer}>
          <Navbar/>
        </View >
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    scrollContainer: {
      flex: 1,
    },
    navbarContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
});