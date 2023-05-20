import React from "react";
import DropFilestyle from "./DropFilestyle.module.css";
import { CloudUploadOutlined } from '@ant-design/icons';
export default function VideoInput(props) {
  const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  return (
    <div className={DropFilestyle.VideoInput}>
      <input
        ref={inputRef}
        className={DropFilestyle.VideoInput_input}
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
      />
      {!source && <button className={DropFilestyle.btn} onClick={handleChoose}> <CloudUploadOutlined style={{ fontSize: '25px' }} /> Choose video</button>}
      {source && (
        <video
          className={DropFilestyle.VideoInput_video}
          width="100%"
          height={height}
          controls
          src={source}
        />
      )}
      
    </div>
  );
}
