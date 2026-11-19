import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import PracticeAreas from './pages/PracticeAreas.jsx'
import Partners from './pages/Partners.jsx'
import Advisors from './pages/Advisors.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="practice-areas" element={<PracticeAreas />} />
          <Route path="partners" element={<Partners />} />
          <Route path="advisors" element={<Advisors />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
