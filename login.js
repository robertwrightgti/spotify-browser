const API_URL = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = '3b438c591ae945fbbd09f7de65a0f694';
// const REDIRECT_URL = 'https://library.cha-king.com/?display=artist';
const REDIRECT_URL = 'https://robertwrightgti.github.io/spotify-browser/index.html?display=artist';

const LOCAL_ADDR = [
    'localhost',
    '127.0.0.1',
    'http://127.0.0.1:5500'
];

document.getElementById('auth-button').onclick = async () => {
    const state = Math.random().toString(36).substring(2);
    window.sessionStorage.setItem('state', state);

    // const redirect_uri = (window.location.hostname === 'localhost') ? 'http://localhost/?display=artist' : REDIRECT_URL;
    const redirect_uri = (LOCAL_ADDR.includes(window.location.hostname)) ? `http://${window.location.host}/` : REDIRECT_URL;

    let url = API_URL;
    url += '?client_id=' + encodeURIComponent(CLIENT_ID);
    url += '&response_type=token' 
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&scope=' + 'user-library-read';
    url += '&state=' + encodeURIComponent(state);

    console.log('redirect_uri', redirect_uri);
    console.log('url', url);

    window.location = url;
}
