import { useState } from 'react';

export default function EffectHook() {
    const [domain, setDomain] = useState('naver.com');
    const domains = ['naver.com', 'gmail.com', 'kakao.com'];

    return(
        <div>
            <div>
            <input type="text" />
            <span>@</span>
            {domain === '' ? <input type="text" /> : null}
            <select onChange={(e) => setDomain(e.target.value)}>
                {domains.map((d) => {
                return <option key={d} value={d}>{d}</option>
                })}
                <option value="">직접입력</option>
            </select>
            </div>
            <input type="password" />
            <button>로그인</button>
        </div>
    )
}