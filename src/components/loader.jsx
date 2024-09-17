import React ,{useEffect, useState}from "react";

const Loader = () => {
    
    const [text,setText]=useState('');
    const [showImg,setShowImg]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setShowImg(false);
            setText("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        },3000)

    },[])
    return (
        <>
            <div>
                {showImg?('loading'):('not loading')}
            </div>
        </>
    );
}

export default Loader;
