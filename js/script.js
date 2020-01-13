// POST https://rel.ink/api/links/

// {
//   "url": "https://news.ycombinator.com/"
// }
      

// GET https://rel.ink/api/links/Nn8y9p/

// {
//   "hashid":"Nn8y9p",
//   "url": "https://news.ycombinator.com/",
//   "created_at":"2019-06-18T21:29:57.922801Z"
// }


const relink = "https://rel.ink/api/links/";
function convert() {
    const url = document.querySelector('.url-input').value;
    const payload = JSON.stringify({ 'url': url });

    const request = new XMLHttpRequest();
    // console.log(request);
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201)
        {
            console.log('response is: '+this.responseText);
            const shorten = JSON.parse(this.responseText).hashid;
        document.querySelector('.shorten').innerHTML ='https://rel.ink/'+shorten;
        } else {
            alert('Error occured , status code :' + this.status);
        }
    }
    request.open('POST', relink, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(payload);
