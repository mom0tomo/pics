import React from 'react'

const ImageList = props => {
  const images = props.images.map((image) => {
    return (
      <div>
        < img src = {image.urls.regular} alt = {image.alt} key = {image.id} />
      </div>
    )
  })
  return <div className="image-list">{images}</div>
}

export default ImageList