import React from 'react'
import { StyleSheet } from 'react-native'
import Form from '../components/Form'
import FormView from '../components/FormView'
import useSignupLogin from '../hooks/useSignupLogin'

const InterestedInSignUpScreen = () => {
    const [signupLogin] = useSignupLogin()

    return (
        <FormView>
            <Form 
                placeholder='Interested In?'
                title='Continue'
                onPress={signupLogin}    
            />
        </FormView>
    )
}

const styles = StyleSheet.create({

})

export default InterestedInSignUpScreen