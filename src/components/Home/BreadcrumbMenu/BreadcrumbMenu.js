import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { makeStyles } from '@material-ui/core';
import styles from './BreadcrumbMenu.styles';

const BreadcrumbMenu = (props) => {
    const classes = useStyles(props);

    return (
        <Breadcrumbs classes={{ root: classes.breadcrumbRoot }} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link color="inherit" href="/clients">
          Clients
        </Link>
        <Link color="textPrimary" href="/profile">
          Client Profile
        </Link>
      </Breadcrumbs>
    );
}

const useStyles = makeStyles(styles, { name: BreadcrumbMenu.name });

export default BreadcrumbMenu;