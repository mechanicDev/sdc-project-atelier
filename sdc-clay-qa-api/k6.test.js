import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
  vus: 10000,
  duration: '30s'
};

export default function() {
  http.get('http://3.95.153.56/qa/questions?product_id=914657');
  sleep(1);
}

