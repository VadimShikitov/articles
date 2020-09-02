import { useState } from 'react';
import { Validators, Validator } from '../constants/validation';

export const useValidation = <T extends { [key: string]: string }>(fieldsToValidate: T) => {

  const [errorsState, setErrorsState] = useState<T>(fieldsToValidate);

  const validate = (fields: T, validators: Validators) => (key: keyof Validators) => {

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
