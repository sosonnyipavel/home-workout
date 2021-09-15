const styles = (theme) => ({
    root: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        borderRadius: 8,
        padding: 24,
    },
    imageList: {
        // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%'
    },
    imageListItem: {
        display: 'inline-flex',
        listStyle: 'none',
        padding: 4
    }
});

export default styles;