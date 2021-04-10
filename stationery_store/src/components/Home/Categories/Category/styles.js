import { makeStyles } from '@material-ui/core/styles';

  export default makeStyles((theme) =>({

    root: {
        maxWidth: 345,
        background: 'rgb(0,0,0,0.5)',
        margin: '10px',
      },
      media: {
        height: 140,
      },
    title:{
        fontWeight:'bold',
        color: '#fff',
    },
    desc:{
        color: '#fff',
        fontStyle: 'italic',
    }
}));