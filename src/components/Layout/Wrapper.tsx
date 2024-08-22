import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Wrapper = ({ children }: Props) => {
  return <div className='bg-white dark:bg-dark-hard flex justify-center'>{children}</div>;
};  