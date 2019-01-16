export class Api {
  constructor() {

  }
  call() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen&access_token=6abd63b5c4500507bf28eb9c6a6a1089a63192780929787bf23681966e3bb3f7';
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
