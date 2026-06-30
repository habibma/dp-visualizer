import Cell from './Cell'

const Grid = ({ grid }: { grid: string[][]; }) => {

	const gridStyle = {
		display: 'grid',
		gridTemplateColumns: `repeat(${grid[0]?.length}, 30px)`,
		gridTemplateRows: `repeat(${grid?.length}, 30px)`,
		justifyContent: 'center',
		gap: '0px',
		minHeight: '300px',
	}
	
	return (
		<div className="grid" style={gridStyle}>
			{grid.map((row, i) => (
				<div key={i}  style={{ display: 'contents' }}>
					{row.map((cell, j) => {
						return <Cell key={j} value={cell} />;
					})}
				</div>
			))}
		</div>
	)
}

export default Grid