import React from 'react';
import { makeStyles } from '@material-ui/core';
import styles from './ProfileInformation.styles';

const ProfileInformation = (props) => {
    const classes = useStyles(props);

    return <div className={classes.root}>Therese Spring</div>
}

const useStyles = makeStyles(styles, { name: ProfileInformation.name })

export default ProfileInformation;