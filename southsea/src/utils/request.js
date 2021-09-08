import axios from 'axios';

const request = axios.create({
    timeout: 5000,
    baseURL: 'http://192.168.104.217:8280/',
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTGV2ZWwiOjMsImFkbWluaXN0cmF0aXZlQ29kZSI6IjQ0MDYwNSIsInNjb3BlIjpbImFsbCJdLCJsb2dpbk5hbWUiOiJhZG1pbiIsInVzZXJJZGVudGl0eSI6WyLljLrnuqfkv6Hmga_lkZgiXSwiZXhwIjoxNjY1ODc3NzU1LCJyb2xlTGlzdCI6WyLljLrnuqfnlKjmiLciXSwidXNlcklkIjoxLCJhdXRob3JpdGllcyI6WyJzeXM6c2NoZWR1bGU6aW5mbyIsInN5czp1c2VyOmxpc3QiLCJzeXM6cm9sZTpzYXZlIiwic3lzOnNjaGVkdWxlOmxvZyIsInN5czptZW51Omxpc3QiLCJzeXM6cm9sZTppbmZvIiwic3lzOnNjaGVkdWxlOmRlbGV0ZSIsInN5czpyb2xlOnVwZGF0ZSIsInN5czpzY2hlZHVsZTpsaXN0Iiwic3lzOnNjaGVkdWxlOnJlc3VtZSIsInN5czp1c2VyOmluZm8iLCJzeXM6dXNlcjpkZWxldGUiLCJzeXM6cm9sZTpkZWxldGUiLCJzeXM6bWVudTppbmZvIiwic3lzOnJvbGU6bGlzdCIsInN5czp1c2VyOnVwZGF0ZSIsInN5czpzY2hlZHVsZTp1cGRhdGUiLCJzeXM6dXNlcjpzYXZlIiwic3lzOnNjaGVkdWxlOnNhdmUiLCJzeXM6cm9sZTpzZWxlY3QiLCJzeXM6c2NoZWR1bGU6cGF1c2UiXSwianRpIjoiNzVlM2MxZGMtNDdhMC00OGFhLTlhYWQtMTJjMDk1YzQ2MjIwIiwiY2xpZW50X2lkIjoiY2xpZW50IiwidXNlcm5hbWUiOiJhZG1pbiJ9.6pzP2HJn55u3jszPCbYrMrKJx-H_pb4VXYzhbGWaJEY',
    },
});
export default {
    install(vm) {
        vm.proptotype.$server = server;
    },
};
