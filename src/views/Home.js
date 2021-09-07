import React from 'react';
import { makeStyles } from '@material-ui/core';
import styles from './Home.styles';
import BreadcrumbMenu from '../components/Home/BreadcrumbMenu/BreadcrumbMenu';
import ProfileInformation from '../components/Home/ProfileInformation/ProfileInformation';
import BookTraining from '../components/Home/BookTraining/BookTraining';

const Home = (props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.breadcrumbContainer}>
                    <BreadcrumbMenu />
                </div>
                <div className={classes.content}>
                    <div className={classes.sideBarContainer}>
                        <ProfileInformation/>
                    </div>
                    <div className={classes.mainContainer}>
                        <BookTraining />
                    </div>
                </div>
            </div>
        </div>
    );
}

const useStyles = makeStyles(styles, { name: Home.name });

export default Home;