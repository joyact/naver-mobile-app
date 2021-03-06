import React, { useState } from 'react';
import { LoginForm, LoginInput, LoginButton } from './elements/LoginForm';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { fetchLogin } from './service';

function Form() {
  const { setUser } = useUserContext();
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    id: '',
    password: '',
  });
  const { id, password } = formValues;

  const handleFormValues = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await fetchLogin({ id, password }); // 로그인 요청
      setUser(user);
      history.replace('/'); // 홈으로
    } catch (error) {
      console.log('error', error);
      window.alert(error);
    }
  };

  const isSubmittable = id && password;

  return (
    <LoginForm onSubmit={handleSubmit}>
      <LoginInput
        id="id"
        type="text"
        value={id}
        placeholder="아이디"
        onChange={handleFormValues}
      />
      <LoginInput
        id="password"
        type="password"
        value={password}
        placeholder="비밀번호"
        onChange={handleFormValues}
      />
      <LoginButton disabled={!isSubmittable}>로그인</LoginButton>
    </LoginForm>
  );
}

export default Form;
