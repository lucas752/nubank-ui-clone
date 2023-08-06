import { ArrowDown, ArrowUp, CaretRight, DiamondsFour, Shield, Wallet } from "phosphor-react-native";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const data = [
    {
        id: Math.random().toString(36).substring(2,27),
        icon: <DiamondsFour size={25} color="white" />,
        subtitle: 'Área Pix'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        icon: <ArrowUp size={25} color="white"/>,
        subtitle: 'Transferir e pagar'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        icon: <FontAwesome5 name="hand-holding-usd" size={20} color="white" />,
        subtitle: 'Pegar emprestad'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        icon: <ArrowDown size={25} color="white" />,
        subtitle: 'Depositar e cobrar'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        icon: <Wallet size={25} color="white" />,
        subtitle: 'Caixinhas e investir'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        icon: <Shield size={25} color="white" />,
        subtitle: 'Proteção'
    },
]

export function RoundedOptions() {
    return (
      <View style={styles.roundedOptions}>
        <FlatList data={data} horizontal={true} keyExtractor={item => item.id} renderItem={item => (
            <View style={styles.roundedOptionsBackground}>
                <View style={styles.roundedOptionIcons}>
                    {item.item.icon}
                </View>
                <Text style={styles.roundedOptionIconsText}>{item.item.subtitle}</Text>
            </View>
        )}>
        </FlatList>
      </View>
    );
}

const styles = StyleSheet.create({
    roundedOptions: {
        width: '100%',
        marginLeft: 14,
    },
    roundedOptionIcons: {
        backgroundColor: '#222222',
        borderRadius: 50,
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    roundedOptionsBackground: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 116,
        width: 70,
        textAlign: 'center',
        marginRight: 15
    },
    roundedOptionIconsText: {
        marginTop: 5,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 14
    },

});