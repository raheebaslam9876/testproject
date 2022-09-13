import React from 'react'
import VideoCard from './VideoCard'
const Videolist = (props) => {
    const videocont = props.videodata.map((data) => {
        return <VideoCard onVideoSelect={props.onVideoSelect} key={data.id} data={data} />
    })
    return (
        <div>{videocont}</div>
    );
}
export default Videolist;