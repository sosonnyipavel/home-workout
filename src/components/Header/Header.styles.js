const styles = (theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 90
    },
    navigation: {
        display: 'flex',
        alignItems: 'center'
    },
    tabs: {
        justifyContent: 'space-between'
    },
    tabRoot: {
        height: 90,
        minWidth: 'unset'
    },
    tabWrapper: {
        flexDirection: 'row',
        '& >svg': {
            marginRight: 8,
            marginBottom: '0px !important',
            color: theme.palette.primary.main
        }
    },
    logo:{
        width: 90,
        height: 'auto',
        position: 'relative'
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatar: {
        width: 40,
        height: 40,
        position: 'relative'
    },
    menu: {
        top: '88px !important'
    }
});

export default styles;