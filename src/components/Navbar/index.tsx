import { ArrowsDownUp, CurrencyDollarSimple, HandbagSimple } from "phosphor-react-native";
import { View, StyleSheet } from "react-native";

export function Navbar() {
    return (
      <View style={styles.navbar}>
        <View style={styles.navbarContent}>
            <View style={styles.navbarContentIconBackground}>
                <ArrowsDownUp color="#848389" weight="bold"/>
            </View>
            <CurrencyDollarSimple color="#b8b6c1" weight="bold"/>
            <HandbagSimple color="#b8b6c1" weight="bold"/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    navbarContent: {
        backgroundColor: '#222222',
        height: 55,
        width: 170,
        opacity: 0.9,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15
    },
    navbarContentIconBackground: {
        backgroundColor: '#591e8c',
        borderRadius: 50,
        height: 50,
        width: 55,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
})