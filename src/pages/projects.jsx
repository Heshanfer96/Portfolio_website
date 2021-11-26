import React from 'react'
import "./projects.css"
import ProjectIteams from './ProjectIteams';

function Projects() {

    const details=[{
        key:1,
        name:"blackjak game",
        discription:"This is a card game a single player can play with a computer. It was Developed using javascript. In the game, I use sound effects to indicate who wins the game. A single player can play multiple times.",
        type:"individual project",
        technology:["Javascript","HTML5","CSS3","Bootstrap"],
    },
    {
        key:2,
        name:"Budget application",
        discription:"This application we can use to calculate budget spend some work or calculate our daily budget. This application has a diagram it shows the relationship between incomes and expenses and also it stores the income and expenses in the local storage of the browser",
        type:"individual project",
        technology:["Javascript","HTML5","CSS3","Bootstrap"],
    },
    {
        key:3,
        name:"Note application",
        discription:"This application we can use to write down some notes . This application also has a search function and we can search our previse notes using search. And also use local storage of the browser to store data",
        type:"individual project",
        technology:["Javascript","HTML5","CSS3","Bootstrap"],
    },
    {
        key:4,
        name:"Book List Application",
        discription:"This application we can use in the library. In this application, we can store book details in local storage in the browser. This application is built according to object-oriented programming concepts using ",
        type:"individual project",
        technology:["Javascript","HTML5","CSS3","Bootstrap"],
    }

]

    const projectDetails=()=>{
        return(
            details.map((iteam)=>{
                return(
                    <ProjectIteams
                        name={iteam.name}
                        discription={iteam.discription}
                        type={iteam.type}
                        technology={iteam.technology}
                    />
                )
            }
        )
        ) 
    }
    
    return (
        <div id="projects">
            <div className="projects">
                <div className="container">
                    <h2 className="projectstitle">
                        complited projects
                    </h2>

                    {projectDetails()}
                    
                </div>
            </div>
            
        </div>
    )
}

export default Projects;
