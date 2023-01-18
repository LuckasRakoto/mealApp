import React from "react"
import Card from "@mui/material/Card"
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
//import connectToDB from "../mongodb/getMeals";

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