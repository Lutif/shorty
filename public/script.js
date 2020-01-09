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
     


function convert(e) {
    e.preventDefault();
    const link= window.document.querySelector('.input-link')
    console.log(link);
}
alert('welcome')