import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import Footer from '../Footer';

class AdminPanel extends Component {
  render() {
    return (
      <div>
        <AdminHeader/>
        <Footer/>
      </div>
    );
  }
}

export default AdminPanel;