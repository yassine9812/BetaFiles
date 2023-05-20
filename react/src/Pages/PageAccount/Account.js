import React from "react";
import { Link } from "react-router-dom";
import Accountstyle from "./Account.module.css";
import {useNavigate } from 'react-router-dom';
import { UserOutlined,PlusCircleOutlined } from '@ant-design/icons';
import {Avatar,Space} from "antd"; 
import DropFile from "./DropFile";
import Edit from "./Edit.js";


function Account() {

    let navigate = useNavigate();
    return(
        <div>
            <div className={Accountstyle.container1} >
                <div className={Accountstyle['profilPic']}>
                <Space>
                <Avatar 
                icon={ <UserOutlined/> }
                size={200}
                />
                </Space>
                </div>
                <div>

                
                <div className={Accountstyle['profileName']}>
                    <h2>Name</h2>
                    <h2>Job Title</h2>
                </div>
                
                <div className={Accountstyle['btnRow']}>
                    <button className={Accountstyle['btn1']} > Share Link </button>
                    <button onClick={  ()=>{navigate("/PageJob")}  } className={Accountstyle['btn2']} > Browse for a job offer </button>
                </div>
                </div>

            </div>
            <div className={Accountstyle.container2}>
                <h2>My Resume</h2>
                <div className={Accountstyle.resumeBox}>
                <div className={Accountstyle['addSpace']} >
                 <div className={Accountstyle['posAddIcon']}>
                    <button className={Accountstyle['addBtn']}><Link to='/Resume'>
                 <PlusCircleOutlined  
                style={{ fontSize: '50px', color: '#BFBFBF' }}/>
                </Link>
                </button>
                </div>
                  
                

                </div>
                </div>
                <div>
                    <Edit></Edit>
                </div> 
            </div>
            <div className={Accountstyle.container3} >
            <h2>My Cover Lettre</h2>
                <div className={Accountstyle.resumeBox}>
                <div className={Accountstyle['addSpace']} >
                 <div className={Accountstyle['posAddIcon']}>
                    <button className={Accountstyle['addBtn']}><Link to='/CoverLettre'>
                 <PlusCircleOutlined  
                style={{ fontSize: '50px', color: '#BFBFBF' }}/>
               
                </Link>
                </button>
                </div>   
                </div>
                </div>
            </div>

            <div className={Accountstyle.container4}>
                <h2>My Video</h2>
                <p>make a video to talk about yourself, talk about your skills and goals even about your hobbies.</p>
                <div>
                    <DropFile/>
                </div>

            </div>
        </div>
         
        )
}


export default Account;


