const form=document.querySelector('form');
const list=document.querySelector('.box');
const input=document.querySelector('.input');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputtxt=input.value;
    getmovie(inputtxt);
    input.value="";
})

function getmovie(searchmovie) {
    const url=`https://api.tvmaze.com/search/shows?q=${searchmovie}`;
    list.innerText='';
    axios.get(url)
        .then((res)=>{
            const Data=res.data;
            Data.forEach(element => {
                const image=element.show.image.medium;
                const IMG=document.createElement('img');
                IMG.setAttribute("src",image);
                IMG.style.margin='20px';
                list.append(IMG);
            });
        })
        .catch((err)=>{
         console.log("THANKYOU!!!!!");
        })
    }
    
