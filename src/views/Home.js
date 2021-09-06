import React from 'react';
import { makeStyles } from '@material-ui/core';
import styles from './Home.styles';
import BreadcrumbMenu from '../components/Home/BreadcrumbMenu/BreadcrumbMenu';

const Home = (props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <BreadcrumbMenu />
            </div>
        </div>
    );
}

const useStyles = makeStyles(styles, { name: Home.name });

export default Home;