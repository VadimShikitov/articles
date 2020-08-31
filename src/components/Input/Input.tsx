import React from 'react';
import { TextField } from '@material-ui/core';

type CustomInputType = {
  value: string,
  label: string,
  style?: React.CSSProperties,
  rows?: number,
  onChange: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void,
}

/**
 * custom text input for using on project
 */
export const CustomInput = ({ value, onChange, label, style }: CustomInputType) => (
  <TextField
    value={value}
    onChange={onChange}
    label={label}
    style={style}
    variant='outlined'
  />
);

type CustomTextAreaType = {
  value: string,
  label: string,
  rows: number,
  style: React.CSSProperties,
  onChange: ({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

/**
 * custom text area for using on project
 */
export const CustomTextArea = ({ value, onChange, rows, label, style }: CustomTextAreaType) => (
  <TextField
    multiline
    rows={rows}
    value={value}
    onChange={onChange}
    label={label}
    style={style}
    variant='outlined'
  />
)
