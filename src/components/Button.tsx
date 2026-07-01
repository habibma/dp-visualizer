import './button.css'

const Button = ({ onClick, children, disabled = false }: { onClick: () => void, children: React.ReactNode, disabled?: boolean }) => {
  return (
    <button className="btn" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button