import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import * as S from './404.style';

const NotFound = () => {
  return (
    <S.Styled404>
      <div>
        <S.Title>404 page not found</S.Title>
        <Link to={'/login'}>
          <Button type='button' color='primary'>
            Go back
          </Button>
        </Link>
      </div>
    </S.Styled404>
  );
};

export default NotFound;
