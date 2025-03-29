# Big Data Viewer

## Visão Geral
Big Data Viewer é uma aplicação web projetada para carregar e processar arquivos grandes (CSV, JSON, TXT) de forma eficiente, sem travar a interface do usuário. A aplicação utiliza tecnologias modernas como Lazy Loading, Web Workers e Streams API para oferecer uma experiência fluida ao lidar com grandes volumes de dados.

## Funcionalidades
- **Upload de Arquivos**: Os usuários podem fazer upload de arquivos grandes nos formatos CSV, JSON ou TXT.
- **Lazy Loading**: Apenas partes do arquivo são carregadas conforme necessário, otimizando o uso de memória.
- **Processamento em Segundo Plano**: O processamento dos dados é realizado em um Web Worker, garantindo que a interface do usuário permaneça responsiva.
- **Streaming de Dados**: A aplicação lê os arquivos linha por linha utilizando a Streams API, permitindo um manuseio eficiente dos dados.
- **Filtros e Busca em Tempo Real**: Os usuários podem filtrar e buscar nos dados enquanto eles estão sendo carregados.

## Tecnologias Utilizadas
- **JavaScript**: A principal linguagem de programação da aplicação.
- **File API**: Utilizada para carregar arquivos do sistema do usuário.
- **Web Workers**: Para processar dados em segundo plano sem bloquear a thread principal.
- **Streams API**: Para leitura eficiente de arquivos grandes.

## Etapas para Alcançar os Conhecimentos em JavaScript

🔥 **Projeto para treinar Otimização de Código – Lazy Loading, Web Workers, Streams**

### 📌 Objetivo
Criar um app que carrega e processa arquivos grandes sem travar a interface, utilizando:
- Lazy Loading para carregar apenas parte do arquivo quando necessário.
- Web Workers para processar os dados em segundo plano.
- Streams para ler os arquivos de maneira eficiente.

### ✅ Etapas
1. **Carregamento de Arquivos Grandes (CSV, JSON, TXT)**  
   - [ ] Implementar o upload de arquivos utilizando a File API.
   - [ ] Validar o tipo de arquivo suportado (CSV, JSON, TXT).

2. **Lazy Loading**  
   - [ ] Implementar o carregamento parcial dos dados para evitar uso excessivo de memória.
   - [ ] Exibir apenas uma parte dos dados na interface conforme necessário.

3. **Processamento em Segundo Plano (Web Workers)**  
   - [ ] Criar um Web Worker para processar os dados em background.
   - [ ] Garantir que a interface do usuário permaneça responsiva durante o processamento.

4. **Streaming de Dados**  
   - [ ] Utilizar a Streams API para ler os arquivos linha por linha.
   - [ ] Exibir os dados na interface conforme são lidos.

5. **Filtros e Busca em Tempo Real**  
   - [ ] Implementar filtros para os dados carregados.
   - [ ] Adicionar funcionalidade de busca em tempo real.

### 🌟 Extras (Se quiser melhorar ainda mais!)
- [ ] Compressão e descompressão de arquivos com gzip.
- [ ] Cache local usando IndexedDB para evitar reprocessamento.
- [ ] Exportação dos dados processados para CSV ou JSON.

## Começando

### Pré-requisitos
- Node.js e npm instalados na sua máquina.

### Instalação
1. Clone o repositório:
   ```
   git clone <repository-url>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd big-data-viewer
   ```
3. Instale as dependências:
   ```
   npm install
   ```

### Executando a Aplicação
1. Abra o arquivo `src/index.html` no seu navegador web.
2. Use o controle de upload para selecionar um arquivo grande (CSV, JSON ou TXT).
3. A aplicação começará a processar o arquivo, exibindo os dados conforme são carregados.

## Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para enviar um pull request ou abrir uma issue com sugestões ou melhorias.

## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.