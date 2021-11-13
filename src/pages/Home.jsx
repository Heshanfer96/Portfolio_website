import React from 'react'
import "../App.css"
import TypeWriter from 'typewriter-effect'


function Home() {
    return (
        <div>
            <div className="home">
                <div className="homeContents">
                    <div ><h1 className="toptext">hello.....</h1>
                    <h2 className="typewriter">i am  <TypeWriter
                                onInit={(TypeWriter)=>{
                                TypeWriter
                                .typeString("HESHAN")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("DUMINDA")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("FERNANDO")
                                .pauseFor(1000)
                                .deleteAll()
                                .start();
                                
                            }
                        }/>
                     </h2>
                     <div className="downloadBtn">
                        <a href="./cover letter and resume.pdf" download> Download my cv as pdf</a>
                     </div>
                        
                    </div>
                     
                    
                </div>
            </div>
        </div>
    )
}

export default Home;
