
var projects = {
    "Heart Attack Prediction": {
        "imagesrc": "img/heart.png",
        "location": "Atlantis Datathon 2024",
        "description": "An exploration and analysis of heart data to predict heart attack risk based on certain health factors to employ proper prevention measures.",
        "link": {
            "type": "devpost",
            "url": "https://devpost.com/software/heart-attack-prevention"
        },
        "gitrepo": "https://github.com/jesuscryst/AtlantisDatathon2024",
        "date": "April 2024"
    },

    "Slay n' Study": {
        "imagesrc": "img/slime.png",
        "location": "IrvineHacks 2023",
        "description": "A fun and creative flashcard app that incorporates battling slimes into studying to foster a more engaging learning experience.",
        "link": {
            "type": "devpost",
            "url": "https://devpost.com/software/slay-n-study"
        },
        "gitrepo": "https://github.com/jessed7/irvinehacks24",
        "date": "March 2024"
    },

    "Day Lilies": {
        "imagesrc": "img/sleepy.png",
        "location": "WebJam 2023",
        "description": "A cute and cozy calendar app with a functional to-do list and a reminder for chores certain weekly, monthly, and seasonal tasks all in one.",
        "link": {
            "type": "site",
            "url": "https://day-lilies.vercel.app/"
        },
        "gitrepo": "https://github.com/jesuscryst/WebJam2023",
        "date": "November 2023"
    },

    "AntHill": {
        "imagesrc": "img/stuffed_petr.png",
        "location": "ZotHacks 2023",
        "description": "A web app for UCI students that generates a random place to eat and advertises club fundraisers selling food for students to check out.",
        "link": {
            "type": "devpost",
            "url": "https://devpost.com/software/antsource"
        },
        "gitrepo": "https://github.com/Nala101/ZotHacks2023",
        "date": "November 2023"
    }
}

var coursework = {
    "uci": [
        "Abstract Math", "Numerical Analysis", "Probability", "Real Analysis", "Linear Algebra", "Quantum Computing"
    ],

    "occ": [
        "Calculus", "Linear Algebra", "Differential Equations", "Programming & Problem Solving in MATLAB", "Python Programming"
    ]
}

function switchActive(tabId) {
    // Hide all tabs and panels
    document.querySelectorAll('[role="tab"]').forEach(tab => {
        tab.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
        panel.style.display = 'none';
    });
  
    // Show the selected tab and panel
    const selectedTab = document.getElementById(tabId);
    var parentdiv = selectedTab.closest("div").id;
    var selectedPanel = document.getElementById(`${parentdiv}content`);
    selectedTab.setAttribute('aria-selected', 'true');
    selectedPanel.style.display = 'block';

    var deactivatenav = document.querySelectorAll(".nav-link");
    deactivatenav.forEach(element => {
        if (element.classList.contains("active")) {
            element.classList.remove("active");

            var parentid = element.closest("div").id;
            var deactivatecontent = document.getElementById(`${parentid}content`);
            deactivatecontent.classList.remove("show", "active");
        }
    });

    var activenav = document.getElementById(tabId);
    activenav.classList.add("active");
    var activeicon = document.getElementById("icon");
    switch(tabId) {
        case "aboutmelink":
            activeicon.src = "img/home.png";
            break;
        case "educationlink":
            activeicon.src = "img/graduation cap.png";
            break;
        case "projectslink":
            activeicon.src = "img/rocket launch.png";
            break;
        default:
            activeicon.src = "img/home.png";
    }

    var parentdiv = activenav.closest("div").id;
    var activecontent = document.getElementById(`${parentdiv}content`);
    activecontent.classList.add("show", "active");
}

document.addEventListener("DOMContentLoaded", function() {
    addprojects();
    addcoursework();
    var buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            var type = button.id;
            var project = button.closest("span").id;
            switch (type) {
                case "gitrepo":
                    window.open(projects[project].gitrepo, '_blank');
                    break;
                default:
                    window.open(projects[project].link.url, '_blank');
                    break;
            }
        });
    });
    var hidden = document.querySelectorAll(".hidden");
    hidden.forEach(element => {
        element.addEventListener("mouseleave", function() {
            if (element.style.visibility != hidden) {
                var overlay = document.querySelectorAll(".eduoverlay");
                overlay.forEach(school => {
                    school.scrollTop = 0;
                });
            }
        });
    });
    var prjhidden = document.querySelectorAll(".prjhidden");
    prjhidden.forEach(element => {
        element.addEventListener("mouseleave", function() {
            if (element.style.visibility != hidden) {
                var overlay = document.querySelectorAll(".prjoverlay");
                overlay.forEach(project => {
                    project.scrollTop = 0;
                });
            }
        });
    });
});

function addprojects() {
    for (var project in projects) {
        addcard(project);
    }
}

function addcard(project) {
    var projectcards = document.getElementById("projectcards");
    var cardhtml = 
    `<span id="${project}">
        <div class="prjcard container" style="z-index: 1; position: relative; display: inline-block; width: 100%; padding: 0;">
            <img class="projectimg" src="${projects[project].imagesrc}" alt="projectimg" style="background-color: rgb(9, 9, 29, .50);">
            <div class="prjoverlay container" style="width: 100%; padding: 0; background-color: rgb(9, 9, 29, .85);">
                <div class="prjtext container text-center" style="height: 100%; padding: 20px;">
                    <h3 style="padding-bottom: 20px; padding-top: 10px;">${project}</h3>
                    <div class="prjhidden">
                        <h4>${projects[project].location}</h4>
                        <p style="text-align: left;">${projects[project].description}</p>
                        <div class="container" style="display: flex; justify-content: center; align-items: center;">
                            <div class="row" style="width: fit-content;">
                                <div class="col" style="width: fit-content;">
                                    <button id="${projects[project].link.type}" class="button" type="button" style="border: none;">${projects[project].link.type}</button>
                                </div>
                                <div class="col" style="width: fit-content;">
                                    <button id="gitrepo" class="button" type="button" style="background-color: #4C3659; border: none;">github repo</button>
                                </div>
                            </div>
                        </div>
                        <p style="padding-top: 10px; padding-bottom: 0px; margin: 0;">${projects[project].date}</p>
                    </div>
                </div>
            </div>
        </div>
    </span>`;

    var newdiv = document.createElement("div");
    newdiv.classList.add("col");
    newdiv.style.padding = "15px";
    newdiv.innerHTML = cardhtml;
    projectcards.appendChild(newdiv);

    var linkbutton = document.querySelectorAll(`#${projects[project].link.type}`);
    linkbutton.forEach(button => {
        switch (button.id) {
            case "site":
                button.style.backgroundColor = '#979058';
                break;
            case "devpost":
                button.style.backgroundColor = '#68909C';
                break;
        }
    });
}

function addcoursework() {
    for (school in coursework) {
        newcourses(school);
    }
}

function newcourses(school) {
    var newlist = document.createElement("ul");
    for (let i = 0; i < coursework[school].length; i++) {
        var listitem = document.createElement("li");
        listitem.innerHTML = coursework[school][i];
        newlist.appendChild(listitem);
    }
    var schooldiv = document.getElementById(school);
    var courseworkdiv = schooldiv.querySelector("#coursework")
    
    courseworkdiv.appendChild(newlist);
}

function redirect(id) {
    switch (id) {
        case "email":
            window.open("mailto:crystt8@uci.edu", '_blank');
            break;
        case "instagram":
            window.open("https://www.instagram.com/okcrys.ta/", '_blank');
            break;
        case "linkedin":
            window.open("https://linkedin.com/in/crystal-dc-tran-155360ct", '_blank');
            break;
        case "github":
            window.open("https://github.com/jesuscryst", '_blank');
            break;
    }
}
