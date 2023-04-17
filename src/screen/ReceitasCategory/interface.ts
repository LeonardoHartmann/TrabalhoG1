import { RouteProp } from "@react-navigation/native"
import { Category } from "../../data/model"
import { CategoriaDeParametrosNavigator } from "../../navigation/app/interface"

export type CategoriaParametrosTela = {
    category: Category,
}

export type CategoryReceitaRouteProp = RouteProp<CategoriaDeParametrosNavigator, 'Categories'>

//estamos setando