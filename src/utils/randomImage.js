import alpaca from './imageData'

function getRandom(obj) {
  const keys = Object.keys(obj)
  return keys[Math.floor(Math.random() * keys.length)]
}

export default function randomImage(setSelectedImage) {
  const randomAccessories = getRandom(alpaca.accessories)
  const randomBackground = getRandom(alpaca.backgrounds)
  const randomEars = getRandom(alpaca.ears)
  const randomEyes = getRandom(alpaca.eyes)
  const randomHair = getRandom(alpaca.hair)
  const randomLeg = getRandom(alpaca.leg)
  const randomMouth = getRandom(alpaca.mouth)
  const randomNeck = getRandom(alpaca.neck)
  const randomNose = getRandom(alpaca.nose)

  setSelectedImage((prevState) => ({
    ...prevState,
    accessories: {
      name: alpaca.accessories[randomAccessories].name,
      src: alpaca.accessories[randomAccessories].src,
    },
    backgrounds: {
      name: alpaca.backgrounds[randomBackground].name,
      src: alpaca.backgrounds[randomBackground].src,
    },
    ears: {
      name: alpaca.ears[randomEars].name,
      src: alpaca.ears[randomEars].src,
    },
    hair: {
      name: alpaca.hair[randomHair].name,
      src: alpaca.hair[randomHair].src,
    },
    neck: {
      name: alpaca.neck[randomNeck].name,
      src: alpaca.neck[randomNeck].src,
    },
    eyes: {
      name: alpaca.eyes[randomEyes].name,
      src: alpaca.eyes[randomEyes].src,
    },
    nose: {
      name: alpaca.nose[randomNose].name,
      src: alpaca.nose[randomNose].src,
    },
    mouth: {
      name: alpaca.mouth[randomMouth].name,
      src: alpaca.mouth[randomMouth].src,
    },
    leg: {
      name: alpaca.leg[randomLeg].name,
      src: alpaca.leg[randomLeg].src,
    },
  }))
}
