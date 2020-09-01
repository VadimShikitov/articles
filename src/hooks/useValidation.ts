import { useState } from 'react';
import { Validators, Validator } from '../constants/validation';

export type ValidationKey = 'titleError' | 'imageError' | 'descriptionError';

type FieldsType = {
  titleError: string,
  imageError: string,
  descriptionError: string,
};

export const useValidation = () => {

  const [errorsState, setErrorsState] = useState<FieldsType>({
    titleError: '',
    imageError: '',
    descriptionError: '',
  })

  const validate = (fields: FieldsType, validators: Validators) => (key: ValidationKey) => {

    const value = fields[key];
    const errorArray = validators[key].reduce((acc: string[], validator: Validator) => {
      const errorText = validator(value)
      if (errorText) {
        acc.push(errorText);
      }
      return acc;
    }, [])

    const result = errorArray.length ? errorArray[0] : '';

    setErrorsState(errors => ({
      ...errors,
      [key]: result
    }))
  }

  return {
    validate,
    errorsState
  };
};