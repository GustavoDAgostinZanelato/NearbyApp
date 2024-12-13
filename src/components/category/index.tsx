import { s } from "./styles";
import { colors } from "@/styles/theme";
import { Text, Pressable, PressableProps } from "react-native";
import { categoriesIcons } from "@/utils/categories-icons";

type Props = PressableProps & {
    name: string
    iconId: string
    isSelected?: boolean //recebe apenas true or false
}

export function Category({iconId, name, isSelected = false, ...rest}: Props){
    const Icon = categoriesIcons[iconId]

    return ( 
        //TouchableOpacity: apresente feedback visual padrão
        //Pressable: não apresente o feedback por padrão, mas pode ser introduzido

        //Cria a estrutura de cadsa botão (ícone e nome), podendoe ser usado em outras partes do código
        <Pressable style={[s.container, isSelected && s.containerSelected]}{...rest} >
            <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
            <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
        </Pressable>
    )
}