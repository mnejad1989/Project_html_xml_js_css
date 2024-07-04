document.addEventListener('DOMContentLoaded', function() {
    fetch('project.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'application/xml');
            const projects = xml.getElementsByTagName('projet');
            const projectList = document.getElementById('projet-list');

            for (let i = 0; i < projects.length; i++) {
                const title = projects[i].getElementsByTagName('title')[0].textContent;
                const description = projects[i].getElementsByTagName('description')[0].textContent;
                const link = projects[i].getElementsByTagName('link')[0].textContent;

                const projectDiv = document.createElement('div');
                projectDiv.classList.add('projet');

                const projectTitle = document.createElement('h3');
                projectTitle.textContent = title;

                const projectDescription = document.createElement('p');
                projectDescription.textContent = description;

                const projectLink = document.createElement('a');
                projectLink.href = link;
                projectLink.textContent = 'Consulter le Projet';

                projectDiv.appendChild(projectTitle);
                projectDiv.appendChild(projectDescription);
                projectDiv.appendChild(projectLink);

                projectList.appendChild(projectDiv);
            }
        })
        .catch(error => console.error('Error fetching the XML file:', error));
});
