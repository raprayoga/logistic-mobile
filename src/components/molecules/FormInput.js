import React, { useState } from 'react'

import {
  Input,
  FormControl,
  WarningOutlineIcon,
} from "native-base"

export default function FormInput(props) {
  const [input, setInput] = useState('');

  const handleInputChange = event => {
    const value = event.nativeEvent.text
    setInput(value);
    props.changeInput({
      value: value
    });
  }

  const submit = event => {
    props.onSubmitEditing();
  }

  return (
    <FormControl
      isInvalid={props.isInvalid}
      {...props.config}
    >
      <FormControl.Label>{props.label}</FormControl.Label>
      <Input
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        value={input}
        onSubmitEditing={() => submit()}
        onChange={(nativeEvent) => handleInputChange(nativeEvent)} />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size={props.sizeErrorMessage} />}>
        {props.ErrorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}

FormInput.defaultProps = {
  isInvalid: false,
  label: null,
  placeholder: 'Input Text Here',
  type: 'text',
  sizeErrorMessage: 'xs',
  ErrorMessage: 'Data Not Valid',
}
