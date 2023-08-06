import { StyleSheet } from "react-native";

const stylesServices = StyleSheet.create({
    discoverMore: {
        height: 300,
        paddingHorizontal: 15,
        paddingTop: 20,
        gap: 3,
        borderTopWidth: 3,
        borderColor: '#222222',
    },
    discoverMoreBackground: {
        backgroundColor: '#222222',
        height: 180,
        width: 220,
        marginRight: 15,
        borderRadius: 7,
        paddingHorizontal: 15,
        paddingVertical: 15,
        justifyContent: 'space-between',
    },
    discoverMoreHeader: {
        color: '#FFF',
        fontSize: 19,
        fontWeight: '700',
        marginBottom: 10,
    },
    discoverMoreBackgroundTexts: {
        
    },
    discoverMoreBackgroundTextsTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8

    },
    discoverMoreBackgroundTextsSubtitle: {
        color: "#848389",
        fontSize: 15,
    },
    discoverMoreBackgroundButton:{
        backgroundColor: '#591e8c',
        paddingHorizontal: 15,
        paddingVertical: 7,
        width: 137,
        borderRadius: 50,
        alignItems: 'center'
    },
    discoverMoreBackgroundButtonText:{
        color: 'white',
        fontWeight: '700'
    }

});

export default stylesServices;