import { useState } from 'react'
import Cell from './Cell'

const Grid = ({ grid, activeRow, activeCol }: { grid: string[][]; activeRow?: number; activeCol?: number }) => {
	const cellSize = 'clamp(22px, 3.5vw, 30px)'
	const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null)

	const gridStyle = {
		display: 'grid',
		gridTemplateColumns: `repeat(${grid[0]?.length}, ${cellSize})`,
		gridTemplateRows: `repeat(${grid?.length}, ${cellSize})`,
		justifyContent: 'center',
		gap: '0px',
		minHeight: '300px',
	}

	const hoveredSize = hoveredCell ? Number(grid[hoveredCell.row]?.[hoveredCell.col]) : NaN
	const hasHoveredSquare = Number.isFinite(hoveredSize) && hoveredSize > 0
	const squareTop = hasHoveredSquare && hoveredCell ? hoveredCell.row - hoveredSize + 1 : -1
	const squareLeft = hasHoveredSquare && hoveredCell ? hoveredCell.col - hoveredSize + 1 : -1
	const squareBottom = hoveredCell?.row ?? -1
	const squareRight = hoveredCell?.col ?? -1

	return (
		<div className="grid" style={gridStyle}>
			{grid.map((row, i) => (
				<div key={i}  style={{ display: 'contents' }}>
					{row.map((cell, j) => {
						const isActive = activeRow === i && activeCol === j
						const isInsideHoveredSquare = hasHoveredSquare
							&& i >= squareTop
							&& i <= squareBottom
							&& j >= squareLeft
							&& j <= squareRight
						const isHoveredSquareBorder = isInsideHoveredSquare
							&& (i === squareTop || i === squareBottom || j === squareLeft || j === squareRight)

						return (
							<Cell
								key={j}
								value={cell}
								isActive={isActive}
								isHoveredSquareBorder={isHoveredSquareBorder}
								onMouseEnter={() => setHoveredCell({ row: i, col: j })}
								onMouseLeave={() => setHoveredCell(null)}
							/>
						)
					})}
				</div>
			))}
		</div>
	)
}

export default Grid