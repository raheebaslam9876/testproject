import React from "react";
const seasonConfig = {
    summer: {
        text: 'summer',
        iconName: 'sun'
    },
    winter: {
        text: 'winter',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, msg) => {
    if (msg > 2 && msg < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const Season = props => {
    const sea = getSeason(props.lat, new Date().getMonth());

    const { text, iconName } = seasonConfig[sea];
    return <div>
        <i className={`${iconName}`} />
        <h1>{text}</h1>
        <i className={`${iconName}`} />
    </div>
}

export default Season;