import React, { useState } from "react";

const ImageMagnifier=({imgurl})=>{
    const[position,setPosition]=useState({x:0,y:0});
    const[showMag,setShowMag]=useState(false);
    const[cursor,setCursor]=useState({x:0,y:0});

    const handleMouseHover=(e)=>{
        const{left,top,width,height}=e.currentTarget.getBoundingClientRect();
            
        const x=((e.pageX-left)/width)*100;
        const y=((e.pageY-top)/height)*100;
        setPosition({x,y});
        setCursor({x:e.pageX-left,y:e.pageY-top});
    };

    return(
        <div className="img-mag-contianer"
        onMouseEnter={()=>setShowMag(true)}
        onMouseLeave={()=>setShowMag(false)}
        onMouseMove={handleMouseHover}
        >
            <img className="mag-img" src={imgurl}/>
            {showMag && <div style={{
                    position:'absolute',
                    left:`${cursor.x-100}px`,
                    top:`${cursor.y-100}px`,
                    pointerEvents:'none'
                }}>
                <div className="mag-image"
                    style={{
                        backgroundImage:`url(${imgurl})`,
                        backgroundPosition :`${position.x}% ${position.y}%`
                    }}/>
                </div>
            }
        </div>
    )

}

export default ImageMagnifier