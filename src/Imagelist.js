import React from 'react'
import ImageCard from './ImageCard'
const Imagelist = props => {
    const image1 = props.image3.map((data) => {
        return <ImageCard key={data.id} data={data} />
    })
    return <>
        <div>{image1}</div>
    </>
}
export default Imagelist;