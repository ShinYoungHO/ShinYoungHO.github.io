bind 관련
class 내에서는 bind this를 해주지 않으면 this가 undefined->window를 봐야하는데, class내에서는 strict모드로 작동하므로 this를 명시해줘야함
호출되는 메서드가 다른곳에서 호출이 되기 떄문에 this를 고정해줘야함.


lifting stateup
상위컴포넌트의 상태를 변경해야할 때 -> 글로벌 스테이트.
props - readOnly

useEffect : checked 값이 바뀔때마다 실행?
state hook : class에서만 사용할 수 있었던 state를 함수에서 사용할 수 있다,
useReducer : 경우에 따라 다른 ㅏㅎㅁ수 사용가능
useCallback, useMemo : 작업량이 많은 경우사용