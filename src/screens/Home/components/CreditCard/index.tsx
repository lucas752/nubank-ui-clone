import { CaretRight } from "phosphor-react-native";
import { View, StyleSheet, Text } from "react-native";

export function CreditCard() {
    return (
      <View style={styles.creditCard}>
        <View style={styles.creditCardHeader}>
            <Text style={styles.creditCardHeaderText}>Cartão de crédito</Text>
            <CaretRight color="#FFF" size={17} weight="bold"/>
        </View>
        <View style={styles.creditCardBalance}>
            <Text style={styles.creditCardInvoiceText}>Fatura atual</Text>
            <Text style={styles.creditCardBalanceText}>R$ 282,83</Text>
            <Text style={styles.creditCardLimitText}>Limite disponível de R$ 632,49</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    creditCardHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    creditCard: {
        width: '100%',
        height: 157,
        paddingHorizontal: 15,
        paddingTop: 20,
        gap: 3,
        marginTop: 15,
        borderTopWidth: 3,
        borderColor: '#222222'
    },
    creditCardHeaderText: {
        color: '#FFF',
        fontSize: 19,
        fontWeight: '700',
        marginBottom: 11
    },
    creditCardBalanceText: {
        color: '#FFF',
        fontSize: 19,
        fontWeight: '700',
        marginBottom: 11
    },
    creditCardBalance: {

    },
    creditCardInvoiceText: {
        color: "white",
        fontSize: 17,
        fontWeight: '300',
        marginBottom: 3
    },
    creditCardLimitText: {
        color: "#848389",
        fontWeight: '400',
        fontSize: 15
    }
});