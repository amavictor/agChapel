import React from 'react'

export const PastorPics = ({image, title, name}) => {
  return (
      <div>
          <img
              src={image}
              alt="pastor"
          />
          <p>{title}</p>
          <p>{name}</p>
      </div>
  )
}
