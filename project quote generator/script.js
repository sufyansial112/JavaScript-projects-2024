const api_url = 'https://api.quotable.io/random';

 const quote = document.querySelector('.quote');
 const author = document.querySelector('.author');



async function getquote(url){
    const response = await fetch(url);
    const data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author; 

}

    function tweet(){
        
        window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + '-- by ' + author.innerHTML, 'tweet window', 'width=600px, height= 300px')
    }

getquote(api_url);