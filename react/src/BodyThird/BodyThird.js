import React from "react";
import {Link } from 'react-router-dom';
import BodyThirdcss from './BodyThird.module.css';

function BodyThird (){
    return(
        <div className= {BodyThirdcss.container}>

            <h2 className={BodyThirdcss.pos}> How it's work ? </h2>

            <div clasName={BodyThirdcss.steps}>
                <div className={BodyThirdcss.step}>
                    <div className={BodyThirdcss.textside}>
                        <h2> Step 1: Select your preferred template </h2>
                        <p>
                            Choose one of our beautiful professionally designed resume or cover lettre considering the industry that aligns with the job you applying for
                            and reflects your personal brand and professional style
                        </p>
                    </div>
                    
                    <img src="image/4192248.png" alt="slect template"></img>
                </div>

                <div className={BodyThirdcss.step}>
                    <img src="image/5052521.png" alt="customize template"></img>
                    <div className={BodyThirdcss.textside}>
                        <h2> step 2: customize your template </h2>
                        <p>
                        Add your personal info and choose and edit the necessary sections. Customize the layout and visuals as much as you want. 
                        </p>
                    </div>
                </div>

                <div className={BodyThirdcss.step}>
                    <div className={BodyThirdcss.textside}>
                        <h2> Step 3: Download Your Resume </h2>
                        <p>
                        Export your new resume or cover lettre in PDF formats. You can also save it in your account and share it to your other social network such as LinkedIn
                        </p>
                    </div>
                    
                    <img src="image/4165382.png" alt="download resume"></img>
                </div>
                <button className={BodyThirdcss.btn}> <Link to="/Resume">Create Resume</Link></button>

            </div>
        </div>
    );
}
export default BodyThird;