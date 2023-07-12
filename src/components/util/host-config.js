// 브라우저에서 현재 클라이언트의 호스트 이름 얻기
const clientHostName = window.location.hostname;

// 백엔드 서버 호스트 이름
let backEndHostName;

if(clientHostName === 'localhost') { //개발중일때
    backEndHostName = 'http://localhost:8181';
} else if(clientHostName === 'overthehorizon.com') {
    backEndHostName = 'https://overthehorizon.com';
}

export const API_BASE_URL = backEndHostName;
export const USER = 'api/auth';