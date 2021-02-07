import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from '../Login/Login.elements';
import { LabelWrapper, JoinLabel, JoinButton } from './Join.elements';
import { requestSignup } from './service';

function JoinForm() {
  const [formValues, setFormValues] = useState({
    id: '',
    password: '',
    rePassword: '',
    name: '',
  });

  const history = useHistory();
  const { id, password, rePassword, name } = formValues;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleSubmit = async () => {
    if (await requestSignup({ id, password, name })) {
      history.push('/login');
      window.alert('회원가입 성공. 가입한 아이디로 로그인해주세요');
    } else {
      window.alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
    }
  };

  const isMatchedPassword = password === rePassword;
  const isSubmittable = isMatchedPassword && id && password && name;

  return (
    <>
      <LabelWrapper>
        <JoinLabel htmlFor="id">아이디</JoinLabel>
        <Input
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={handleChange}
          required
        />

        <JoinLabel htmlFor="password">비밀번호</JoinLabel>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <JoinLabel htmlFor="rePassword">비밀번호 재확인</JoinLabel>
        <Input
          type="password"
          id="rePassword"
          name="rePassword"
          value={rePassword}
          onChange={handleChange}
          required
        />
      </LabelWrapper>
      <LabelWrapper>
        <JoinLabel htmlFor="name">이름</JoinLabel>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </LabelWrapper>
      <JoinButton disabled={!isSubmittable} onClick={handleSubmit}>
        가입하기
      </JoinButton>
    </>
  );
}

export default JoinForm;