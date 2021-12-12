# msw-test

- BE 의존성 해결을 위하여 Mock 데이터를 만들어보자.

- [NPM](https://www.npmjs.com/package/msw)
- [DOC](https://mswjs.io/)

- 시작

  1. 설치 : `npm install msw --save-dev`
  2. 폴더 생성 : `mkdir src/mocks`
  3. 파일 생성 후 예제 코드 넣기 : `touch src/mocks/handlers.js`
  4. MSW init 명령어 실행 : `npx msw init public/ --save`
     [Where is my "public" directory?](https://mswjs.io/docs/getting-started/integrate/browser#where-is-my-public-directory)
  5. worker 설정 파일 생성 후 예제 코드 넣기: `touch src/mocks/browser.js`
  6. main.js에서 개발 환경일 때만 msw를 사용하도록 추가
  7. 프로젝트를 실행하여 console 창에 `[MSW] Mocking enabled.`가 뜨는 것 확인
  8. 테스트 코드 작성 및 실행

- 참고
  - [Mocking으로 생산성까지 챙기는 FE 개발](https://tech.kakao.com/2021/09/29/mocking-fe/)
