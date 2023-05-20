import React from 'react';
import DropFilestyle from './DropFilestyle.module.css';
import VideoInput from "./VideoInput";


function DropFile(){
    return (
        <div className={DropFilestyle.container}>
            <div>
                <VideoInput width={400} height={300} />
            </div>
            
        </div>
    )
}
export default DropFile;