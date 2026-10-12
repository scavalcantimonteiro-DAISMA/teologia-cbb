// app.js - Lógica Interativa Completa do Preparatório Teológico SCM Tech (Versão Atualizada)

// Estado Global da Aplicação
const appState = {
  activeTab: 'plano',
  currentWeek: 1,
  currentDay: 1,
  currentApostilaSection: 'sec_sumario',
  deferredPrompt: null
};

// Funções de Persistência no LocalStorage
const Storage = {
  getNotes: (week, day) => localStorage.getItem(`scm_note_w${week}_d${day}`) || '',
  saveNotes: (week, day, content) => localStorage.setItem(`scm_note_w${week}_d${day}`, content),
  
  getDailyQuiz: (week, day, qNum) => {
    const raw = localStorage.getItem(`scm_daily_quiz_w${week}_d${day}_q${qNum}`);
    return raw ? JSON.parse(raw) : null;
  },
  saveDailyQuiz: (week, day, qNum, data) => localStorage.setItem(`scm_daily_quiz_w${week}_d${day}_q${qNum}`, JSON.stringify(data)),

  getWeeklyQuiz: (week) => {
    const raw = localStorage.getItem(`scm_weekly_quiz_w${week}`);
    return raw ? JSON.parse(raw) : {};
  },
  saveWeeklyQuiz: (week, data) => localStorage.setItem(`scm_weekly_quiz_w${week}`, JSON.stringify(data)),

  getSimuladoAnswer: (num) => localStorage.getItem(`scm_simulado_q_${num}`) || '',
  saveSimuladoAnswer: (num, text) => localStorage.setItem(`scm_simulado_q_${num}`, text),

  getSimuladoResult: () => {
    const raw = localStorage.getItem('scm_simulado_final_result');
    return raw ? JSON.parse(raw) : null;
  },
  saveSimuladoResult: (res) => localStorage.setItem('scm_simulado_final_result', JSON.stringify(res))
};

// Motor de Avaliação Inteligente de Questões Abertas (Dissertativas)
function evaluateOpenAnswer(userAnswer, keyConcepts, expectedAnswer) {
  if (!userAnswer || userAnswer.trim().length < 8) {
    return {
      score: 0,
      matchedConcepts: [],
      missingConcepts: keyConcepts,
      feedback: "Resposta em branco ou excessivamente curta. Para uma boa pontuação na prova, é necessário fundamentar e articular os termos conceituais teológicos."
    };
  }

  // Normalização do texto
  const normalize = (text) => text.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/gi, ' ');

  const normalizedUser = normalize(userAnswer);

  const matched = [];
  const missing = [];

  keyConcepts.forEach(concept => {
    const normConcept = normalize(concept);
    const words = normConcept.split(/\s+/).filter(w => w.length > 2);
    
    // Testa se o conceito exato ou palavras essenciais aparecem
    const isDirectMatch = normalizedUser.includes(normConcept);
    const isWordsMatch = words.length > 1 && words.filter(w => normalizedUser.includes(w)).length >= Math.ceil(words.length * 0.75);

    if (isDirectMatch || isWordsMatch) {
      matched.push(concept);
    } else {
      missing.push(concept);
    }
  });

  const conceptCoverage = matched.length / keyConcepts.length;
  const wordCount = userAnswer.trim().split(/\s+/).length;
  let lengthBonus = Math.min(1.0, wordCount / 30); // Bonificação por argumentação madura

  let rawScore = (conceptCoverage * 8.5) + (lengthBonus * 1.5);
  let finalScore = Math.min(10, Math.max(0, Math.round(rawScore * 10) / 10));

  let feedback = "";
  if (finalScore >= 8.5) {
    feedback = "Excelente resposta! Você abordou com precisão os termos técnicos essenciais e demonstrou domínio seguro da doutrina exigida pela apostila.";
  } else if (finalScore >= 6.0) {
    feedback = "Boa resposta! Você captou a essência do assunto, mas deixou de citar alguns termos ou distinções conceituais importantes esperadas pela banca examinadora.";
  } else {
    feedback = "Resposta incompleta ou superficial. O examinador busca o vocabulário e a fundamentação teológica estipulada na apostila.";
  }

  return {
    score: finalScore,
    matchedConcepts: matched,
    missingConcepts: missing,
    feedback: feedback
  };
}

// Inicialização da Aplicação
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  renderWeekChips();
  renderDayChips();
  renderCurrentDayView();
  renderApostilaReader();
  renderSimuladoView();
  renderPerformanceDashboard();
  initGlobalSearch();
  initPWA();
});

// 1. Navegação de Abas
function initTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
      appState.activeTab = targetId;

      if (targetId === 'desempenho') {
        renderPerformanceDashboard();
      }
    });
  });
}

function switchTab(tabId) {
  const targetBtn = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);
  if (targetBtn) targetBtn.click();
}

// 2. Renderização das Semanas
function renderWeekChips() {
  const container = document.getElementById('weeksChipsContainer');
  if (!container) return;

  container.innerHTML = studyPlanData.map(w => `
    <button class="chip-week ${w.week === appState.currentWeek ? 'active' : ''}" onclick="selectWeek(${w.week})">
      Semana ${w.week}
    </button>
  `).join('');
}

function selectWeek(weekNum) {
  appState.currentWeek = weekNum;
  appState.currentDay = 1;
  renderWeekChips();
  renderDayChips();
  renderCurrentDayView();
}

// 3. Renderização dos Dias
function renderDayChips() {
  const container = document.getElementById('daysStripContainer');
  if (!container) return;

  const currentWeekObj = studyPlanData.find(w => w.week === appState.currentWeek);
  if (!currentWeekObj) return;

  container.innerHTML = currentWeekObj.days.map(d => `
    <div class="day-card-pill ${d.day === appState.currentDay ? 'active' : ''}" onclick="selectDay(${d.day})">
      <div class="pill-num">Dia ${d.day}</div>
      <div class="pill-title" title="${d.title}">${d.title}</div>
    </div>
  `).join('');
}

function selectDay(dayNum) {
  appState.currentDay = dayNum;
  renderDayChips();
  renderCurrentDayView();
}

// 4. Renderização do Dia Atual de Estudos
function renderCurrentDayView() {
  const container = document.getElementById('dayViewContent');
  if (!container) return;

  const currentWeekObj = studyPlanData.find(w => w.week === appState.currentWeek);
  const currentDayObj = currentWeekObj.days.find(d => d.day === appState.currentDay);
  if (!currentDayObj) return;

  const savedNote = Storage.getNotes(appState.currentWeek, appState.currentDay);

  // Calcula média das 3 questões do dia se houver respostas salvas
  let dayTotalScore = 0;
  let dayGradedCount = 0;
  const quizzesHtml = currentDayObj.dailyQuizzes.map(q => {
    const savedQ = Storage.getDailyQuiz(appState.currentWeek, appState.currentDay, q.qNum);
    if (savedQ && savedQ.evalResult) {
      dayTotalScore += savedQ.evalResult.score;
      dayGradedCount++;
    }

    return `
      <div class="single-quiz-block" id="daily_q_card_${q.qNum}">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="font-weight: 800; color: #1e3a8a; font-size: 0.88rem; text-transform: uppercase;">
            Questão ${q.qNum} de 3
          </span>
          ${savedQ && savedQ.evalResult ? `
            <span style="font-weight: 800; font-size: 0.85rem; color: ${savedQ.evalResult.score >= 8 ? '#15803d' : '#ca8a04'};">
              Nota: ${savedQ.evalResult.score.toFixed(1)} / 10
            </span>
          ` : ''}
        </div>
        <p class="single-quiz-title">${q.question}</p>
        
        <textarea 
          class="quiz-textarea" 
          id="daily_input_${q.qNum}" 
          placeholder="Digite sua resposta com base na apostila..."
        >${savedQ ? savedQ.userAnswer : ''}</textarea>

        <button class="btn-primary-action" style="padding: 7px 16px; font-size: 0.86rem;" onclick="submitDailyQuestion(${appState.currentWeek}, ${appState.currentDay}, ${q.qNum})">
          ✓ Avaliar Questão ${q.qNum}
        </button>

        <div class="quiz-feedback-box" id="daily_feedback_${q.qNum}" style="${savedQ ? 'display: block;' : 'display: none;'}">
          ${savedQ ? renderFeedbackHtml(savedQ.evalResult, q.expectedAnswer) : ''}
        </div>
      </div>
    `;
  }).join('');

  const dayAverage = dayGradedCount > 0 ? (dayTotalScore / dayGradedCount).toFixed(1) : null;

  // Processa o conteúdo formatado
  let formattedContent = currentDayObj.content
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^\* (.*$)/gim, '<li>$1</li>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>');

  container.innerHTML = `
    <!-- Topo do Dia -->
    <div class="day-header-card">
      <div class="day-header-top">
        <span class="badge-apostila">Apostila: ${currentDayObj.apostilaPages}</span>
        <button class="btn-primary-action" style="padding: 6px 14px; font-size: 0.82rem;" onclick="openApostilaAtPages('${currentDayObj.apostilaPages}')">
          📖 Ler Página Completa na Apostila
        </button>
      </div>
      <h2 class="day-title">Dia ${currentDayObj.day}: ${currentDayObj.title}</h2>
      
      <!-- Textos Bíblicos Principais com Grifo -->
      <div class="biblical-refs-box">
        <h4>📜 Principais Textos Bíblicos que Atestam o Assunto:</h4>
        ${currentDayObj.biblicalReferences.map(ref => `
          <div class="bible-verse-item">
            <strong>${ref.sigla}</strong> — "${ref.texto}"
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Conteúdo Teológico Íntegro -->
    <div class="study-body-card">
      ${formattedContent}
    </div>

    <!-- Card de Memorização Rápida com Textos Separados por Tema -->
    <div class="memory-card-box">
      <div class="memory-header">
        <div class="memory-title">
          <span>⚡ Card de Memorização Rápida</span>
        </div>
        <span class="memory-badge">${currentDayObj.memoryCard.topic}</span>
      </div>
      <p class="memory-summary">${currentDayObj.memoryCard.summary}</p>
      
      <div class="memory-acronyms-container">
        <span class="memory-acronyms-label">Textos que validam o tópico separados por tema:</span>
        <div class="memory-topics-grid">
          ${currentDayObj.memoryCard.biblicalTopics.map(bt => `
            <div class="memory-topic-chip">
              <span class="memory-topic-name">${bt.topic}:</span>
              <span class="memory-topic-sigla">${bt.sigla}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Bloco de Anotações Pessoais -->
    <div class="notes-section-card">
      <div class="notes-header">
        <h4>📝 Minhas Anotações de Estudo</h4>
        <span class="notes-status-badge" id="notesStatusBadge">✓ Salvo automaticamente</span>
      </div>
      <textarea 
        class="notes-textarea" 
        id="dailyNotesInput" 
        placeholder="Faça aqui suas anotações pessoais, insights, dúvidas ou pontos para memorizar deste dia..."
        oninput="handleNotesInput(${appState.currentWeek}, ${appState.currentDay}, this.value)"
      >${savedNote}</textarea>
    </div>

    <!-- Painel de Quizzes Diários (3 Perguntas Abertas por Dia) -->
    <div class="daily-quizzes-wrapper">
      <div class="daily-quizzes-header">
        <div>
          <span class="quiz-day-badge">Treinamento Diário • 3 Questões Abertas</span>
          <h3 style="color: #1e3a8a; font-size: 1.15rem; margin-top: 4px;">Quizzes de Fixação do Dia ${currentDayObj.day}</h3>
        </div>
        ${dayAverage ? `
          <div class="daily-average-pill">
            Média do Dia: ${dayAverage} / 10
          </div>
        ` : ''}
      </div>

      ${quizzesHtml}
    </div>

    <!-- Se for Dia 6: Exibir o Quiz Semanal Consolidado -->
    ${currentDayObj.day === 6 ? renderWeeklyQuizSectionHtml(currentWeekObj) : ''}
  `;
}

// 5. Manipulação de Anotações com Auto-salvamento
let noteSaveTimeout = null;
function handleNotesInput(week, day, content) {
  const badge = document.getElementById('notesStatusBadge');
  if (badge) badge.innerText = "Salvando...";
  
  clearTimeout(noteSaveTimeout);
  noteSaveTimeout = setTimeout(() => {
    Storage.saveNotes(week, day, content);
    if (badge) badge.innerText = "✓ Salvo automaticamente";
  }, 500);
}

// 6. Submissão e Avaliação das Questões Diárias Individuais (1 a 3)
function submitDailyQuestion(week, day, qNum) {
  const currentWeekObj = studyPlanData.find(w => w.week === week);
  const currentDayObj = currentWeekObj.days.find(d => d.day === day);
  const questionObj = currentDayObj.dailyQuizzes.find(q => q.qNum === qNum);
  
  const inputEl = document.getElementById(`daily_input_${qNum}`);
  const userAnswer = inputEl.value;

  if (!userAnswer.trim()) {
    alert(`Por favor, digite sua resposta na Questão ${qNum} antes de avaliar.`);
    return;
  }

  const evalResult = evaluateOpenAnswer(
    userAnswer,
    questionObj.keyConcepts,
    questionObj.expectedAnswer
  );

  const quizData = {
    userAnswer,
    evalResult,
    timestamp: new Date().toISOString()
  };

  Storage.saveDailyQuiz(week, day, qNum, quizData);

  const feedbackContainer = document.getElementById(`daily_feedback_${qNum}`);
  feedbackContainer.innerHTML = renderFeedbackHtml(evalResult, questionObj.expectedAnswer);
  feedbackContainer.style.display = 'block';

  renderCurrentDayView();
  renderPerformanceDashboard();
}

function renderFeedbackHtml(evalResult, expectedAnswer) {
  const scoreClass = evalResult.score >= 8 ? 'score-high' : (evalResult.score >= 6 ? 'score-mid' : 'score-low');
  
  return `
    <div class="quiz-score-badge ${scoreClass}">
      Nota Avaliada: ${evalResult.score.toFixed(1)} / 10.0
    </div>
    <p style="font-size: 0.95rem; margin-bottom: 12px; color: #1e293b;">${evalResult.feedback}</p>

    <div class="feedback-breakdown">
      ${evalResult.matchedConcepts.length > 0 ? `
        <div class="feedback-section feedback-correct">
          <strong style="color: #15803d;">✓ Termos e conceitos acertados:</strong>
          <div style="margin-top: 4px; display: flex; flex-wrap: wrap; gap: 6px;">
            ${evalResult.matchedConcepts.map(c => `<span style="background: #bbf7d0; color: #166534; font-size: 0.78rem; padding: 2px 8px; border-radius: 4px; font-weight: 600;">${c}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      ${evalResult.missingConcepts.length > 0 ? `
        <div class="feedback-section feedback-missing">
          <strong style="color: #b45309;">⚠ Termos doutrinários que faltaram mencionar:</strong>
          <div style="margin-top: 4px; display: flex; flex-wrap: wrap; gap: 6px;">
            ${evalResult.missingConcepts.map(c => `<span style="background: #fef08a; color: #854d0e; font-size: 0.78rem; padding: 2px 8px; border-radius: 4px; font-weight: 600;">${c}</span>`).join('')}
          </div>
        </div>
      ` : ''}
    </div>

    <div class="expected-answer-quote">
      <strong style="color: #1e3a8a;">📖 Espelho Oficial da Resposta (Apostila):</strong>
      <p style="margin-top: 6px; line-height: 1.6;">${expectedAnswer}</p>
    </div>
  `;
}

// 7. Quiz Semanal
function renderWeeklyQuizSectionHtml(weekObj) {
  const savedWeekly = Storage.getWeeklyQuiz(weekObj.week);
  let totalScore = 0;
  let countGraded = 0;

  const questionsHtml = weekObj.weeklyQuiz.map((q, idx) => {
    const qSaved = savedWeekly[q.id] || { answer: '', evalResult: null };
    if (qSaved.evalResult) {
      totalScore += qSaved.evalResult.score;
      countGraded++;
    }

    return `
      <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 18px; margin-bottom: 16px;">
        <h4 style="font-size: 0.98rem; color: #1e3a8a; margin-bottom: 10px;">${q.question}</h4>
        <textarea 
          class="quiz-textarea" 
          id="input_${q.id}" 
          placeholder="Digite sua resposta..."
          style="min-height: 90px;"
        >${qSaved.answer}</textarea>
        
        <button class="btn-primary-action" style="padding: 6px 14px; font-size: 0.84rem;" onclick="submitWeeklyQuestion(${weekObj.week}, '${q.id}')">
          Avaliar Questão
        </button>

        <div id="feedback_${q.id}" class="quiz-feedback-box" style="${qSaved.evalResult ? 'display: block;' : 'display: none;'}">
          ${qSaved.evalResult ? renderFeedbackHtml(qSaved.evalResult, q.expectedAnswer) : ''}
        </div>
      </div>
    `;
  }).join('');

  const weekAvg = countGraded > 0 ? (totalScore / countGraded).toFixed(1) : null;

  return `
    <div style="background: #f8fafc; border: 2px solid #3b82f6; border-radius: 16px; padding: 24px; margin-top: 30px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <div>
          <h3 style="color: #1e3a8a; font-size: 1.3rem;">🏆 Quiz Oficial da Semana ${weekObj.week}</h3>
          <p style="font-size: 0.88rem; color: #64748b;">Consolidação dos tópicos estudados nesta semana</p>
        </div>
        ${weekAvg ? `
          <div style="background: #1e3a8a; color: #fff; padding: 8px 18px; border-radius: 50px; font-weight: 800; font-size: 1rem;">
            Nota da Semana: ${weekAvg} / 10
          </div>
        ` : ''}
      </div>

      ${questionsHtml}
    </div>
  `;
}

function submitWeeklyQuestion(week, qId) {
  const weekObj = studyPlanData.find(w => w.week === week);
  const qObj = weekObj.weeklyQuiz.find(q => q.id === qId);
  const inputEl = document.getElementById(`input_${qId}`);
  const userAnswer = inputEl.value;

  if (!userAnswer.trim()) {
    alert("Digite sua resposta para avaliar.");
    return;
  }

  const evalResult = evaluateOpenAnswer(userAnswer, qObj.keyConcepts, qObj.expectedAnswer);
  const savedWeekly = Storage.getWeeklyQuiz(week);

  savedWeekly[qId] = {
    answer: userAnswer,
    evalResult
  };

  Storage.saveWeeklyQuiz(week, savedWeekly);

  const fbEl = document.getElementById(`feedback_${qId}`);
  fbEl.innerHTML = renderFeedbackHtml(evalResult, qObj.expectedAnswer);
  fbEl.style.display = 'block';

  renderCurrentDayView();
  renderPerformanceDashboard();
}

// 8. Renderização do Simulado Final das 60 Questões Abertas
function renderSimuladoView() {
  const container = document.getElementById('simuladoQuestionsList');
  if (!container) return;

  let answeredCount = 0;
  simuladoQuestions.forEach(q => {
    if (Storage.getSimuladoAnswer(q.num).trim().length > 0) {
      answeredCount++;
    }
  });

  const progressPct = Math.round((answeredCount / simuladoQuestions.length) * 100);
  const progressBar = document.getElementById('simuladoProgressBar');
  const progressText = document.getElementById('simuladoProgressText');
  if (progressBar) progressBar.style.width = `${progressPct}%`;
  if (progressText) progressText.innerText = `${answeredCount} de 60 respondidas (${progressPct}%)`;

  const savedResult = Storage.getSimuladoResult();

  container.innerHTML = simuladoQuestions.map(q => {
    const currentAnswer = Storage.getSimuladoAnswer(q.num);
    const qEval = savedResult ? savedResult.evaluations[q.num] : null;

    return `
      <div class="simulado-q-card" id="sim_card_${q.num}">
        <div class="simulado-q-header">
          <span class="q-number-pill">Questão ${q.num} de 60</span>
          <span class="q-apostila-page">${q.apostilaRef} • ${q.topic}</span>
        </div>
        <p style="font-size: 1.05rem; font-weight: 700; color: #0f172a; margin-bottom: 12px; line-height: 1.5;">${q.question}</p>
        
        <textarea 
          class="quiz-textarea" 
          id="sim_input_${q.num}" 
          placeholder="Digite sua resposta discursiva completa..."
          oninput="handleSimuladoInput(${q.num}, this.value)"
        >${currentAnswer}</textarea>

        ${qEval ? `
          <div class="quiz-feedback-box" style="display: block;">
            ${renderFeedbackHtml(qEval, q.expectedAnswer)}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

let simInputTimeout = null;
function handleSimuladoInput(qNum, text) {
  Storage.saveSimuladoAnswer(qNum, text);
  
  clearTimeout(simInputTimeout);
  simInputTimeout = setTimeout(() => {
    updateSimuladoProgressCounter();
  }, 400);
}

function updateSimuladoProgressCounter() {
  let answeredCount = 0;
  simuladoQuestions.forEach(q => {
    if (Storage.getSimuladoAnswer(q.num).trim().length > 0) {
      answeredCount++;
    }
  });
  const progressPct = Math.round((answeredCount / simuladoQuestions.length) * 100);
  const progressBar = document.getElementById('simuladoProgressBar');
  const progressText = document.getElementById('simuladoProgressText');
  if (progressBar) progressBar.style.width = `${progressPct}%`;
  if (progressText) progressText.innerText = `${answeredCount} de 60 respondidas (${progressPct}%)`;
}

function finishAndGradeSimulado() {
  let totalScore = 0;
  const evaluations = {};
  let answeredCount = 0;

  simuladoQuestions.forEach(q => {
    const answer = Storage.getSimuladoAnswer(q.num);
    if (answer.trim().length > 0) answeredCount++;

    const evalResult = evaluateOpenAnswer(answer, q.keyConcepts, q.expectedAnswer);
    evaluations[q.num] = evalResult;
    totalScore += evalResult.score;
  });

  const finalAverage = Math.round((totalScore / simuladoQuestions.length) * 10) / 10;
  const finalPercent = Math.round((totalScore / 600) * 100);

  const resultData = {
    average: finalAverage,
    percentage: finalPercent,
    evaluations: evaluations,
    completedAt: new Date().toLocaleString('pt-BR'),
    totalQuestions: 60,
    answeredCount: answeredCount
  };

  Storage.saveSimuladoResult(resultData);
  renderSimuladoView();
  renderPerformanceDashboard();

  window.scrollTo({ top: 0, behavior: 'smooth' });
  alert(`Simulado Avaliado com Sucesso!\n\nNota Geral: ${finalAverage} de 10.0 (${finalPercent}% de acerto)\nQuestões Respondidas: ${answeredCount} de 60\n\nConfira abaixo o espelho e feedback detalhado questão por questão.`);
}

// 9. Leitor da Apostila Completa
function renderApostilaReader() {
  const navContainer = document.getElementById('apostilaSidebarNav');
  const contentContainer = document.getElementById('apostilaMainContent');
  if (!navContainer || !contentContainer) return;

  navContainer.innerHTML = apostilaSections.map(sec => `
    <button class="reader-nav-item ${sec.id === appState.currentApostilaSection ? 'active' : ''}" onclick="selectApostilaSection('${sec.id}')">
      ${sec.title}
    </button>
  `).join('');

  const currentSec = apostilaSections.find(s => s.id === appState.currentApostilaSection) || apostilaSections[0];

  let formatted = currentSec.content
    .replace(/^### (.*$)/gim, '<h3 style="color: #1e3a8a; margin: 24px 0 10px; font-size: 1.25rem;">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 style="color: #1e3a8a; margin: 28px 0 14px; font-size: 1.4rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">$1</h2>')
    .replace(/^\* (.*$)/gim, '<li style="margin-left: 20px; margin-bottom: 6px;">$1</li>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

  contentContainer.innerHTML = `
    <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">
      <h2 style="color: #1e3a8a; font-size: 1.4rem;">${currentSec.title}</h2>
      <span class="badge-apostila">Páginas ${currentSec.pages}</span>
    </div>
    <div style="font-size: 1rem; color: #1e293b; line-height: 1.75;">
      ${formatted}
    </div>
  `;
}

function selectApostilaSection(secId) {
  appState.currentApostilaSection = secId;
  renderApostilaReader();
}

function openApostilaAtPages(pagesStr) {
  switchTab('apostila');
  if (pagesStr.includes('5') || pagesStr.includes('6') || pagesStr.includes('7') || pagesStr.includes('8') || pagesStr.includes('9') || pagesStr.includes('10') || pagesStr.includes('11') || pagesStr.includes('12')) {
    selectApostilaSection('sec_bloco1');
  } else if (pagesStr.includes('13') || pagesStr.includes('20') || pagesStr.includes('30')) {
    selectApostilaSection('sec_bloco2');
  } else if (pagesStr.includes('31') || pagesStr.includes('32') || pagesStr.includes('33')) {
    selectApostilaSection('sec_bloco3');
  } else {
    selectApostilaSection('sec_bloco4');
  }
}

// 10. Pesquisa Rápida Global Instantânea
function initGlobalSearch() {
  const modal = document.getElementById('searchModal');
  const input = document.getElementById('globalSearchInput');
  const resultsContainer = document.getElementById('searchResultsContainer');

  window.openGlobalSearch = () => {
    modal.style.display = 'flex';
    input.focus();
  };

  window.closeGlobalSearch = () => {
    modal.style.display = 'none';
  };

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeGlobalSearch();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openGlobalSearch();
    }
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeGlobalSearch();
    }
  });

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length < 2) {
      resultsContainer.innerHTML = '<p style="color: #64748b; font-size: 0.9rem; text-align: center; padding: 20px;">Digite ao menos 2 caracteres para pesquisar...</p>';
      return;
    }

    const matches = searchIndexData.filter(item => item.keywords.includes(query)).slice(0, 15);

    if (matches.length === 0) {
      resultsContainer.innerHTML = '<p style="color: #64748b; font-size: 0.9rem; text-align: center; padding: 20px;">Nenhum tema encontrado com essa busca.</p>';
      return;
    }

    resultsContainer.innerHTML = matches.map(m => `
      <div class="search-result-item" onclick="handleSearchResultClick('${m.actionType}', ${m.weekIndex || 0}, ${m.dayIndex || 0}, ${m.questionNum || 0}, '${m.sectionId || ''}')">
        <span class="result-badge">${m.type} • ${m.badge}</span>
        <div class="result-title">${m.title}</div>
        <div class="result-preview">${m.textPreview}</div>
      </div>
    `).join('');
  });
}

function handleSearchResultClick(actionType, week, day, qNum, sectionId) {
  closeGlobalSearch();
  if (actionType === 'openDay') {
    switchTab('plano');
    selectWeek(week);
    selectDay(day);
  } else if (actionType === 'openSimuladoQuestion') {
    switchTab('simulado');
    setTimeout(() => {
      const el = document.getElementById(`sim_card_${qNum}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.style.border = '2px solid #2563eb';
      }
    }, 200);
  } else if (actionType === 'openApostilaSection') {
    switchTab('apostila');
    selectApostilaSection(sectionId);
  }
}

// 11. Painel de Desempenho e Métricas
function renderPerformanceDashboard() {
  const container = document.getElementById('performanceContent');
  if (!container) return;

  let totalWeeksScore = 0;
  let gradedWeeksCount = 0;
  const weekSummaries = [1, 2, 3, 4].map(wNum => {
    const wData = Storage.getWeeklyQuiz(wNum);
    const keys = Object.keys(wData);
    if (keys.length > 0) {
      const sum = keys.reduce((acc, k) => acc + (wData[k].evalResult ? wData[k].evalResult.score : 0), 0);
      const avg = sum / keys.length;
      totalWeeksScore += avg;
      gradedWeeksCount++;
      return { week: wNum, score: avg.toFixed(1), count: keys.length };
    }
    return { week: wNum, score: null, count: 0 };
  });

  const simuladoRes = Storage.getSimuladoResult();

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; margin-bottom: 24px;">
      <!-- Card Média Semanal -->
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 20px; box-shadow: var(--shadow-sm);">
        <span style="font-size: 0.8rem; text-transform: uppercase; color: #64748b; font-weight: 700;">Média dos Quizzes Semanais</span>
        <div style="font-size: 2rem; font-weight: 800; color: #1e3a8a; margin: 8px 0;">
          ${gradedWeeksCount > 0 ? (totalWeeksScore / gradedWeeksCount).toFixed(1) : '--'} <span style="font-size: 1rem; color: #64748b;">/ 10</span>
        </div>
        <span style="font-size: 0.82rem; color: #10b981;">${gradedWeeksCount} de 4 semanas avaliadas</span>
      </div>

      <!-- Card Simulado Final -->
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 20px; box-shadow: var(--shadow-sm);">
        <span style="font-size: 0.8rem; text-transform: uppercase; color: #64748b; font-weight: 700;">Simulado Geral (60 Questões)</span>
        <div style="font-size: 2rem; font-weight: 800; color: #2563eb; margin: 8px 0;">
          ${simuladoRes ? simuladoRes.average.toFixed(1) : '--'} <span style="font-size: 1rem; color: #64748b;">/ 10</span>
        </div>
        <span style="font-size: 0.82rem; color: #64748b;">${simuladoRes ? `${simuladoRes.answeredCount}/60 respondidas em ${simuladoRes.completedAt}` : 'Não finalizado ainda'}</span>
      </div>
    </div>

    <!-- Tabela das Semanas -->
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 24px; margin-bottom: 24px;">
      <h3 style="color: #1e3a8a; font-size: 1.15rem; margin-bottom: 16px;">Notas por Semana de Estudo</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px;">
        ${weekSummaries.map(s => `
          <div style="border: 1px solid #cbd5e1; border-radius: 10px; padding: 14px; background: #f8fafc;">
            <div style="font-weight: 700; color: #0f172a; margin-bottom: 4px;">Semana ${s.week}</div>
            <div style="font-size: 1.4rem; font-weight: 800; color: ${s.score ? '#15803d' : '#94a3b8'};">
              ${s.score ? `${s.score} / 10` : 'Pendente'}
            </div>
            <span style="font-size: 0.78rem; color: #64748b;">${s.count > 0 ? `${s.count} questões resolvidas` : 'Faça o quiz no Dia 6'}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Botões de Ação do Painel -->
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <button class="btn-primary-action" onclick="window.print()">
        🖨 Imprimir / Salvar em PDF Relatório de Estudos
      </button>
      <button class="btn-primary-action" style="background: #475569;" onclick="exportNotesAsFile()">
        📥 Exportar Minhas Anotações em Texto
      </button>
    </div>
  `;
}

function exportNotesAsFile() {
  let content = "=== MINHAS ANOTAÇÕES DE ESTUDO DE TEOLOGIA BATISTA ===\n";
  content += "Desenvolvido com SCM Tech - Desenvolvimento de Software\n\n";

  studyPlanData.forEach(w => {
    content += `\n========================================\nSEMANA ${w.week}: ${w.title}\n========================================\n`;
    w.days.forEach(d => {
      const note = Storage.getNotes(w.week, d.day);
      if (note.trim().length > 0) {
        content += `\n[Dia ${d.day} - ${d.title} (Págs: ${d.apostilaPages})]\n`;
        content += note + "\n";
      }
    });
  });

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "minhas_anotacoes_teologia_scm_tech.txt";
  a.click();
  URL.revokeObjectURL(url);
}

// 12. Instalação e Service Worker (PWA)
function initPWA() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then(reg => {
        console.log('ServiceWorker SCM Tech registrado:', reg.scope);
      }).catch(err => {
        console.log('Falha ao registrar ServiceWorker:', err);
      });
    });
  }

  const installBtn = document.getElementById('btnInstallPwa');
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    appState.deferredPrompt = e;
    if (installBtn) {
      installBtn.style.display = 'inline-flex';
      installBtn.addEventListener('click', () => {
        installBtn.style.display = 'none';
        appState.deferredPrompt.prompt();
        appState.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('Usuário aceitou instalar o PWA');
          }
          appState.deferredPrompt = null;
        });
      });
    }
  });
}
