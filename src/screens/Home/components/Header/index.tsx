import { ImageSquare, Eye, EyeClosed, Question, User } from 'phosphor-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export function Header() {
    return (
      <View style={styles.header}>
        <View style={styles.headerFirstLine}>
            <View style={styles.headerFirstLineProfile}>
                <ImageSquare color='white' size={26} weight='regular'/>
            </View>
            <View style={styles.headerFirstLineIcons}>
                <Eye color='white' size={25} weight='regular'/>
                <Question color='white' size={25} weight='regular'/>
                <AntDesign name="adduser" size={22} color="white"/>
            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#591e8c',
        height: 150,
        width: '100%'
    },
    headerFirstLineProfile: {
        backgroundColor: '#8131c4',
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerFirstLine: {
        marginTop: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    headerFirstLineIcons: {
        flexDirection: 'row',
        gap: 13
    }
});