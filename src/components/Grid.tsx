import Cell from './Cell'

const Grid = ({ grid, activeRow, activeCol }: { grid: string[][]; activeRow?: number; activeCol?: number }) => {

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
						const isActive = activeRow === i && activeCol === j
						return <Cell key={j} value={cell} isActive={isActive} />;
					})}
				</div>
			))}
		</div>
	)
}

export default Grid