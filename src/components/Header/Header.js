import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core';
import styles from './Header.styles';
import logo from '../../assets/logo.png';
import profile from '../../assets/obi-wan.jpg'

const Header = (props) => {
    const classes = useStyles(props);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <AppBar color='default' position='relative'>
            <Toolbar className={classes.toolbar}>
                <img src={logo} alt="logo" className={classes.logo}/>
                <div className={classes.navigation}>
                    <Tabs
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        value={value}
                        onChange={handleChange}
                        className={classes.tabs}
                    >
                        <Tab classes={{ root: classes.tabRoot, wrapper: classes.tabWrapper }} icon={<HomeIcon/>} label="Home" index={0} />
                        <Tab classes={{ root: classes.tabRoot, wrapper: classes.tabWrapper }} icon={<PeopleIcon/>} label="Clients" index={1}/>
                        <Tab classes={{ root: classes.tabRoot, wrapper: classes.tabWrapper }} icon={<FitnessCenterIcon/>} label="Workout" index={2} />
                        <Tab classes={{ root: classes.tabRoot, wrapper: classes.tabWrapper }} icon={<MailOutlineIcon/>} label="Message" index={3} />
                    </Tabs>
                    <div className={classes.profile}>
                        <Avatar className={classes.avatar} alt="Avatar" src={profile} />
                        <Typography style={{ marginLeft: '10px' }} >Uikreative</Typography>
                        <IconButton color="primary" onClick={handleClick} >
                            <ExpandMoreIcon />
                        </IconButton>
                        <Menu
                            id="menu"
                            classes={{ paper: classes.menu }}
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Settings</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles(styles, { name: Header.name });

export default Header;