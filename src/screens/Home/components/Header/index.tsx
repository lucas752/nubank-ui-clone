import { ImageSquare, Eye, EyeClosed, Question, User } from 'phosphor-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export function Header() {
    return (
      <View style={styles.header}>
        <View style={styles.headerFirstLine}>
            <View style={styles.headerFirstLineProfile}>
                <ImageSquare color='white' size={25} weight='regular'/>
            </View>
            <View style={styles.headerFirstLineIcons}>
                <Eye color='white' size={25} weight='regular'/>
                <Question color='white' size={25} weight='regular'/>
                <AntDesign name="adduser" size={22} color="white"/>
            </View>
        </View>
        <View style={styles.headerSecondLine}>
            <Text style={styles.headerSecondLineText}>Olá, Lucas Monteiro</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#591e8c',
        height: 170,
        width: '100%',
        justifyContent: 'space-between'
    },
    headerFirstLineProfile: {
        backgroundColor: '#8131c4',
        width: 45,
        height: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerFirstLine: {
        marginTop: 45,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    headerFirstLineIcons: {
        flexDirection: 'row',
        gap: 13
    },
    headerSecondLineText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18
    },
    headerSecondLine: {
        marginBottom: 22,
        marginLeft: 15
    }
});