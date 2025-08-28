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

    // Inicia a análise
    analyzeBtn.addEventListener('click', startAnalysis);

    function startAnalysis() {
        if (!analysisName.value.trim()) {
            alert('Por favor, dê um nome à sua análise.');
            return;
        }

        // Esconde as seções anteriores
        document.getElementById('step-upload').classList.add('tw-hidden');
        stepName.classList.add('tw-hidden');
        analyzeBtn.classList.add('tw-hidden');

        // Mostra animação de carregamento
        loadingSection.classList.remove('tw-hidden');

        // Simula progresso
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 10;
            if (progress > 100) progress = 100;

            progressBar.style.width = `${progress}%`;
            progressText.textContent = `${Math.round(progress)}% completo`;

            if (progress === 100) {
                clearInterval(interval);
                setTimeout(showResults, 500);
            }
        }, 500);
    }

    function showResults() {
        loadingSection.classList.add('tw-hidden');
        resultsSection.classList.remove('tw-hidden');
        analysisNameDisplay.textContent = analysisName.value;

        simulateResults();

        setTimeout(() => {
            document.querySelector('.tw-result-image-container').classList.add('tw-show');
        }, 100);
    }

    function simulateResults() {
        const totalFollicles = Math.floor(Math.random() * 30) + 10;
        const small = Math.floor(totalFollicles * 0.6);
        const medium = Math.floor(totalFollicles * 0.3);
        const large = totalFollicles - small - medium;
        const volume = (Math.random() * 15 + 5).toFixed(1);

        document.getElementById('total-follicles').textContent = totalFollicles;
        document.getElementById('ovary-volume').textContent = `${volume} cm³`;

        document.getElementById('small-count').textContent = small;
        document.getElementById('medium-count').textContent = medium;
        document.getElementById('large-count').textContent = large;

        document.getElementById('small-bar').style.width = `${(small / totalFollicles) * 100}%`;
        document.getElementById('medium-bar').style.width = `${(medium / totalFollicles) * 100}%`;
        document.getElementById('large-bar').style.width = `${(large / totalFollicles) * 100}%`;

        resultImage.src = 'https://via.placeholder.com/600x400/4f46e5/ffffff?text=Imagem+Analisada';

        let notes = '';
        if (totalFollicles >= 12) {
            notes = 'A análise sugere um padrão policístico com múltiplos pequenos folículos distribuídos perifericamente.';
        } else if (totalFollicles >= 8) {
            notes = 'A análise mostra um número moderado de folículos, alguns deles com características policísticas.';
        } else {
            notes = 'A análise não sugere um padrão policístico claro, com número normal de folículos.';
        }
        document.getElementById('analysis-notes').textContent = notes;
    }

    newAnalysisBtn.addEventListener('click', resetAnalysis);

    function resetAnalysis() {
        // Reseta estados
        fileList.innerHTML = '';
        analysisName.value = '';
        progressBar.style.width = '0%';
        progressText.textContent = '0% completo';

        loadingSection.classList.add('tw-hidden');
        resultsSection.classList.add('tw-hidden');
        document.querySelector('.tw-result-image-container').classList.remove('tw-show');

        document.getElementById('step-upload').classList.remove('tw-hidden');
        fileListContainer.classList.add('tw-hidden');
        stepName.classList.add('tw-hidden');
        analyzeBtn.classList.add('tw-hidden');
    }
});