**해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**

- `/` → `root` 페이지
- `/about` → `about` 페이지

**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

**3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**

```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

**4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**

```tsx
const { push } = useRouter();
```

**5) 구현방법.**

1. 브라우저에서 뒤로 가기, 앞으로 가기가 동작하는 이유는 히스토리 스택에 URL 정보가 쌓이기 때문
2. history.pushState()로 브라우저의 히스토리 스택에 히스토리를 추가할 수 있음
3. 사용자의 히스토리 탐색으로 현재 활성화된 히스토리가 변경되면 popstate 이벤트가 발생
4. ❗️history.pushState()로는 발생하지 않고 뒤로 가기, 앞으로 가기로만 발생
5. location.pathname을 이용하여 현재 경로를 가져올 수 있음
6. Router 컴포넌트는 컨텍스트 프로바이더 역할
7. 현재 pathname을 자식 컴포넌트에서 조회할 수 있게 해줌
8. popstate 이벤트도 여기다 1번만 등록
9. Route 컴포넌트는 컨텍스트를 조회해서 현재 pathname이 props로 받아온 path와 동일하면 렌더링
10. 각 페이지의 링크는 클릭하면 useRouter 훅을 사용해서 pushState()하도록 핸들러 추가
11. pushState()는 popstate 이벤트를 발생시키지 않으므로 useRouter 훅은 이벤트를 인위적으로 발생시켜야 함: dispatchEvent()