import React from 'react';
import Header from '../../Header/Header';
import BodyFirst from '../../BodyFirst/BodyFirst';
import BodySecond from '../../BodySecond/BodySecond';
import BodyThird from '../../BodyThird/BodyThird';
import BodyFourth from '../../BodyFourth/BodyFourth';
import BodyFifth from '../../BodyFifth/BodyFifth';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';

function Home() {
    return(
        <div>
            <Header/>
            <BodyFirst/>
            <BodySecond/>
            <BodyThird/>
            <BodyFourth/>
            <BodyFifth/>
            
            <Contact/>
            
            <Footer/>
            
        </div>
        )
}


export default Home;