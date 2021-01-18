import { useContext } from 'react'
import { Context as AuthContext } from '../context/EntryContext'
import { Context as UserContext } from '../context/UserContext'

export default () => {
    const { fetchUserData } = useContext(UserContext)
    const { state: { id } } = useContext(AuthContext)

    const callFetch = () => fetchUserData(id)

    return [callFetch]

}