import React from 'react';
import { TextField } from '@material-ui/core';

type CustomInputType = {
  name: string,
  value: string,
  label: string,
  error: string,
  style?: React.CSSProperties,
  rows?: number,
  onChange: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur: ({ target: { name } }: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

/**
 * custom text input for using on project
 */
export const CustomInput = ({ name, value, error, onChange, onBlur, label, style }: CustomInputType) => (
  <TextField
    error={!!error}
    helperText={error}
    name={name}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    label={label}
    style={style}
    variant='outlined'
  />
);

type CustomTextAreaType = {
  name: string,
  value: string,
  label: string,
  error: string,
  rows: number,
  style: React.CSSProperties,
  onChange: ({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>) => void,
  onBlur: ({ target: { name } }: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

/**
 * custom text area for using on project
 */
export const CustomTextArea = ({ name, value, onBlur, error, onChange, rows, label, style }: CustomTextAreaType) => (
  <TextField
    error={!!error}
    helperText={error}
    name={name}
    multiline
    rows={rows}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    label={label}
    style={style}
    variant='outlined'
  />
)
