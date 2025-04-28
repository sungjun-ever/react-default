import {memo} from "react";

function EmailInput({errors, id, ref, domain, onChangeId, onChangeDomain}) {
  
  const domains = ['naver.com', 'gmail.com', 'kakao.com'];

  return (
    <div>
      <label>아이디</label>
      <input ref={ref} type="text" value={id} onChange={onChangeId} />
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

export default memo(EmailInput);