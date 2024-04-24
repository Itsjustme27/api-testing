let div = document.getElementById("data");

fetch("http://localhost:3000/softwares")
    .then(response => response.json())
    .then(data => {
        const software = data[0]; // Accessing the first software object in the array
        div.innerHTML = `<h1>${software.id}</h1>
                        <p>${software.name}</p>
                        <p>${software.description}</p>
                        <a href="${software.link}"><button>Click to Download</button></a>`;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
