'use client'

interface ViewUserButtonProps {
  userId: number
}
const ViewUserButton: React.FC<ViewUserButtonProps> = ({userId}) => {
    const handleCLick =() => alert(`user id: ${userId}`)
  return (
    <button onClick={handleCLick}>Pencet</button>
  )
}

export default ViewUserButton;
