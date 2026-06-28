import '../App.css'
import Grid from '../components/Grid'


function Page({ step, grid }: { step: number; grid: string[][]; }) {
	return (
		<div className="page">
			<h2>Step {step}</h2>
			<Grid grid={grid} />
		</div>
	)
}

export default Page