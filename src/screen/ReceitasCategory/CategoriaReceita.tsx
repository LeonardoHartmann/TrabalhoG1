import { useRoute } from "@react-navigation/native"
import { CategoriaParametrosTela } from "./interface"
import { Button, Image, Linking, View } from "react-native"

const CategoriaReceitas = () => {
    const {params: {category}} = useRoute<CategoriaParametrosTela>()
    
    const openCategory = () => {
        Linking.openURL(category.str)
    }

    return (
        <View>
            <View>
                {
                    category.strCategoryThumb ? 
                        <Image source={{uri: category.strCategoryThumb}}/>
                    :null
                }
            </View>

            <Button onPress={openCategory} title="Abrir Categoria"/>
        </View>
    )
}

export default CategoriaReceitas