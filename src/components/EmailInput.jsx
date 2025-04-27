import { useState, useRef } from 'react';

export default function EmailInput({errors}) {
  const [id, setId] = useState();
  const [domain, setDomain] = useState('naver.com');
  const idRef = useRef(null);
  const domains = ['naver.com', 'gmail.com', 'kakao.com'];

  const onChangeId = (e) => {
    setId(e.target.value);
  }

  const onChangeDomain = (e) => {
    setDomain(e.target.value);
  }

  return (
    <div>
      <label>아이디</label>
      <input ref={idRef} type="text" value={id} onChange={onChangeId} />
      {errors.idError && <span>{errors.idError}</span>}
      <span>@</span>
      {domain === '' ? <input type="text" /> : null}
      <select onChange={onChangeDomain}>
        {domains.map((d) => {
          return <option key={d} value={d}>{d}</option>
        })}
        <option value="">직접입력</option>
      </select>
    </div>
  )
}