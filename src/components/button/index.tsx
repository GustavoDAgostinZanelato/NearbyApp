import { TouchableOpacity, TouchableOpacityProps, Text, TextProps, ActivityIndicator } from "react-native";
import { colors } from "@/styles/theme";
import { s } from  "./styles";
import { IconProps as TablerIconProps} from "@tabler/icons-react-native"

type ButtonProps = TouchableOpacityProps & {
    isLoading?:boolean
}

//Defininado a função Button
function Button({ children, style, isLoading = false, ...rest }: ButtonProps){ //Com a definição do "style" é possivel modificar o design em qualquer tela
    return(
        <TouchableOpacity 
            style={[s.container, style]} 
            activeOpacity={0.5} 
            disabled={isLoading} 
            {...rest}
        >
            {isLoading ? (
                <ActivityIndicator size="small" color={colors.gray[100]}  />
            ) : (
                children
            )}
        </TouchableOpacity>
    )
}

//Definindo a função Title
function Title({children}: TextProps){
    return(
        <Text style={s.title}>{children}</Text>
    )
}

type IconProps = {
    icon: React.ComponentType<TablerIconProps>
}
function Icon({ icon: Icon }: IconProps){
    return  <Icon size={24} color={colors.gray[100]} />
}

Button.title = Title //Exportação da função Title
Button.icon = Icon
export { Button }    //Exportação da função Button

//A função Title recebe um children, que é o nome atribuído ao botão.
//Title é passado como children para a função Button.
//"Button.title = Title" é a exportação da função Title como children de Button, que nesta linha foi renomeado para "Button.title".
//Assim é possivel exportar em outras partes do código as funções <Button /> e <Button.title />