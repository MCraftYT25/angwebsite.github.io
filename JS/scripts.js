/*document.cookie = "version=1.6";

let cookies = document.cookie.split(/; /g);
cookies = String(cookies);
let version = cookies.slice(8,11);*/

const version = 1.6; 
document.getElementById('version').innerText = "V" + version;