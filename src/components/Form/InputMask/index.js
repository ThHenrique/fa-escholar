import React, {useState, useCallback} from 'react';
import {TextInputMask} from 'react-masked-text';

import {
  Input
} from 'reactstrap'

const InputMask = ({type, onChangeText, onChangeUnMaskedText, ...rest}) => {
  const [value, setValue] = useState('');
  const [rawValue, setRawValue] = useState('');

  const handleOnChangeText = useCallback(
    (maskedValue, unmaskedValue) => {
      setValue(maskedValue);
      setRawValue(unmaskedValue);
      if (onChangeText) {
        onChangeText(maskedValue);
      }
      if (onChangeUnMaskedText) {
        onChangeUnMaskedText(unmaskedValue);
      }
    },
    [onChangeText, onChangeUnMaskedText],
  );

  return (
    <TextInputMask
      type={type}
      value={value}
      onChangeText={handleOnChangeText}
      customTextInputProps={{
        rawValue,
        ...rest,
      }}
      {...rest}
    />
  );
};

export default InputMask;
