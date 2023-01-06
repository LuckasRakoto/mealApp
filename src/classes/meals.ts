import { ingredient } from "./ingredients"

export class meal{
    name: string
    ingredients: ingredient[] = []
    recipe?: string

    constructor(name:string,link:string){
        this.name = name
        this.recipe = link
    }
}

