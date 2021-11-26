import React from 'react'
import "../App.css"
import TypeWriter from 'typewriter-effect'


function Home() {
    return (
        <div id="Home">
            <div className="home">
                <div className="homeContents">
                    <div ><h1 className="toptext">hello</h1>
                    <h2 className="typewriter">i am  
                    {/* <TypeWriter
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
                        }/> */}

                    <TypeWriter
                        options={{
                            strings: ["Heshan", "Duminda","Fernando"],
                            autoStart: true,
                            loop: true,
                            pauseFor: 1000
                        }}
                />
                     </h2>
                     <div className="downloadBtn">
                        <a href="./cover letter and resume.pdf" target="blank"> Download my cv as pdf</a>
                     </div>
                        
                    </div>
                     
                    
                </div>
            </div>
        </div>
    )
}

export default Home;
