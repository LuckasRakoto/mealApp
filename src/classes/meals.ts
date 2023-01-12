//import { ingredient } from "./ingredients"

export class meal{
    name: string
    ingredients:string// ingredient[] = []
    recipe?: string

    constructor(name:string,link:string,ing:string){
        this.name = name
        this.recipe = link
        this.ingredients = ing
    }

    // enumIngredients(){
    //     this.ingredients
    // }
}

