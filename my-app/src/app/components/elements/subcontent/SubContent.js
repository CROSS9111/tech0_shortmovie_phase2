import React from 'react'
import Inputtext from "@/features/inputtext/Inputtext"

const SubContent = () => {
    // const [newValue, setNewValue] = useState([]);
    // const [trigar, setTrigar] = useState([]);
  
    // console.log(newValue)
    // useEffect(()=>{
    //   console.log(newValue)
    // },[newValue])
  
  
    
    return (
      <div className="flex-1 justify-center">
        {/* メインコンテンツ */}
        <div className="flex-1 my-5 justify-center">
           <Inputtext />
        </div>
        <div className="flex-1 my-10 flex justify-center">
          <video controls preload="none" style={{ width: '100%', maxWidth: '640px' }}>
            <source src="video.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        {/* <video src={require('./video.mp4')} controls  playsinline/> */}
          </div>
        </div>  
    );
  };


export default SubContent
