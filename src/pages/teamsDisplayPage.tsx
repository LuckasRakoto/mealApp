import React from "react";
import Card from "react-bootstrap/Card";
import Slider from "react-slick" 

interface IUser {
    name:string;
    id:number;
}


const teams: IUser[]=[
    {
        name: "Delen",
        id:0
    },{
        name:"emil le rajeu",
        id:1
    },{
        name:"mae la grosse geek",
        id:2
    },{
        name:"sportek le nerd",
        id:3
    },{
        name:"Luckas 🐐",
        id:4
    }
]



const TeamsPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
    <div>
        <p>This is the teams page</p>
        <div>
            {teams.map(member => {
                return (<div key={member.id} >
                        <h3>{member.name}</h3><Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Text>blablalbla</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>)
            })}
        </div>
    </div>
    )
}



export default TeamsPage