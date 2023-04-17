import { NativeStackNavigationProp } from "@react-navigation/native-stack"


import { List } from "../../data/model"
import { CategoryReceitasScreenParams } from "../../screen/ReceitasList"

export type CategoriaDeParametrosNavigator = {
    List: undefined,
    Details: CategoryReceitasScreenParams,
    Categories: undefined,
}

export type AppNavigatorProps = NativeStackNavigationProp<CategoriaDeParametrosNavigator>

//aqui irá sera setado todas as interfaces de todas as screens