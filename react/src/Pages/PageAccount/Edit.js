import React from "react";
import Editstyle from "./Editstyle.module.css";
import { EditFilled, FontSizeOutlined } from '@ant-design/icons';
import download from "../../icpublish24px.png";
function Edit (){
    return(
        <div className={Editstyle.container} >
            <div>
            <h3>Untitled</h3>
            <p>Last modification 1 mars, 10:00</p>
            </div>
            
            <div className={Editstyle.editList} >

                <div className={Editstyle.text} >
                <EditFilled style={{ fontSize: '20px', marginRight: "5px"}} /> Edit
                </div>

                <div className={Editstyle.text}>
                  <img style={{ fontSize: '20px' ,marginRight: "10px"}} src={download} alt="icon"/> Download              
                </div>
                
            </div>
        </div>
    )
}
export default Edit;