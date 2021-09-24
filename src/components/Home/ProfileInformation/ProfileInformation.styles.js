const styles = (theme) => ({
    root: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        borderRadius: 8,
        padding: 24,
    },
    imageList: {
        display: 'inline-block',
        width: '100%',
        height: '60%'
    },
    imageListItem: {
        display: 'inline-block',
        listStyle: 'none',
        padding: 4,
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    profileInfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        paddingLeft: 24,
        paddingRight: 24
    },
    textInfo: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    profileLocation: {
        color: theme.palette.text.secondary,
        fontWeight: 600,
        fontSize: '0.75rem',
    },
    profileParameters: {
        color: theme.palette.text.secondary,
        fontSize: '0.70rem',
    },
    button: {
        borderRadius: 50,
        width: '100%',
        color: 'white',
        marginTop: 24,
        fontSize: '1rem',
        fontWeight: 600 
    },
    iconArrow: {
        width: 28,
        marginRight: -16,
        height: 'auto',
        borderRadius: '50%',
        background: '#47c07a',
        padding: 4,
    }
});

export default styles;