import React from 'react';
import { Route, Routes } from 'react-router-dom'
import ComponentOne from '../pages/ComponentOne';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ComponentTwo from '../pages/ComponentTwo';
import ComponentThree from '../pages/ComponentThree';



const Router: React.FC = () => {
    return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />

      <main className="flex-1 overflow-y-auto p-4">
        <Routes>
          <Route path="/component1" element={<ComponentOne />} />
          <Route path="/component2" element={<ComponentTwo/>}/>
          <Route path="/component3" element={<ComponentThree/>}/>
        </Routes>
      </main>

      <Footer />
    </div>
    )
}

export default Router
