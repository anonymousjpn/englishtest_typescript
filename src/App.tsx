import React from 'react';
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from './home';
import Grade5 from './grade5';
import Grade4 from './grade4';
import Grade3 from './grade3';
import Gradepre2 from './gradepre2';
import Grade2 from './grade2';
import Gradepre1 from './gradepre1';
import Grade1 from './grade1';
import logo from './images/englishlogo.png';
const App=():React.JSX.Element=>{
  return (
    <HashRouter>
      <div className="App">
        <div className="wrapper">
          <header className="App-header">
            <div className="flexdisplay1">
              <h1 id="logo"><Link to='/' className="urladjustimage"><img src={logo} alt="" /></Link></h1>
              <h1 id="title">英語のレベル別問題集</h1>
            </div>
            <ul className="flexdisplay2">
              <li className="level" id="home"><Link to='/'>ホーム</Link></li>
              <li className="level" id="gradefive"><Link to='/grade5'>英検5級</Link></li>
              <li className="level" id="gradefour"><Link to='/grade4'>英検4級</Link></li>
              <li className="level" id="gradethree"><Link to='/grade3'>英検3級</Link></li>
              <li className="level" id="gradepretwo"><Link to='/gradepre2'>英検準2級</Link></li>
              <li className="level" id="gradetwo"><Link to='/grade2'>英検2級</Link></li>
              <li className="level" id="gradepreone"><Link to='/gradepre1'>英検準1級</Link></li>
              <li className="level" id="gradeone"><Link to='/grade1'>英検1級</Link></li>
            </ul>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/grade5" element={<Grade5 />} />
              <Route path="/grade4" element={<Grade4 />} />
              <Route path="/grade3" element={<Grade3 />} />
              <Route path="/gradepre2" element={<Gradepre2 />} />
              <Route path="/grade2" element={<Grade2 />} />
              <Route path="/gradepre1" element={<Gradepre1 />} />
              <Route path="/grade1" element={<Grade1 />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

