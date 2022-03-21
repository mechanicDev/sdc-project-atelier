import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
  vus: 100,
  duration: '30s'
};

export default function() {
  http.get('http://54.159.168.95/qa/questions?product_id=789');
  sleep(1);
}

