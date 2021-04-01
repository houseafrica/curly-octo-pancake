import React, { FC, ReactElement } from 'react';
import { generalRoutes } from './routes';
import { convertRoutesToComponents } from 'utilities';


const Pages: FC = (): ReactElement => {
  return (
    <>
      {convertRoutesToComponents(generalRoutes)}
    </>
  );
}

export default Pages;