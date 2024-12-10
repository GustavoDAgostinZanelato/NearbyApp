import { s } from "./styles";
import { colors } from "@/styles/theme";
import { Text, View } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

type Props = {
    title: string
    description: string
    icon: React.ComponentType<IconProps>
}

export function Step({title, description, icon: Icon}: Props){
    return(

        //Define a estrutura dos textos que irão aparecer na tela
       <View style={s.Conteiner}>
            {/* O ícone é cerregado caso ele esteja presente */}
            {Icon && 
                <Icon size={32} color={colors.red.base} />
            }
            <View style={s.details}>
                <Text style={s.title} >{title}</Text>
                <Text style={s.description}>{description}</Text>
            </View>

       </View> 
    )
}

