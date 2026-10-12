const fs = require('fs');
const path = require('path');

const studyPlan = require('./data/studyPlanData.js');
const simulado = require('./data/simuladoData.js');
const apostila = require('./data/apostilaData.js');

const searchEntries = [];

// Indexar semanas e dias
studyPlan.forEach(week => {
  week.days.forEach(day => {
    searchEntries.push({
      type: "Plano de Estudo Diário",
      badge: `Semana ${week.week} • Dia ${day.day}`,
      title: day.title,
      pages: day.apostilaPages,
      textPreview: day.content.substring(0, 320).replace(/[#*`]/g, '') + '...',
      actionType: "openDay",
      weekIndex: week.week,
      dayIndex: day.day,
      keywords: `${day.title} ${day.apostilaPages} ${day.memoryCard.summary} ${day.memoryCard.biblicalAcronyms}`.toLowerCase()
    });
  });
});

// Indexar simulado de 60 questões
simulado.forEach(q => {
  searchEntries.push({
    type: "Simulado 60 Questões",
    badge: `Questão ${q.num} • ${q.topic}`,
    title: q.question,
    pages: q.apostilaRef,
    textPreview: `Resposta oficial: ${q.expectedAnswer.substring(0, 280)}...`,
    actionType: "openSimuladoQuestion",
    questionNum: q.num,
    keywords: `${q.topic} ${q.question} ${q.expectedAnswer} ${q.keyConcepts.join(' ')} ${q.apostilaRef}`.toLowerCase()
  });
});

// Indexar seções da apostila
apostila.forEach(sec => {
  searchEntries.push({
    type: "Apostila Completa",
    badge: `Seção • Páginas ${sec.pages}`,
    title: sec.title,
    pages: sec.pages,
    textPreview: sec.content.substring(0, 300).replace(/[#*`]/g, '') + '...',
    actionType: "openApostilaSection",
    sectionId: sec.id,
    keywords: `${sec.title} ${sec.pages} ${sec.content.substring(0, 500)}`.toLowerCase()
  });
});

fs.writeFileSync(path.join(__dirname, 'data', 'searchIndexData.js'), 'const searchIndexData = ' + JSON.stringify(searchEntries, null, 2) + ';\nif (typeof module !== "undefined") module.exports = searchIndexData;\n');
console.log(`data/searchIndexData.js gerado com sucesso com ${searchEntries.length} entradas indexadas!`);
