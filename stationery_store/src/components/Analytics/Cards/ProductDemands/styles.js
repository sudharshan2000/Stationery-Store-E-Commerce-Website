import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        minHeight: '10vh',
        display: 'flex',
        justifyContent:'center',
        backgroundImage: `url(${'https://cdn.hipwallpaper.com/i/62/13/7HjT0g.jpg'})`,
    },
    
    subcard:{
        backgroundColor: 'rgb(255,255,255,0.8)',
        display: 'flex',
        justifyContent:'center',
        margin: '20px',
        width: '100%',
        fontWeight: '50px',
        alignItems: 'center',
    },

    details:{
        color:'#fff',
        backgroundColor: 'rgb(0,0,0,0.5)',
    },

    button:{
        alignItems:'center',
    },

}));