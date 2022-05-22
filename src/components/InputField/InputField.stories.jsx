import React from 'react';
import InputField from './InputField';

export default {
  title: 'InputField',
  component: InputField,
};

export const Default = () => (
  <>
    <InputField name='email' label='email' type='email' placeholder='email' />
    <InputField
      name='password'
      label='password'
      type='password'
      placeholder='password'
    />
  </>
);
