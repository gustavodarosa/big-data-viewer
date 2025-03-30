export default function streamReader(file) {
    // Cria um stream a partir do arquivo (Blob)
    const stream = file.stream();
    const reader = stream.getReader(); // Cria um leitor para o stream
    const decoder = new TextDecoder(); // Decodifica os bytes para texto
    let leftover = ''; // Armazena a última linha incompleta

    // Retorna um ReadableStream que processa os chunks do arquivo
    return new ReadableStream({
        async start(controller) {
            while (true) {
                const { done, value } = await reader.read(); // Lê o próximo chunk
                if (done) {
                    // Enfileira a última linha restante, se houver
                    if (leftover) {
                        controller.enqueue(leftover);
                    }
                    controller.close(); // Finaliza o stream
                    break;
                }

                // Decodifica o chunk e adiciona ao restante
                const text = leftover + decoder.decode(value, { stream: true });
                const lines = text.split('\n'); // Divide o texto em linhas

                // Enfileira todas as linhas, exceto a última (incompleta)
                leftover = lines.pop(); // Armazena a linha incompleta
                lines.forEach(line => controller.enqueue(line)); // Enfileira as linhas completas
            }
        },
        cancel() {
            reader.cancel(); // Cancela a leitura do stream, se necessário
        }
    });
}