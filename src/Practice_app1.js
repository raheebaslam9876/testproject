import React from 'react'
import ApproveCrad from './ApproveCrad'
import Commentcomp from './Commentcomp'
function Practice_app1() {
  const date = new Date();
  const time = date.toLocaleDateString();
  return (
    <>
      <ApproveCrad >
        <Commentcomp
          authorname="raheeb"
          time={time}
          txt="Hello"
        />
      </ApproveCrad>
      <ApproveCrad>
        <Commentcomp
          authorname="abc"
          time={time}
          txt="Hi"
        />
      </ApproveCrad>
      <ApproveCrad>
        <Commentcomp
          authorname="dsk"
          time={time}
          txt="Hye"
        />
      </ApproveCrad>
    </>)
}

export default Practice_app1;