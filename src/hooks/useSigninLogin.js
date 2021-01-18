import { useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import { Context as EntryContext } from '../context/EntryContext'

export default () => {
    const { signin } = useContext(AuthContext)
    const { state: {email, password}, signinPassword } = useContext(EntryContext)

    const signinLogin = input => {
        signinPassword(input)
        //adds password with input to the initial entry state 
        
        signin(email, password)
        //produces token for user 
    }

    //MAY NEED TO PLACE SIGNINPASSWORD IN A USEEFFECT SOMEHOW

    return [signinLogin]

}