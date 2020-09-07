import { useState } from 'react';
import { Validators, Validator } from '../constants/validation';

type useValidationFields = Partial<Record<keyof Validators, string>>

/**
 * validation hook. Using for validation fields in forms, for example validate new article form.
 * @param fieldsToValidate - These are the fields to be validated. You can only include fields for which there are validators
 * @returns {{errorsState - state with validation errors, validate - function for validate fields}}
 */
export const useValidation = <T extends useValidationFields>(fieldsToValidate: T) => {

  const [errorsState, setErrorsState] = useState<T>(fieldsToValidate);

  const validate = (fields: T, validators: Validators) => (key: keyof Validators) => {

    const value = fields[key];

    if (!value) {
      return;
    };

    const errorArray = validators[key].reduce((acc: string[], validator: Validator) => {
      const errorText = validator(value);
      if (errorText) {
        acc.push(errorText);
      }
      return acc;
    }, []);
    const result = errorArray.length ? errorArray[0] : '';

    setErrorsState(errors => ({
      ...errors,
      [key]: result
    }));
  };

  return {
    validate,
    errorsState
  };
};
