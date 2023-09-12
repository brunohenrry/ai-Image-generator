// Certifique-se de configurar a variável de ambiente YOUR_API_KEY
// com a sua chave de API antes de executar este código.
// Você pode fazê-lo localmente usando um arquivo .env ou
// configurando-a em seu ambiente de execução.

// Leia a chave de API da variável de ambiente
const apiKey = process.env.YOUR_API_KEY; // Substitua "YOUR_API_KEY" pelo nome da sua variável de ambiente

const maxImages = 4;
let selectedImageNumber = null;

async function generateImages(input) {
    const response = await fetch(
        'https://sua-api.com/endpoint', // Substitua pela URL da sua própria API
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({ inputs: prompt }),
        }
    );
}

document.getElementById('generate').addEventListener('click', () => {
    const input = document.getElementById('user-prompt').value;
    generateImages(input);
});

function downloadImage(imgUrl, imageNumber) {
    const link = document.createElement('a');
    link.href = imgUrl;
    link.download = `image-${imageNumber + 1}.jpg`;
    link.click();
}

document.getElementById('download').addEventListener('click', () => {
    if (selectedImageNumber !== null) {
        const imgElement = document.querySelector(`#image-grid img:nth-child(${selectedImageNumber + 1})`);
        if (imgElement) {
            const imgUrl = imgElement.src;
            downloadImage(imgUrl, selectedImageNumber);
        }
    }
});
