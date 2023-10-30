import React from 'react'
import Navbar from '../NavBar/navbar'
import SidebarPage from '../SideNav/sidenav'

function Layout({ children }) {
    return (
        <div className="flex flex-row">
            <div>
                <SidebarPage />
            </div>
            <div className="flex flex-col">
                <Navbar pageName="Groups" />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
};


export default Layout;
