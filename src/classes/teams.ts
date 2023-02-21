import Meal from "./meals"
import {v4 as uuidv4} from 'uuid'

class Team{
    private id_:string = ''
    private members_: string[] = []
    private name_: string = ''
    private meals_: Meal[] = []

    constructor(name:string){
        this.name_ = name
        this.id_ = uuidv4()
    }

    public getMembers() {
        return this.members_
    }

    public getName() {
        return this.name_
    }

    public getId() {
        return this.id_
    }

    public getMeals() {
        return this.meals_
    }

    public addMember(userId : string) {
        this.members_.push(userId)
    }
}

export default Team