import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    root: {
        minHeight: '10vh',
        display: 'flex',
        justifyContent:'center',
        backgroundImage: `url(${'https://wallpaperaccess.com/full/1826243.jpg'})`,
    },
    
    subcard:{
        backgroundColor: 'rgb(255,255,255,0.8)',
        display: 'flex',
        justifyContent:'center',
        margin: '2px',
        width: '100%',
        alignItems: 'center',
    },

    details:{
        color:'#fff',
        backgroundColor: 'rgb(0,0,0,0.5)',
    },

}));