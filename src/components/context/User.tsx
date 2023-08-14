import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => {

    const userContext = useContext(UserContext)
    
    const handleLogIn = () => {
        userContext.setUser({
            name: 'Berlioz',
            email: 'coolCat@example.com',
        })
    }
    const handleLogOut = () => {
            userContext.setUser(null)
    }

  return (
    <div>
        <button onClick={handleLogIn}>Login</button>
        <button onClick={handleLogOut}>Logout</button>
        <div>User name is  {userContext.user?.name}</div>
        <div>User email is {userContext.user?.email}</div>
    </div>
  )
}
