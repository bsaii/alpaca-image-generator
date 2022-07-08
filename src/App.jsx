import React, { useState, useRef } from 'react'
import alpaca from './utils/imageData'
import randomImage from './utils/randomImage'
import StylesButtons from './components/StylesButtons'
import exportAsImage from './utils/downloadImage'

const initialImage = {
  backgrounds: {
    name: alpaca.backgrounds.blue50.name,
    src: alpaca.backgrounds.blue50.src,
  },
  accessories: {
    name: alpaca.accessories.headphone.name,
    src: alpaca.accessories.headphone.src,
  },
  ears: {
    name: alpaca.ears.default.name,
    src: alpaca.ears.default.src,
  },
  hair: {
    name: alpaca.hair.default.name,
    src: alpaca.hair.default.src,
  },
  neck: {
    name: alpaca.neck.default.name,
    src: alpaca.neck.default.src,
  },
  eyes: {
    name: alpaca.eyes.default.name,
    src: alpaca.eyes.default.src,
  },
  nose: {
    name: alpaca.nose.name,
    src: alpaca.nose.src,
  },
  mouth: {
    name: alpaca.mouth.default.name,
    src: alpaca.mouth.default.src,
  },
  leg: {
    name: alpaca.leg.default.name,
    src: alpaca.leg.default.src,
  },
}

const categories = Object.keys(alpaca)

function App() {
  const [selectedImage, setSelectedImage] = useState(initialImage)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const exportImg = useRef(null)

  return (
    <div className='bg-white p-4 max-h-screen'>
      {/* Heading */}
      <div className='bg-[#0096C7] rounded-lg p-2 lg:p-4'>
        <h1 className='text-xl lg:text-2xl text-center text-black font-black uppercase'>
          alpaca image generator
        </h1>
      </div>

      <div className='max-w-full h-auto bg-[#0096C7] mt-5 rounded-lg p-4 flex flex-col items-center md:items-start md:justify-center space-y-4 md:flex-row md:space-x-8 md:p-12 lg:px-20 lg:space-x-10'>
        <div>
          {/* image */}
          <div
            className='relative rounded-md w-[270px] h-[270px] sm:min-w-[300px] sm:min-h-[300px] md:min-w-[370px] md:min-h-[370px] lg:min-w-[400px] lg:min-h-[400px] xl:min-w-[450px] xl:min-h-[450px] 2xl:min-w-[500px] 2xl:min-h-[500px] overflow-hidden'
            ref={exportImg}
          >
            {/* BACKGROUND */}
            <img
              src={selectedImage.backgrounds.src}
              alt={selectedImage.backgrounds.name}
              className='absolute h-auto w-full'
            />
            {/* ACCESSORIES */}
            <img
              src={selectedImage.accessories.src}
              alt={selectedImage.accessories.name}
              className='absolute h-auto w-full z-10'
            />
            {/* EARS */}
            <img
              src={selectedImage.ears.src}
              alt={selectedImage.ears.name}
              className='absolute h-auto w-full'
            />
            {/* HAIR */}
            <img
              src={selectedImage.hair.src}
              alt={selectedImage.hair.name}
              className='absolute h-auto w-full'
            />
            {/* NECK */}
            <img
              src={selectedImage.neck.src}
              alt={selectedImage.neck.name}
              className='absolute h-auto w-full'
            />
            {/* EYES */}
            <img
              src={selectedImage.eyes.src}
              alt={selectedImage.eyes.name}
              className='absolute h-auto w-full'
            />
            {/* NOSE */}
            <img
              src={selectedImage.nose.src}
              alt={selectedImage.nose.name}
              className='absolute h-auto w-full'
            />
            {/* MOUTH */}
            <img
              src={selectedImage.mouth.src}
              alt={selectedImage.mouth.name}
              className='absolute h-auto w-full'
            />
            {/* LEG */}
            <img
              src={selectedImage.leg.src}
              alt={selectedImage.leg.name}
              className='absolute h-auto w-full'
            />
          </div>
          {/* random and dowload */}
          <div className='w-full text-base flex justify-evenly items-center mt-4'>
            <button
              type='button'
              onClick={() => randomImage(setSelectedImage)}
              className='bg-[#A8DADC] rounded-md py-2 px-8 text-black'
            >
              Random
            </button>
            <button
              type='button'
              onClick={() => exportAsImage(exportImg.current, 'alpaca.png')}
              className='bg-[#A8DADC] rounded-md py-2 px-8 text-black'
            >
              Download
            </button>
          </div>
        </div>

        <div className='flex-col space-y-5 md:basis-1/2 lg:px-12'>
          <div className='mt-4 md:mt-0'>
            <h2 className='text-lg lg:text-xl text-left font-bold capitalize'>
              accessories the alpaca&apos;s
            </h2>
            <div className='border-2 border-[#90E0EF] p-3 mt-2 rounded flex flex-wrap gap-2'>
              {categories.map((category) => (
                <button
                  type='button'
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className='bg-transparent text-[#03045E] text-sm lg:text-base font-semibold p-2 rounded-sm border-2 border-[#03045E] focus:bg-[#03045E] focus:text-white capitalize'
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div>
            {selectedCategory && (
              <>
                <h2 className='text-lg lg:text-xl text-left font-bold capitalize'>
                  Style
                </h2>
                <div className='border-2 border-[#90E0EF] p-3 mt-2 rounded flex flex-wrap gap-2'>
                  <StylesButtons
                    selectedCategory={selectedCategory}
                    setSelectedImage={setSelectedImage}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
