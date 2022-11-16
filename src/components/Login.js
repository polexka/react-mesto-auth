import { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import Form from "./Form";

function Login(props) {
  const history = useHistory();
  props.loggedIn && history.push('/');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({
      email: email,
      password: password
    });
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="auth">
      <Form
        title="Вход"
        name="sign-in"
        onSubmit={handleSubmit}
        button="Войти"
        dark
      >
        <label className="form__field">
          <input type="email" name="email" id="email-input" placeholder="Email" className="form__input form__input_dark" value={email} onChange={handleEmailChange} required minLength="2" maxLength="40" />
          <span className="email-input-error form__input-error"></span>
        </label>
        <label className="form__field">
          <input type="password" name="password" id="password-input" placeholder="Пароль" className="form__input form__input_dark" value={password} onChange={handlePasswordChange} required minLength="2" maxLength="200" />
          <span className="password-input-error form__input-error"></span>
        </label>
      </Form>
    </div>
  )
}

export default withRouter(Login);