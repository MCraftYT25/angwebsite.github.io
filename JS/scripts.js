/*document.cookie = "version=1.6";

let cookies = document.cookie.split(/; /g);
cookies = String(cookies);
let version = cookies.slice(8,11);*/

const version = 1.7; 
document.getElementById('version').innerText = "V" + version;

let x = 0;
    function chgcolor()
    {
        if(x == 0)
        {
            document.body.style.setProperty("--main-color", "#333");
            document.body.style.setProperty("--second-color", "rgb(253,217,141)");
            x = x + 1;
        } else {
            document.body.style.setProperty("--main-color", "rgb(253,217,141)");
            document.body.style.setProperty("--second-color", "black");
            x = x - 1;
        }
        
    }