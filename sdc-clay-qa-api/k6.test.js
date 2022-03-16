import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
  vus: 200,
  duration: '30s'
};

export default function() {
  http.get('http://127.0.0.1:5050/qa/questions?product_id=10');
  sleep(1);
}

