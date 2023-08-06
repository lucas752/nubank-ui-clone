import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';
import { Account } from './components/Account';
import { RoundedOptions } from './components/RoundedOptions';
import { MyCards } from './components/MyCards';
import { ServicesAnnouncements } from './components/ServicesAnnouncements';

export function Home() {
    return (
      <View style={styles.container}>
        <Header/>
        <Account/>
        <RoundedOptions/>
        <MyCards/>
        <ServicesAnnouncements/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
    },
});