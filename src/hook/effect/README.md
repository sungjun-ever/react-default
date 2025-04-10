# useEffect 주의사항

## 상태변경 시점
```
const [domain, setDomain] = useState('naver.com');

const onChangeDomain = (e) => {
    console.log(domain); // 초기값은 naver.com
    setDomain(e.target.value);
    console.log(domain); // set 이후에도 naver.com, 변경값은 다음 호출에서 적용됨
}
```

## 파생 상태
```
const [id, setId] = useState('thisIsTestId');
const [domain, setDomain] = useState('naver.com');
const [fullEmail, setFullEmail] = useState('');
const domains = ['naver.com', 'gmail.com', 'kakao.com'];

const onChangeId = (e) => {
    setId(e.target.value);
    setFullEmail(`${e.target.value}@${domain}`);
}

const onChangeDomain = (e) => {
    setDomain(e.target.value);
    setFullEmail(`${id}@${e.target.value}`);
}
```
위와 같이 두 개의 상태를 조합해서 상태를 만들 필요가 없음.  
기존 두 개의 상태를 {id + '@' + domain} 합쳐주면 됨.  
React의 베이스는 Javascript.