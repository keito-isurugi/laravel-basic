import { useEffect, useState } from 'react';
import {Link,Outlet} from 'react-router-dom';

export const Page1 = () => {

  
  return (
    <>
      <h1>Page1ページです</h1>
      <Outlet />
    </>
  );
};