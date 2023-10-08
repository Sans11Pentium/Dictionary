let url="https://api.dictionaryapi.dev/api/v2/entries/en/";
let input=document.querySelector("input");
let search_btn=document.querySelector(".search-icon");
let answer=document.querySelector(".answer");
search_btn.addEventListener("click",async ()=>{
    let final_url=url+input.value;
    const res = await fetch(final_url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log("data= ",data);
        if(data.title == 'No Definitions Found'){
            answer.innerHTML="<p>Sorry pal, we couldn't find definitions for the word you were looking for</p><br><h4>Possible Resolution:</h4><p>You can try the search again at later time or head to the web instead ; )</p>";
        }
        let finalHtml;
        for(let i of data){
            console.log(i);
            console.log("phonetic= ",i.phonetic);
            finalHtml=`<p>Word : ${i.word}</p><p>Phonetic : ${i.phonetic}</p>`;
            for(let j of i.meanings){
                finalHtml+='<h4>Part Of Speech: </h4>';
                finalHtml+=j.partOfSpeech;
                finalHtml+='<br>';
                if(j.synonyms){
                    finalHtml+='<h4>Synonymn: </h4>';
                }
                for(let k of j.synonyms){
                    finalHtml+=k;
                    finalHtml+='<br>';
                }
                if(j.antonyms){
                    finalHtml+='<h4>Antonymn: </h4>';
                }
                for(let k of j.antonyms){
                    finalHtml+=k;
                    finalHtml+='<br>';
                }
                if(j.definitions){
                    finalHtml+='<h4>Meanigs: </h4>';
                }
                for(let k of j.definitions){
                    finalHtml+=k.definition;
                    finalHtml+='<br>';
                }
            }
        }
        answer.innerHTML=finalHtml;
    })
    .catch((err)=>{
        answer.innerText="Not Found";
    })
})
/*
{word: 'token', phonetic: '/ˈtəʊkən/', phonetics: Array(2), meanings: Array(3), license: {…}, …}
license
: 
{name: 'CC BY-SA 3.0', url: 'https://creativecommons.org/licenses/by-sa/3.0'}
meanings
: 
Array(3)
0
: 
{partOfSpeech: 'noun', definitions: Array(24), synonyms: Array(9), antonyms: Array(1)}
1
: 
{partOfSpeech: 'verb', definitions: Array(3), synonyms: Array(0), antonyms: Array(0)}
2
: 
{partOfSpeech: 'adjective', definitions: Array(2), synonyms: Array(0), antonyms: Array(0)}
length
: 
3
[[Prototype]]
: 
Array(0)
phonetic
: 
"/ˈtəʊkən/"
phonetics
: 
(2) [{…}, {…}]
sourceUrls
: 
['https://en.wiktionary.org/wiki/token']
word
: 
"token"
[[Prototype]]
: 
Object
*/