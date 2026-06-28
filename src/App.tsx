import { useState } from 'react'
import Header from './components/Header'
import Page from './pages/Page'
import Footer from './components/Footer'
import Button from './components/Button'
import './App.css'

const WelcomePage = ({ onClick }: { onClick: () => void }) => {
	return (
		<>
			<section>
				<h2>Welcome to the DP Visualizer!</h2>
				<p>This application allows you to visualize dynamic programming algorithms step by step.</p>
			</section>
			<section>
				<h2>Features</h2>
				<ul>
					<li>Visualize dynamic programming algorithms</li>
					<li>Step-by-step execution</li>
					<li>Interactive interface</li>
				</ul>
			</section>
			<Button onClick={onClick}>Start Visualizing</Button>
		</>
	)
}

const Main = () => {
  const [isWelcomePage, setIsWelcomePage] = useState(true)
  const [page, setPage] = useState(0)

  const handleBack = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  const handleForward = () => {
    if (page < 1) {
      setPage(page + 1)
    }
  }

  const handleReset = () => {
    setPage(0)
    //setIsWelcomePage(true)
  }

  return (
    <main>
      {isWelcomePage ? (
        <WelcomePage onClick={() => setIsWelcomePage(false)} />
      ) :
        <>
          <div className="control-panel">
            <Button onClick={() => {}}>Generate Grid</Button>
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleForward}>Forward</Button>
            <Button onClick={handleReset}>Reset</Button>
          </div>
          <Page page={page} />
        </>
      }
    </main>
  )
}

function App() {

  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
