import React from "react"
import Card from "react-bootstrap/Card"

interface IMeal {
    name: string;
    id: number;
}

const mealsEx: IMeal[] =[
    {
        name:"Donuts sucré au sucre",
        id:0
    },{
        name:"Oeuf",
        id:1
    },{
        name:"boo",
        id:2
    }
]

const MealsPage = () => {
    return (
        <div>
            <p>This is the meals page</p>
            <div>
                {mealsEx.map(meal =>{
                    return (<div key={meal.id}>
                        <Card style={{width:'18rem'}}>
                            <Card.Body>
                                <Card.Title>{meal.name}</Card.Title>
                                <Card.Text>blabla</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default MealsPage