import request from '../utils/request';
import qs from 'qs';

// 用户注册
export const register = (data) => {
    let aa = qs.stringify(data);
    return request({
        method: 'POST',
        url: '/uaa/user/register',
        data: aa,
    });
};

// 验证码
export const VerificationCode = (data) => {
    let aa = qs.stringify(data);
    return request({
        method: 'POST',
        url: '/uaa/user/sendMsg',
        data: aa,
    });
};

// 登录
export const login = (data) => {
    let aa = qs.stringify(data);
    return request({
        method: 'POST',
        url: '/uaa/oauth/token',
        data: aa,
        // headers: {
        //     Authorization: 'Basic Y2xpZW50OnNlY3JldA==',
        // },
        auth: {
            username: 'client',
            password: 'secret',
        },
    });
};

// 修改密码
export const resetPasswd = (data) => {
    let aa = qs.stringify(data);
    return request({
        method: 'POST',
        url: '/uaa/user/resetPasswd',
        data: aa,
    });
};

// 生产
export const productionBase = (aa = 1, bb = 10) => {
    return request({
        method: 'GET',
        url:
            '/rbac/data/subject/getSubjectInfoList?pageNumber=' +
            aa +
            '&pageSize=' +
            bb,
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTGV2ZWwiOjMsImFkbWluaXN0cmF0aXZlQ29kZSI6IjQ0MDYwNSIsInNjb3BlIjpbImFsbCJdLCJsb2dpbk5hbWUiOiJhZG1pbiIsInVzZXJJZGVudGl0eSI6WyLljLrnuqfkv6Hmga_lkZgiXSwiZXhwIjoxNjY1ODc3NzU1LCJyb2xlTGlzdCI6WyLljLrnuqfnlKjmiLciXSwidXNlcklkIjoxLCJhdXRob3JpdGllcyI6WyJzeXM6c2NoZWR1bGU6aW5mbyIsInN5czp1c2VyOmxpc3QiLCJzeXM6cm9sZTpzYXZlIiwic3lzOnNjaGVkdWxlOmxvZyIsInN5czptZW51Omxpc3QiLCJzeXM6cm9sZTppbmZvIiwic3lzOnNjaGVkdWxlOmRlbGV0ZSIsInN5czpyb2xlOnVwZGF0ZSIsInN5czpzY2hlZHVsZTpsaXN0Iiwic3lzOnNjaGVkdWxlOnJlc3VtZSIsInN5czp1c2VyOmluZm8iLCJzeXM6dXNlcjpkZWxldGUiLCJzeXM6cm9sZTpkZWxldGUiLCJzeXM6bWVudTppbmZvIiwic3lzOnJvbGU6bGlzdCIsInN5czp1c2VyOnVwZGF0ZSIsInN5czpzY2hlZHVsZTp1cGRhdGUiLCJzeXM6dXNlcjpzYXZlIiwic3lzOnNjaGVkdWxlOnNhdmUiLCJzeXM6cm9sZTpzZWxlY3QiLCJzeXM6c2NoZWR1bGU6cGF1c2UiXSwianRpIjoiNzVlM2MxZGMtNDdhMC00OGFhLTlhYWQtMTJjMDk1YzQ2MjIwIiwiY2xpZW50X2lkIjoiY2xpZW50IiwidXNlcm5hbWUiOiJhZG1pbiJ9.6pzP2HJn55u3jszPCbYrMrKJx-H_pb4VXYzhbGWaJEY',
        },
    });
};

export const productionInformation = (aa = 1, bb = 10) => {
    return request({
        method: 'GET',
        url:
            'rbac/data/LandInfo/getList?pageNumber=' +
            aa +
            '&pageSize=' +
            bb +
            '&systemTypes=SS1', // 鱼塘
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTGV2ZWwiOjMsImFkbWluaXN0cmF0aXZlQ29kZSI6IjQ0MDYwNSIsInNjb3BlIjpbImFsbCJdLCJsb2dpbk5hbWUiOiJhZG1pbiIsInVzZXJJZGVudGl0eSI6WyLljLrnuqfkv6Hmga_lkZgiXSwiZXhwIjoxNjY1ODc3NzU1LCJyb2xlTGlzdCI6WyLljLrnuqfnlKjmiLciXSwidXNlcklkIjoxLCJhdXRob3JpdGllcyI6WyJzeXM6c2NoZWR1bGU6aW5mbyIsInN5czp1c2VyOmxpc3QiLCJzeXM6cm9sZTpzYXZlIiwic3lzOnNjaGVkdWxlOmxvZyIsInN5czptZW51Omxpc3QiLCJzeXM6cm9sZTppbmZvIiwic3lzOnNjaGVkdWxlOmRlbGV0ZSIsInN5czpyb2xlOnVwZGF0ZSIsInN5czpzY2hlZHVsZTpsaXN0Iiwic3lzOnNjaGVkdWxlOnJlc3VtZSIsInN5czp1c2VyOmluZm8iLCJzeXM6dXNlcjpkZWxldGUiLCJzeXM6cm9sZTpkZWxldGUiLCJzeXM6bWVudTppbmZvIiwic3lzOnJvbGU6bGlzdCIsInN5czp1c2VyOnVwZGF0ZSIsInN5czpzY2hlZHVsZTp1cGRhdGUiLCJzeXM6dXNlcjpzYXZlIiwic3lzOnNjaGVkdWxlOnNhdmUiLCJzeXM6cm9sZTpzZWxlY3QiLCJzeXM6c2NoZWR1bGU6cGF1c2UiXSwianRpIjoiNzVlM2MxZGMtNDdhMC00OGFhLTlhYWQtMTJjMDk1YzQ2MjIwIiwiY2xpZW50X2lkIjoiY2xpZW50IiwidXNlcm5hbWUiOiJhZG1pbiJ9.6pzP2HJn55u3jszPCbYrMrKJx-H_pb4VXYzhbGWaJEY',
        },
    });
};
