import React from "react";
import { Card } from "react-bootstrap";

const generateCards = (name:string) => {
    return (<div>
        <Card style={{ width: '18rem' }}>
            <Card.Title>{name}</Card.Title>
            <Card.Text>blablalbla</Card.Text>
        </Card>
    </div>)
    }




const TeamsPage = () => {
    const team:string[] = ["delen","emil le ranjeu","mae la grosse geek","sportek le nerd","Luckas 🐐"] 

    return (
    <div>
        <p>This is the teams page</p>
        <div>
            {/*team.map()*/}
        </div>
    </div>
    )
}



export default TeamsPage