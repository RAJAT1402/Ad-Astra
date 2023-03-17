import React from 'react'
import Logo from "./Images/logo.png";
import img1 from "./Images/img1.png";
import rocket from "./Images/rocket.png";
import cloud from "./Images/cloud.png"
import cloud1 from "./Images/cloud1.png"
import cloud2 from "./Images/cloud2.png"
import img2 from "./Images/img2.png"

function App() {
  return (
    <>
        <div className='container1'>
            <div className='navbar'>
                <div>
                    <img src={Logo}></img>
                    <span className='heading'>Ad Astra</span>
                </div>
                <div className='navbar1'>
                    <span className='text'>Home</span>
                    <span className='text'>Store</span>
                </div>
            </div>
            
            <div className='container-main'>
                <div>
                    <img src={rocket}></img>
                    <div className='text'>
                        Making playing and learning entertaining, as well as experiencing augmented reality designed specifically for children aged 2 to 12, is simple! See and learn from thousands of 3D objects in real time.
                    </div>
                    <div className='button'>
                        DOWNLOAD
                    </div>
                </div>
                <div>
                    <img src={img1} className="img1"></img>
                </div>
            </div>

            <div className='clouds'>
            <img src={cloud} className="cloud"></img>
            <img src={cloud1} className="cloud1"></img>
            <img src={cloud2} className="cloud2"></img>
            </div>
        </div>

        <div className='container2'>
            <div className='header'>
                Why we choose AR?
            </div>

            <div className='container3'>
                <div className='outer-container'>
                    <div className='inner-container'>
                        <div className='top'>
                            <div className='circle'></div>
                            <div className='sub-heading'>
                                Student engagement and interest
                            </div>
                        </div>
                        <div className='bottom'>
                            Student interest skyrockets with the opportunity to engage in creating educational content. AR technologies can allow them to add to curriculum content, create virtual worlds, and explore new interests.
                        </div>
                    </div>

                    <div className='inner-container'>
                        <div className='top'>
                            <div className='circle' style={{backgroundColor:'#DD2323', border: '0.2rem solid #EB486F'}}></div>
                            <div className='sub-heading'>
                                Learning environment
                            </div>
                        </div>
                        <div className='bottom'>
                            Classes that incorporate AR can help students become more involved. An interactive learning environment provides opportunities to implement hands-on learning approaches that can increase engagement, enhance the learning experience, and get students to learn and practice new skills.
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img2}></img>
                </div>
                <div className='outer-container'>
                    <div className='inner-container'>
                        <div className='top'>
                            <div className='circle' style={{backgroundColor:'#2357DD', border: '0.2rem solid #489DEB'}}></div>
                            <div className='sub-heading'>
                                Sensory development
                            </div>
                        </div>
                        <div className='bottom'>
                            Students benefit from immersive virtual content that incorporates an experiential learning style in which students carry out physical activities instead of watching a demonstration. This approach can help with sensory development.
                        </div>
                    </div>

                    <div className='inner-container'>
                        <div className='top'>
                            <div className='circle' style={{backgroundColor:'#D923DD', border: '0.2rem solid #EB48AA'}}></div>
                            <div className='sub-heading'>
                                Cost-effectiveness
                            </div>
                        </div>
                        <div className='bottom'>
                            Since smartphones are already equipped with the hardware needed to run AR apps, augmented reality in education is increasingly more cost-effective to implement. Additionally, AR can lower educational costs by replacing expensive textbooks.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default App