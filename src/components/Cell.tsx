const Cell = ({ value }: { value: string }) => {
	
	const cellStyle = {
		width: '30px',
		height: '30px',	
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px solid black',
		backgroundColor: value === '0' ? 'black' : 'white', // Black for obstacles, white for empty cells
		color: value === '0' ? 'white' : 'black', // White for visited cells, black for unvisited
		fontWeight: 'bold',
		fontSize: '16px',
	}

	return <div style={cellStyle}>{value}</div>
}

export default Cell