import { useEffect, useState } from 'react'
import Header from './components/Header'
import Page from './pages/Page'
import Footer from './components/Footer'
import Button from './components/Button'
import './App.css'
import generateRandomGrid from './utils/gridGenarator'
import min3 from './utils/min3'

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
  const [step, setStep] = useState(0)
  const [grid, setGrid] = useState<string[][]>(() => generateRandomGrid())

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  function changeCell(step: number) {
    const row = Math.floor(step / grid[0]?.length)
    const col = step % grid[0]?.length
    const newGrid = [...grid]
    if (newGrid[row][col] === '0') {
      newGrid[row][col] = '0'
    } else if (row === 0 || col === 0) {
      newGrid[row][col] = '1'
    }
    else
      newGrid[row][col] = ( min3(newGrid[row - 1][col], newGrid[row][col - 1], newGrid[row - 1][col - 1]) + 1).toString()
    setGrid(newGrid)
  }

  const handleForward = () => {
    if (step < grid?.length * grid[0]?.length - 1)
      setStep(step + 1)
  }

  const handleReset = () => {
    setStep(0)
    //setIsWelcomePage(true)
  }

  const handleGenerateGrid = () => {
    // Logic to generate the grid goes here
    setGrid(generateRandomGrid())
    setStep(0)
  }

  useEffect(() => {
    if (step > 0) {
      changeCell(step - 1);
    }
  }, [step]);

  return (
    <main>
      {isWelcomePage ? (
        <WelcomePage onClick={() => setIsWelcomePage(false)} />
      ) :
        <>
          <div className="control-panel">
            <Button onClick={handleGenerateGrid}>Generate Grid</Button>
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleForward}>Forward</Button>
            <Button onClick={handleReset}>Reset</Button>
          </div>
          <Page step={step} grid={grid}  />
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
