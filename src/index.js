import { fabric } from 'fabric'

const getImageButton = document.getElementById('getImage')
const downloadImageLink = document.getElementById('download')
const bringToFrontButton = document.getElementById('bringToFront')
const changeFillColourButton = document.getElementById('changeFillColour')
const changeStrokeColourButton = document.getElementById('changeStrokeColour')

const canvas = new fabric.Canvas('thinkingCanvas')

let thinkingImage

function init () {
  canvas.setDimensions({
    width: 256,
    height: 256
  })

  fabric.loadSVGFromURL('/dist/think.svg', function (items) {
    thinkingImage = fabric.util.groupSVGElements(items)

    canvas.add(thinkingImage)
    thinkingImage.center()
  })

  getImageButton.addEventListener('change', addImage)
  changeFillColourButton.addEventListener('change', changeFillColour)
  changeStrokeColourButton.addEventListener('change', changeStrokeColour)

  downloadImageLink.addEventListener('click', downloadImage)
  bringToFrontButton.addEventListener('click', bringThinkingImageToFront)
}

function changeFillColour (event) {
  const colour = event.target.value
  thinkingImage.getObjects()[0].set({ fill:colour })

  canvas.renderAll()
}

function changeStrokeColour (event) {
  const colour = event.target.value
  thinkingImage.getObjects()[1].set({ fill:colour })

  canvas.renderAll()
}

function addImage () {
  const image = getImageButton.files[0]
  const newImageUrl = window.URL.createObjectURL(image)

  fabric.Image.fromURL(newImageUrl, function (image) {
    image.scaleToWidth(canvas.getWidth())
    canvas.add(image)
    image.center()
    bringThinkingImageToFront()
  })
}

function downloadImage () {
  const image = canvas.toDataURL({
    format: 'png',
    multiplier: 0.5
  })

  downloadImageLink.href = image
}

function bringThinkingImageToFront () {
  canvas.discardActiveObject()
  thinkingImage.bringToFront()
}

init()
