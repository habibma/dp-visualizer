import { useState } from 'react'
import Header from './components/Header'
import Page from './pages/Page'
import Footer from './components/Footer'
import Button from './components/Button'
import './App.css'
import generateRandomGrid from './utils/gridGenarator'
import min3 from './utils/min3'

type Grid = string[][]

const cloneGrid = (grid: Grid): Grid => grid.map((row) => [...row])

const buildGridHistory = (obstacleGrid: Grid): Grid[] => {
  const history: Grid[] = [cloneGrid(obstacleGrid)]
  const workingGrid = cloneGrid(obstacleGrid)
  const rows = workingGrid.length
  const cols = workingGrid[0]?.length ?? 0

  for (let index = 0; index < rows * cols; index += 1) {
    const row = Math.floor(index / cols)
    const col = index % cols

    if (workingGrid[row][col] !== '0') {
      if (row === 0 || col === 0) {
        workingGrid[row][col] = '1'
      } else {
        workingGrid[row][col] = (min3(workingGrid[row - 1][col], workingGrid[row][col - 1], workingGrid[row - 1][col - 1]) + 1).toString()
      }
    }

    history.push(cloneGrid(workingGrid))
  }

  return history
}

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
  const [gridHistory, setGridHistory] = useState<Grid[]>(() => buildGridHistory(generateRandomGrid()))
  const [step, setStep] = useState(0)
  const currentGrid = gridHistory[step] ?? gridHistory[0] ?? []
  const maxStep = Math.max(gridHistory.length - 1, 0)

  const handleBack = () => {
    setStep((currentStep) => Math.max(currentStep - 1, 0))
  }

  const handleForward = () => {
    setStep((currentStep) => Math.min(currentStep + 1, maxStep))
  }

  const handleReset = () => {
    setStep(currentStep => Math.max(currentStep - currentStep, 0))
  }

  const handleGenerateGrid = () => {
    const nextGrid = generateRandomGrid()
    setGridHistory(buildGridHistory(nextGrid))
    setStep(0)
  }

  return (
    <main>
      {isWelcomePage ? (
        <WelcomePage onClick={() => setIsWelcomePage(false)} />
      ) :
        <>
          <div className="control-panel">
            <Button onClick={handleGenerateGrid}>New Grid</Button>
            <Button onClick={handleBack} disabled={step === 0}>Back</Button>
            <Button onClick={handleForward} disabled={step === maxStep}>Forward</Button>
            <Button onClick={handleReset} disabled={step === 0}>Reset</Button>
          </div>
          <div className="step-indicator">
            Step {step} of {maxStep}
          </div>
          <Page step={step} grid={currentGrid}  />
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
