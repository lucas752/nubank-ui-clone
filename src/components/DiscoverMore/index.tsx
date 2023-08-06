import { View, Text, FlatList } from "react-native";
import  stylesServices from "./styles"

const data = [
    {
        id: Math.random().toString(36).substring(2,27),
        title: 'Nu Limite Garantido',
        subtitle: 'Seu dinheiro vira mais limite rendendo a 100% do CDI',
        buttonText: 'Aumentar Limite'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        title: 'Nubank Celular Seguro',
        subtitle: '100% cobertura, 0% estresse. Simule agora ...',
        buttonText: 'Conhecer'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        title: 'Indique o Nu para amigos',
        subtitle: 'Espalhe como é simples estar no controle.',
        buttonText: 'Indicar amigos'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        title: 'Portabilidade de salário',
        subtitle: 'Liberdade é escolher onde receber o seu dinheiro.',
        buttonText: 'Conhecer'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        title: 'WhatsApp',
        subtitle: 'Pagamentos seguros, rápidos e sem tarifa. A ...',
        buttonText: 'Quero conhecer'
    },
    {
        id: Math.random().toString(36).substring(2,27),
        title: 'Termos de uso',
        subtitle: 'explicamos o que diz esse documento do Nubank',
        buttonText: 'Conhecer'
    },
    
]

export function DiscoverMore() {
    return (
      <View style={stylesServices.discoverMore}>
        <Text style={stylesServices.discoverMoreHeader}>Descubra mais</Text>
        <FlatList data={data} horizontal={true} keyExtractor={item => item.id} renderItem={item => (
            <View style={stylesServices.discoverMoreBackground}>
                <View style={stylesServices.discoverMoreBackgroundTexts}>
                    <Text style={stylesServices.discoverMoreBackgroundTextsTitle}>{item.item.title}</Text>
                    <Text style={stylesServices.discoverMoreBackgroundTextsSubtitle}>{item.item.subtitle}</Text>
                </View>
                <View style={stylesServices.discoverMoreBackgroundButton}>
                    <Text style={stylesServices.discoverMoreBackgroundButtonText}>{item.item.buttonText}</Text>
                </View>
            </View>
        )}>

        </FlatList>
      </View>
    );
}
