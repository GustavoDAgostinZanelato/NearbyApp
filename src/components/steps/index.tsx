import { s } from "./styles";
import { Step } from "../step"; //Pegando a estrutura definida no step
import { View, Text } from "react-native";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

export function Steps() { //Passando diferente valores de title, description e icon via props, reaproveitando o componente
    return(
        <View style={s.container}>
            <Text style={s.title}>Veja como funciona: </Text>
            <Step 
                title="Encontre Estabelecimentos" 
                description="Veja locias perto de você que são parceiros Nearby"
                icon={IconMapPin}
            />
            <Step 
                title="Ativo cupons com o QR Code" 
                description="Escaneie o código no estabelecimento para usar o benefício"
                icon={IconQrcode}
            />
            <Step 
                title="Garanta vantagens perto de você" 
                description="Ative cupons onde estiver, em diferentes tipos de estabelecimentos"
                icon={IconTicket}
            />
        </View>
    )
}