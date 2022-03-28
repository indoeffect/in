console.log("IndoEffect");

// todo
let addtitle = document.getElementById('addtitle'); //title
let addtxt = document.getElementById('addtxt'); //textarea
let notesdisplay = document.getElementById('notesdisplay'); //notes display
let addbtn = document.getElementById('addbtn'); //submit btn
//top stories 
let topstoriessearchbtn = document.getElementById('topstories_searchbtn'); // search btn
let topstoriesinput = document.getElementById('topstories_searchinput'); //input area
let accordionex = document.getElementById('accordionExample');
// live news
let livenews = document.getElementById('live-news');
// section - 2
let entertainment = document.getElementById('section2_entertainment');
let science = document.getElementById('section2_science');
let sports = document.getElementById('section2_sports');
let tech = document.getElementById('section2_tech');
let health = document.getElementById('section2_health');
let business = document.getElementById('section2_business');
// section - 1
let br_news1 = document.getElementById('br_news1');
let br_news2 = document.getElementById('br_news2');
let br_news3 = document.getElementById('br_news3');
// newspage
let newspage = document.getElementById('newspage');
let newsbtn = document.getElementById('news-menu-btn');

// 

let catagory = document.getElementsByClassName('catagory');
let section1 = document.getElementsByClassName('section1');
let page3 = document.getElementsByClassName('page-3');


// live news - dissmisable btn : 

function livenewsfuc(){
  let livehtml = '';
  let category = "general";
  let country = "in";

  let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;
  fetch(url).then((response) => {
    return response.json();
  }).then((data)=>{
    console.log("GENERAL - NEWS");
    console.log(data);

    let dataobj = data.articles;
    // console.log(data.articles[0].content);
    livehtml = `<marquee> ${dataobj[10]['title']} </marquee>`;
    livenews.innerHTML = livehtml;
  })
} 
livenewsfuc();


// Section - 1 :

function breakingnews1(){
  let html = '';
  let category = "general";
  let country = "in";

  let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;
  fetch(url).then((response) => {
    return response.json();
  }).then((data)=>{
    console.log(data);

    let dataobj = data.articles;
    html = `<div class="card">
    <a href="${dataobj[2]['url']} target="_blank">
      <img src="${dataobj[2]['urlToImage']}" class="card-img-top" alt="..." />
    </a>
    <div class="card-body" style="padding: 5px">
      <h2 class="card-text">
        ${dataobj[2]['title']}
      </h2>
    </div>
    </div>`;
    br_news1.innerHTML = html;
  })
}

function breakingnews2(){
  let html = '';
  let category = "sports";
  let country = "in";

  let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;
  fetch(url).then((response) => {
    return response.json();
  }).then((data)=>{
    console.log(data);

    let dataobj = data.articles;
    html = `<div class="card">
    <a href="${dataobj[17]['url']} target="_blank">
      <img src="${dataobj[17]['urlToImage']}" class="card-img-top" alt="..." />
    </a>
    <div class="card-body" style="padding: 3px">
      <h4 class="card-text">
        ${dataobj[17]['title']}
      </h4>
    </div>
    </div>`;
    br_news2.innerHTML = html;
  })
}

function breakingnews3(){
  let html = '';
  let category = "technology";
  let country = "in";

  let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;
  fetch(url).then((response) => {
    return response.json();
  }).then((data)=>{
    console.log(data);

    let dataobj = data.articles;
    html = `<div class="card">
    <a href="${dataobj[10]['url']} target="_blank">
      <img src="${dataobj[10]['urlToImage']}" class="card-img-top" alt="..." />
    </a>
    <div class="card-body" style="padding: 3px">
      <h4 class="card-text">
        ${dataobj[10]['title']}
      </h4>
    </div>
    </div>`;
    br_news3.innerHTML = html;
  })
}

breakingnews3();
breakingnews2();
breakingnews1();

// Top Stories - API

let category = "health";
let country = "in";

let fetch_topstories = ()=>{
  let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;

  fetch(url).then((response)=>{
    return response.json();
  }).then((data)=>{
    console.log("HEALTH - NEWS");
    console.log(data);
    let html = '';

    let dataobj = data["articles"];
    
    dataobj.forEach(function(element,index){
      html += `<div class="accordion-item">
      <div class="card-header" id="heading2${index}">
          <h2 class="mb-0">
              <button class="btn" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                  <span class="badge bg-primary">Breaking News ${index+1}</span>  ${element["title"]}
              </button>
          </h2>
      </div>
      <div id="collapse${index}" class="collapse" aria-labelledby="heading2${index}" data-parent="#accordionExample">
          <div class="card-body"><h6><span class="badge bg-secondary">Description</span></h6>${element["description"]}</div>
          <div class="card-body"><h6><span class="badge bg-secondary">Content</span></h6>${element["content"]} 
          <a href="${element['url']}" target="_blank" > Read more...</a></div>
      </div>
  </div>`;
    });
    accordionex.innerHTML = html;
  })
}
fetch_topstories();

// top strories search : 

topstoriesinput.addEventListener('input',()=>{
  let inputtop = topstoriesinput.value.toLowerCase();
  console.log(inputtop);

  
});



// catagories :

function catagory_entertainment(){
    let html = '';
    let category = "entertainment";
    let country = "in";
  
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;

    fetch(url).then((response) => {
      return response.json();
    }).then((data)=>{
      console.log("entertainment - NEWS");
      console.log(data);
  
      let dataobj = data.articles;
      // console.log(data.articles[0].content);

      if(dataobj[0]['content'] == null){
        dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
      }else if(dataobj[0]['description'] == null){
        dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
      }else if(dataobj[0]['title'] == null){
        dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
      }

      html = `<h2 class="section2_heading"><a href="#"> ENTERTAINMENT </a></h2>
              <a href="${dataobj[0]['url']} target="_blank"><img class="section2_img" src="${dataobj[0]['urlToImage']}" alt=".."></a>
              <h4 class="section2_title"><a href="${dataobj[0]['url']} target="_blank">${dataobj[0]['title']} </a></h4>
              <p class="section2_desc1">${dataobj[0]['content']} </a> <a href="${dataobj[0]['url']}" target="_blank" > Read more...</a> </p>
              <p class="section2_desc1">${dataobj[0]['description']} </a></p>`;
      entertainment.innerHTML = html;
    })
}

function catagory_science(){
  let html = '';
  let category = "science";
  let country = "in";

  let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;

  fetch(url).then((response) => {
    return response.json();
  }).then((data)=>{
    console.log("science - NEWS");
    console.log(data);

    let dataobj = data.articles;
    // console.log(data.articles[0].content);

    if(dataobj[0]['content'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }else if(dataobj[0]['description'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }else if(dataobj[0]['title'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }

    html = `<h2 class="section2_heading"><a href="#">SCIENCE</a></h2>
            <a href="${dataobj[0]['url']} target="_blank"><img class="section2_img" src="${dataobj[0]['urlToImage']}" alt=".."></a>
            <h4 class="section2_title"><a href="${dataobj[0]['url']} target="_blank">${dataobj[0]['title']} </a></h4>
            <p class="section2_desc1">${dataobj[0]['content']} </a> <a href="${dataobj[0]['url']}" target="_blank" > Read more...</a></p>
            <p class="section2_desc1">${dataobj[0]['description']} </a></p>`;
    science.innerHTML = html;
  })
}

function catagory_sports(){
  let html = '';
  let category = "sports";
  let country = "in";

  let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;

  fetch(url).then((response) => {
    return response.json();
  }).then((data)=>{
    console.log("sports - NEWS");
    console.log(data);

    let dataobj = data.articles;
    // console.log(data.articles[0].content);

    if(dataobj[0]['content'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }else if(dataobj[0]['description'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }else if(dataobj[0]['title'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }

    html = `<h2 class="section2_heading"><a href="#">SPORTS</a></h2>
            <a href="${dataobj[0]['url']} target="_blank"><img class="section2_img" src="${dataobj[0]['urlToImage']}" alt=".."></a>
            <h4 class="section2_title"><a href="${dataobj[0]['url']} target="_blank">${dataobj[0]['title']} </a></h4>
            <p class="section2_desc1">${dataobj[0]['content']} <a href="${dataobj[0]['url']}" target="_blank" > Read more...</a> </p>
            <p class="section2_desc1">${dataobj[0]['description']} </a></p>`;
            sports.innerHTML = html;
  })
}

function catagory_tech(){
  let html = '';
  let category = "technology";
  let country = "in";

  let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;

  fetch(url).then((response) => {
    return response.json();
  }).then((data)=>{
    console.log("technology - NEWS");
    console.log(data);

    let dataobj = data.articles;
    // console.log(data.articles[0].content);

    if(dataobj[0]['content'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }else if(dataobj[0]['description'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }else if(dataobj[0]['title'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }

    html = `<h2 class="section2_heading"><a href="#">technology</a></h2>
            <a href="${dataobj[0]['url']} target="_blank"><img class="section2_img" src="${dataobj[0]['urlToImage']}" alt=".."></a>
            <h4 class="section2_title"><a href="${dataobj[0]['url']} target="_blank">${dataobj[0]['title']} </a></h4>
            <p class="section2_desc1">${dataobj[0]['content']} </a> <a href="${dataobj[0]['url']}" target="_blank" > Read more...</a> </p>
            <p class="section2_desc1">${dataobj[0]['description']} </a></p>`;
            tech.innerHTML = html;
  })
}

function catagory_health(){
  let html = '';
  let category = "health";
  let country = "in";

  let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;

  fetch(url).then((response) => {
    return response.json();
  }).then((data)=>{
    console.log("health - NEWS");
    console.log(data);

    let dataobj = data.articles;
    // console.log(data.articles[0].content);

    if(dataobj[0]['content'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }else if(dataobj[0]['description'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }else if(dataobj[0]['title'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }

    html = `<h2 class="section2_heading"><a href="#">health</a></h2>
            <a href="${dataobj[0]['url']} target="_blank"><img class="section2_img" src="${dataobj[0]['urlToImage']}" alt=".."></a>
            <h4 class="section2_title"><a href="${dataobj[0]['url']} target="_blank">${dataobj[0]['title']} </a></h4>
            <p class="section2_desc1">${dataobj[0]['content']} <a href="${dataobj[0]['url']}" target="_blank" > Read more...</a></p>
            <p class="section2_desc1">${dataobj[0]['description']} </a></p>`;
            health.innerHTML = html;
  })
}

function catagory_business(){
  let html = '';
  let category = "business";
  let country = "in";

  let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;

  fetch(url).then((response) => {
    return response.json();
  }).then((data)=>{
    console.log("business - NEWS");
    console.log(data);

    let dataobj = data.articles;
    // console.log(data.articles[0].content);

    if(dataobj[0]['content'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }else if(dataobj[0]['description'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }else if(dataobj[0]['title'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }

    html = `<h2 class="section2_heading"><a href="#">business</a></h2>
            <a href="${dataobj[0]['url']} target="_blank"><img class="section2_img" src="${dataobj[0]['urlToImage']}" alt=".."></a>
            <h4 class="section2_title"><a href="#">${dataobj[0]['title']} </a></h4>
            <p class="section2_desc1">${dataobj[0]['content']} <a href="${dataobj[0]['url']}" target="_blank" > Read more...</a> </p>
            <p class="section2_desc1">${dataobj[0]['description']} </a></p>`;
            business.innerHTML = html;
  })
}

catagory_entertainment();
catagory_science();
catagory_sports();
catagory_tech();
catagory_health();
catagory_business();

// Notes taking -->

shownotes();
addbtn.addEventListener('click',()=>{ 
  let notes = localStorage.getItem('notes');

  if(notes == null){
    notesObj = [];
  }else{
    notesObj = JSON.parse(notes);
  }
  let bothObj = {
    title : addtitle.value,
    text : addtxt.value
  }
  notesObj.push(bothObj);
  localStorage.setItem('notes',JSON.stringify(notesObj));
  addtxt.value = "";
  addtitle.value = "";
  shownotes();
})

function shownotes(){
  let notes = localStorage.getItem('notes');
  if(notes == null){
    notesObj = [];
  }else{
    notesObj = JSON.parse(notes);
  }
  let html = '';

notesObj.forEach((element,index) => {
  html += `
  <div class="card mx-2 my-2" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${index + 1}. ${element.title}</h5>
      <p class="card-text">${element.text}</p>
      <button href="#" class="btn btn-primary" id="${index}" onclick="delnotes(this.id) ">Delete Note</button>
    </div>
  </div>`
});

if(notesObj.length != null){
  notesdisplay.innerHTML = html;
}else{
  `<p> Nothing </p>`
}
}

function delnotes(index){
  console.log("yo",index);
  let notes = localStorage.getItem('notes');
  if(notes == null){
    notesObj = [];
  }else{
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes",JSON.stringify(notesObj));
  shownotes();
}







// newspage

newsbtn.addEventListener('click',()=>{ 
  let html = '';
  let category = "entertainment";
  let country = "in";

  let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`;

  fetch(url).then((response) => {
    return response.json();
  }).then((data)=>{
    console.log("entertainment - NEWS");
    console.log(data);

    let dataobj = data.articles;
    // console.log(data.articles[0].content);

    if(dataobj[0]['content'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }else if(dataobj[0]['description'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }else if(dataobj[0]['title'] == null){
      dataobj[0]['content'] = `ERROR ! ❌ - can't show the content right Now .. <a href="">read more</a>`;
    }

    html = `
            <a href="${dataobj[0]['url']} target="_blank"><img class="section2_img" src="${dataobj[0]['urlToImage']}" alt=".."></a>
            <h4 class="section2_title"><a href="${dataobj[0]['url']} target="_blank">${dataobj[0]['title']} </a></h4>
            <p class="section2_desc1">${dataobj[0]['content']} </a> <a href="${dataobj[0]['url']}" target="_blank" > Read more...</a> </p>
            <p class="section2_desc1">${dataobj[0]['description']} </a></p>`;
    newspage.innerHTML = html;
  })
  
})









// W3SCHOOl side NAV : 

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}