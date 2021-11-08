const styles = (theme) => ({
    root: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 8,
        marginTop: 24
    },
    head: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 16
    },
    headContent: {
        display: 'flex'
    },
    headText: {
        fontWeight: 600,
        marginLeft: 8
    },
    days: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      padding: 16
    },
    weekDay: {
        color: theme.palette.text.hint
    },
    divider: {
        width: '100%',
        border: '2px solid #E6B964',
        marginBottom: '-4px'
    },
    day: {
        alignItems: 'center',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    dayNumber: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        width: 48,
        border: '2px solid #54D190',
        borderRadius: '50%',
        marginTop: 32,
    },
    dayNumberText: {
        fontSize: 24
    }
  });
  
  export default styles;