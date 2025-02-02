import React from 'react'

function SocialRef(props) {
  return (
    <a 
        href={props.mes} 
        target={"_blank"} 
    >
    <button
        style={{color: "white", border: "white", backgroundColor: "white", margin: "5px", cursor: "default"}}
    >
        <img 
            src={props.mesIcon}
            style={{width: "30px", height: "30px", cursor: "pointer"}}
        />
     </button>
</a>
  )
}

export default SocialRef;
