import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import Form from '../components/Form'
import FormView from '../components/FormView'
import { Context as EntryContext } from '../context/EntryContext'

const VeggieTypeSignupScreen = () => {
    const { addVeggieType } = useContext(EntryContext)

    return (
        <FormView>
            <Form
                placeholder='What is your veggie type?'
                title='Continue'
                onPress={addVeggieType}    
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default VeggieTypeSignupScreen