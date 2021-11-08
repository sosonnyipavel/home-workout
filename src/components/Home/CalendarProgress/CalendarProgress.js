import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import styles from './CalendarProgress.styles';

const CalendarProgress = (props) => {
    const classes = useStyles(props);
    const [week, setWeek] = useState('');

    const getCurrentWeek = () => {
        const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'];
        let week = [];
        let currentDate = new Date();
        const dayOfWeek = currentDate.getDay();
    
        for (let i = 1; i < dayOfWeek + 1; i++) {
            let first = currentDate.getDate() - currentDate.getDay() + i;
            let day = new Date(currentDate.setDate(first));
            week.push(day);
        }

        for (let i = dayOfWeek + 1; i <= 7; i++) {
            let first = currentDate.getDate() - currentDate.getDay() + i;
            let day = new Date(currentDate.setDate(first));
            week.push(day);
        }
        setWeek(week.map((item) => ({ weekDay: weekDays[item.getDay()], day: item.getDate().toString(), currentDate: new Date().getDate().toString(), date: item })))
    }

    const Day = ({ weekDay, day, currentDate }) => {
        return (
            <div className={classes.day}>
                <Typography className={classes.weekDay} variant="caption" >{weekDay}</Typography>
                <Divider variant="fullWidth" orientation="vertical" classes={ currentDate === day && { vertical: classes.divider }} />
                <div className={classes.dayNumber}>
                    <Typography className={classes.dayNumberText}>{day}</Typography>
                </div>
            </div>
        )
    }

    useEffect(() => {
        getCurrentWeek();
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.head}>
                <div className={classes.headContent}>
                <EventIcon color="primary" />
                <Typography className={classes.headText} >Weekly Progress</Typography>
                </div>
                <Button variant="text" color="primary">Set Next Week</Button>
            </div>
            <div className={classes.days}>
                { !!week.length && week.map((item) =><Day key={item.day} weekDay={item.weekDay} currentDate={item.currentDate} day={item.day} />) }
            </div>
        </div>
    );
};

const useStyles = makeStyles(styles, { name: CalendarProgress.name });

export default CalendarProgress;