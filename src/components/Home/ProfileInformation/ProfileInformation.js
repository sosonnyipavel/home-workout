import React from 'react';
import { makeStyles } from '@material-ui/core';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageList from '@material-ui/core/ImageListItem';
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
        },
    ];

    return (
        <div className={classes.root}>
            <ImageList rowHeight={200} gap={1}  className={classes.imageList}>
                {itemData.map((item) => (
                <ImageListItem className={classes.imageListItem} key={item.img} style={ item.featured ? {height: '58%', width: '100%'} : {height: '24%', width: '28%'}}>
                    <img src={item.img} alt={item.title} />
                </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

const useStyles = makeStyles(styles, { name: ProfileInformation.name })

export default ProfileInformation;