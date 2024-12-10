//Esse arquivo é renderizado antes do index.tsx devido a cláusula "_" no nome. 
//Ele apresente algumas configurações básica para a tela index, como as fontes do app e a cor do fundo

import { Stack } from "expo-router"; //Stack navigation do React Native
import { colors } from "@/styles/theme";
import { Loading } from "@/components/loading";
import { useFonts, Rubik_600SemiBold, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold } from "@expo-google-fonts/rubik";

export default function Layout() {
    //Colocando as fontes do projeto em uma constante que será verificada posteriormente
    const [fontsLoaded] = useFonts({
        Rubik_600SemiBold, 
        Rubik_400Regular,
        Rubik_500Medium, 
        Rubik_700Bold
    })

    //Caso a fonte ainda não esteja carregada, o componente Loading é chamado 
    if(!fontsLoaded) { 
        return <Loading />
    }

    return(
        <Stack 
            screenOptions={{ headerShown : false, contentStyle: { backgroundColor: colors.gray[100]}}}
            //"headerShown: false" serve para remover o cabeçalho que aparece ao definir uma navegação
        />
    );
}