import React, { useState, useEffect } from 'react'
import youtube from '../api/youtube'
const Usevideo = (defaultsearch) => {

    const [video, setvideo] = useState([]);
    useEffect(() => {
        VideoSubmit(defaultsearch)

    }, [defaultsearch])
    const VideoSubmit = async (term) => {
        const res = await youtube.get('/search', {
            params: { q: term }
        })

        setvideo(res.data.items)

    }
    return [video, VideoSubmit];
}
export default Usevideo;