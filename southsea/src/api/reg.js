import request from '../utils/request';
import qs from 'qs';

// 用户注册
export const register = (data) => {
    let aa = qs.stringify(data);
    return request({
        method: 'POST',
        url: '/uaa/user/register',
        data: {},
    });
};
