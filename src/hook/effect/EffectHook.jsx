import { useState } from 'react';

export default function EffectHook() {
    const [id, setId] = useState(Math.random());
    const [domain, setDomain] = useState('naver.com');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState('');
    const domains = ['naver.com', 'gmail.com', 'kakao.com'];

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangeDomain = (e) => {
        setDomain(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onLogin = () => {
        setAuthenticated(`${id}@${domain},${password} 로그인 성공`);
    }

    return(
        <div>
            <div>
            <input type="text" value={id} onChange={onChangeId} />
            <span>@</span>
            {domain === '' ? <input type="text" /> : null}
            <select onChange={onChangeDomain}>
                {domains.map((d) => {
                return <option key={d} value={d}>{d}</option>
                })}
                <option value="">직접입력</option>
            </select>
            </div>
            <input type="password" value={password} onChange={onChangePassword} />
            <button onClick={onLogin}>로그인</button>
            <span>{authenticated}</span>
        </div>
    )
}