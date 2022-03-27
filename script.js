
const div = document.querySelector(".container");
console.log(div);


function get(){
    fetch("https://jsonplaceholder.typicode.com/user/1/posts")
    .then((res)=> {
        let data = res.json();
        return data;
    })
    .then((posts)=> {
        posts.forEach((element) => {
            //console.log(element);
            const title = document.createElement("h2");
            const text = document.createElement("p");
            div.appendChild(title);
            div.appendChild(text);

            title.textContent = element.title;
            text.innerText = element.body;
           
        });
    });
}

get();