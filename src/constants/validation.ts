const MIN_TITLE_LENGTH = 5;
const MAX_TITLE_LENGTH = 35;

const DESCRIPTION_MIN_LENGTH = 10;
const DESCRIPTION_MAX_LENGTH = 200;

const EMAIL_REG_EXP = new RegExp('/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i');
const EMAIL_REG_EXP_ERROR_MESSAGE = 'Invalid email address';
const EMPTY_STRING = '';

const IS_REQUIRED_ERROR_MESAGE = 'This field is required';
const TITLE_MIN_ERROR_MESSAGE = `Title must be at least ${MIN_TITLE_LENGTH} char length`;
const TITLE_MAX_ERROR_MESSAGE = `Title must be less then ${MAX_TITLE_LENGTH} char length`;

const DESC_MIN_ERROR_MESSAGE = `Title must be at least ${DESCRIPTION_MIN_LENGTH} char length`;
const DESC_MAX_ERROR_MESSAGE = `Title must be less then ${DESCRIPTION_MAX_LENGTH} char length`;

const minLegth = (limit: number, errorMsg: string) => (value: string) => value.length <= limit ? errorMsg : EMPTY_STRING;
const maxLegth = (limit: number, errorMsg: string) => (value: string) => value.length >= limit ? errorMsg : EMPTY_STRING;
const checkRegExp = (regExp: RegExp, errorMsg: string) => (value: string) => !regExp.test(value) ? errorMsg : EMPTY_STRING;
const isRequired = (errorMsg: string) => (value: string) => !value ? errorMsg : EMPTY_STRING;

type ValidatorsFunction = (value: string) => string;
type TitleOrDescriptionType = [ValidatorsFunction, ValidatorsFunction, ValidatorsFunction];

export type Validator = ValidatorsFunction;

export type Validators = {
  titleError: TitleOrDescriptionType,
  descriptionError: TitleOrDescriptionType,
  imageError: [ValidatorsFunction],
  emailError: [ValidatorsFunction, ValidatorsFunction],
}
export const validators: Validators = {
  titleError: [
    isRequired(IS_REQUIRED_ERROR_MESAGE),
    minLegth(MIN_TITLE_LENGTH, TITLE_MIN_ERROR_MESSAGE),
    maxLegth(MAX_TITLE_LENGTH, TITLE_MAX_ERROR_MESSAGE)
  ],
  descriptionError: [
    isRequired(IS_REQUIRED_ERROR_MESAGE),
    minLegth(DESCRIPTION_MIN_LENGTH, DESC_MIN_ERROR_MESSAGE),
    maxLegth(DESCRIPTION_MAX_LENGTH, DESC_MAX_ERROR_MESSAGE),
  ],
  imageError: [
    isRequired(IS_REQUIRED_ERROR_MESAGE),
  ],
  emailError: [
    isRequired(IS_REQUIRED_ERROR_MESAGE),
    checkRegExp(EMAIL_REG_EXP, EMAIL_REG_EXP_ERROR_MESSAGE),
  ]
}