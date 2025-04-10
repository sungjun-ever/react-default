import { useState } from 'react';

export default function EffectHook() {
    const [id, setId] = useState('thisIsTestId');
    const [domain, setDomain] = useState('naver.com');
    const domains = ['naver.com', 'gmail.com', 'kakao.com'];

    console.log('App id', id);

    const onChangeId = (e) => {
        console.log('before setId', id);
        setId(e.target.value);
        console.log('after setId', id);
    }

    const onChangeDomain = (e) => {
        console.log(domain); // 초기값은 naver.com
        setDomain(e.target.value);
        console.log(domain); // set 이후에도 naver.com, 변경값은 다음 호출에서 적용됨
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
            <input type="password" />
            <button>로그인</button>
        </div>
    )
}