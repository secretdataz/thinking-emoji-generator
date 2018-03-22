import { fabric } from 'fabric'

const getImageButton = document.getElementById('getImage')
const showMeTheLolsButton = document.getElementById('showMeTheLols')
const bringToFrontButton = document.getElementById('bringToFront')

const canvas = new fabric.Canvas('thinkingCanvas')

let thinkingImage

function init () {
  canvas.setDimensions({
    width: 256,
    height: 256
  })

  fabric.Image.fromURL('/think.svg', function (image) {
    thinkingImage = image
    canvas.add(thinkingImage)
    thinkingImage.center()
  })

  getImageButton.addEventListener('change', addImage)
  showMeTheLolsButton.addEventListener('click', generateImage)
  bringToFrontButton.addEventListener('click', bringToFront)
}

function addImage () {
  const image = getImageButton.files[0]
  const newImageUrl = window.URL.createObjectURL(image)

  fabric.Image.fromURL(newImageUrl, function (image) {
    image.scaleToWidth(canvas.getWidth())
    canvas.add(image)
    image.center()
  })
}

function generateImage () {
  document.getElementById('output').src = canvas.toDataURL({
    format: 'png',
    multiplier: 0.5
  })
}

function bringToFront () {
  thinkingImage.bringToFront()
}

init()
