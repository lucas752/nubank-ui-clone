import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';
import { Account } from './components/Account';
import { RoundedOptions } from './components/RoundedOptions';

export function Home() {
    return (
      <View style={styles.container}>
        <Header/>
        <Account/>
        <RoundedOptions/>
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