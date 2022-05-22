/* eslint-disable react/react-in-jsx-scope */
import Button from '../Button/Button';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
};

export const Primary = () => (
  <>
    <Header>
      <Button type='submit' color='primary'>
        Click
      </Button>
    </Header>
  </>
);
