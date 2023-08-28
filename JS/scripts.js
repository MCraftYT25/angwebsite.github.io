const version = 2.1;
const versiondate = "2023-08-27";
const year = 2023; 

document.getElementById('version').innerText = "V" + version;

let x = 0;

function chgcolor()
{
    if(x == 0)
    {
        document.body.style.setProperty("--main-color", "#333");
        document.body.style.setProperty("--second-color", "rgb(253,217,141)");
        document.body.style.setProperty("--fourth-color", "rgb(253,217,141)");
        document.body.style.setProperty("--fifth-color", "#333");
        x = x + 1;
    } else {
        document.body.style.setProperty("--main-color", "rgb(253,217,141)");
        document.body.style.setProperty("--second-color", "black");
        document.body.style.setProperty("--fourth-color", "#f2a86f");
        document.body.style.setProperty("--fifth-color", "white");
            
        x = x - 1;
    }      
}

function menu()
{
    document.getElementById('menu').innerText = '';
}