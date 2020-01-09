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
        // console.log('readyState: ' ,this.readyState, ' status code :' , this.status)
        if (this.readyState == 4 && this.status == 201)
        {
            console.log('response is: '+this.responseText);
            const shorten = JSON.parse(this.responseText).hashid;
            const shortLink = 'https://rel.ink/' + shorten;
            const newLink = createLink(url, shortLink);
            document.querySelector('.history').appendChild(newLink);

            
        }
    }
    request.open('POST', relink, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(payload);
}



function createLink(original , shorten) {
    const link = document.createElement('div');
    link.classList.add('link');
    const originalLink = document.createElement('a');
    originalLink.classList.add('original');
    originalLink.innerHTML = original;
    originalLink.href = original;
    const shortLink = document.createElement('a');
    shortLink.classList.add('shorten');
    shortLink.innerHTML = shorten;
    link.appendChild(originalLink);
    link.appendChild(shortLink);
    return link;
}