let myLeads = ["www.lead1.com", "www.lead2.com"];

const inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");
const inpbtn = document.getElementById("input-btn");
let deleteBtn = document.getElementById("inputdel-btn"); // Corrected ID
let tabBtn=document.getElementById("tab-btn");

const tabs=[
    {url:"https://www.linkedin.com/in/RevatiShimpi/"}
]
leadsFromLS = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLS);

if (leadsFromLS) {
    myLeads = leadsFromLS;
    renderLeads();
}

inpbtn.addEventListener("click", function () {
    console.log("Button Clicked");
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    inputEl.value = "";
    renderLeads();
});

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        renderLeads();
    })
    

})

deleteBtn.addEventListener("click", function () {
    localStorage.clear();
    myLeads = [];
    renderLeads();
});

function renderLeads() {
    let listItems = " ";
    for (let i = 0; i < myLeads.length; i++) {
        console.log(myLeads[i]);
        listItems +=
            "<li><a href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li> ";
        console.log(listItems);
    }
    ulEl.innerHTML = listItems;
}
