import streamReader from './utils/streamReader.js';

const fileInput = document.getElementById('fileInput');
const outputContainer = document.getElementById('dataOutput');
const worker = new Worker('workers/dataProcessor.js');

fileInput.addEventListener('change', handleFileUpload);

worker.onmessage = function(event) {
    const { data } = event;
    displayData(data);
};

function handleFileUpload(event) {
    const file = event.target.files[0];
    console.log('Arquivo selecionado:', file);
    if (file) {
        const validTypes = ['text/csv', 'application/json', 'text/plain'];
        if (!validTypes.includes(file.type)) {
            alert('Tipo de arquivo não suportado. Por favor, envie um arquivo CSV, JSON ou TXT.');
            return;
        }

        const stream = streamReader(file);
        const reader = stream.getReader();
        readStream(reader);
    }
}

function readStream(reader) {
    reader.read().then(function processChunk({ done, value }) {
        if (done) {
            console.log('Leitura do arquivo concluída.');
            return;
        }

        // Envia o chunk para o Web Worker para processamento
        worker.postMessage(value);

        // Continua lendo o próximo chunk
        return reader.read().then(processChunk);
    });
}

function displayData(data) {
    const div = document.createElement('div');
    div.textContent = data;
    outputContainer.appendChild(div);
}