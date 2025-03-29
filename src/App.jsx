import './App.css'
import Header from './components/Header'
import Research from './components/Research'
import Education from './components/Education'

function App() {
  return (
    <div className="profile-container">
      <Header />
      <main className="content-wrapper">
        <Research />
        <Education />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Kim Seon Gyeom - All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App
