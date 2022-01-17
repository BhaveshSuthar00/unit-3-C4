async function apiCall(url) {
    try {
        let res = await fetch(url);
        let data = res.json();
        return data;
    }
    catch(error) {
        console.log('error in apicall')
    }
    //add api call logic here


}


function appendArticles(articles, main) {

    articles.forEach(({image,title,description,content})=>{

        let main_div = document.createElement('div');
        main_div.setAttribute('class','displayTable');
        main_div.innerHTML = 
        `
        <div class="title">${title}</div>
        <div class="discription">${description}</div>
        <div class="img_div">
        <img src=${image} alt="">
        </div>
        `
        main_div.addEventListener('click',function(){
            let obj = {
                image,
                title,
                description,
                content,
            }
            localStorage.setItem('article',JSON.stringify(obj));
            window.location.href = './news.html';
        })
        main.append(main_div);
    })
    //add append logic here

}

export { apiCall, appendArticles }