import React from 'react'

export const PastorSlider = ({ image, title }) => {
    return (
        <div>
            <h4>{title}</h4>
            <div>
                {image}
            </div>
        </div>
    )
}
