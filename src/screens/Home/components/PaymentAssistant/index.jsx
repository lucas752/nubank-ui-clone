import { ArrowClockwise } from "phosphor-react-native";
import { View, StyleSheet, Text } from "react-native";

export function PaymentAssistant() {
    return (
      <View style={styles.paymentAssistant}>
        <View style={styles.paymentAssistantHeader}>
            <Text style={styles.paymentAssistantHeaderText}>Acompanhe também</Text>
        </View>
        <View style={styles.paymentAssistantButton}>
            <View style={styles.paymentAssistantButtonLeft}>
                <ArrowClockwise color="white" size={25}/>
                <Text style={styles.paymentAssistantButtonText}>Assistente de pagamentos</Text>
            </View>
            <View style={styles.paymentAssistantButtonNew}>
                <Text style={styles.paymentAssistantButtonNewText}>Novo</Text>                
            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    paymentAssistantHeader: {
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 6
    },
    paymentAssistant: {
        width: '100%',
        height: 150,
        paddingHorizontal: 15,
        paddingTop: 20,
        gap: 3,
        borderTopWidth: 3,
        borderColor: '#222222',
    },
    paymentAssistantHeaderText: {
        color: '#FFF',
        fontSize: 19,
        fontWeight: '700',
        marginBottom: 5
    },
    paymentAssistantButton: {
        backgroundColor: '#222222',
        height: 70,
        width: '100%',
        flexDirection: 'row',
        borderRadius: 7,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    paymentAssistantButtonText: {
        color: 'white',
        fontSize: 15,
        width: 100,
        fontWeight: '500',
        marginLeft: 13
    },
    paymentAssistantButtonNew: {
        backgroundColor: '#830AD1',
        borderRadius: 7,
        width: 45,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    paymentAssistantButtonNewText: {
        color: 'white',
        fontWeight: '600'
    },
    paymentAssistantButtonLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});