import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

const getUserAPI = async (email, password) => {
  return {access_token: email+ '_' + password + Math.random()}
}

const mapDispatchToProps = dispatch => {
  return {
    login: async (email, password) => {
      const data = await getUserAPI(email, password);
      dispatch({type: 'LOGGED_IN', payload: data})
    }
  }
}

const mapStateToProps = store => {
  return {
    isAuth: store.currentUser.isAuth,
    currentUser: store.currentUser,
  }
}

const LoginForm = (props) => {

  const handleLogin = e => {
    e.stopPropagation()
    const {email, password} = e.target.elements;
    props.login(email.value, password.value)
  }
  
  return (
    <form onSubmit={handleLogin}>
      <input type="text" name="email" placeholder="login"/>
      <input type="text" name="password" placeholder="password"/>
      <button type="submit">Submit</button>
    </form>
  )
}

const LoginFormWithStore = connect(null, mapDispatchToProps)(LoginForm)

const Main = () => {
  return (
    <div>
      <h1>Application</h1>
    </div>
  )
}


function App(props) {
  console.log(props.currentUser)
  return (
      <div className="App">
        {props.isAuth ? <Main/> : <LoginFormWithStore/>}
      </div>
  );
}

export default connect(mapStateToProps, null)(App)
