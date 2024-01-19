let form = document.getElementById("form");
let gitContainer = document.getElementById("gitContainer");
let btnEl = document.getElementById("btn");
let searchEl = document.getElementById("search");
let container = document.getElementById("container");
let name = document.getElementById("name");
let bio = document.getElementById("bio");
let locationEl = document.getElementById("location1");
let twitter = document.getElementById("twitter");
let gitHubUrl = document.getElementById("gitHubUrl");
let repos = document.getElementById("repos");
let spinner =document.getElementById("spinner")
let paginationConatiner = document.getElementById("pagination")

const ApiUrl = "https://api.github.com/users/"
const client_id="ddd6dcb2af097bf746fd"
const client_secret = "0083bee5281f4ef4c98dc17a5e0df7f20ec1e8ac"
spinner.classList.add("d-none")
const getUser= async(username)=>{
  gitContainer.classList.remove("d-none")
  
  const response = await fetch(ApiUrl+username+"?"+`client_id=${client_id}&client_secret=${client_secret}`)
  const data = await response.json();
  spinner.classList.remove("d-none")
 const userNameEl = document.createElement("h1")
 image.src=data.avatar_url;
 name.textContent = data.name;
 bio.textContent = data.bio;
 locationEl.textContent = data.location;
 twitter.textContent =data.blog;
 gitHubUrl.textContent =  data.html_url; 
 gitHubUrl.href = data.html_url;
 twitter.href = data.blog;


 const response2 = await fetch(data.repos_url)
  const data2= await response2.json();
  console.log(data2)
  data2.map(async eachRepo => {
    let repoContainer = document.createElement("div")
    let name= document.createElement("h2");
    let description = document.createElement("p");
    let langContainer = document.createElement("div");
    repoContainer.appendChild(name);
    repoContainer.appendChild(description);
    repoContainer.appendChild(langContainer);
    repos.appendChild(repoContainer)
    description.textContent = eachRepo.description;
    const res = await fetch(eachRepo.languages_url);
    const data = await res.json()
    console.log(data)
    spinner.classList.add("d-none")
    name.textContent = eachRepo.name;
    repoContainer.style.border = "1px solid black"
    repoContainer.style.margin= "10px"
    repoContainer.style.padding = "10px"
    repoContainer.style.borderRadius = "5px"
      Object.keys(data).map(eachLang => {
        let lang = document.createElement("button")
        langContainer.appendChild(lang)
        lang.textContent = eachLang
        lang.style.backgroundColor = "dodgerblue"
        lang.style.borderRadius = "5px"
        lang.style.margin = "5px"
    })
    
  })
}

/* const getRepos = async(username) => {
  const response = await fetch(ApiUrl+username+"?"+`client_id=${client_id}&client_secret=${client_secret}`)
  const data = await response.json();
  console.log(data)
  const response = await fetch(data.repos_url)
  const data2= await response2.json();
  console.log(data2)
  data2.map(async eachRepo => {
    let repoContainer = document.createElement("div")
    let name= document.createElement("h2");
    let description = document.createElement("p");
    let langContainer = document.createElement("div");
    description.textContent = eachRepo.description;
    const res = await fetch(eachRepo.languages_url);
    const data = await res.json()
    repoContainer.appendChild(name);
    repoContainer.appendChild(description);
    repoContainer.appendChild(langContainer);
    repos.appendChild(repoContainer)
    name.textContent = eachRepo.name;
    Object.keys(data).map(eachLang => {
      let lang = document.createElement("button")
      langContainer.appendChild(lang)
      lang.textContent = eachLang
      lang.style.backgroundColor = "#20809d"
      lang.style.borderRadius = "5px"
      lang.style.margin = "5px"
      repoContainer.style.border = "1px solid black"
      repoContainer.style.margin= "10px"
      repoContainer.style.padding = "10px"
      repoContainer.style.borderRadius = "5px"
    })
  })
} */

const formSubmit = () => {
    if(searchEl.value!==""){
      getUser(searchEl.value)
      //getRepos(searchEl.value)
      console.log(searchEl.value)
      searchEl.value=""
      form.classList.add("d-none")
    }
  
  return false
  
}


  
