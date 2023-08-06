import { CaretRight } from "phosphor-react-native";
import { View, StyleSheet, Text } from "react-native";

export function Loan() {
    return (
      <View style={styles.loan}>
        <View style={styles.loanHeader}>
            <Text style={styles.loanHeaderText}>Empréstimo</Text>
            <CaretRight color="#FFF" size={17} weight="bold"/>
        </View>
        <View style={styles.loanBalance}>
            <Text style={styles.loanLimitText}>Valor disponível de até</Text>
            <Text style={styles.loanLimitTextValue}>R$ 10.000,00</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    loanHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    loan: {
        width: '100%',
        height: 127,
        paddingHorizontal: 15,
        paddingTop: 20,
        gap: 3,
        marginTop: 15,
        borderTopWidth: 3,
        borderColor: '#222222'
    },
    loanHeaderText: {
        color: '#FFF',
        fontSize: 19,
        fontWeight: '700',
        marginBottom: 5
    },
    loanBalance: {

    },
    loanLimitText: {
        color: "#848389",
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 3
    },
    loanLimitTextValue: {
        color: "#848389",
        fontWeight: '500',
        fontSize: 15
    }
});