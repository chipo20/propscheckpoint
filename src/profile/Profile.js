import React from 'react';
 




const profile = ({name , bio , profession , image}) => {

    const handleSubmite =()=> {
        alert(`this is profile for ${name}`)
    }
    return (
        <div>
          <p>  My Name is <span style={{ color: "red" , fontFamily: "Arial" ,fontSize:22}}> 
          {name}</span> and bio <span style={{ color:"#00BFFF", fontSize:22}}>{bio}</span>  
          and profession is <span style={{ color:"#4682B4", fontSize:22}}> {profession}</span> 
                  </p>  

                  {image}
                  <p></p>
                  <button onClick={()=> handleSubmite()}>alert the profile name</button>
        </div>
    )
}

export default profile



