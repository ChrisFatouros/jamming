function generateRandomString(length) {
    const options = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let str = '';
    for (let i = 0; i < length; i++) {
      str += options[Math.floor(Math.random * options.length)];
    }
    return str;
  }
  
  async function getToken() {
    var client_id = 'a5d40fe661a741f68f7f27b86314c444';
    var redirect_uri = 'http://localhost:3000';
    
    var state = generateRandomString(16);
    
    localStorage.setItem(stateKey, state);
    var scope = 'user-read-private user-read-email playlist-modify-private playlist-modify-public';
    
    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);
  
    let response = await fetch(url, {
      method: 'GET',
    })
    .then(response => {
      if (response.ok) {
        return response;
      }
      console.log(response)
    });
  
    console.log(response)
  }