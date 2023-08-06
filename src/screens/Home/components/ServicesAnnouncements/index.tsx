import { ArrowDown, ArrowUp, CaretRight, DiamondsFour, Shield, Wallet } from "phosphor-react-native";
import { View, StyleSheet, Text, FlatList } from "react-native";
import  stylesServices from "./styles"

const data = [
    {
        id: Math.random().toString(36).substring(2,27),
        text: <Text style={stylesServices.text}>Você tem até <Text style={stylesServices.purpleText}>R$ 10.000,00</Text> disponíveis para ...</Text>,
    },
    {
        id: Math.random().toString(36).substring(2,27),
        text: <Text style={stylesServices.text}>Chegou a hora! Escola o que fazer com o seu <Text style={stylesServices.purpleText}>BDR d...</Text></Text>,
    },
    {
        id: Math.random().toString(36).substring(2,27),
        text: <Text style={stylesServices.purpleText}>Convide amigos para o Nubank <Text style={stylesServices.text}>e desbloqueie ...</Text></Text>,
    },
]

export function ServicesAnnouncements() {
    return (
      <View style={stylesServices.serviceContainer}>
        <FlatList data={data} horizontal={true} keyExtractor={item => item.id} renderItem={item => (
            <View style={stylesServices.servicesBackground}>
                {item.item.text}
            </View>
        )}>

        </FlatList>
      </View>
    );
}
