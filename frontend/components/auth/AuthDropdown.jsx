import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import firebase from 'firebase';

import styles from '../../stylesheets/authDropdown.module.scss';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button id={styles.authBtn} variant='outlined' color='primary' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {firebase.auth().currentUser.displayName}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={() => firebase.auth().signOut()}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
