// @flow
import { EventEmitter } from 'events';

/**
* @return {Array<Object>} An array of repository fetched from GitHub API
*/

export function fetchRepository(id: string) {
  return fetch(`https://api.github.com/users/${id}/repos`)
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return console.log('res bad');
    }
  });
}


// 今回使わない

export function fetchApi(id: string) {
  return fetch(`https://api.github.com/users/${id}`)
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return console.log('res bad');
    }
  });
}
