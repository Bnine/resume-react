# Bongkyu Kim's Resume Front-end Document
## 1. ReactJS structure
- pages
```
    * /src/pages/Home.js
        - 홈 페이지용 Page 입니다. language 관련 state를 관리 합니다.
        - For Home page. Handling language state.
        - ホームページ用。言語のstateを管理します。
```
- components
```
    * /src/components/Header.js
        - 헤더 컴포넌트입니다. 언어를 선택할 수 있습니다.
        - Header component. Selecting language
        - Header用componentです。言語を選択します。
    * /src/components/Profileinfo.js
        - https://resume-api.bnine.site/api/v1/profile API를 호출하여 기본 프로필 데이터를 처리합니다.
        - Call https://resume-api.bnine.site/api/v1/profile API and Handling profile data.
        - https://resume-api.bnine.site/api/v1/profile APIを呼び出して基本プロファイルデータを処理します。
    * /src/components/Techstack.js
        - 김봉규의 Techshare의 데이터를 관리합니다.
        - Include Techshare's data
        - キムボンキュのTechshareのデータを処理します。
    * /src/components/Project.js
        - https://resume-api.bnine.site/api/v1/profile/projects API를 호출하여 프로젝트 상세 데이터를 처리합니다.
        - Call https://resume-api.bnine.site/api/v1/profile/projects API and Handling project data.
        - https://resume-api.bnine.site/api/v1/profile/projects APIを呼び出してプロジェクトデータを処理します。
    * /src/components/Contact.js
        - 사용자가 입력한 내용을 https://resume-api.bnine.site/api/v1/contact/sending-email API로 POST 전송 한 후 API Response 데이터를 처리합니다.
        - POST Entered user's content to https://resume-api.bnine.site/api/v1/contact/sending-email API and Handling Response data.
        - 入力した内容をhttps://resume-api.bnine.site/api/v1/contact/sending-email APIにPOST送信した後、API Responseデータを処理します。
```
- Multiple Languages(Developed by 'react-i18next' library)
```
    * /src/lang/locales/ko/page.json
        - 한국어
        - Korean
        - 韓国語
    * /src/lang/locales/en/page.json
        - 영어
        - Korean
        - 英語
    * /src/lang/locales/jp/page.json
        - 일본어
        - Korean
        - 日本語
```
- Routing(Developed by 'react-router-dom' library)
```
    * /src/App.js
```