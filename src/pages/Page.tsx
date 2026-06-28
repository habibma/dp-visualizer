import '../App.css'

const Cell = ({ value }: { value: string }) => {
	

	const cellStyle = {
		width: '30px',
		height: '30px',	
		display: 'flex',
		flexwrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px solid black',
		backgroundColor: value === '0' ? 'black' : 'white', // Black for obstacles, white for empty cells
	}

	return <div style={cellStyle}>{value}</div>
}

const Grid = ({ grid }: { grid: string[][] }) => {

	const gridStyle = {
		display: 'grid',
		gridTemplateColumns: `repeat(${grid[0]?.length}, 30px)`,
		gridTemplateRows: `repeat(${grid?.length}, 30px)`,
		justifyContent: 'center',
		gap: '0px',
	}

	return (
		<div className="grid" style={gridStyle}>
			{grid.map((row, i) => (
				<div key={i} className="row">
					{row.map((cell, j) => (
						<Cell key={j} value={cell} />
					))}
				</div>
			))}
		</div>
	)
}

const Page1 = ({ grid }: { grid: string[][] }) => {
	return (
		<section>
			<h2>Page 1</h2>
			<Grid grid={grid} />
		</section>
	)
}

const Page2 = ({ grid }: { grid: string[][] }) => {
	return (
		<section>
			<h2>Page 2</h2>
			<Grid grid={grid} />
		</section>
	)
}

const renderPage = (page: number, grid: string[][]) => {
	switch (page) {
		case 0:
			return <Page1 grid={grid} />
		case 1:
			return <Page2 grid={grid} />
		default:
			return <h2>Unknown Page</h2>
	}
}

function Page({ page, grid }: { page: number; grid: string[][] }) {
	return renderPage(page, grid)
}

export default Page