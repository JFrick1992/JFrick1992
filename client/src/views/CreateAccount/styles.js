import { makeStyles } from '@material-ui/core/styles'
const createAccountStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginStyle: {
    backgroundColor: 'white',
    maxHeight: '50%',
    marginTop: '50%',
    marginBottom: '50%',
    paddingBottom: '2rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    borderRadius: '.8rem',
    paddingTop: '1rem',
    display: 'inline-table'
  },
  avatar: {
    // margin: theme.spacing(1),
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: '#05b0b0cc',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    '&: hover': {
      cursor: 'pointer',
      backgroundColor: '#2E7D32 !important'
    },
    margin: theme.spacing(3, 0, 2),
    color: 'white',
    border: '1px solid rgba(63, 151, 181, 0.5)',
    height: '50px',
    width: 'calc(100% - 10vh)',
    // padding: 0 30px',
    // background: 'linear-gradient(45deg, #6900bcba 16%, rgba(5, 176, 176, 0.8) 99%)',
    backgroundColor: '#4caf50',
    boxShadow: '0 3px 5px 2px #90ee9066',
    //margin-top: 14px',
    borderRadius: '3px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  },
  onLinkHover: {
    '&: hover': {
      cursor: 'pointer',
    }
  },

  backgroundImage: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${"../assets/images/backgroundImage.jpg"})`,
    ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
      backgroundRepeat: 'round'
    },
  },
  textCenter: {
    textAlign: 'center',
    marginTop: '1rem'
  },
  link: {
    textDecoration: 'none'
  }
}))
export default createAccountStyles