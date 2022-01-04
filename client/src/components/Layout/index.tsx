import React from 'react';
import Header from '../Header';
import './index.scss';

type Props = React.PropsWithChildren<{}>;

const Layout: React.FC<Props> = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main className='layout__contents'>
                { children }
            </main>
        </>
    );
}

export default Layout;