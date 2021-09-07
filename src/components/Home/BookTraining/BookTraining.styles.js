const styles = (theme) => ({
    root: {
        backgroundColor: '#fff',
        width: '100%',
        display: 'flex',
        padding: 24,
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        width: 80,
        height: 'auto'
    },
    trainingInformation: {
        display: 'flex',
        flexDirection: 'row'

    },
    trainingDate: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 16
        // color: '#8d929e'
    },
    button: {
        borderRadius: 50,
        color: 'white',
        padding: '12px 32px',
        fontSize: '1rem',
        fontWeight: '600' 
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