// 로그인 한 유저의 데이터 객체를 변환하는 함수
export const getLoginUserInfo = () => {
    return {
        token : sessionStorage.getItem('ACCESS_TOKEN'),
        userName : sessionStorage.getItem('LOGIN_USERNAME'),
        role : sessionStorage.getItem('USER_ROLE')
    };
};

export const isLogin = () => !!sessionStorage.getItem('ACCESS_TOKEN');