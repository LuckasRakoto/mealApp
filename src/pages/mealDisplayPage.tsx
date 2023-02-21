import React, { useState } from "react"
// import Card from "@mui/material/Card"
// //import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import { Button, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// //import connectToDB from "../mongodb/getMeals";
// import getMeal from "../mongodb/getMeal";
// import Meal from "../classes/meals";

const MealPage = () => {
    return (
        <div><p>This is the meals page</p></div>
    )
}

export default MealPage
// // const mealsEx: Meal[] =[
// //     {
// //         name:"Donuts sucré au sucre",
// //         id:'0',
// //         ingredients:'la'
// //     },{ 
// //         name:"Oeuf",
// //         id:'2',
// //         ingredients:"comment ça"
// //     },{
// //         name:"boo",
// //         id:'2',
// //         ingredients:'listenbourg'
// //     }
// // ]

// const MealsPage = () => {
//     let navigate = useNavigate()

//     const [meals, addMeal] = useState<object[]>([])
   
//     mealsEx.forEach(async (meal:IMeal) => {
//         // {getMeal(meal.name).then( (meal_data) => meal_data && addMeal(meals => meals.concat([meal_data])))}})
//         let objectReceived = await getMeal(meal.name)
//         if (!objectReceived) return
//         let mealll:IMeal = {
//             id:objectReceived.id,
//             name:objectReceived.name,
//             recipe:objectReceived.recipe,
//             ingredients:objectReceived.ingredients,
//         }
//         addMeal(meals => meals.concat([mealll]))
//         // then((meal_data:) => {
//         //     if (meal_data) {
//         //         let meal: IMeal = {
//         //             name: meal_data.name,
//         //             id: meal_data.id,
//         //             ingredients: meal_data.ingredients
//         //         }
//         //     }
//         })
//     //  )})


//     const routeChange = () =>{ 
//         let path = "create"; 
//         navigate(path);
//       }
      
    
//     return (
//         <div>
//             <p>This is the meals page</p>
//             <Button onClick={routeChange}>Add meal</Button>
//             <div>
//              {meals.map(meal => {
//                 return (<div key={meal.id}>
//                     <Card variant="outlined" sx={{ minWidth: 275 }}>
//                         <CardContent>
//                             <Typography variant="h5" component="div" >{meal.name}</Typography>
//                             </CardContent>
//                     </Card>
//                 </div>)
//              })}
//             </div>
//         </div>
//     )
// }

// export default MealsPage