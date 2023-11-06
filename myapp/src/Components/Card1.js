import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { AiOutlineRight } from 'react-icons/ai';

const Card1 = () => {
    const datazz=[{img:"https://www.keralatourism.org/images/homecontentimage/Chandragiri_fort-3.jpg",name:"Chandragiri Fort and River"},
    {img:"https://www.keralatourism.org/images/homecontentimage/parasurama-temple-1.jpg",name:"Parasurama Temple, Thiruvallam"},
    {img:"https://www.keralatourism.org/images/homecontentimage/kumbalangi-31.jpg",name:"Kumbalangi Tourist Village"},
{img:"https://www.keralatourism.org/images/homecontentimage/nilambur-kovilakom1.jpg",name:"Nilambur Kovilakam"},
{img:"https://www.keralatourism.org/images/homecontentimage/devikulam-2.jpg",name:"Devikulam Hills"},
{img:"https://www.keralatourism.org/images/homecontentimage/gavi-2.jpg",name:"Gavi"},
{img:"https://www.keralatourism.org/images/homecontentimage/kalvarimount-3.jpg",name:"Kalvari Mount"},
{img:"https://www.keralatourism.org/images/homecontentimage/desktop/Muzhappilangad-Beach21.jpg",name:"Muzhappilangad Beach"},

]
  return (
    <div className="card1">
        <h2>Top Destinations</h2>
      <div className="card-container">
        {datazz.map((data) => (
          <Card key={data.name} style={{ width: '18rem' }}>
            <div style={{ position: 'relative' }}>
              <Card.Img variant="top" src={data.img} />
              <div style={{ position: 'absolute', bottom: '0', width: '100%', background: 'rgba(0, 0, 0, 0.7)' }}>
                <Card.Title style={{ color: 'white', textAlign: 'center', padding: '5px' }}>
                  {data.name}
                </Card.Title>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Button className='cta1'>EXPLORE OUR DESTINATIONS <AiOutlineRight/></Button>
    </div>
    
  )
}

export default Card1