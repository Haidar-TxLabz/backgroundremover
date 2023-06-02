import React, { useRef, useState } from 'react'

import './TextArea.scss'

const TextArea = () => {
    const [twitter, setTwitter] = useState(0)
    const [uploadImg, setUploadImg] = useState(0)
    
    const inputRef = useRef(null);

    const handleButtonClick = () => {
      inputRef.current.click();
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      // Handle the file upload logic here
      console.log(file);
    };

    return (
        <div
            className='w-4/5 flex flex-col-reverse sm:flex-row text-white  '
        >
            <div className={`bg-black px-3 py-3 w-full text-area   ${twitter ===0 ? 'rounded-b-lg': '  rounded-bl-lg rounded-br-lg sm:rounded-br-none '} `}>
            Please press enter or click the following button:
            <span className=' text-area-twitter'
            onClick={()=>{
                setTwitter(1)
            }}
            > Connect Twitter</span>
            </div>
          { twitter ===1? <div
            style={{
                backgroundColor:"#343541"
            }}
            className='sm:w-8/12   flex justify-center items-center sm:rounded-br-lg'
            >
                <div
                style={{
                    backgroundColor:"#1DA1F2 ",
                    
                }}
                className='w-10/12 flex justify-center items-center text-area-login'
                onClick={()=>{
                    setTwitter(2)
                }}
                >
                { '{ Connect Twitter }' }
                </div>
            </div>: null }


            { twitter ===2? <div
            style={{
                backgroundColor:"#343541"
            }}
            className='sm:w-8/12   flex justify-center items-center sm:rounded-br-lg'
            >
                <div
                style={{
                    backgroundColor:"#13BF3F ",
                    
                }}
                className='w-10/12 flex justify-center items-center text-area-login'
                onClick={()=>{
                    setTwitter(2)
                    handleButtonClick()
                    setUploadImg(1)
                }}
                >
                { uploadImg ===0? '{ Upload Image }' : 'Uploading 0%' }
                </div>
                <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
            </div>: null }


{/* <div
            style={{
                backgroundColor:"#343541"
            }}
            className='sm:w-8/12   flex justify-center items-center sm:rounded-br-lg'
            >
                <div
                style={{
                    backgroundColor:"#13BF3F ",
                    
                }}
                className='w-10/12 flex justify-center items-center my-8 sm:my-0   download '
                >
                <button className='my-3'>Download</button>
                </div>
            </div> */}


        </div>
    )
}

export default TextArea