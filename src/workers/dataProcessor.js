onmessage = function(event) {
    const data = event.data; // Dados recebidos (pode ser uma linha ou conjunto de linhas)
    
    // Realize o processamento necessário, como validação, formatação, etc.
    const processedData = data.trim().toUpperCase(); // Exemplo de processamento simples
    
    // Envia de volta o resultado processado
    postMessage(processedData);
};

function processData(data) {
    // Simulate data processing (e.g., filtering, transforming)
    return data.map(item => {
        // Example transformation: convert all strings to uppercase
        return typeof item === 'string' ? item.toUpperCase() : item;
    });
}