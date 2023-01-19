import React, { useState } from "react"
import Card from "@mui/material/Card"
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
//import connectToDB from "../mongodb/getMeals";
import getMeal from "../mongodb/getMeal";
import { IMeal } from "../classes/meals";


const mealsEx: IMeal[] =[
    {
        name:"Donuts sucré au sucre",
        id:'0',
        ingredients:'la'
    },{ 
        name:"Oeuf",
        id:'2',
        ingredients:"comment ça"
    },{
        name:"boo",
        id:'2',
        ingredients:'listenbourg'
    }
]

const MealsPage = () => {
    let navigate = useNavigate()

    const [meals, addMeal] = useState<object[]>([])
   
    mealsEx.forEach((meal:IMeal) => {
      getMeal(meal).then((meal_data) => meal_data && addMeal(meals => meals.concat([meal_data]))
      )})

    const routeChange = () =>{ 
        let path = "create"; 
        navigate(path);
      }
      
    
    return (
        <div>
            <p>This is the meals page</p>
            <Button onClick={routeChange}>Add meal</Button>
            <div>
             {mealsEx.map(meal =>{
                return (<div key={meal.id}>
                    <Card variant="outlined" sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h5" component="div" >{meal.name}</Typography>
                            </CardContent>
                    </Card>
                </div>)
             })}
            </div>
        </div>
    )
}

export default MealsPage