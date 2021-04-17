import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        minHeight: '10vh',
        display: 'flex',
        justifyContent:'center',
        // backgroundImage: `url(${'https://cdn.hipwallpaper.com/i/62/13/7HjT0g.jpg'})`,
    },
    
    subcard:{
        display: 'flex',
        justifyContent:'center',
        margin: '10px',
        color: '#fff',
        width: '100%',
        backgroundColor: 'rgb(0,0,0,0.5)',
        fontWeight: '50px',
        alignItems: 'center',
    },

    details:{
        color:'#000',
    },

    button:{
        alignItems:'center',
    },

}));