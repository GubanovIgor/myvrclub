import React, {Component} from 'react';
import AdminHeader from './AdminHeader';
import Footer from '../Footer';
import AdminLogin from "./AdminLogin.jsx";

class AdminPanel extends Component {
    render() {
        return (
            <div>
                <AdminHeader/>
                <AdminLogin/>
                <Footer/>
            </div>
        );
    }
}

export default AdminPanel;