import { s } from "./styles";
import { colors } from "@/styles/colors";
import { ActivityIndicator } from "react-native";

export function Loading() {
    return(
        //Ícone rodando para representar o carregamento
        <ActivityIndicator color={colors.green.base} style={s.container} />
    )
}
