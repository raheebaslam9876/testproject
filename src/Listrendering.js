import React from 'react'

function Listrendering() {
    const data = [
        { id: 1, name: 'raheeb' },
        { id: 2, name: 'absva' },
        { id: 3, name: 'uhij' }
    ];
    return (
        <>
            {
                data.map((data) => {
                    return (
                        <div>I am {data.id} and {data.name}</div>);
                })
            }
            < div > listrendering</div >
        </>
    )
}

export default Listrendering;