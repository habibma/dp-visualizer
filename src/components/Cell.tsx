const Cell = ({
	value,
	isActive = false,
	isHoveredSquareBorder = false,
	onMouseEnter,
	onMouseLeave,
}: {
	value: string
	isActive?: boolean
	isHoveredSquareBorder?: boolean
	onMouseEnter?: () => void
	onMouseLeave?: () => void
}) => {
	const cellSize = 'clamp(22px, 3.5vw, 30px)'
	const borderColor = isHoveredSquareBorder ? '#ffffff' : '#1A365D'

	const cellStyle = {
		width: cellSize,
		height: cellSize,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: isHoveredSquareBorder ? `1px solid ${borderColor}` : '1px solid #1A365D',
		backgroundColor: isActive ? 'rgba(248, 144, 106, 0.5)' : (value === '0' ? '#1C2833' : 'white'),
		color: value === '0' ? 'white' : 'black',
		fontWeight: 'bold',
		fontSize: '14px',
		boxShadow: isActive ? '0 0 4px rgba(255, 107, 53, 0.6)' : (isHoveredSquareBorder ? 'inset 0 0 0 1px rgba(255, 255, 255, 0.4)' : 'none'),
		transition: 'all 0.3s ease',
		cursor: 'pointer',
		boxSizing: 'border-box' as const,
	}

	return (
		<div style={cellStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{value}
		</div>
	)
}

export default Cell