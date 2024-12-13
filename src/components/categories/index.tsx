import { s } from "./styles"
import { Category } from "../category";
import { FlatList } from "react-native";

export type CategoriesProps = {
    id: string
    name: string
}[]

type Props = {
    data: CategoriesProps
    selected: string
    onSelect: (id: string) => void
}

export function Categories({ data, selected, onSelect }: Props) {
    //data: todas as informações referente a tabela "categories"
    //selected: possui data[0] como padrão -> primeira categoria
    //onSelected: recebe as outras cetegorias que o user vai selecionar

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Category 
                    name={item.name} 
                    iconId={item.id} 
                    onPress={() => onSelect(item.id)} 
                    isSelected={item.id === selected}
                />
            )}
            horizontal //renderiza cada item um ao lado do outro
            contentContainerStyle={s.content}
            showsHorizontalScrollIndicator = {false} //Remove a barra de navegação
         />
    )
}