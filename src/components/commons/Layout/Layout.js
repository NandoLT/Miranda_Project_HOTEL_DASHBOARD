
import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../../../assets/css/Layout.css';

export const Layout = ({ children, ...props}) => {
    // console.log('PROPS LAYOUT', props);
    return(
    <div className="layout">
        <Header className="layout-header bordered" {...props} />
        <main className="layout-main bordered">
            <section className="layout-content">{children}</section>
        </main>
        <Footer />
    </div>
    );
}

