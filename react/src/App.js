import './App.css'
import { Route, Routes } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar'
import Home from './Pages/PageHome/Home'
import Resume from './Pages/PageResume/Resume'
import CoverLettre from './Pages/PageCoverLettre/CoverLettre'
import AboutUs from './Pages/PageAboutUs/AboutUs'
import Login from './Pages/PageLogin/Login'
import SignUp from './Pages/PageSignUp/SignUp'
import Account from './Pages/PageAccount/Account'
import GenerateCV from './Pages/GenerateCV/GenerateCV'
import ResumeBuilder from './Pages/GenerateCV/ResumeBuilderPage/ResumeBuilderPage.js'
import CoverLetterBuilder from './Pages/GenerateCL/CoverLetterBuilder/CoverLetterBuilder.js'
import CoverLetterBuilder2 from './Pages/GenerateCL/CoverLetterBuilder2/CoverLetterBuilder2.js'
import CoverLetterBuilder3 from './Pages/GenerateCL/CoverLetterBuilder3/CoverLetterBuilder3.js'
import PageJob from './Pages/PageJob/PageJob'
import { decrypt } from './utils/encryption'
import { AppContext } from './AppContext'
import { useEffect, useState } from 'react'

function App () {
  const [appData, setAppData] = useState()

  useEffect(() => {
    const data = decrypt(localStorage.getItem('app-data'))
    console.log('From app : data', data)
    if (data) {
      setAppData(data)
    }
    return () => {
      setAppData()
    }
  }, [])

  return (
    <AppContext.Provider value={[appData, setAppData]}>
      <div className='App'>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/CoverLettre' element={<CoverLettre />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Account' element={<Account />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Template/:id' element={<GenerateCV />} />
          <Route path='/ResumeBuilder' element={<ResumeBuilder />} />
          <Route path='/CoverLetterBuilder' element={<CoverLetterBuilder />} />
          <Route
            path='/CoverLetterBuilder2'
            element={<CoverLetterBuilder2 />}
          />
          <Route
            path='/CoverLetterBuilder3'
            element={<CoverLetterBuilder3 />}
          />
          <Route path='/PageJob' element={<PageJob />} />
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
