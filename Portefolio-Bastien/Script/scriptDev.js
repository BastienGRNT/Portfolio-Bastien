document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Projet Pendu C",
            image_acceuil: "../imageDev/image1.jpg",
            link: "template.html",
            languageLogo_acceuil: "../iconeDev/c.png",
            github: "https://github.com/BastienGRNT/pendu-c",
            languageLogo_template: "../../iconeDev/c.png",
            image_template: "../../imageDev/image1.jpg",
            description: "Un pendu en C avec un système de classements, des mots aléatoires et surtout du FUN !!!"
        },
        {
            title: "Projet Pendu JS",
            image_acceuil: "../imageDev/image2.png",
            link: "template.html",
            languageLogo_acceuil: "../iconeDev/js.svg",
            github: "https://github.com/BastienGRNT/pendu-js",
            languageLogo_template: "../../iconeDev/js.svg",
            image_template: "../../imageDev/image2.png",
            description: "Un pendu en JavaScript pour tester vos connaissances en programmation !"
        },
        {
            title: "Projet Siteweb",
            image_acceuil: "../imageDev/image3.png",
            link: "template.html",
            languageLogo_acceuil: "../iconeDev/postgre.svg",
            github: "https://github.com/BastienGRNT/MoviesFinder",
            languageLogo_template: "../../iconeDev/postgre.svg",
            image_template: "../../imageDev/image3.png",
            description: "Un site web de recherche de films avec des fonctionnalités avancées."
        },
        {
            title: "Projet Logiciel",
            image_acceuil: "../imageDev/image4.png",
            link: "template.html",
            languageLogo_acceuil: "../iconeDev/csharp.svg",
            github: "https://github.com/BLID-id/hotelapp",
            languageLogo_template: "../../iconeDev/csharp.svg",
            image_template: "../../imageDev/image4.png",
            description: "Un logiciel de gestion d'hôtel avec interface moderne."
        },
        {
            title: "Projet Application",
            image_acceuil: "../imageDev/image5.png",
            link: "template.html",
            languageLogo_acceuil: "../iconeDev/flutter.svg",
            github: "https://github.com/BastienGRNT/APP_LB",
            languageLogo_template: "../../iconeDev/flutter.svg",
            image_template: "../../imageDev/image5.png",
            description: "Une application mobile développée en Flutter pour gérer des réservations."
        }
    ];

    const portfolioContainer = document.getElementById("portfolio-container");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-card");

        // Titre avec logo
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("project-title");

        const titleText = document.createElement("h2");
        titleText.textContent = project.title;

        const langLogo = document.createElement("img");
        langLogo.src = project.languageLogo_acceuil;
        langLogo.alt = `${project.title} logo`;
        langLogo.classList.add("language-logo");

        titleDiv.appendChild(titleText);
        titleDiv.appendChild(langLogo);

        // Image du projet
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("project-image");

        const imgElement = document.createElement("img");
        imgElement.src = project.image_acceuil;
        imgElement.alt = `Capture d'écran de ${project.title}`;
        imageDiv.appendChild(imgElement);

        // Lien GitHub
        const githubLink = document.createElement("a");
        githubLink.classList.add("github-link");
        githubLink.href = project.github;
        githubLink.target = "_blank";
        githubLink.textContent = "Voir sur GitHub";

        // Ajout des éléments à la carte du projet
        projectDiv.appendChild(titleDiv);
        projectDiv.appendChild(imageDiv);
        projectDiv.appendChild(githubLink);

        // Redirection vers la page projet avec paramètres dynamiques pour template
        projectDiv.addEventListener("click", function() {
            const queryString = `?title=${encodeURIComponent(project.title)}&image=${encodeURIComponent(project.image_template)}&languageLogo=${encodeURIComponent(project.languageLogo_template)}&github=${encodeURIComponent(project.github)}&description=${encodeURIComponent(project.description)}`;

            console.log("Redirection vers :", `../Page/ProjectPage/${project.link}${queryString}`);
            window.location.href = `../Page/ProjectPage/${project.link}${queryString}`;
        });

        portfolioContainer.appendChild(projectDiv);
    });
});
