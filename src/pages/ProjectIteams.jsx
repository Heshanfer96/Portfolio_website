import React from 'react'
import "./projects.css"

function ProjectIteams(props) {
    return (
        <div>
            <div className="projectList">
                        <div className="projectiteam">
                            <h3 className="name">
                                {props.name}
                            </h3>
                            <div className="projectBody">
                                <p>{props.discription}</p>
                            </div>
                            <div className="projectType" >
                                <span className="typeIteam">{props.type}</span>
                            </div>
                            <div className="technolgyes">
                                <span className="techIteam">{props.technology[0]}</span><span className="techIteam">{props.technology[1]}</span><span className="techIteam">{props.technology[2]}</span><span className="techIteam">{props.technology[3]}</span>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default ProjectIteams
