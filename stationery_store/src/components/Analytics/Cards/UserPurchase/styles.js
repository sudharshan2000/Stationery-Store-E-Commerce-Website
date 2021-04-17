import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    root: {
        minHeight: '10vh',
        display: 'flex',
        justifyContent:'center',
    },
    
    subcard:{
        backgroundColor: 'rgb(0,0,0,0.5)',
        display: 'flex',
        justifyContent:'center',
        margin: '10px',
        width: '100%',
        color: '#fff',
        alignItems: 'center',
    },

    details:{
        color:'#000',
    },

}));