import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Pages/Home'
import Training from '../components/Pages/Training'
import DailyActions from '../components/Pages/Training/Questionnaires/DailyActions';
import Result from '../components/Pages/Result';
import About from '../components/Pages/About';
import { GlobalStyles } from './style';
import { createContext, useRef, useState } from 'react';
import ResearchDesignPlanning from '../components/Pages/Training/Questionnaires/ResearchDesignPlanning';
import Completed from '../components/Completed';

export const AppContext = createContext()

function App() {
  const [training, setTraining] = useState({
    dailyAction: 'incomplete',
    researchDesignPlanning: 'incomplete'
  })
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const windowHeight = windowSize.current[1]

  return (
    <>
      <GlobalStyles />
        <AppContext.Provider value={{training, setTraining}}>
          <Router>
            <Routes>
              <Route path='/' element={<Layout pageMinimumHeight={windowHeight}/>}>
                <Route index element={<Home window/>}/>
                <Route path='training'>
                  <Route index element={<Training />}/>
                  <Route path='questions/daily_actions' element={<DailyActions />}/>
                  <Route path='questions/research_design_planning' element={<ResearchDesignPlanning />}/>
                  <Route path='completed' element={<Completed />}/>
                </Route>
                <Route path='result' element={<Result />}/>
                <Route path='about-us' element={<About />}/>
              </Route>
            </Routes>
          </Router>
        </AppContext.Provider>
    </>
  )
}

export default App;
