import React from 'react';
import Header from '../Header';
import './index.scss';

type Props = React.PropsWithChildren<{}>;

const Layout: React.FC<Props> = ({ children }: Props) => {
    return (
        <>
            <Header />
            <div className='layout__contents'>
                { children }
            </div>
        </>
    );
}

export default Layout;