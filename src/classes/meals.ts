import Ingredient from "./ingredients"
import {v4 as uuidv4} from 'uuid'

class Meal {
    private name_: string = ''
    private ingredients_: Ingredient[] = []
    private calories_ : number = 0
    private id_: string = ''

    constructor(name:string, calories: number){
        this.name_ = name
        this.calories_ = calories
        this.id_ = uuidv4()
    }
    
    public getName() {
        return this.name_
    }

    public getIngredients() {
        return this.ingredients_
    }

    public getId() {
        return this.id_
    }

    public getCalories(){
        return this.calories_
    }
    
    public addIngredient(ingredient : Ingredient){
        this.ingredients_.push(ingredient)
        this.calories_ += ingredient.getCalories()
    }
}

export default Meal