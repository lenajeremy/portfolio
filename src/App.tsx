import React from 'react'
import './App.css'
import './portfolio.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'
import { ArticleView } from './components/ArticleView'
import { NewArticleForm } from './components/NewArticleForm'
import { MyStack } from './components/MyStack'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { Contact } from './components/Contact'
// import { CKEditor } from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const HomePage = () => (
  <React.Fragment>
    <Header />
    <Hero />
    <Projects />
    <MyStack />
    <Contact />
    <Footer />
  </React.Fragment>
)

const ProjectPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}

function App() {
  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project" element={<ProjectPage />}>
              <Route path="" element={<p>No article found</p>} />
              <Route path=":projectSlug" element={<ArticleView />} />
            </Route>
            <Route path="/new" element={<NewArticleForm />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default App
