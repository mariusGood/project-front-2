/* eslint-disable react/react-in-jsx-scope */
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <Button type='button' color='primary'>
    Click
  </Button>
);

export const Secondary = () => (
  <Button type='reset' color='secondary'>
    Dont click
  </Button>
);
