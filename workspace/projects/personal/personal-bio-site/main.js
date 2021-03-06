const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};




const projects = [

    {
        title: "Cool Project1", 
        screenshot: "http://www.movingimage.us/images/homepage/features/jhe_jim_kermit.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project2", 
        screenshot: "http://www.movingimage.us/images/homepage/features/jhe_jim_kermit.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project3", 
        screenshot: "http://www.movingimage.us/images/homepage/features/jhe_jim_kermit.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project4", 
        screenshot: "http://www.movingimage.us/images/homepage/features/jhe_jim_kermit.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project5", 
        screenshot: "http://www.movingimage.us/images/homepage/features/jhe_jim_kermit.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },



];

const createProjectCards = () =>
{
    let domString = '';
        for (let i = 0; i < projects.length; i++)
        {
         if(projects[i].available === true)  
         {
            domString += `<div class='card'>`
            domString +=    `<h3>${projects[i].title}</h3>`;
            domString +=    `<img src='${projects[i].screenshot}'>`;
            domString +=    `<p>${projects[i].description}</p>.`;
            domString +=    `<p>Technologies used: ${projects[i].technologiesUsed}</p>`;
            domString +=    `<a href='${projects[i].url}'>Project URL:</a>`;
            domString +=    `<a href='${projects[i].githubUrl}'>Project GitHub URL:</a>`;
            domString += `</div>`
         }
            

        
        }
        printToDom('projectsPage', domString);

}

const init=()=>
{
    createProjectCards();
};

init();