import React, { useEffect, useState } from 'react'

const ImageSlider = () => {
  const [index, setIndex] = useState(0)

  const images = [
    'https://img.freepik.com/premium-photo/laptop-desk-with-plant-post-it-white-surface-top-view-3d-rendering_626958-157.jpg?w=1060',
    'https://img.freepik.com/premium-photo/person-hand-using-laptop-computer-from-with-coffee-smartphone_861973-120.jpg?w=1060',
    'https://media.licdn.com/dms/image/D4E12AQHIAv-pPU0Zhw/article-cover_image-shrink_720_1280/0/1658219526848?e=2147483647&v=beta&t=vpxxzJFPHstvUDr3HY4lotq-2-yun00myneaNpw3PAI',
  ]

  useEffect(() => {
    const lastIndex = images.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, images.length])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <>
      <div className='slider-container'>
        <div className='slider-section'>
          {images.map((image, imageIndex) => {
            let position = 'nextSlide'
            if (imageIndex === index) {
              position = 'activeSlide'
            }
            if (
              imageIndex === index - 1 ||
              (index === 0 && imageIndex === images.length - 1)
            ) {
              position = 'lastSlide'
            }
            return (
              <div className={`image-item ${position}`} key={imageIndex}>
                <img src={image} alt='' className='img' />
              </div>
            )
          })}
        </div>
      </div>
      <div className='slide-identifier-container'>
        <div
          onClick={() => setIndex(0)}
          className={`${
            index === 0
              ? 'slide-identifier active-identifier'
              : 'slide-identifier'
          }`}
        ></div>
        <div
          onClick={() => setIndex(1)}
          className={`${
            index === 1
              ? 'slide-identifier active-identifier'
              : 'slide-identifier'
          }`}
        ></div>
        <div
          onClick={() => setIndex(2)}
          className={`${
            index === 2
              ? 'slide-identifier active-identifier'
              : 'slide-identifier'
          }`}
        ></div>
      </div>
    </>
  )
}

export default ImageSlider
