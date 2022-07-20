const requestURL = "https://webdeveloperintraining.github.io/wdd230_final_project/json/temples.json";

fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    const companies=jsonObject["temples"];
    companies.forEach(templeInfo)
});

function templeInfo(temple){
    let section=document.createElement("section");
    let name=document.createElement("h2");
    let phone=document.createElement("p");
    let email=document.createElement("p");
    let address=document.createElement("p");
    let dedicated=document.createElement("p");
    let ordinanceSchedule=document.createElement("p");
    let sessionSchedule=document.createElement("p");
    let closureSchedule=document.createElement("p");
    closureSchedule.setAttribute("id","schedule-list")
    let picture=document.createElement("img");
    let like=document.createElement("img")

    name.innerHTML=temple.templeName;
    phone.innerHTML=`<b>Telephone:</b> ${temple.telephone}`;
    address.innerHTML=`<b>Address:</b> <a href="${temple.addressLink}" target="_blank">${temple.address}</a>`;
    dedicated.innerHTML=`<b>Dedicated:</b> ${temple.dedicated}`;
    email.innerHTML=`<b>Email:</b> ${temple.email}`;
    ordinanceSchedule.innerHTML=`<b>Ordinance schedule:</b> ${temple.ordinanceSchedule}`;
    sessionSchedule.innerHTML=`<b>Session Schedule:</b> ${temple.sessionSchedule}`;
    closureSchedule.innerHTML=`<b>Closure Schedule:</b> ${getLi(temple.closureSchedule)}`;
    picture.setAttribute("src",temple.image);
    picture.setAttribute("alt",`${temple.templeName} temple`);
    like.setAttribute("src",temple.like);
    like.setAttribute("class","like");
    like.setAttribute("alt","Like button icon");
    section.appendChild(name);
    section.appendChild(picture);
    section.appendChild(address);
    section.appendChild(email)
    section.appendChild(phone);
    section.appendChild(dedicated);
    section.appendChild(ordinanceSchedule);
    section.appendChild(sessionSchedule);
    section.appendChild(closureSchedule);
    section.appendChild(like);
    document.querySelector(".temples").appendChild(section);
};

function getLi(array) {
    test=[]
    for (var i = 0; i < array.length; i++) {
        var li=`<li>${array[i]}</li>`
        test.push(li)
    }
    return test.join("");
};