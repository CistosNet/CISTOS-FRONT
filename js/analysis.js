document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const stepName = document.getElementById('step-name');
    const analyzeBtn = document.getElementById('analyze-btn');
    const loadingSection = document.getElementById('loading-section');
    const resultsSection = document.getElementById('results-section');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const analysisName = document.getElementById('analysis-name');
    const analysisNameDisplay = document.getElementById('analysis-name-display');
    const resultImage = document.getElementById('result-image');
    const newAnalysisBtn = document.getElementById('new-analysis-btn');
    
    // Recupera arquivos selecionados do upload.js
    const fileListContainer = document.getElementById('file-list-container');
    const fileList = document.getElementById('file-list');
    let selectedFiles = []; // Upload.js precisa popular isso

    // Inicia a análise
    analyzeBtn.addEventListener('click', startAnalysis);

    async function startAnalysis() {
        if (!analysisName.value.trim()) {
            alert('Por favor, dê um nome à sua análise.');
            return;
        }

        if (selectedFiles.length === 0) {
            alert('Nenhum arquivo foi selecionado.');
            return;
        }

        // Esconde as seções anteriores
        document.getElementById('step-upload').classList.add('tw-hidden');
        stepName.classList.add('tw-hidden');
        analyzeBtn.classList.add('tw-hidden');

        // Mostra animação de carregamento
        loadingSection.classList.remove('tw-hidden');
        updateProgress(10);

        try {
            // Envia os arquivos para a API FastAPI
            const formData = new FormData();
            selectedFiles.forEach(file => {
                formData.append("file", file); 
            });


            const response = await fetch("http://127.0.0.1:8000/predict/segmentation/Count", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error("Erro no processamento: " + response.status);
            }

            const data = await response.json();

            // Armazena os resultados globais
            analysisResults = data.results || [];
            reportUrl = data.report_url || null;
            currentIndex = 0;

            // Mostra a primeira imagem e informações
            showResults();

        } catch (err) {
            console.error(err);
            alert("Erro durante a análise: " + err.message);
            resetAnalysis();
        }
    }

    function updateProgress(value) {
        progressBar.style.width = `${value}%`;
        progressText.textContent = `${value}% completo`;
    }

    function showResults() {
    loadingSection.classList.add('tw-hidden');
    resultsSection.classList.remove('tw-hidden');
    analysisNameDisplay.textContent = analysisName.value;

    if (analysisResults.length === 0) return;

    const current = analysisResults[currentIndex];

    // Atualiza contadores
    document.getElementById('total-follicles').textContent = current.info?.cistos || "--";
    document.getElementById('ovary-volume').textContent = current.info?.volume || "-- cm³";
    document.getElementById('small-count').textContent = current.info?.small || "--";
    document.getElementById('medium-count').textContent = current.info?.medium || "--";
    document.getElementById('large-count').textContent = current.info?.large || "--";
    document.getElementById('analysis-notes').textContent = current.notes || "";

    // Container de imagens
    const resultsContainer = document.getElementById('result-images');
    resultsContainer.innerHTML = "";

    const img = document.createElement('img');
    img.src = current.image;
    img.alt = "Resultado da análise";
    img.className = "tw-w-full tw-h-auto tw-rounded-lg tw-shadow";
    resultsContainer.appendChild(img);

    // Navegação
    const navDiv = document.createElement("div");
    navDiv.className = "tw-flex tw-gap-4 tw-mt-4";

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Anterior";
    prevBtn.disabled = currentIndex === 0;
    prevBtn.onclick = () => {
        currentIndex--;
        showResults();
    };

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Próximo";
    nextBtn.disabled = currentIndex === analysisResults.length - 1;
    nextBtn.onclick = () => {
        currentIndex++;
        showResults();
    };

    navDiv.appendChild(prevBtn);
    navDiv.appendChild(nextBtn);
    resultsContainer.appendChild(navDiv);

    // Botão relatório
    if (reportUrl) {
        const downloadBtn = document.createElement("a");
        downloadBtn.href = reportUrl;
        downloadBtn.download = "relatorio.zip"; 
        downloadBtn.textContent = "Baixar Relatório";
        downloadBtn.className = "tw-bg-blue-600 tw-text-white tw-px-4 tw-py-2 tw-rounded";
        resultsContainer.appendChild(downloadBtn);
    }
}


    newAnalysisBtn.addEventListener('click', resetAnalysis);

    function resetAnalysis() {
        // Reseta estados
        fileList.innerHTML = '';
        analysisName.value = '';
        progressBar.style.width = '0%';
        progressText.textContent = '0% completo';
        selectedFiles = [];

        loadingSection.classList.add('tw-hidden');
        resultsSection.classList.add('tw-hidden');
        document.querySelector('.tw-result-image-container').classList.remove('tw-show');

        document.getElementById('step-upload').classList.remove('tw-hidden');
        fileListContainer.classList.add('tw-hidden');
        stepName.classList.add('tw-hidden');
        analyzeBtn.classList.add('tw-hidden');
    }

    // Importante: o upload.js deve preencher "selectedFiles"
    window.setSelectedFiles = function(files) {
        selectedFiles = files;
    }
});