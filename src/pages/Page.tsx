import '../App.css'
import Grid from '../components/Grid'
import Code from '../components/Code'
import './page.css'

const Explanation = () => {
	return (
		<div className="explanation flex-child">
			<h2>Explanation</h2>
			<p>This algorithm computes the size of the largest square of available cells (non-obstacles) with the current cell as the bottom-right corner.</p>
			<p>For each cell:</p>
			<ul>
				<li><strong>IF</strong> the cell is an obstacle (0), skip it;</li>
				<li><strong>ELSE IF</strong> in the first row or column, the largest square is 1;</li>
				<li><strong>ELSE</strong> the largest square is 1 + the minimum of the three neighboring cells (top, left, top-left).</li>
			</ul>
			<p>Each step fills one cell with this computed value, building up the solution from top-left to bottom-right.</p>
		</div>
	)
}

function Page({ grid, activeRow, activeCol }: { grid: string[][]; activeRow?: number; activeCol?: number }) {
	return (
		<section className="page">
			<div className="flex-container">
				<Code />
				<div className="flex-child">
					<h2>Grid</h2>
					<Grid grid={grid} activeRow={activeRow} activeCol={activeCol} />
				</div>
				<Explanation />
			</div>
		</section>
	)
}

export default Page