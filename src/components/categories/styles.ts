import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        maxHeight: 36,
        position: "absolute",
        zIndex: 1, //garante que o conteúdo fica a frente de qualquer outro elemento
        top: 64,
    },
    content: {
        gap: 8,
        paddingHorizontal: 24,
    },
})