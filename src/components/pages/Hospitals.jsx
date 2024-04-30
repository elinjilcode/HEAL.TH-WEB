import React from 'react'
import { Button } from "@material-tailwind/react";
import "../css files/Hospitals.css";
import greenCity from '../../assets/green-city.jpg';

function Hospitals() {
  return (
    <div>
      <section className='sectionOne'>
        <div className='texts'>
          <h1 className='block font-sans text-xl antialiased font-semibold leading-tight tracking-normal text-blue-white-900 sectionOneHeading'>
            GREEN CITY MEDICAL CENTER
          </h1>
          <p className='locationParag'> Located at: Jose Abad Santos Avenue, Barangay Dolores 2000 San Fernando, Philippines Central Luzon</p>
        </div>
        <div>
          <img src={greenCity} alt='green city' className='greenCity'></img>
        </div>
        <div className="flex w-max gap-4">
          <Button color="green">color green</Button>
        </div>
      </section>
    </div>
  )
}

export default Hospitals
