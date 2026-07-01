const Cell = ({ value, isActive = false }: { value: string; isActive?: boolean }) => {
	const cellSize = 'clamp(22px, 3.5vw, 30px)'

	const cellStyle = {
		width: cellSize,
		height: cellSize,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: isActive ? '0px solid #ff7948' : '1px solid black',
		backgroundColor: isActive ? 'rgba(248, 144, 106, 0.5)' : (value === '0' ? 'black' : 'white'),
		color: value === '0' ? 'white' : 'black', // White for visited cells, black for unvisited
		fontWeight: 'bold',
		fontSize: '16px',
		boxShadow: isActive ? '0 0 8px rgba(255, 107, 53, 0.6)' : 'none',
		transition: 'all 0.3s ease',
	}

	return <div style={cellStyle}>{value}</div>
}

export default Cell