

fetch("http://localhost:3000/softwares")
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector("#container");
        data.forEach(software => {
            const div = document.createElement('div');
            div.classList.add('data', 'justify-content-center', 'm-3', 'rounded-5');
            div.innerHTML = `<img src="${software.img}"/>
                            <p>${software.name}</p>
                            <p>${software.description}</p>
                            <a href="${software.link}"><button class="btn btn-outline-dark w-100">Click to Download</button></a>`;
            container.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
