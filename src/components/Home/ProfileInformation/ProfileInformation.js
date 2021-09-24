import React from 'react';
import { makeStyles } from '@material-ui/core';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageList from '@material-ui/core/ImageListItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlusOne from '@material-ui/icons/PlusOne';
import styles from './ProfileInformation.styles';
import fit_1 from '../../../assets/img/fit_1.jpg';
import fit_2 from '../../../assets/img/fit_2.jpg';
import fit_3 from '../../../assets/img/fit_3.jpg';
import fit_4 from '../../../assets/img/fit_4.jpg';

const ProfileInformation = (props) => {
    const classes = useStyles(props);

    const itemData = [
        {
            img: fit_1,
            title: 'fit_1',
            featured: true,
        },
        {
            img: fit_2,
            title: 'fit_2',
            featured: false,
        },
        {
            img: fit_3,
            title: 'fit_3',
            featured: false,
        },
        {
            img: fit_4,
            title: 'fit_4',
            featured: false,
        }
    ];

    return (
        <div className={classes.root}>
            <ImageList rowHeight={200} gap={1}  className={classes.imageList}>
                {itemData.map((item) => (
                <ImageListItem className={classes.imageListItem} key={item.img} style={ item.featured ? {height: '54%', width: '100%'} : {height: '24%', width: '24%'}}>
                    <img src={item.img} alt={item.title} />
                </ImageListItem>
                ))}
                <ImageListItem className={classes.imageListItem} style={{height: '24%', width: '24%'}}>
                    <Typography style={{ color: '#319ed2' }} >2+</Typography>
                </ImageListItem>
            </ImageList>
            <div className={classes.profileInfo}>
                <div className={classes.textInfo}>
                    <Typography variant='h5' >Therese Spring</Typography>
                    <Typography variant='subtitle2' style={{ color: '#319ed2' }}>@thespring</Typography>
                    <span className={classes.profileLocation}>Los Angeles, CA</span>
                    <span className={classes.profileParameters}>Client est: 2/23/17 Height: 5'6"</span>
                </div>
                <Button variant="contained" color="secondary" className={classes.button}>Message</Button>
                <Button variant="contained" color="primary" className={classes.button} startIcon={<PlusOne className={classes.icon}/>} >Add Package</Button>
            </div>
        </div>
    );
}

const useStyles = makeStyles(styles, { name: ProfileInformation.name })

export default ProfileInformation;