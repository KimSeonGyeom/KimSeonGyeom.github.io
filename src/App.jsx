import './App.css'
import useBaseStore from './store/baseStore'
import Header from './components/Header'
import ResearchInterests from './components/ResearchInterests'
import Research from './components/Research'
import Timeline from './components/Timeline'

function App() {
  const { activeSection } = useBaseStore()

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'research-interests':
        return <ResearchInterests />
      case 'research':
        return <Research />
      case 'resume':
        return <Timeline />
      default:
        return <ResearchInterests />
    }
  }

  return (
    <div className="profile-container">
      <Header />
      <main className="content-wrapper">
        <div className="content" key={activeSection}>
          {renderActiveSection()}
        </div>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Kim Seon Gyeom - All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App
