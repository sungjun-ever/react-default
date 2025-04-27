# 1. useEffect

## 상태변경 시점
```
const [domain, setDomain] = useState('naver.com');

const onChangeDomain = (e) => {
    console.log(domain); // 초기값은 naver.com
    setDomain(e.target.value);
    console.log(domain); // set 이후에도 naver.com, 변경값은 다음 호출에서 적용됨
}
```
상태가 변경 될 때마다 component 함수를 실행하는데, 상태가 변경 될 떄는 set\*를 사용 했을 떄에만 변경.  
예를 들어, Math.random()이 초기값으로 들어가도 set\*으로 상태를 변경한게 아니면 초기값은 변경되지 않음.

초기값으로 어떠한 계산이나 복잡한 로직이 들어가는 경우에는 문제가 생길 수 있음.  
예를 들어, const [some, setSome] = useState(someMethod());  
이런 식으로 설정하면 component가 다시 호출 될 때마다 메서드가 돌면서 랜더링 성능에 문제가 생김.  
- 해결방법(지연초기화/초기화함수 사용):  
const [some, setSome] = useState(() => someMethod()); 또는  
const [some, setSome] = useState(someMethod);  
이렇게 설정하면 초기 한 번은 느릴 수 있어도, 두 번째부터는 처음 초기화된 값을 가져와서 괜찮음.

```
setCount(count + 2);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 3);
연속해서 set을 사용해도 최종적으로 사용된 +3만 적용된다.

setCount(prev => prev + 2);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 3);
이 경우에는 이전 값을 기준으로 오르기 때문에 더한만큼 올라간다. +8

setCount(count + 2);
setCount(prev => prev + 1);
setCount(prev => prev + 3);
이 경우에는 이전값이 +2된 상태로 +1, +3이 진행
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

## 상태변경 랜더링 시점
여러 상태변경이 일어나도 배열에 담아놓고 시간을 두고  
더 이상 변경이 일어나지 않으면 상태변경을 적용하고 해당 컴포넌트 재랜더링이 일어난다.


# 2. useRef
```
랜더링에 필요지 않은 값을 참조할 수 있는 Hook
(1) 값 참조
(2) DOM 조작
(3) 콘텐츠 재생성 피하기 
```