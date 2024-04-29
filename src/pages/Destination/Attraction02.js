import React from 'react'
import '../../styles/Destination/attraction02.css'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'
import starImage from '../../images/Destination/BlackStar.png'
import sigiriyaImage from '../../images/Destination/sigiriya.jpg'
import mapImage from '../../images/Destination/map.png'

export default function Attraction02() {
  return (
    <div className='container'>
        <div className='navBar'>
          <NavigationBar/>
        </div>
        <div className='content'>
          <div className='top'>
            <div className='destination'>
              <h1>Sigiriya - Lion Rock at Sigiriya, Sri Lanka</h1>
            </div>
            <div className='rates'>
              <img src={starImage}></img>
              <p>4.89 - 55 reviews</p>
            </div>
            <div className='imgs'>
              <img src={sigiriyaImage}></img>
            </div>

          </div>
          <div className='middle'>
            <p>Welcome to the enchanting realm of Sigiriya, a jewel nestled in the heart of Sri Lanka's cultural landscape. Sigiriya, also known as the Lion Rock, stands as a testament to the island nation's rich heritage and architectural splendor. As a UNESCO World Heritage Site, it beckons travelers and explorers alike to delve into its storied past and breathtaking vistas. <span><br/><br/></span>

Sigiriya's allure lies not only in its towering presence but also in the tapestry of history woven around it. Dating back over two millennia, this ancient rock fortress and palace complex were crafted by the visionary King Kasyapa during the 5th century. Rising majestically nearly 200 meters above the surrounding plains, Sigiriya boasts a fusion of natural grandeur and human ingenuity, making it a must-visit destination for cultural enthusiasts and history buffs.<span><br/><br/></span>

Visitors to Sigiriya are greeted by the awe-inspiring sight of the lion-shaped gateway, a formidable entrance that once guarded the royal citadel atop the rock. Ascending the rock, adventurers are rewarded with panoramic views of verdant landscapes and remnants of ancient marvels, including intricate frescoes that adorn the sheltered alcoves and the remnants of advanced water gardens below.<span><br/><br/></span>

Sigiriya's significance transcends mere architecture; it serves as a living testament to Sri Lanka's illustrious past and enduring cultural legacy. Today, it stands as a beacon for sustainable tourism, offering travelers a glimpse into the island's rich tapestry of history, art, and natural beauty.<span><br/><br/></span>

Join us on a journey to Sigiriya, where history comes alive, and every step unveils a new chapter in the story of Sri Lanka's cultural heritage. Experience the magic of Sigiriya and create memories that will last a lifetime.</p>

          </div>
          <div className='below'>
            <h1>Where you'll be</h1>
            <a href='https://www.google.com/maps/place/Sigiriya+Lion+Rock/@7.957118,80.7576821,17z/data=!3m1!4b1!4m6!3m5!1s0x3afca16422c0e731:0xe98f7af01614cc1c!8m2!3d7.9571127!4d80.760257!16s%2Fg%2F11kphk78wv?entry=ttu' target='_blank'><img src={mapImage}></img></a>            
          </div>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
    </div>
  )
}
