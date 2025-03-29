self.onmessage = function(event) {
    const { data } = event;
    
    if (data.action === 'processData') {
        const processedData = processData(data.payload);
        self.postMessage({ action: 'dataProcessed', payload: processedData });
    }
};

function processData(data) {
    // Simulate data processing (e.g., filtering, transforming)
    return data.map(item => {
        // Example transformation: convert all strings to uppercase
        return typeof item === 'string' ? item.toUpperCase() : item;
    });
}