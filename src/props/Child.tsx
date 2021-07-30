interface ChildProps {
  color: string
  onClick: () => void
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click ME</button>
    </div>
  )
}

export const ChildAsFS: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click ME</button>
    </div>
  )
}
