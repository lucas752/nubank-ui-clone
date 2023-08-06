import { View, StyleSheet, Text } from "react-native";

export function Navbar() {
    return (
      <View>
        <View style={styles.navbarContent}>

        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    // navbar: {
    //     height: 50,
    //     width: '100%',
    //     alignItems: 'center',
    //     backgroundColor: "rgba(34, 34, 34, 0)"
    // },
    navbarContent: {
        backgroundColor: '#222222',
        height: 50,
        width: 200,
        opacity: 0.8
    }
});