import React, { useState, useEffect } from 'react'
import {
  Box,
  Heading,
  Center,
  NativeBaseProvider,
  Button,
  Text,
  useToast
} from "native-base"
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { _getData } from 'multikurirkurir/src/stores/asyncStore';

import { login } from 'multikurirkurir/src/services/auth'
import FormInput from 'multikurirkurir/src/components/molecules/FormInput';

export default function FormLogin() {
  const navigation = useNavigation()
  const [form, setForm] = useState({
    user_name: '',
    password: '',
    remember_me: 1,
    force: 1
  });
  const dispatch = useDispatch()
  let isLoading = useSelector((state) => state.auth.status) === 'loading'
  let errorMessage = useSelector((state) => state.auth.error)
  let status = useSelector((state) => state.auth.status)
  const toast = useToast()

  useEffect(() => {
    if (status == 'failed') {
      toast.show({
        title: "Login",
        status: "danger",
        description: errorMessage,
      })
    }
  }, [status])

  const handleInputChange = value => {
    const formTemp = { ...form };
    formTemp[value.name] = value.value;
    setForm({ ...formTemp });
  }

  const submit = async e => {
    const payload = form
    await dispatch(login(payload))
    if (await _getData('@token') !== null) {
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{
             name: 'Home'
          }],
        });
      }, 500);
    }
  }

  return (
    <>
      <NativeBaseProvider>
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
            shadow={2}
            borderTopLeftRadius="20"
            borderTopRightRadius="20"
          >
            <NativeBaseProvider>
              <Center>
                <Heading>Login Akun</Heading>
                <FormInput config={{
                  mt: 5,
                  w: {
                    base: "75%",
                    md: "25%",
                  }
                }}
                  isInvalid={false}
                  label='Username'
                  placeholder='Input Username Here'
                  name='user_name'
                  type='text'
                  value={form.user_name}
                  sizeErrorMessage='xs'
                  ErrorMessage='Data Not Valid'
                  changeInput={(value) => handleInputChange({ ...value, name: 'user_name' })}
                  onSubmitEditing={() => submit()}
                />
                <FormInput config={{
                    mt: 5,
                    w: {
                      base: "75%",
                      md: "25%", 
                    }
                  }}
                  isInvalid={false}
                  label='Password'
                  placeholder='Input Password Here'
                  name='password'
                  type='password'
                  value={form.password}
                  sizeErrorMessage='xs'
                  ErrorMessage='Data Not Valid'
                  changeInput={(value) => handleInputChange({ ...value, name: 'password' })}
                  onSubmitEditing={() => submit()}
                />
              </Center>
              <Text textAlign='right' color='primary.500' mr={12} onPress={() => navigation.navigate('LupaPassword')} >
                Lupa Password ?
              </Text>
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
                  Login
                </Button>
              </Center>
            </NativeBaseProvider>
          </Box>
        </Center>
      </NativeBaseProvider>
    </>
  )
}