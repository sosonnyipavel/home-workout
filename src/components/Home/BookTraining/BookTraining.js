import React from 'react';
import { makeStyles } from '@material-ui/core';
import AlarmIcon from '@material-ui/icons/Alarm';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import styles from './BookTraining.styles';

const BookTraining = (props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <div className={classes.trainingInformation}>
            <AlarmIcon color="primary" className={classes.icon}/>
            <div className={classes.trainingDate}>
                <Typography variant="h6">
                    Next Training Session
                </Typography>
                <Typography color="textSecondary">
                    Thuesday, March 13, 2022
                </Typography>
                <span style={{ color: 'black', fontWeight: '600' }}>3:00 PM</span>
            </div>
            </div>
            <Button variant="contained" color="primary" className={classes.button} endIcon={<ArrowForwardIcon className={classes.iconArrow}/>}>Book Session</Button>
        </div>
    );
}

const useStyles = makeStyles(styles, { name: BookTraining.name })

export default BookTraining;