let but = document.getElementById("toggle");
let mainp = document.querySelector(".mainpage");
let navb = document.querySelector(".navbar");
let cont = document.querySelector(".content");
let foot = document.querySelector(".footer");
let icon = document.querySelector(".icons");
let barside = document.querySelector(".sidebar");
let togclass = document.querySelector(".tog");

let poc = document.getElementById("poc");
let poi = document.getElementById("poi");
let famoc = document.getElementById("famoc");
let famic = document.getElementById("famic");
let eduoc = document.getElementById("eduoc");
let eduic = document.getElementById("eduic");
let finic = document.getElementById("finic");
let finoc = document.getElementById("finoc");


let value = 0;
but.addEventListener("click", () => {
    barside.classList.toggle("tog");
    icon.classList.toggle("ic");
    mainp.classList.toggle("main");
    if (value == 0) {
        navb.style.width = "90vw";
        cont.style.width = "90vw";
        value = 1;
    }
    else {
        navb.style.width = "75vw";
        cont.style.width = "75vw";
        value = 0;
    }
    foot.classList.toggle("footers");
});

let perfill = 0;
let finfill = 0;
let famfill = 0;
let edufill = 0;

const personalP = {
    name: {
        first: "abc",
        middle: "aplle",
        last: "fddsfdfddf"
    },
    ph_no: 0,
    gender: "",
    aadhar: "dsfsdfsadf",
    email: "",
    blood: "",
    state: "",
    city: "dfgsdfgds",
    files: {
        photo: "fileSchema",
        aadhar: "fileSchema",
        address: "fileSchema"
    }
};

const familyP = {

    father: {
        name: "gfdfgdf",
        contact: 0,
        education: "",
        occupation: "fdgdfgdsf",
        email: "",
        pan: "sdfsdfs",
        aadhar: "",
    },
    mother: {
        name: "",
        contact: 0,
        education: "fdgdsfgdsf",
        occupation: "sdfsdfsd",
        email: "",
        pan: "",
        aadhar: "ghfgf",
    },

}

for (let key in familyP.father) {
    if (familyP.father[key] !== "" && familyP.father[key] !== 0) {
        famfill++;
    }
}

for (let key in familyP.mother) {
    if (familyP.mother[key] !== "" && familyP.mother[key] !== 0) {
        famfill++;
    }
}

const educationP = {
    highestQualification: {
        qualification: "",
        marks: 0,
    },
    twelth: {
        board: "sdfsfsa",
        marks: 0,
    },
    tenth: {
        board: "ffdgds",
        marks: 10,
    },
};


for (let key in educationP.highestQualification) {
    if (educationP.highestQualification[key] !== "" && educationP.highestQualification[key] !== 0) {
        edufill++;
    }
}

for (let key in educationP.twelth) {
    if (educationP.twelth[key] !== "" && educationP.twelth[key] !== 0) {
        edufill++;
    }
}

for (let key in educationP.tenth) {
    if (educationP.tenth[key] !== "" && educationP.tenth[key] !== 0) {
        edufill++;
    }
}


const financeP = {
    accountHolderName: "dsfdsfs",
    accountNumber: 0,
    pan: "sdfsdf",
    bankName: "dfsdfsd",
    bankIFSC: "",
    bankAddress: "sdfsdf",
}

for(let key in financeP){
    if(financeP[key]!="" && financeP[key]!=0){
        finfill++;
    }
}

// Check name fields
for (let key in personalP.name) {
    if (personalP.name[key] !== "") {
        perfill++;
    }
}

// Check other fields
for (let key in personalP) {
    if (key !== "name" && key !== "files") {
        if (personalP[key] !== "" && personalP[key] !== 0) {
            perfill++;
        }
    }
}

// Calculate percentage
let perpercent = Math.floor((perfill / 10) * 100);
let fampercent = Math.floor((famfill / 14) * 100);
let finpercent = Math.floor((finfill / 6) * 100);
let edupercent = Math.floor((edufill / 6) * 100);

// Update background and text
poc.style.background = `conic-gradient(#071952 0deg ${perpercent * 3.6}deg, #e0e0e0 ${perpercent * 3.6}deg 360deg)`;
famoc.style.background = `conic-gradient(#071952 0deg ${fampercent * 3.6}deg, #e0e0e0 ${fampercent * 3.6}deg 360deg)`;
finoc.style.background = `conic-gradient(#071952 0deg ${finpercent * 3.6}deg, #e0e0e0 ${finpercent * 3.6}deg 360deg)`;
eduoc.style.background = `conic-gradient(#071952 0deg ${edupercent * 3.6}deg, #e0e0e0 ${edupercent * 3.6}deg 360deg)`;

poi.innerText = `${perpercent}%`;
finic.innerText = `${finpercent}%`;
famic.innerText = `${fampercent}%`;
eduic.innerText = `${edupercent}%`;