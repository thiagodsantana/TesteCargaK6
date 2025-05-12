import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 20 },
        { duration: '3m', target: 20 },
        { duration: '1m', target: 0 },
    ],
    thresholds: {
        'http_req_duration': ['p(95)<1000'],
        'http_req_failed': ['rate<0.5'],
        'checks': ['rate>0.5'],
    },
};

const endpoints = [
    '/todos',
    '/posts',
    '/invalid-url',
    '/comments',
    '/another-fail-url',
];

export default function () {
    const baseUrl = __ENV.BASE_URL || 'https://jsonplaceholder.typicode.com';
    const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
    const url = `${baseUrl}${endpoint}`;

    const res = http.get(url);

    const success = check(res, {
        'status e 200': (r) => r.status === 200,
        'body contem userId': (r) => r.body.includes('"userId": 1'),
    });

    sleep(Math.random() * 2);
}
