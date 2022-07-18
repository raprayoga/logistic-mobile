import React, { useState } from 'react'

import {
  Box,
  Heading,
  Center,
  Button,
  Text,
  useToast,
  NativeBaseProvider
} from "native-base"
import { useNavigation } from '@react-navigation/native'
import { lupaPassword } from 'multikurirkurir/src/services/auth';

import FormInput from 'multikurirkurir/src/components/molecules/FormInput';

export default function FormLupaPassword() {
  const navigation = useNavigation()
  const [form, setForm] = useState({
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [handleError, setHandleError] = useState({});
  const toast = useToast()

  const handleInputChange = value => {
    const formTemp = { ...form };
    formTemp[value.name] = value.value;
    setForm({ ...formTemp });
  }

  const submit = async e => {
    setHandleError({})
    const payload = form
    setIsLoading(true)
    await lupaPassword(payload)
      .then((response) => {
        toast.show({
          title: "Account Forgot Password",
          status: "success",
          description: response.data.message,
        })
      })
      .catch((error) => {
        const errors = error.response.data.errors
        let errorMessage = null
        if (errors.email !== undefined) errorMessage = errors.email
        else if (errors.expireToken !== undefined) errorMessage = errors.expireToken
        else errorMessage = error.response.data.message

        toast.show({
          title: "Account Forgot Password",
          status: "danger",
          description: errorMessage,
        })
        setHandleError(error.response.data.errors)
      });
    setIsLoading(false)
  }

  return (
    <>
      <Center flex={1}>
        <Box
          pt={10}
          size={"full"}
          bg="coolGray.100"
          _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg",
          }}
          rounded="xl"
          shadow={2}
          position='absolute'
        >
        <NativeBaseProvider>
          <Center>
            <Heading>Lupa Password</Heading>
            <FormInput config={{
              mt: 5,
              w: {
                base: "75%",
                md: "25%",
              }
            }}
              isInvalid={handleError.email !== undefined}
              label='Email'
              placeholder='Input Email Here'
              type='email'
              sizeErrorMessage='xs'
              ErrorMessage={handleError.email}
              changeInput={(value) => handleInputChange({ ...value, name: 'email' })}
              onSubmitEditing={() => submit()}
            />
          </Center>
          <Center pt={5} px={12}>
            <Button style={{ width: '100%' }}
              isLoading={isLoading}
              isLoadingText="Process"
              onPress={() => submit()}
              colorScheme="primary"
              variant='solid'
              _loading={{
                bg: 'primary'
              }}
              >
              Submit
            </Button>
          </Center>
          <Text textAlign='left' mt={3} color='primary.500' ml={12} onPress={() => navigation.navigate('Login')} >
            Kembali ke Login
          </Text>
      </NativeBaseProvider>
        </Box>
      </Center>
    </>
  )
}