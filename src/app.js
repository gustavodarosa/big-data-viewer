const fileInput = document.getElementById('fileInput');
const outputContainer = document.getElementById('outputContainer');
const worker = new Worker('workers/dataProcessor.js');

fileInput.addEventListener('change', handleFileUpload);

worker.onmessage = function(event) {
    const { data } = event;
    displayData(data);
};

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            processFileContent(content);
        };
        reader.readAsText(file);
    }
}

function processFileContent(content) {
    const lines = content.split('\n');
    for (let line of lines) {
        worker.postMessage(line);
    }
}

function displayData(data) {
    const div = document.createElement('div');
    div.textContent = data;
    outputContainer.appendChild(div);
}