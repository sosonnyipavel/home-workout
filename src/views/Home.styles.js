const styles = (theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: '#EFF1F5',
        width: '100%',
        height: '100%'
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
        margin: '24px 136px',
        width: '100%',
        height: '100%'
    },
    breadcrumbContainer: {

    },
    content: {
        marginTop: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sideBarContainer: {
        width: '30%',
        height: 600,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12
    },
    mainContainer: {
        width: '70%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 12
    }
});

export default styles;