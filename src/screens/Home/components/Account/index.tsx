import { CaretRight } from "phosphor-react-native";
import { View, StyleSheet, Text } from "react-native";

export function Account() {
    return (
      <View style={styles.account}>
        <View style={styles.accountHeader}>
            <Text style={styles.accountHeaderText}>Conta</Text>
            <CaretRight color="#FFF" size={17} weight="bold"/>
        </View>
        <View style={styles.accountBalance}>
            <Text style={styles.accountBalanceText}>R$ 1,38</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    accountHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    account: {
        width: '100%',
        height: 80,
        paddingHorizontal: 15,
        gap: 3,
        marginTop: 15
    },
    accountHeaderText: {
        color: '#FFF',
        fontSize: 19,
        fontWeight: '700'
    },
    accountBalanceText: {
        color: '#FFF',
        fontSize: 19,
        fontWeight: '700'
    },
    accountBalance: {

    }
});