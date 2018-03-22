import { fabric } from 'fabric'

const getImageButton = document.getElementById('getImage')
const bringToFrontButton = document.getElementById('bringToFront')
const downloadImageLink = document.getElementById('download')

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
  bringToFrontButton.addEventListener('click', bringToFront)
  downloadImageLink.addEventListener('click', downloadImage)
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

function downloadImage () {
  const image = canvas.toDataURL({
    format: 'png',
    multiplier: 0.5
  })

  downloadImageLink.href = image
}

function bringToFront () {
  thinkingImage.bringToFront()
}

init()
