import React from 'react'
const Videocard = (props) => {

    return (
        <>
            <div onClick={() => props.onVideoSelect(props.data)} class="ui list">
                <div class="item">
                    <img class="ui  image" src={props.data.snippet.thumbnails.medium.url} />
                    <div class="content">
                        <div class="description">{props.data.snippet.title}</div>
                    </div>
                </div>
            </div>  
        </>
    );
}
export default Videocard;