import { useState } from 'react'

const Users = [
  { name: 'Sarah', age: 20 },
  { name: 'SarAlexah', age: 20 },
  { name: 'Micheal', age: 20 },
]

const UserSearch: React.FC = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState<{ name: string; age: number } | undefined>()

  const onClick = () => {
    const foundUser = Users.find((user) => {
      return user.name === name
    })

    setUser(foundUser)
  }

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find user</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  )
}

export default UserSearch
