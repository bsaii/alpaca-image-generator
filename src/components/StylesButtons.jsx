import React from 'react'
import alpaca from '../utils/imageData'

export default function StylesButtons({ selectedCategory, setSelectedImage }) {
  switch (selectedCategory) {
    case 'accessories':
      return Object.keys(alpaca.accessories).map((accessory) => (
        <button
          key={accessory}
          type='button'
          onClick={() =>
            setSelectedImage((prevState) => ({
              ...prevState,
              accessories: {
                ...prevState.accessories,
                name: alpaca.accessories[accessory].name,
                src: alpaca.accessories[accessory].src,
              },
            }))
          }
          className='bg-transparent text-[#03045E] text-sm lg:text-base font-semibold p-2 rounded-sm border-2 border-[#03045E] focus:bg-[#03045E] focus:text-white capitalize'
        >
          {alpaca.accessories[accessory].name}
        </button>
      ))
    case 'backgrounds':
      return Object.keys(alpaca.backgrounds).map((background) => (
        <button
          key={background}
          type='button'
          onClick={() =>
            setSelectedImage((prevState) => ({
              ...prevState,
              backgrounds: {
                ...prevState.backgrounds,
                name: alpaca.backgrounds[background].name,
                src: alpaca.backgrounds[background].src,
              },
            }))
          }
          className='bg-transparent text-[#03045E] text-sm lg:text-base font-semibold p-2 rounded-sm border-2 border-[#03045E] focus:bg-[#03045E] focus:text-white capitalize'
        >
          {alpaca.backgrounds[background].name}
        </button>
      ))
    case 'ears':
      return Object.keys(alpaca.ears).map((ear) => (
        <button
          key={ear}
          type='button'
          onClick={() =>
            setSelectedImage((prevState) => ({
              ...prevState,
              ears: {
                ...prevState.ears,
                name: alpaca.ears[ear].name,
                src: alpaca.ears[ear].src,
              },
            }))
          }
          className='bg-transparent text-[#03045E] text-sm lg:text-base font-semibold p-2 rounded-sm border-2 border-[#03045E] focus:bg-[#03045E] focus:text-white capitalize'
        >
          {alpaca.ears[ear].name}
        </button>
      ))
    case 'eyes':
      return Object.keys(alpaca.eyes).map((eye) => (
        <button
          key={eye}
          type='button'
          onClick={() =>
            setSelectedImage((prevState) => ({
              ...prevState,
              eyes: {
                ...prevState.eyes,
                name: alpaca.eyes[eye].name,
                src: alpaca.eyes[eye].src,
              },
            }))
          }
          className='bg-transparent text-[#03045E] text-sm lg:text-base font-semibold p-2 rounded-sm border-2 border-[#03045E] focus:bg-[#03045E] focus:text-white capitalize'
        >
          {alpaca.eyes[eye].name}
        </button>
      ))
    case 'hair':
      return Object.keys(alpaca.hair).map((hair) => (
        <button
          key={hair}
          type='button'
          onClick={() =>
            setSelectedImage((prevState) => ({
              ...prevState,
              hair: {
                ...prevState.hair,
                name: alpaca.hair[hair].name,
                src: alpaca.hair[hair].src,
              },
            }))
          }
          className='bg-transparent text-[#03045E] text-sm lg:text-base font-semibold p-2 rounded-sm border-2 border-[#03045E] focus:bg-[#03045E] focus:text-white capitalize'
        >
          {alpaca.hair[hair].name}
        </button>
      ))
    case 'leg':
      return Object.keys(alpaca.leg).map((leg) => (
        <button
          key={leg}
          type='button'
          onClick={() =>
            setSelectedImage((prevState) => ({
              ...prevState,
              leg: {
                ...prevState.leg,
                name: alpaca.leg[leg].name,
                src: alpaca.leg[leg].src,
              },
            }))
          }
          className='bg-transparent text-[#03045E] text-sm lg:text-base font-semibold p-2 rounded-sm border-2 border-[#03045E] focus:bg-[#03045E] focus:text-white capitalize'
        >
          {alpaca.leg[leg].name}
        </button>
      ))
    case 'mouth':
      return Object.keys(alpaca.mouth).map((mouth) => (
        <button
          key={mouth}
          type='button'
          onClick={() =>
            setSelectedImage((prevState) => ({
              ...prevState,
              mouth: {
                ...prevState.mouth,
                name: alpaca.mouth[mouth].name,
                src: alpaca.mouth[mouth].src,
              },
            }))
          }
          className='bg-transparent text-[#03045E] text-sm lg:text-base font-semibold p-2 rounded-sm border-2 border-[#03045E] focus:bg-[#03045E] focus:text-white capitalize'
        >
          {alpaca.mouth[mouth].name}
        </button>
      ))
    case 'neck':
      return Object.keys(alpaca.neck).map((neck) => (
        <button
          key={neck}
          type='button'
          onClick={() =>
            setSelectedImage((prevState) => ({
              ...prevState,
              neck: {
                ...prevState.neck,
                name: alpaca.neck[neck].name,
                src: alpaca.neck[neck].src,
              },
            }))
          }
          className='bg-transparent text-[#03045E] text-sm lg:text-base font-semibold p-2 rounded-sm border-2 border-[#03045E] focus:bg-[#03045E] focus:text-white capitalize'
        >
          {alpaca.neck[neck].name}
        </button>
      ))
    case 'nose':
      return (
        <button
          type='button'
          className='bg-transparent text-[#03045E] text-sm lg:text-base font-semibold p-2 rounded-sm border-2 border-[#03045E] focus:bg-[#03045E] focus:text-white capitalize'
        >
          {alpaca.nose.name}
        </button>
      )
    default:
      break
  }
}
