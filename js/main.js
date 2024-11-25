// ^(002|\+2)?01[01256][0-9]{8}$
// ^web (ali|ahmed)$
// ^[a-zA-z][a-zA-z0-9_.]{5,63}@(gmail|yahoo)\.(com|info)$
// ^[1-7][0-9]|80$

let siteName = document.getElementById("siteName");
let siteUrl = document.getElementById("siteUrl");
let alertSiteName = document.getElementById("alertSiteName");
let alertUrl = document.getElementById("alertUrl");

let allSites = [];
let checkData = JSON.parse(localStorage.getItem("dataLocal"));

if (checkData != null) {
  allSites = JSON.parse(localStorage.getItem("dataLocal"));
  showData();
}

function submitSite() {
  findSiteName();
  findSiteUrl() 
  if (findSiteName() != true && findSiteUrl()!=true ) {
    let site = {
      siteName: siteName.value,
      siteUrl: siteUrl.value,
    };
    allSites.push(site);
    // console.log(allSites);
    localStorage.setItem("dataLocal", JSON.stringify(allSites));

    showData();
  } else {
    window.alert("Already Have This Name");
  }
}

function findSiteName() {
  let all = allSites.filter((element) => {
    return element.siteName.includes(siteName.value);
  });
  if (all.length > 0) {
    alertSite.classList.add("d-block");
    alertSite.classList.remove("d-none");
    return true;
  }
else if(siteName.value =="")
{
  alertSite.classList.remove("d-block");
  alertSite.classList.add("d-none");
  return false;
}
  else {
    alertSite.classList.remove("d-block");
    alertSite.classList.add("d-none");
    return false;
  }
}

function findSiteUrl() {
  let all = allSites.filter((element) => {
    return element.siteUrl.includes(siteUrl.value);
  });
  if (all.length > 0) {
    alertSite.classList.add("d-block");
    alertSite.classList.remove("d-none");
    return true;
  }
else if(siteUrl.value =="")
{
 
  alertSite.classList.remove("d-block");
  alertSite.classList.add("d-none");
  return false;
}
  else {
    alertSite.classList.remove("d-block");
    alertSite.classList.add("d-none");
    return false;
  }
}



// console.log(allSites);

function showData() {
  let cartona = "";
  for (let i = 0; i < allSites.length; i++) {
    cartona += `
             <tr>
               <td>${Math.random().toFixed(3)}</td>
                <td>${allSites[i].siteName}</td>
                <td>${allSites[i].siteUrl}</td>
               <td> <button class="btn btn-success" id="visit" onclick="visit('${
                 allSites[i].siteUrl
               }')">Visit Site</button></td>
                 <td> <button class="btn btn-danger" id="delete" onclick="deleteSite(${i})"delete>Delete Site</button></td>
                        </tr>`;
  }
  document.getElementById("dataRow").innerHTML = cartona;
}

function visit(e) {
  window.location.assign(e);
  console.log(e);
}

function deleteSite(e) {
  allSites.splice(e, 1);
  localStorage.setItem("dataLocal", JSON.stringify(allSites));
  showData();
}

// var regexSiteName = /^[a-zA-Z0-9]/
var regexSiteName = /^[a-zA-Z][a-zA-z0-9 -]{4,50}$/;
function chackValidSiteName() {
  if (regexSiteName.test(siteName.value) == true) {
    siteName.classList.add("is-valid");
    siteName.classList.remove("is-invalid");
  } else {
    siteName.classList.remove("is-valid");
    siteName.classList.add("is-invalid");
  }
}

var regexUrl = /^(https:\/\/|HTTPS:\/\/)[a-zA-z0-9\.\-]{5,63}\.com$/;
function chackValidSiteUrl() {
  if (regexUrl.test(siteUrl.value) == true) {
    siteUrl.classList.add("is-valid");
    siteUrl.classList.remove("is-invalid");
  } else {
    siteUrl.classList.remove("is-valid");
    siteUrl.classList.add("is-invalid");
  }
}
