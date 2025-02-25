document.addEventListener('DOMContentLoaded', () => {
    fetch('/materials')
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('materials-list');
            data.forEach(material => {
                const item = document.createElement('div');
                item.innerHTML = `
                    <h3>${material.title}</h3>
                    <p>Subject: ${material.subject}, Type: ${material.file_type}</p>
                    <a href="/download/${material.file_path.split('/').pop()}" download>Download</a>
                `;
                list.appendChild(item);
            });
        });
});