import React from 'react'
import { meal } from '../classes/meals'

const card = (content:meal) => {
    return(
        <div>
            <h3>{content.name}</h3>
            <p>Ingredients: {content.ingredients.forEach()} </p> 
        </div>
    )
}



export default card