import React, { useEffect } from 'react';
import BackToTopCom from '@components/common/scroll-to-top/scroll-to-top';
import { animationCreate } from '@utils/utils';

const Wrapper = ({children}) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 200);
  },[])
  return (
    <>
      {children}
      <BackToTopCom/>
    </>
  );
};

export default Wrapper;