const streamReader = (file) => {
    const reader = new FileReader();
    const stream = new ReadableStream({
        start(controller) {
            reader.onload = () => {
                const text = reader.result;
                const lines = text.split('\n');
                lines.forEach(line => {
                    controller.enqueue(line);
                });
                controller.close();
            };
            reader.onerror = () => {
                controller.error(reader.error);
            };
            reader.readAsText(file);
        }
    });
    return stream;
};

export default streamReader;