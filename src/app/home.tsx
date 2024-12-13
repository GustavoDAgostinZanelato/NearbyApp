import { api } from "@/api/api";
import { View, Alert }  from "react-native";
import { useEffect, useState } from "react";
import { Places } from "@/components/places";
import { PlaceProps } from "@/components/place";
import { Categories, CategoriesProps } from "@/components/categories";
import { colors } from "@/styles/colors";

type MarketsProps = PlaceProps

export default function Home() {
    const [category, setCategory] = useState(""); //aspas vazias pois um conteúdo será inferido em category
    const [categories, setCategories] = useState<CategoriesProps>([]);
    const [markets, setMarkets] = useState<MarketsProps[]>([]);

    //Pega os dados das categorias cadastradas no BD
    async function fetchCategories() {
        try {
            const { data } = await api.get("/categories") 
            setCategories(data)
            setCategory(data[0].id) //a primeira categoria virá selecionada por padrão
        } catch (error) {
            console.log(error)
            Alert.alert("Categorias", "Não foi possível carregar as categorias")
        } 
    }

    //Pega os dados dos locais cadastradas no BD dependendo da category selecionada
    async function fetchMarkets() {
        try{
            if (!category) {
                return
            }
            const {data} = await api.get("/markets/category/" + category)
            setMarkets(data)

        } catch(error) {
            console.log(error)
            Alert.alert("Locais", "Não foi possível carregar os locais.")
        }
    }
    
    //Chama a função fetchCategories ao carregar a página
    useEffect(() => {
        fetchCategories()
    }, []);

    //Chama a função fetchMarkets ao carregar a página
    useEffect(() => {
        fetchMarkets()
    }, [category]);

    return(
        <View style={{flex: 1, backgroundColor: "#CECECE"}}>
            <Categories data={categories} onSelect={setCategory} selected={category}  />
            <Places data={markets} />
        </View>
    )
}
