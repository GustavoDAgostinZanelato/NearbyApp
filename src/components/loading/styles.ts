import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const s = StyleSheet.create({
    //Definição do estilo que será aplicado no ícone de Loading
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray[100],
    }
})