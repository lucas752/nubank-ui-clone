import { CreditCard } from "phosphor-react-native";
import { View, StyleSheet, Text } from "react-native";

export function MyCards() {
    return (
      <View style={styles.myCards}>
        <View style={styles.myCardsContainer}>
            <CreditCard color="white"/>
            <Text style={styles.myCardsTexts}>Meus cartões</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    myCards: {
        width: '100%',
        height: 50,
        paddingHorizontal: 15,
        marginTop: 18
    },
    myCardsTexts: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15,
        marginLeft: 15
    },
    myCardsContainer: {
        height: '100%',
        backgroundColor: '#222222',
        flexDirection: 'row',
        borderRadius: 7,
        alignItems: 'center',
        paddingLeft: 15
    }
});