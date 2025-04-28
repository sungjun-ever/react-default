import './App.css'
import { useState, useCallback } from 'react';
import EmailInput from './components/EmailInput';
import Input from './components/input';
import useInput from "./hooks/useInput.jsx";

function Signup() {
  const [id, idRef, onChangeId] = useInput('');
  const [nickname, nicknameRef, onChangeNickname] = useInput('');
  const [phone, phoneRef, onChangePhone] = useInput('');
  const [password, passwordRef, onChangePassword] = useInput('');
  const [domain, setDomain] = useState('naver.com');

  const [errors, setErrors] = useState({});
  const [authenticated, setAuthenticated] = useState('');

  const onChangeDomain = useCallback((e) => {
    setDomain(e.target.value);
  }, []);

  const onRegister = () => {
    if (!id.trim()) {
      // setErrors(prev => ({...prev, idError: '아이디를 입력해주세요.'}));
      // 이전 상태를 참조하여 새로운 상태를 생성, 아래와 같은 역할을 하지만 이전 값이 필요한 경우가 있음
      setErrors({ ...errors, idError: '아이디를 입력해주세요.' });
      idRef.current?.focus();
      return;
    }

    if (!password.trim()) {
      setErrors({ ...errors, passwordError: '비밀번호를 입력해주세요.' });
      passwordRef.current?.focus();
      return;
    }

    if (!nickname.trim()) {
      setErrors({ ...errors, nicknameError: '닉네임을 입력해주세요.' });
      nicknameRef.current?.focus();
      return;
    }

    if (!phone.trim()) {
      setErrors({ ...errors, phoneError: '전화번호를 입력해주세요.' });
      phoneRef.current?.focus();
      return;
    }
    
    setErrors({});
    setAuthenticated(`${id}@${domain},${password} 회원가입 성공`);

  }

  return (
    <div>
      <EmailInput errors={errors} id={id} domain={domain} onChangeId={onChangeId} onChangeDomain={onChangeDomain} ref={idRef} />
      <Input label="비밀번호" type="password" name="password" value={password} onChange={onChangePassword} error={errors.passwordError} ref={passwordRef} />
      <Input label="닉네임" type="text" name="nickname" value={nickname} onChange={onChangeNickname} error={errors.nicknameError} ref={nicknameRef} />
      <Input label="전화번호" type="text" name="phone" value={phone} onChange={onChangePhone} error={errors.phoneError} ref={phoneRef} />
      <button onClick={onRegister}>회원가입</button>
      <span>{authenticated}</span>
    </div>
  )
}

export default Signup
