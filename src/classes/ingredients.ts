import {v4 as uuidv4} from 'uuid'

class Ingredient {
    private name_: string = ''
    private calories_: number = 0
    private id_ : string = ''
    
    constructor(name:string, calories: number) {
        this.name_ = name
        this.calories_ = calories
        this.id_ = uuidv4()
    }

    public getName(){
        return this.name_
    }

    public getCalories(){ 
        return this.calories_
    }
}

export default Ingredient