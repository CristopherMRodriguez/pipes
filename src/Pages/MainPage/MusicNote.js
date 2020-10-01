import React from "react"
import musicNote from "../../Assets/musicNote.svg"

function MusicNote() {
  return(
    <button style={{position: "absolute", left: "20px", bottom: "5px"}}>
      <img alt="Music Note" src={musicNote} /> 
    </button> 
  )
}


export default MusicNote;