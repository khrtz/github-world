// @flow
import { EventEmitter } from 'events';

/**
* @return {Array<Object>} An array of repository fetched from GitHub API
*/

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

export function fetchRepo(id: string) {
  return fetch(`https://api.github.com/users/${id}/repos`)
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return console.log('res bad');
    }
  });
}

export function fetchReceivedEvents() {
  return fetch(`https://api.github.com/users/khrtz/received_events`)
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return console.log('res bad');
    }
  });
}
