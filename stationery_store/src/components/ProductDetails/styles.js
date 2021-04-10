import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        minHeight: '50vh',
        maxWidth: '100%',
        color: '#000',
        display: 'flex',
        height: '100%',
        justifyContent:'center',
        marginTop: '80px',
        marginBottom: '20px',
    },

    media:{
      margin:'20px 20px',
    },

    button:{
      margin:'0 20px',
  },
}));