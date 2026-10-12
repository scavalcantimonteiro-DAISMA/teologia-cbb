const fs = require('fs');
const path = require('path');

// 1. DADOS COMPLETOS DO PLANO DE ESTUDO (4 SEMANAS / 24 DIAS + MEMORIZAÇÃO + QUIZZES)
const studyPlanData = [
  {
    week: 1,
    title: "Semana 1: Eclesiologia Batista, Ordenanças e Prática da Igreja",
    subtitle: "Páginas 5 a 33 da Apostila",
    description: "Estudo aprofundado sobre Família, Ordenanças (Batismo e Ceia), Autonomia da Igreja Local, Diaconato, Visitação, Missões, Dízimo, Plano Cooperativo e os Princípios Históricos da CBB.",
    days: [
      {
        day: 1,
        title: "Família e Casamento no Plano Divino",
        apostilaPages: "Páginas 5 e 6, 29",
        biblicalReferences: [
          { sigla: "Ef 5.31", texto: "Eis por que deixará o homem seu pai e sua mãe e se unirá à sua mulher, e se tornarão os dois uma só carne." },
          { sigla: "Mt 5.31-32", texto: "Eu, porém, vos digo que todo aquele que repudia sua mulher, a não ser por causa de infidelidade, a faz adúltera." }
        ],
        content: `
### 1. A Família como Instituição Divina
A família é uma instituição criada por Deus, onde podemos viver o amor e a harmonia, bem como os desafios de viver unidos. Sendo uma instituição divina, o homem não pode corrompê-la. Deus a estabeleceu como a primeira instituição da sociedade e o alicerce fundamental de sustentação da pessoa humana. Um alicerce frágil coloca em risco todo o edifício social.

### 2. O Papel dos Pais e Filhos
Cada membro tem um papel definido pelas Escrituras:
* **Aos Pais:** Cabe a direção, proteção e condução espiritual do lar, orientando as decisões com amor e sem provocar os filhos à ira (Ef 6.4).
* **Aos Filhos:** Cabe o respeito e a obediência aos pais no Senhor, sendo considerados bênçãos e herança divina (Gn 1.28; Ef 6.1-3).

### 3. O Casamento e as Normas Bíblicas sobre o Divórcio
* **Base:** O casamento é monogâmico, heterossexual, indissolúvel e duradouro por toda a vida. A união física só é aprovada por Deus no matrimônio; qualquer relação sexual pré-conjugal constitui pecado.
* **Divórcio:** Deus em sua perfeita vontade **não aprova o divórcio**. Todavia, pela dureza do coração humano, a Bíblia admite o divórcio exclusivamente sob duas circunstâncias:
  1. **Infidelidade conjugal (adultério)**, conforme Mt 5.31-32.
  2. **Abandono irreconciliável pelo cônjuge descrente** em casais mistos, conforme 1Co 7.15 (*"se o descrente quiser apartar-se, que se aparte"*).
`,
        memoryCard: {
          topic: "Família & Divórcio",
          summary: "Instituição divina monogâmica e perpétua. Divórcio não é a vontade de Deus, concedido apenas por infidelidade ou abandono irreparável do incrédulo.",
          biblicalAcronyms: "Ef 5.31; Mt 5.31-32; 1Co 7.15; Gn 1.28"
        },
        dailyQuiz: {
          question: "Conforme a apostila, em que se fundamenta o casamento cristão e sob quais duas circunstâncias excepcionais as Escrituras concedem a possibilidade de divórcio?",
          keyConcepts: ["instituicao divina", "monogamico", "infidelidade", "adulterio", "abandono", "descrente", "1co 7.15", "mt 5.31"],
          expectedAnswer: "O casamento é uma instituição divina monogâmica e vitalícia. Deus não aprova o divórcio em sua perfeita vontade, mas o concede apenas em duas exceções: 1) por infidelidade conjugal (adultério, Mt 5.31-32); e 2) por impossibilidade de reconciliação em virtude de abandono pelo cônjuge descrente em casamento misto (1Co 7.15).",
          explanation: "A resposta deve evidenciar que o divórcio não reflete a vontade originária de Deus, mas concessão devido à dureza humana, restringindo-se estritamente aos textos de Mateus 5.31-32 e 1 Coríntios 7.15."
        }
      },
      {
        day: 2,
        title: "As Ordenanças: Batismo e Ceia do Senhor",
        apostilaPages: "Páginas 7, 8, 23, 24, 90, 91, 92",
        biblicalReferences: [
          { sigla: "Cl 2.12", texto: "Tendo sido sepultados, juntamente com ele, no batismo, no qual igualmente fostes ressuscitados mediante a fé no poder de Deus que o ressuscitou dentre os mortos." },
          { sigla: "1Co 11.24-26", texto: "Fazei isto em memória de mim... Porque, todas as vezes que comerdes este pão e beberdes este cálice, anunciais a morte do Senhor, até que ele venha." }
        ],
        content: `
### 1. Ordenanças versus Sacramentos
Para os Batistas, o Batismo e a Ceia do Senhor são **ordenanças**, atos memoriais e simbólicos ordenados por Cristo, e **não sacramentos** que conferem graça salvífica automática (*ex opere operato*). Nenhum crente recebe graça especial sobrenatural pelo simples ato de participar deles.

### 2. O Batismo Bíblico
* **Modo e Sujeito:** Ministrado exclusivamente por **imersão** em água, sob a invocação do Pai, Filho e Espírito Santo, unicamente a quem professou fé consciente em Cristo (rejeição categórica do batismo infantil).
* **Significado:** Simboliza a morte e sepultamento do velho homem pecador e o ressurgimento para uma nova vida com Cristo (Cl 2.12; Rm 6.3-5).
* **O Batismo Salva?** Não. O batismo não salva. É testemunho público e condição para membro da igreja local. Exemplos bíblicos de salvos sem batismo em água: Zaqueu e o ladrão da cruz.

### 3. A Ceia do Senhor
* **Significado:** Memorial comemorativo e proclamador do sacrifício de Cristo até a sua volta. O pão simboliza Seu corpo entregue e o cálice o Seu sangue da nova aliança.
* **Correntes sobre a presença de Cristo:**
  * *Transubstanciação (Católicos):* Os elementos transformam-se literalmente em corpo e sangue reais.
  * *Consubstanciação (Luteranos):* O corpo de Cristo está fisicamente presente em, com e sob o pão.
  * *Presença Mística (Reformados/Calvinistas):* Presença espiritual mediante a fé.
  * *Símbolo/Memorial (Batistas):* Elementos puramente figurativos e memoriais.
* **Modalidades de Participação:**
  * *Ceia Livre:* Aberta a membros de qualquer igreja cristã.
  * *Ceia Restrita:* Aberta a membros de igrejas da mesma fé e ordem batista.
  * *Ceia Ultrarrestrita:* Restrita somente aos membros da igreja local que a celebra.
`,
        memoryCard: {
          topic: "Batismo e Ceia do Senhor",
          summary: "Ordenanças simbólicas e memoriais instituídas por Jesus. O batismo por imersão não salva (ex: ladrão da cruz). A Ceia é memorial e não confere graça intrínseca.",
          biblicalAcronyms: "Mt 28.19; Cl 2.12; 1Co 11.23-26; Lc 23.42-43"
        },
        dailyQuiz: {
          question: "Por que os Batistas consideram o Batismo e a Ceia como 'ordenanças' e não 'sacramentos', e por que a doutrina bíblica rejeita que o batismo tenha poder salvífico?",
          keyConcepts: ["ordenancas", "sacramentos", "memorial", "simbolico", "nao salva", "ladrao da cruz", "zaqueu", "graca especial"],
          expectedAnswer: "Porque são mandamentos de caráter simbólico e memorial instituídos por Cristo, sem conferir graça salvífica ou mágica a quem deles participa. O batismo não salva, servindo como testemunho público de uma fé já existente e regenerada; a Bíblia exemplifica pessoas salvas sem batismo em água, como Zaqueu e o ladrão da cruz.",
          explanation: "É fundamental frisar o termo 'memorial' e a distinção entre a fé salvífica interior e o rito exterior da ordenança."
        }
      },
      {
        day: 3,
        title: "Autonomia da Igreja Local e Governo Congregacional",
        apostilaPages: "Páginas 8, 22, 23, 88, 89, 90",
        biblicalReferences: [
          { sigla: "Mt 18.17", texto: "E, se recusar ouvir também a igreja, considera-o como gentio e publicano." },
          { sigla: "Cl 1.18", texto: "Ele é a cabeça do corpo, da igreja. Ele é o princípio, o primogênito de entre os mortos, para em todas as coisas ter a primazia." }
        ],
        content: `
### 1. Definição da Igreja Neotestamentária
A Igreja é uma congregação local de pessoas regeneradas e batizadas após pública profissão de fé. Não é um templo físico de tijolos, mas o corpo espiritual de Cristo na história.

### 2. Autonomia e Governo Democrático
* **Soberania Local:** Cada igreja é autônoma, livre e independente. Não se submete a nenhuma hierarquia eclesiástica externa, bispado ou convenção impositiva. Convenções e associações existem apenas para mútua cooperação voluntária.
* **Governo Congregacional:** O poder decisório reside na própria congregação reunida em assembleia sob a direção do Espírito Santo, onde todos os membros possuem direitos e deveres iguais.
* **Oficiais Bíblicos:** O Novo Testamento prescreve duas ordens de oficiais:
  1. Pastores (também denominados bispos ou presbíteros na Bíblia).
  2. Diáconos.
* **Formas de Governo Comparadas:**
  * *Episcopal:* Governo centralizado na figura de bispos e hierarquias (ex: Católica, Anglicana).
  * *Presbiteriano:* Governo exercido por conselhos de presbíteros e sínodos.
  * *Congregacional (Batista):* Governo democrático pela assembleia dos membros locais.

### 3. As Três Disciplinas da Igreja
A igreja aplica a disciplina bíblica com propósito restaurador e protetivo:
1. **Disciplina Formativa:** Ensino, discipulado e doutrinação constante.
2. **Disciplina Corretiva:** Repreensão fraterna, admoestação pastoral e suspensão temporária de privilégios.
3. **Disciplina Cirúrgica:** Exclusão/desligamento do membro obstinado no pecado e impenitente (Mt 18.15-17; 1Co 5).
`,
        memoryCard: {
          topic: "Autonomia & Governo da Igreja",
          summary: "Igreja local soberana com governo congregacional democrático e Cristo como único Cabeça. Três disciplinas: formativa, corretiva e cirúrgica.",
          biblicalAcronyms: "Mt 18.17; Cl 1.18; At 20.17-28; 1Co 5.1-5"
        },
        dailyQuiz: {
          question: "Como funciona o sistema de governo congregacional da Igreja Batista e quais são os três tipos de disciplina eclesiástica descritos na apostila?",
          keyConcepts: ["congregacional", "democratico", "autonomia", "cristo cabeca", "formativa", "corretiva", "cirurgica", "assembleia"],
          expectedAnswer: "A Igreja Batista possui governo democrático e congregacional: a autoridade de julgar seus próprios atos reside na assembleia soberana de seus membros sob a direção de Cristo (o único cabeça), sem subordinação a hierarquias externas. Os três tipos de disciplina são: formativa (ensino/doutrinação), corretiva (repreensão/restauração) e cirúrgica (exclusão do membro impenitente).",
          explanation: "A resposta deve contemplar a soberania da congregação local sem submissão externa e listar as três modalidades exatas da disciplina: formativa, corretiva e cirúrgica."
        }
      },
      {
        day: 4,
        title: "Diaconato e o Ministério da Visitação",
        apostilaPages: "Páginas 9 e 10",
        biblicalReferences: [
          { sigla: "1Tm 3.8-13", texto: "Da mesma forma os diáconos sejam sérios, não de língua dobre, não dados a muito vinho, não cobiçosos de torpe ganância, guardando o mistério da fé numa consciência pura." },
          { sigla: "1Pe 4.10", texto: "Servi uns aos outros, cada um conforme o dom que recebeu, como bons despenseiros da multiforme graça de Deus." }
        ],
        content: `
### 1. O Diaconato Bíblico
* **Origem:** Instituído na igreja primitiva em Atos 6 para suprir necessidades materiais e assistência social às viúvas, liberando os apóstolos/pastores para o ministério da oração e da Palavra.
* **Qualificações (1Tm 3.8-13):** Devem ser homens provados, sérios, íntegros, maridos de uma só mulher, governando bem sua casa e filhos, sem ganância nem duplicidade de linguagem.
* **Verdadeira Função:** O cerne do diaconato é **SERVIR** (*diakonos* = servo).
* **Atribuições Práticas:** Auxiliar o pastor nas finanças, visitações aos enfermos e novos convertidos, socorro social, ministério da oração e apoio na disciplina eclesiástica.

### 2. O Ministério da Visitação
* **Natureza:** A igreja viva não é feita de quatro paredes, mas de pessoas alcançadas pela cruz. A visitação expressa comunhão autêntica, consolo ao aflito e acompanhamento pastoral/diaconal.
* **Importância:** Um dos maiores fatores práticos de crescimento, acolhimento e consolidação de novos crentes na vida da igreja. Jesus mesmo deu exemplo visitando lares e necessitados.
`,
        memoryCard: {
          topic: "Diaconato & Visitação",
          summary: "Diácono tem como essência o SERVIR (1Tm 3; At 6). Visitação é dever de cuidado fraternal e um dos pilares de acolhimento e crescimento da igreja.",
          biblicalAcronyms: "1Tm 3.8-13; At 6.1-4; 1Pe 4.9-10; Tt 2.1-15"
        },
        dailyQuiz: {
          question: "Qual é a essência do ministério diaconal conforme as Escrituras e quais são as suas principais atribuições no apoio à igreja e ao pastor?",
          keyConcepts: ["servir", "diacono", "1tm 3", "atos 6", "visitacao", "financas", "assistencia social", "oracao", "disciplina"],
          expectedAnswer: "A essência do ministério diaconal é SERVIR. Suas principais atribuições são: auxiliar no levantamento e cuidado das finanças da igreja, ajudar nas visitações a doentes e novos convertidos, amparar na assistência social, cooperar na oração e dar apoio prático na disciplina eclesiástica, desonerando o pastor para que se dedique ao ensino da Palavra.",
          explanation: "Destaque que a função é de serviço voluntário e suporte pastoral, com base no modelo bíblico de Atos 6 e 1 Timóteo 3."
        }
      },
      {
        day: 5,
        title: "Missões, Dízimo e o Plano Cooperativo",
        apostilaPages: "Páginas 11, 12, 26",
        biblicalReferences: [
          { sigla: "Mc 16.15", texto: "E disse-lhes: Ide por todo o mundo e pregai o evangelho a toda criatura." },
          { sigla: "Ml 3.10", texto: "Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa, e depois fazei prova de mim, diz o Senhor dos Exércitos." }
        ],
        content: `
### 1. Missões e Evangelização
* **A Missão Primordial:** Evangelizar o mundo é o propósito supremo da igreja na terra. A igreja que não faz missões atrofia.
* **Compromisso Universal:** Nenhum crente é dispensado do mandamento de testemunhar de Cristo. O primeiro missionário foi o próprio Deus, enviando Seu Filho unigênito para o resgate do homem.

### 2. O Dízimo Bíblico
* **Plano de Sustento:** O dízimo (a décima parte) é o plano de Deus para manutenção do Seu Reino e expansão missionária.
* **Motivação:** Deve ser entregue por **gratidão voluntária** e não por coação legalista (Gn 28.20-22 com Jacó; Ml 3.8-10). Reter o dízimo é roubar a Deus o que Lhe pertence.

### 3. O Plano Cooperativo dos Batistas
* **O que é:** Sistema institucional voluntário criado pelos batistas para unir forças financeiras de milhares de igrejas locais.
* **Destinação:** Recursos do Plano Cooperativo sustentam juntas de missões mundiais e nacionais, seminários e faculdades teológicas, programas de ação social e plantação de igrejas no Brasil e no exterior.
* **Importância Histórica:** Foi o grande motor do crescimento exponencial da Convenção Batista Brasileira.
`,
        memoryCard: {
          topic: "Missões, Dízimo & Plano Cooperativo",
          summary: "Missões é a vocação máxima da igreja. O dízimo é ato de amor e gratidão para sustento da obra. O Plano Cooperativo viabiliza missões em escala global.",
          biblicalAcronyms: "Mc 16.15; Gn 28.20-22; Ml 3.8-10; 2Co 9.7"
        },
        dailyQuiz: {
          question: "O que é o Plano Cooperativo da Convenção Batista e qual a sua relação com a doutrina bíblica do dízimo e da obra missionária?",
          keyConcepts: ["plano cooperativo", "missoes", "dizimo", "cooperacao voluntaria", "sustento", "juntas missionarias", "seminarios"],
          expectedAnswer: "O Plano Cooperativo é o canal voluntário pelo qual as igrejas batistas unem parte de seus dízimos e ofertas para financiar projetos de grande vulto que nenhuma igreja faria isoladamente: sustento de missionários no Brasil e no mundo, manutenção de seminários teológicos e obras de ação social. O dízimo é a base bíblica de gratidão que alimenta a igreja local e viabiliza essa cooperação missionária.",
          explanation: "A resposta deve articular a união voluntária entre igrejas soberanas para o avanço missionário e teológico."
        }
      },
      {
        day: 6,
        title: "Identidade Batista, Declaração da CBB e Quiz Semanal 1",
        apostilaPages: "Páginas 13, 14, 31, 32, 33",
        biblicalReferences: [
          { sigla: "2Tm 3.16-17", texto: "Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção, para a educação na justiça." },
          { sigla: "At 5.29", texto: "Antes importa obedecer a Deus do que aos homens." }
        ],
        content: `
### 1. Origem Histórica e Distintivos Batistas
Os discípulos designados "batistas" surgiram no século XVII exigindo o batismo exclusivamente de convertidos regenerados, herdando a ênfase dos anabatistas (*os que batizam de novo*).

### 2. Os 6 Princípios Históricos Inegociáveis:
1. **Sola Scriptura:** Aceitação da Bíblia como única regra inerrante de fé e conduta.
2. **Igreja Regenerada:** Comunidade local formada unicamente por crentes convertidos e biblicamente batizados.
3. **Separação entre Igreja e Estado:** O Estado deve ser laico e a Igreja livre.
4. **Liberdade Absoluta de Consciência:** Nenhuma autoridade humana civil ou religiosa pode coagir a fé de uma pessoa.
5. **Responsabilidade Individual:** Cada alma prestará contas diretamente a Deus (sacerdócio universal dos crentes).
6. **Autenticidade e Apostolicidade:** Fidelidade à doutrina dos apóstolos no Novo Testamento.

### 3. As Dez Razões Porque Sou Crente Batista
1. Líder supremo único: Jesus Cristo.
2. Cultos ordeiros, simples e sem rituais esotéricos ou secretos.
3. Fé baseada exclusivamente na Bíblia Sagrada.
4. Proclamação de que apenas Jesus Cristo salva.
5. Relacionamento direto com Deus sem intermediários humanos ou santos.
6. Autonomia democrática da igreja local.
7. Vocação missionária mundial permanente.
8. Separação de Igreja e Estado e liberdade de consciência.
9. Foco contínuo na expansão e plantação de congregações.
10. Aceitação do desafio diário do discipulado e vida santa.
`,
        memoryCard: {
          topic: "Identidade Batista & CBB",
          summary: "Bíblia como única regra; igreja regenerada; separação Igreja-Estado; sacerdócio de todos os crentes e cooperação missionária voluntária.",
          biblicalAcronyms: "2Tm 3.16-17; At 5.29; 1Tm 2.5; 1Pe 2.9"
        },
        dailyQuiz: {
          question: "Cite e explique ao menos três dos princípios históricos fundamentais que notabilizaram os Batistas através dos tempos, conforme a Declaração Doutrinária da CBB.",
          keyConcepts: ["escrituras unica regra", "igreja regenerada", "separacao igreja estado", "liberdade de consciencia", "responsabilidade individual", "cbb"],
          expectedAnswer: "Entre os princípios fundamentais estão: 1) A Bíblia como única regra de fé e prática; 2) O conceito de igreja local autônoma e democrática, formada apenas por pessoas regeneradas e biblicamente batizadas por imersão; 3) A separação irrestrita entre Igreja e Estado com plena liberdade de consciência religiosa; e 4) O sacerdócio universal e responsabilidade individual de cada homem diante de Deus.",
          explanation: "O examinador busca a citação fiel dos pilares da Declaração da CBB (pág. 13-14 da apostila)."
        }
      }
    ],
    weeklyQuiz: [
      {
        id: "w1_q1",
        question: "1. Sob quais justificativas teológicas os Batistas defendem que o Batismo em água não possui eficácia salvífica regeneradora?",
        expectedAnswer: "O batismo é apenas um símbolo e ordenança memorial da morte do velho homem e ressurreição em Cristo. A salvação opera-se unicamente pela graça mediante a fé interior no sacrifício de Cristo. A Bíblia comprova a salvação de indivíduos sem batismo em água, a exemplo de Zaqueu e do ladrão da cruz.",
        keyConcepts: ["simbolo", "memorial", "graca mediante a fe", "nao salva", "ladrao da cruz", "zaqueu"]
      },
      {
        id: "w1_q2",
        question: "2. Explique a estrutura do governo eclesiástico batista e como se compatibiliza a soberania da igreja local com a cooperação através de Convenções e Associações.",
        expectedAnswer: "A igreja local adota o modelo congregacional democrático, sendo soberana, autônoma e sem hierarquia denominacional externa. Sua filiação a Convenções e Associações baseia-se em cooperação voluntária para projetos maiores (missões, educação teológica), sem que esses órgãos tenham poder de imposição legislativa ou doutrinária sobre a congregação.",
        keyConcepts: ["congregacional", "democratico", "autonomia local", "cooperacao voluntaria", "sem hierarquia", "convencoes"]
      },
      {
        id: "w1_q3",
        question: "3. Qual é a visão da Declaração Doutrinária da CBB sobre a separação entre Igreja e Estado e o exercício da liberdade religiosa?",
        expectedAnswer: "A Igreja e o Estado devem estar plenamente separados por terem esferas e finalidades distintas: o Estado deve ser leigo (garantindo o direito de culto sem favorecer qualquer credo) e a Igreja livre de qualquer ingerência política. Deus é o único Senhor da consciência humana.",
        keyConcepts: ["separacao igreja estado", "estado leigo", "igreja livre", "liberdade religiosa", "senhor da consciencia"]
      },
      {
        id: "w1_q4",
        question: "4. Descreva a fundamentação bíblica e o propósito prático do diaconato dentro de uma congregação batista.",
        expectedAnswer: "Instituído em Atos 6 e qualificado em 1 Timóteo 3, o diaconato tem por propósito o ministério do serviço prático: assistência aos necessitados, visitação, gestão financeira e cooperação pastoral, permitindo que os pastores foquem no ministério da oração e da pregação da Palavra.",
        keyConcepts: ["atos 6", "1 timoteo 3", "servico", "assistencia", "visitacao", "apoio pastoral", "liberar para a palavra"]
      }
    ]
  },

  // SEMANA 2
  {
    week: 2,
    title: "Semana 2: Teologia Própria, Bibliologia e Doutrina da Criação",
    subtitle: "Páginas 34 a 56 da Apostila",
    description: "Estudo sistemático sobre o Conhecimento de Deus, Revelação Geral e Especial, Inspiração e Inerrância das Escrituras, Nomes e Atributos de Deus, Triunidade, Decretos Divinos e Criação (material e espiritual).",
    days: [
      {
        day: 1,
        title: "Prolegômenos: O que é Teologia e Doutrina",
        apostilaPages: "Páginas 34, 35, 36",
        biblicalReferences: [
          { sigla: "Jo 4.24", texto: "Deus é espírito; e importa que os seus adoradores o adorem em espírito e em verdade." },
          { sigla: "Jr 9.23-24", texto: "Mas o que se gloriar, glorie-se nisto: em me conhecer e saber que eu sou o Senhor, que faço benevolência, juízo e justiça na terra." }
        ],
        content: `
### 1. Definição de Teologia e Doutrina
* **Teologia:** É o conhecimento sistematizado de Deus e de suas relações com o universo. Compreende a análise cuidadosa e a declaração metódica da doutrina cristã.
* **Doutrina:** É aquilo que as Sagradas Escrituras, como um todo coerente, ensinam a respeito de um tópico ou tema específico.
* **Quem é Deus:** O Espírito Infinito e perfeito em quem todas as coisas têm a sua fonte, sustentação e fim.

### 2. Características e Ramos da Teologia
* **Características:** A teologia autêntica é **bíblica, sistemática, contemporânea e prática** (feita no contexto cultural do homem para aplicação de vida).
* **Divisões Principais:**
  1. *Teologia Bíblica:* Foca na mensagem e compreensão dos autores bíblicos originais e seus primeiros ouvintes ao longo do progresso da revelação.
  2. *Teologia Sistemática:* Compila e sintetiza todas as passagens bíblicas sobre cada grande doutrina para formular o que a Igreja deve crer hoje.
  3. *Teologia Histórica e Dogmática:* Estuda o desenvolvimento dos credos e controvérsias na história da igreja.
  4. *Teologia Prática:* Aplicação no ministério pastoral, liturgia, aconselhamento e ética.

### 3. Teísmo Cristão, Imanência e Transcendência
* **Teísmo Cristão:** Crença em um Deus pessoal que subsiste em três pessoas (Pai, Filho e Espírito Santo), sendo ao mesmo tempo transcendente e imanente.
* **Imanência:** Capacidade e presença ativa de Deus dentro do universo e na história humana.
* **Transcendência:** Deus não é confundido com a natureza; Sua santidade, glória, poder e sabedoria excedem infinitamente toda a ordem criada.
`,
        memoryCard: {
          topic: "Teologia & Transcendência",
          summary: "Teologia é o conhecimento sistematizado de Deus. Deus é transcendente (acima e distinto da criação) e imanente (presente e ativo no mundo).",
          biblicalAcronyms: "Jo 4.24; Jr 9.23-24; Is 55.8-9; Sl 139.7-10"
        },
        dailyQuiz: {
          question: "Defina Teologia e diferencie Teologia Bíblica de Teologia Sistemática conforme o catecismo teológico da apostila.",
          keyConcepts: ["conhecimento sistematizado", "teologia biblica", "autores originais", "teologia sistematica", "sintese de todas passagens", "doutrina"],
          expectedAnswer: "Teologia é o conhecimento sistematizado de Deus e de suas relações com o universo. A Teologia Bíblica foca no entendimento que os autores bíblicos e seus primeiros ouvintes tinham no contexto histórico original; já a Teologia Sistemática compila e sintetiza o ensino de todas as passagens da Bíblia sobre um tema para formular o que devemos crer hoje.",
          explanation: "Demonstre a distinção entre o método cronológico/exegético da teologia bíblica e o método temático/sintético da teologia sistemática."
        }
      },
      {
        day: 2,
        title: "Revelação Geral e Revelação Especial de Deus",
        apostilaPages: "Páginas 36 a 40",
        biblicalReferences: [
          { sigla: "Sl 19.1-2", texto: "Os céus proclamam a glória de Deus, e o firmamento anuncia as obras das suas mãos. Um dia discursa a outro dia, e uma noite revela conhecimento a outra noite." },
          { sigla: "Hb 1.1-2", texto: "Havendo Deus, outrora, falado muitas vezes e de muitas maneiras aos pais, pelos profetas, nestes últimos dias nos falou pelo Filho." }
        ],
        content: `
### 1. Necessidade da Revelação
O homem finito e pecador jamais poderia alcançar o Deus infinito por seus próprios esforços mentais. Para haver conhecimento e comunhão, Deus precisou se autocomunicar graciosamente.

### 2. Revelação Geral
* **Definição:** Comunicação de Deus acessível a todos os seres humanos através de três canais: a **natureza/criação**, a **consciência moral humana** e o **governo providencial da história** (Rm 1.18-21; Sl 19.1-6; At 17.22-31).
* **Teologia Natural e seus 5 Argumentos:**
  1. *Cosmológico:* Todo efeito tem uma causa; o universo exige uma Causa Primeira infinita.
  2. *Ontológico:* A ideia na mente humana de um Ser sumamente perfeito exige Sua existência real.
  3. *Teleológico (ou Teológico no texto):* A ordem, inteligência e propósito do universo exigem um Projetista inteligente.
  4. *Moral:* O senso universal de certo e errado reflete um Legislador moral santo.
  5. *Histórico:* O sentimento religioso presente em todas as culturas ao longo das eras.
* **Limitação:** A revelação geral não salva o pecador; serve para deixar o homem inescusável e culpado perante Deus (Rm 1.20).

### 3. Revelação Especial
* **Definição:** A autorrevelação pessoal, histórica e proposicional de Deus a pessoas específicas em tempos e locais definidos, culminando na Bíblia e em Jesus Cristo encarnado.
* **Características:** É pessoal, proposicional (Deus diz verdades objetivas sobre Si mesmo), salvadora, analógica e antropomórfica (utiliza linguagem acessível aos homens).
`,
        memoryCard: {
          topic: "Revelação Geral vs. Especial",
          summary: "Revelação Geral manifesta-se na criação e consciência (não salva, deixa o homem culpado). Revelação Especial é salvífica e proposicional nas Escrituras e em Cristo.",
          biblicalAcronyms: "Sl 19.1-2; Rm 1.18-21; Hb 1.1-2; 2Tm 3.15"
        },
        dailyQuiz: {
          question: "Qual a diferença essencial entre Revelação Geral e Revelação Especial e por que a Teologia Natural é insuficiente para a salvação do homem?",
          keyConcepts: ["revelacao geral", "natureza e consciencia", "revelacao especial", "palavra e cristo", "nao salva", "culpado", "salvadora"],
          expectedAnswer: "A Revelação Geral é dirigida a todos pela natureza, consciência e história, manifestando o poder de Deus, mas apenas torna o homem culpado e sem desculpa. A Revelação Especial é pessoal, verbal e salvífica, dada aos profetas, registrada nas Escrituras e culminada em Cristo, sendo a única que comunica a redenção pelo Espírito Santo.",
          explanation: "Foque na finalidade: a revelação geral condena/inescusa (como a lei), enquanto a especial regenera e salva."
        }
      },
      {
        day: 3,
        title: "Inspiração e Inerrância das Sagradas Escrituras",
        apostilaPages: "Páginas 41 a 45",
        biblicalReferences: [
          { sigla: "2Tm 3.16", texto: "Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção, para a educação na justiça." },
          { sigla: "2Pe 1.21", texto: "Porque nunca jamais qualquer profecia foi dada por vontade humana; entretanto, homens falaram da parte de Deus, movidos pelo Espírito Santo." }
        ],
        content: `
### 1. Inspiração Bíblica
* **Definição:** A influência sobrenatural do Espírito Santo sobre os autores bíblicos, garantindo que o texto original registrado fosse a autêntica Palavra de Deus sem erro.
* **Distinções Importantes:**
  * *Revelação:* Comunicação da verdade que a mente humana não poderia descobrir sozinha.
  * *Inspiração:* A condução divina no **registro escrito** da verdade. Pode haver revelação sem inspiração (ex: os 7 trovões de Ap 10.3-4 que João foi proibido de escrever) e inspiração sem revelação direta nova (ex: Lucas 1.1-4 investigando fatos históricos).
  * *Iluminação:* A capacitação dada pelo Espírito ao crente hoje para compreender a verdade já revelada.

### 2. As 5 Teorias da Inspiração
1. **Intuição:** Mero gênio religioso natural humano superior. *(Heresia/Rejeitada)*
2. **Iluminação:** Espírito apenas intensificou a sensibilidade do autor, sem distinção de espécie para outros crentes. *(Rejeitada)*
3. **Dinâmica:** Deus deu os conceitos gerais, mas a escolha das palavras coube unicamente ao homem. *(Rejeitada)*
4. **Verbal e Plena (Doutrina Batista Ortodoxa):** O Espírito guiou os autores até a seleção exata das palavras nos manuscritos originais, respeitando o estilo pessoal de cada um.
5. **Ditado Mecânico:** O homem foi uma pena inerte ou gravador passivo. *(Não reflete a humanidade do texto)*

### 3. A Inerrância Bíblica
* **Definição:** A Bíblia é plenamente confiável em todas as suas afirmações originais (históricas, científicas e espirituais).
* **Conceitos:**
  * *Inerrância Plena/Absoluta:* A Bíblia é totalmente verídica em tudo quanto afirma. Apresenta dados fenomenológicos (como aparecem aos olhos humanos).
  * *Inerrância Limitada (Rejeitada):* Afirma falsamente que a Bíblia só acerta em matéria de fé, podendo errar em ciência e história. A apostila refuta isso firmemente (Sl 119.96, 160).
`,
        memoryCard: {
          topic: "Inspiração & Inerrância",
          summary: "Inspiração verbal e plena: Espírito dirigiu pensamentos e palavras originais. A Bíblia é inerrante e autoridade final em todas as suas afirmações.",
          biblicalAcronyms: "2Tm 3.16; 2Pe 1.20-21; Sl 119.96; Jo 10.35"
        },
        dailyQuiz: {
          question: "Diferencie revelação, inspiração e iluminação, e cite qual teoria de inspiração é defendida pela teologia bíblica batista.",
          keyConcepts: ["revelacao", "comunicacao", "inspiracao", "registro escrito", "iluminacao", "compreensao", "teoria verbal", "verbal e plena"],
          expectedAnswer: "Revelação é a comunicação divina da verdade oculta ao homem. Inspiração é a ação sobrenatural do Espírito Santo que garantiu o registro fiel e autêntico dessa verdade na Bíblia. Iluminação é a obra do Espírito capacitando o crente hoje a discernir o texto bíblico já registrado. A teologia batista defende a Teoria da Inspiração Verbal e Plena.",
          explanation: "A resposta deve delimitar com precisão o papel de cada uma das três ações e cravar a Inspiração Verbal e Plena como posição ortodoxa."
        }
      },
      {
        day: 4,
        title: "A Natureza, os Nomes e os Atributos de Deus",
        apostilaPages: "Páginas 46 a 48",
        biblicalReferences: [
          { sigla: "Ex 3.14", texto: "Disse Deus a Moisés: EU SOU O QUE SOU. Disse mais: Assim dirás aos filhos de Israel: EU SOU me enviou a vós." },
          { sigla: "1Tm 1.17", texto: "Assim, ao Rei eterno, imortal, invisível, a Deus único, seja honra e glória pelos séculos dos séculos. Amém." }
        ],
        content: `
### 1. Definições de Deus
* **Breve Catecismo de Westminster:** *"Deus é espírito, infinito, eterno e imutável em seu ser, sabedoria, poder, santidade, justiça, bondade e verdade."*
* **Augustus Strong:** *"Deus é o espírito eterno e perfeito em quem todas as coisas têm a sua fonte, apoio e fim."*

### 2. Nomes de Deus nas Escrituras
* **No Antigo Testamento (Hebraico):**
  * *Elohim:* Plural de majestade; expressa poder supremo, grandeza e soberania criadora.
  * *El:* Deus forte e soberano.
  * *Adonai:* Meu Senhor, Mestre e Soberano governante.
  * *Javé/Yahweh:* O Eterno, Autoexistente, Deus da Aliança ("EU SOU").
* **No Novo Testamento (Grego):**
  * *Theos:* Deus.
  * *Kyrios:* Senhor (usado para Deus e aplicado a Jesus).
  * *Pater:* Pai.
  * *Pantokrator:* Todo-Poderoso (*Theos Pantokrator*).

### 3. Classificação dos Atributos de Deus
* **Atributos Incomunicáveis (Próprios exclusivamente de Deus, não compartilhados com a criatura):**
  1. *Asseidade (Existência autônoma):* Não depende de nada para existir.
  2. *Imutabilidade:* Nunca muda em Seu ser, perfeições e propósitos.
  3. *Infinidade/Eternidade:* Não limitado por tempo nem espaço.
  4. *Unidade/Simplicidade:* Não é composto de partes divisíveis; é perfeitamente um.
* **Atributos Comunicáveis (Partilhados por semelhança com os seres humanos redimidos):**
  * Espiritualidade, Conhecimento/Onisciência, Sabedoria, Veracidade, Santidade, Justiça, Bondade, Graça e Amor.
`,
        memoryCard: {
          topic: "Nomes e Atributos de Deus",
          summary: "Nomes: Adonai, El, Elohim, Kyrios, Pantokrator. Atributos Incomunicáveis (Asseidade, Imutabilidade, Infinidade, Unidade) e Comunicáveis (Amor, Justiça, Santidade).",
          biblicalAcronyms: "Ex 3.14; 1Tm 1.17; Ml 3.6; Sl 90.2"
        },
        dailyQuiz: {
          question: "Como se classificam os atributos de Deus na Teologia Sistemática e quais são os atributos incomunicáveis?",
          keyConcepts: ["incomunicaveis", "comunicaveis", "existencia autonoma", "asseidade", "imutabilidade", "infinidade", "unidade"],
          expectedAnswer: "Classificam-se em incomunicáveis (exclusivos da divindade, não partilhados com a criatura) e comunicáveis (partilhados em medida analógica com os seres criados). Os incomunicáveis são: Existência autônoma (asseidade), Imutabilidade, Infinidade (onisciência/onipotência/eternidade) e Unidade/Simplicidade.",
          explanation: "Cite a divisão clássica e elenque as quatro propriedades incomunicáveis conforme a página 48 da apostila."
        }
      },
      {
        day: 5,
        title: "A Triunidade de Deus e os Decretos Divinos",
        apostilaPages: "Páginas 48 a 53",
        biblicalReferences: [
          { sigla: "Mt 28.19", texto: "Ide, portanto, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo." },
          { sigla: "Ef 1.11", texto: "Nele, digo, no qual fomos também feitos herança, predestinados segundo o propósito daquele que faz todas as coisas conforme o conselho da sua vontade." }
        ],
        content: `
### 1. A Doutrina da Santíssima Trindade
* **Definição:** Deus subsiste eternamente como três pessoas distintas — Pai, Filho e Espírito Santo — sendo cada pessoa plenamente e co-igualmente Deus, e existindo um só Deus verdadeiro.
* **Origem do Termo:** Formulado teologicamente por **Tertuliano** no início do século III.
* **Distinção Essencial:**
  * *Trindade Ontológica:* Trata do ser de Deus; há absoluta igualdade de essência, poder e eternidade entre as três pessoas.
  * *Trindade Econômica:* Trata da atuação de Deus na história da salvação; há subordinação de funções ou papéis (o Pai envia o Filho; o Filho realiza a redenção; o Espírito aplica a redenção aos crentes).

### 2. Os Decretos Divinos
* **Definição (Westminster):** O eterno propósito de Deus, segundo o sábio e santo conselho de sua vontade, pelo qual, para a sua própria glória, Ele predestinou e ordenou tudo o que acontece na história.
* **Finalidade Máxima:** A glória de Deus (Ef 1.6, 12).
* **As Duas Posições Históricas:**
  * *Calvinista:* O decreto soberano de Deus é logicamente anterior; a eleição para a salvação é incondicional, e as decisões humanas ocorrem em consequência do plano decretado.
  * *Arminiana:* Valoriza a liberdade da vontade humana; a eleição baseia-se na presciência divina (Deus elegeu aqueles que de antemão sabia que aceitariam livremente a salvação).
`,
        memoryCard: {
          topic: "Trindade & Decretos Divinos",
          summary: "Um Deus em três Pessoas co-iguais (Tertuliano). Igualdade ontológica de ser e subordinação econômica de papéis. Decretos visam a glória de Deus.",
          biblicalAcronyms: "Mt 28.19; 2Co 13.13; Ef 1.11; Sl 33.11"
        },
        dailyQuiz: {
          question: "Qual a diferença entre Trindade Ontológica e Trindade Econômica, e como as correntes Calvinista e Arminiana explicam a relação entre os decretos divinos e a liberdade humana?",
          keyConcepts: ["trindade ontologica", "igualdade no ser", "trindade economica", "subordinacao de papeis", "calvinista", "incondicional", "arminiana", "presciencia", "condicional"],
          expectedAnswer: "Na Trindade Ontológica as três pessoas são rigorosamente iguais em essência e divindade. Na Trindade Econômica há distinção e subordinação funcional de papéis na obra da redenção. Quanto aos decretos: a visão calvinista defende que o decreto de Deus é anterior e incondicional, sendo as decisões humanas consequências dele; a visão arminiana sustenta que Deus condicionou o plano à presciência da livre resposta humana.",
          explanation: "A banca costuma cobrar com precisão a distinção conceitual 'ontológica vs. econômica' e o embate 'incondicional vs. presciência'."
        }
      },
      {
        day: 6,
        title: "Criação Material, Mundo Espiritual e Quiz Semanal 2",
        apostilaPages: "Páginas 53 a 56",
        biblicalReferences: [
          { sigla: "Gn 1.1", texto: "No princípio, criou Deus os céus e a terra." },
          { sigla: "Cl 1.16", texto: "Pois, nele, foram criadas todas as coisas, nos céus e sobre a terra, as visíveis e as invisíveis, sejam tronos, sejam soberanias, quer principados, quer potestades." }
        ],
        content: `
### 1. A Doutrina da Criação Material
* **Criação Ex Nihilo:** Deus trouxe o universo à existência do nada, sem usar matéria preexistente, por Sua pura palavra e vontade soberana, para manifestação de Sua glória.
* **Teorias Divergentes Rejeitadas:**
  * *Dualismo:* Matéria eterna coexistindo com Deus.
  * *Emanação:* Universo como emanação ou transbordamento da substância divina (panteísmo).
  * *Evolução Naturalista:* Matéria autossuficiente sem criação pessoal e inteligente.

### 2. A Criação do Mundo Espiritual (Angelologia e Queda)
* **Anjos:** Seres espirituais criados antes do homem, dotados de intelecto superior e moralidade, mas sem corpos materiais físicos.
* **Hierarquia Angélica:** Anjos, querubins, serafins e arcanjos.
* **Demônios e Satanás:** Anjos que se rebelaram voluntariamente contra Deus em soberba moral. Satanás (o Diabo, a antiga serpente) é o chefe das hostes caídas; sua obra é tentar ao pecado e opor-se a toda obra divina na terra.

### 3. A Providência Divina
Atividade contínua e soberana pela qual Deus preserva, governa e sustenta todas as criaturas e eventos do universo, conduzindo a história à consumação de Seus santos propósitos.
`,
        memoryCard: {
          topic: "Criação & Providência Divina",
          summary: "Criação ex nihilo (do nada) para a glória de Deus. Anjos são seres espirituais criados; Satanás e demônios são anjos rebeldes. Providência sustenta o cosmos.",
          biblicalAcronyms: "Gn 1.1; Cl 1.16; Sl 104.24; Ne 9.6"
        },
        dailyQuiz: {
          question: "No que consiste a criação do mundo material conforme as Escrituras, e o que é a Providência Divina?",
          keyConcepts: ["ex nihilo", "do nada", "sem materia preexistente", "gloria de deus", "providencia divina", "preserva e governa"],
          expectedAnswer: "A criação consiste no ato de Deus trazer à existência, do nada (ex nihilo) e sem matéria preexistente, tudo o que existe, conferindo-lhe existência distinta e dependente dEle para Sua própria glória. A Providência Divina é a atividade contínua de Deus pela qual Ele sustenta, preserva e governa todas as criaturas e coisas no cumprimento de Seus propósitos eternos.",
          explanation: "Evidencie a expressão 'do nada' e a dependência contínua de toda a criação sob o governo providencial de Deus."
        }
      }
    ],
    weeklyQuiz: [
      {
        id: "w2_q1",
        question: "1. Explique os cinco argumentos racionais da Teologia Natural para provar a existência de Deus e cite por que eles são insuficientes para salvar.",
        expectedAnswer: "Os cinco argumentos são: Cosmológico (causa do universo), Ontológico (ideia do ser perfeitíssimo), Teleológico (ordem e inteligência do cosmos), Moral (senso universal de justiça e dever) e Histórico (sentimento religioso de todos os povos). São insuficientes porque a razão humana decaída só reconhece a grandeza de Deus para ficar sem desculpa perante o juízo; a salvação exige a revelação especial em Cristo e a iluminação do Espírito.",
        keyConcepts: ["cosmologico", "ontologico", "teleologico", "moral", "historico", "insuficiente para salvar", "sem desculpa"]
      },
      {
        id: "w2_q2",
        question: "2. Como a teologia ortodoxa define a Inerrância das Escrituras e qual a crítica apresentada na apostila contra a teoria da inerrância limitada?",
        expectedAnswer: "A Inerrância afirma que a Bíblia é plenamente verídica e confiável em todos os seus ensinos originais. A crítica contra a inerrância limitada (que alega erros em história e ciência) é que a própria Escritura não faz nenhuma restrição temática sobre sua veracidade; se Deus é a verdade suprema, Sua Palavra inspirada não pode conter falhas conceituais.",
        keyConcepts: ["inerrancia plena", "confiavel em tudo", "critica a inerrancia limitada", "escritura nao restringe", "sl 119.96"]
      },
      {
        id: "w2_q3",
        question: "3. Quais são os atributos incomunicáveis de Deus e por que eles enfatizam o caráter absoluto do Criador?",
        expectedAnswer: "Os atributos incomunicáveis são Existência Autônoma (Asseidade), Imutabilidade, Infinidade e Unidade. Eles enfatizam o ser absoluto de Deus porque evidenciam que Ele não depende de nada exterior, não sofre variações temporais e habita em perfeição indivisível, separando-O de forma infinita de todas as suas criaturas.",
        keyConcepts: ["incomunicaveis", "asseidade", "imutabilidade", "infinidade", "unidade", "absoluto"]
      },
      {
        id: "w2_q4",
        question: "4. Qual a diferença fundamental entre as visões Calvinista e Arminiana sobre a predestinação e os decretos divinos?",
        expectedAnswer: "A visão calvinista preconiza que os decretos de Deus são incondicionais e soberanos desde a eternidade, sendo a escolha humana efeito dessa eleição. A visão arminiana dá preeminência à liberdade humana responsável, afirmando que Deus predestinou com base na presciência dos homens que livremente aceitariam a graça salvífica.",
        keyConcepts: ["calvinista", "incondicional", "anterior", "arminiana", "presciencia", "livre arbitrio"]
      }
    ]
  },

  // SEMANA 3
  {
    week: 3,
    title: "Semana 3: Antropologia, Hamartiologia e Cristologia",
    subtitle: "Páginas 56 a 74 da Apostila",
    description: "Estudo da Origem e Natureza do Homem (Imago Dei), Queda e Consequências do Pecado (Hamartiologia), a Pessoa de Cristo, as Duas Naturezas, Heresias Cristológicas, Estados de Cristo e a Expiação.",
    days: [
      {
        day: 1,
        title: "Antropologia: Origem, Natureza e Imagem de Deus",
        apostilaPages: "Páginas 56 a 60",
        biblicalReferences: [
          { sigla: "Gn 1.26-27", texto: "Também disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; tenha ele domínio... Criou Deus, pois, o homem à sua imagem." },
          { sigla: "Gn 2.7", texto: "Formou o Senhor Deus o homem do pó da terra e soprou em suas narinas o fôlego de vida; e o homem passou a ser alma vivente." }
        ],
        content: `
### 1. A Origem e o Propósito do Homem
* **Criação Especial:** O homem não descende de processos cegos evolutivos; foi criado diretamente por Deus: corpo modelado do pó da terra e dimensão imaterial soprada pelo fôlego divino (Gn 2.7).
* **Propósito Supremo:** Conhecer a Deus, amá-Lo e glorificá-Lo em tudo (Is 43.7).

### 2. A Natureza do Ser Humano
* **Dicotomia:** O homem é constituído de duas partes fundamentais: corpo material e alma/espírito imaterial que sobrevive à morte física. (Visão mais tradicional).
* **Tricotomia:** O homem é composto de três partes distintas: corpo, alma (sede dos afetos) e espírito (contato com Deus).
* **Monismo:** Ideia de que a alma não existe separada do corpo. *(Rejeitado pela teologia ortodoxa)*.

### 3. A Origem da Alma
* **Criacionismo:** Teoria de que Deus cria imediatamente uma nova alma para cada ser humano e a une ao embrião entre a concepção e o nascimento.
* **Traducionismo:** Teoria de que alma e corpo são gerados e transmitidos conjuntamente pelos pais no momento da concepção biológica.

### 4. A Imagem de Deus no Homem (Imago Dei)
Distinção máxima da humanidade em relação a toda a criação. Não é física, mas expressa em quatro aspectos: **moral** (senso de justiça e santidade originária), **espiritual** (capacidade de comunhão com o Criador), **mental/racional** (inteligência, consciência e criatividade) e **relacional** (capacidade de amar, comunicar e ter domínio responsável sobre a terra).
`,
        memoryCard: {
          topic: "Homem & Imago Dei",
          summary: "Criado do pó e sopro divino para glorificar a Deus. Possui Imago Dei nos aspectos moral, espiritual, mental e relacional. Dicotomia vs. Tricotomia.",
          biblicalAcronyms: "Gn 1.26-27; Gn 2.7; Is 43.7; Ec 12.7"
        },
        dailyQuiz: {
          question: "Em que consiste a 'Imago Dei' (Imagem de Deus) no homem e quais são as duas principais teorias sobre a origem da alma na história da igreja?",
          keyConcepts: ["imago dei", "moral", "espiritual", "mental", "relacional", "criacionismo", "traducionismo"],
          expectedAnswer: "A Imago Dei consiste na semelhança espiritual, moral, mental e relacional com o Criador (justiça original, capacidade de comunhão e inteligência), não sendo física. As duas teses sobre a origem da alma são: o Criacionismo (Deus cria diretamente cada nova alma) e o Traducionismo (a alma é herdada dos pais junto com o corpo na concepção).",
          explanation: "Aborde as facetas não-físicas da imagem de Deus e diferencie o Criacionismo do Traducionismo."
        }
      },
      {
        day: 2,
        title: "Hamartiologia: A Queda, Imputação e Depravação Total",
        apostilaPages: "Páginas 60 a 64",
        biblicalReferences: [
          { sigla: "Rm 5.12", texto: "Portanto, assim como por um só homem entrou o pecado no mundo, e pelo pecado, a morte, assim também a morte passou a todos os homens, porque todos pecaram." },
          { sigla: "Rm 3.23", texto: "Porque todos pecaram e destituídos estão da glória de Deus." }
        ],
        content: `
### 1. Definição Bíblica de Pecado
Conforme o Catecismo Maior, pecado é qualquer falta de conformidade com, ou transgressão de qualquer lei de Deus dada como regra à criatura moral (seja por pensamento, palavra, omissão, ato ou disposição interna). O pecado gera **culpa** (violação da justiça) e **poluição/corrupção** (afronta à santidade de Deus).

### 2. Origem do Pecado
Não teve Deus como autor. Originou-se primeiro no mundo angélico com a soberba de Lúcifer, e na raça humana mediante o livre ato de desobediência de Adão e Eva no Éden ao cederem à serpente.

### 3. Teorias de Imputação do Pecado de Adão
1. **Pelagiana:** O pecado afetou só a Adão; cada alma nasce pura e inocente. *(Heresia condenada)*.
2. **Arminiana:** O homem herda uma enfermidade moral e incapacidade sem a graça prévia de Deus.
3. **Federal:** Adão era o cabeça legal/representante da raça humana perante o pacto divino; sua condenação foi imputada a todos.
4. **Agostiniana (Chefia Natural/Realismo):** Pela unidade seminal da raça humana, todos estavam organicamente presentes em Adão e pecaram nele.
5. **Imputação Imediata:** A depravação é transmitida diretamente como consequência natural.

### 4. Depravação Total e os Quatro Níveis de Morte
* **Depravação Total:** Não significa que o homem seja tão mau quanto poderia ser, mas que todas as faculdades humanas (mente, vontade, afetos e corpo) foram contaminadas pelo pecado, tornando o pecador incapaz de salvar-se por si mesmo.
* **Castigo Divino:**
  1. *Morte Espiritual:* Separação relacional imediata entre o homem e Deus.
  2. *Sofrimentos da Vida:* Dores físicas, angústias e decadência do mundo caído.
  3. *Morte Física:* Separação entre corpo e alma.
  4. *Morte Eterna (Segunda Morte):* Separação consciente e definitiva de Deus no inferno.
`,
        memoryCard: {
          topic: "Pecado & Depravação Total",
          summary: "Pecado é transgressão da lei divina gerando culpa e corrupção. A Depravação Total contamina todo o ser. O castigo culmina na morte espiritual, física e eterna.",
          biblicalAcronyms: "Rm 5.12; Rm 3.23; Rm 6.23; Ef 2.1-3"
        },
        dailyQuiz: {
          question: "O que é Depravação Total do homem e quais são os quatro níveis de morte que resultam do castigo divino para o pecado?",
          keyConcepts: ["depravacao total", "falta de justica original", "incapaz de salvar", "morte espiritual", "sofrimentos", "morte fisica", "morte eterna"],
          expectedAnswer: "A Depravação Total é a condição em que a corrupção do pecado atinge todas as partes do ser humano (mente, coração e vontade), gerando ausência de justiça original e incapacidade absoluta de salvar-se a si mesmo. Os quatro níveis de morte decorrentes do pecado são: 1) Morte espiritual (separação de Deus); 2) Sofrimentos da existência terrena; 3) Morte física (separação de corpo e alma); e 4) Morte eterna (separação definitiva e consciente de Deus no castigo).",
          explanation: "A resposta requer o conceito preciso da contaminação integral do homem e os 4 níveis listados na página 64 da apostila."
        }
      },
      {
        day: 3,
        title: "Cristologia: A Pessoa de Cristo e Heresias Históricas",
        apostilaPages: "Páginas 64 a 68",
        biblicalReferences: [
          { sigla: "Jo 1.1,14", texto: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus... E o Verbo se fez carne e habitou entre nós, cheio de graça e de verdade." },
          { sigla: "1Tm 2.5", texto: "Porquanto há um só Deus e um só Mediador entre Deus e os homens, Cristo Jesus, homem." }
        ],
        content: `
### 1. A União Hipostática
A doutrina ortodoxa bíblica ensina que Nosso Senhor Jesus Cristo é uma só Pessoa indivisível, na qual subsistem perfeitamente duas naturezas: **verdadeiro Deus e verdadeiro homem**, sem confusão, sem mudança, sem divisão e sem separação.

### 2. Necessidade da Dupla Natureza
* **Por que precisava ser Homem?** Para representar a humanidade caída, cumprir perfeitamente a lei de Deus e pagar a penalidade devida ao pecado com sofrimento em corpo e alma humana (Hb 2.14-17).
* **Por que precisava ser Deus?** Para que Seu sacrifício tivesse valor e eficácia infinitos, suportasse a ira santa divina e triunfasse sobre o pecado e a morte na ressurreição.

### 3. As Grandes Heresias Cristológicas Históricas
* **Ataques à Divindade de Cristo:**
  1. *Ebionismo (Séc. II):* Negava que Jesus fosse Deus; considerava-o mero homem sobre o qual o Espírito repousou.
  2. *Arianismo (Séc. IV, Ário):* Ensinava que Jesus não era Deus eterno, mas a primeira e mais elevada criatura feita por Deus (*"houve um tempo em que Ele não existia"*).
* **Ataques à Humanidade de Cristo:**
  3. *Docetismo (Séc. II):* Afirmava que o corpo físico de Jesus era apenas uma ilusão ou fantasma, pois a matéria seria inerentemente má.
  4. *Apolinarismo (Séc. IV):* Defendia que Jesus tinha corpo humano, mas o logos divino substituiu a mente e o espírito humanos (não plenamente homem).
* **Ataques à Unidade da Pessoa:**
  5. *Nestorianismo (Séc. V):* Dividia Cristo em duas pessoas distintas habitando num só invólucro.
  6. *Eutiquianismo/Monofisimo (Séc. V):* Misturava as duas naturezas numa terceira natureza híbrida, absorvendo a humanidade na divindade.
`,
        memoryCard: {
          topic: "Cristologia & Heresias",
          summary: "Jesus: 1 Pessoa e 2 Naturezas (Deus e Homem). Refutação de heresias: Ebionismo e Arianismo (contra divindade); Docetismo e Apolinarismo (contra humanidade); Nestorianismo e Eutiquianismo (contra a união).",
          biblicalAcronyms: "Jo 1.1,14; Cl 2.9; 1Tm 2.5; Hb 4.15"
        },
        dailyQuiz: {
          question: "Explique a doutrina da união das naturezas na Pessoa de Cristo e cite duas heresias históricas que atacaram Sua divindade e duas que atacaram Sua humanidade.",
          keyConcepts: ["uniao hipostatica", "verdadeiro deus", "verdadeiro homem", "uma so pessoa", "ebionismo", "arianismo", "docetismo", "apolinarismo"],
          expectedAnswer: "Cristo é uma única Pessoa na qual se unem de forma perfeita e sem mistura duas naturezas completas: a divina e a humana. Heresias contra a divindade: Ebionismo (Jesus como mero homem) e Arianismo (Jesus como criatura criada, não Deus eterno). Heresias contra a humanidade: Docetismo (corpo como mera ilusão fantasmagórica) e Apolinarismo (Cristo não possuía mente/alma humana, sendo substituída pelo Logos divino).",
          explanation: "É fundamental identificar as heresias pelo nome exato que consta nas páginas 65 a 68 da apostila."
        }
      },
      {
        day: 4,
        title: "Os Estados de Cristo: Humilhação e Exaltação",
        apostilaPages: "Páginas 68 a 71",
        biblicalReferences: [
          { sigla: "Fp 2.6-8", texto: "Pois ele, subsistindo em forma de Deus, não julgou como usurpação o ser igual a Deus; antes, a si mesmo se esvaziou, assumindo a forma de servo... humilhou-se a si mesmo, tornando-se obediente até à morte e morte de cruz." },
          { sigla: "Fp 2.9-11", texto: "Pelo que também Deus o exaltou sobremaneira e lhe deu o nome que está sobre todo nome, para que ao nome de Jesus se dobre todo joelho." }
        ],
        content: `
### 1. O Estado de Humilhação de Cristo
* **No que consiste:** Na renúncia voluntária da glória celestial visível e a entrada na condição caída deste mundo.
* **Etapas:**
  1. *Encarnação e Nascimento Humilde:* Gerado pelo Espírito e nascido da virgem Maria.
  2. *Kénosis (Esvaziamento):* Esvaziou-se não de Sua divindade, mas abriu mão do exercício independente de seus atributos de majestade divina para tomar a forma de servo.
  3. *Sujeição à Lei:* Obedeceu perfeitamente a lei divina em nosso favor.
  4. *Sofrimento e Morte Vicária:* Carregou os nossos pecados na cruz do Calvário.
  5. *Sepultamento:* Permaneceu sob o poder da sepultura por três dias.
* **Razões da Encarnação:** Confirmar as promessas de Deus, revelar o Pai, aniquilar o pecado, destruir as obras do Diabo, deixar exemplo santo e preparar Sua segunda vinda.

### 2. O Estado de Exaltação de Cristo
* **Etapas Gloriosas:**
  1. *Ressurreição:* Triunfo corporal e físico sobre a morte ao terceiro dia.
  2. *Ascensão aos Céus:* Elevação visível 40 dias após a ressurreição.
  3. *Assento à Destra de Deus Pai:* Posição de suprema honra, poder e sumo sacerdócio intercessório contínuo.
  4. *Segunda Vinda Triunfal:* Seu retorno futuro em majestade para julgar vivos e mortos e consumar o Reino.
`,
        memoryCard: {
          topic: "Estados de Cristo",
          summary: "Humilhação: Encarnação, esvaziamento (kénosis), obediência à lei, sofrimento, morte na cruz e sepultamento. Exaltação: Ressurreição, ascensão, assento à destra e segunda vinda gloriosa.",
          biblicalAcronyms: "Fp 2.5-11; At 2.23-24; Hb 1.3; 1Co 15.3-4"
        },
        dailyQuiz: {
          question: "Quais são as etapas do estado de humilhação de Cristo e quais são as quatro fases do Seu estado de exaltação?",
          keyConcepts: ["humilhacao", "encarnacao", "sofrimento", "morte de cruz", "sepultamento", "exaltacao", "ressurreicao", "ascensao", "assento a destra", "segunda vinda"],
          expectedAnswer: "O estado de humilhação compreende a encarnação, o esvaziamento voluntário (kénosis), a sujeição à lei, o sofrimento vicário, a morte de cruz e o sepultamento. O estado de exaltação compreende a ressurreição corporal ao terceiro dia, a ascensão triunfal aos céus, o assento à destra do Pai (sumo sacerdócio) e o retorno visível em glória na Segunda Vinda.",
          explanation: "A resposta deve listar as etapas cronológicas dos dois estados conforme as páginas 68 e 71 da apostila."
        }
      },
      {
        day: 5,
        title: "Os Ofícios de Cristo e a Doutrina da Expiação",
        apostilaPages: "Páginas 71 a 75",
        biblicalReferences: [
          { sigla: "Is 53.5", texto: "Mas ele foi traspassado pelas nossas transgressões e moído pelas nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos curados." },
          { sigla: "Hb 7.25", texto: "Por isso, também pode salvar totalmente os que por ele se aproximam de Deus, vivendo sempre para interceder por eles." }
        ],
        content: `
### 1. Os Três Ofícios de Cristo (Munus Triplex)
1. **Profeta:** Revela perfeitamente o Pai e a verdade celestial aos homens (Dt 18.15; Jo 1.18). Ele não é mero portador de mensagens, mas a própria Fonte da revelação.
2. **Sacerdote:** Reconcilia o pecador com Deus por meio de Sua expiação vicária na cruz e intercede eternamente pelos crentes à destra do Pai (Hb 7.25).
3. **Rei:** Governa com autoridade suprema sobre toda a criação, sobre os poderes cósmicos e sobre a Igreja (Ef 1.20-22).

### 2. A Expiação na Cruz
* **Significados Essenciais:**
  * *Sacrifício:* Oferta perfeita que perdoa a ofensa moral.
  * *Propiciação:* Aplacamento da justa ira divina contra o pecado.
  * *Substituição:* Morte vicária no lugar do pecador (em nosso favor).
  * *Reconciliação:* Restauração da paz e comunhão perdida entre o homem e Deus.
* **Teorias da Expiação:**
  * *Sociniana:* Mero exemplo de amor e dedicação moral. *(Rejeitada)*.
  * *Influência Moral:* Demonstração que move o coração humano ao amor. *(Incompleta)*.
  * *Governamental:* Manutenção da ordem moral do governo de Deus.
  * *Resgate (Clássica):* Pagamento de resgate para libertar a humanidade do diabo.
  * *Satisfação/Penal Substitutiva (Doutrina Bíblica Ortodoxa):* Pagamento e compensação da honra e da justiça da lei divina violada; Cristo sofreu a penalidade que cabia aos homens.
`,
        memoryCard: {
          topic: "Ofícios de Cristo & Expiação",
          summary: "Profeta (revela a verdade), Sacerdote (sacrifício e intercessão) e Rei (governo soberano). Expiação é vicária, propiciatória e substitutiva.",
          biblicalAcronyms: "Is 53.5-6; Hb 7.25; 2Co 5.21; Rm 3.24-25"
        },
        dailyQuiz: {
          question: "Quais são os três ofícios de Jesus Cristo e qual o significado dos termos 'propiciação' e 'substituição' na doutrina bíblica da expiação?",
          keyConcepts: ["oficios", "profeta", "sacerdote", "rei", "propiciacao", "aplacar a ira", "substituicao", "no lugar do pecador", "vicaria"],
          expectedAnswer: "Os três ofícios são Profeta (revela a Deus), Sacerdote (oferece o sacrifício e intercede) e Rei (governa soberanamente o universo e a igreja). Na expiação, 'Propiciação' significa a satisfação e o aplacamento da santa e justa ira de Deus contra o pecado; 'Substituição' (ou caráter vicário) significa que Cristo assumiu e pagou a condenação na cruz no lugar do pecador culpado.",
          explanation: "Defina claramente os três ofícios e os termos 'propiciação' e 'substituição' conforme as páginas 71 a 74 da apostila."
        }
      },
      {
        day: 6,
        title: "Revisão Geral e Quiz Semanal 3",
        apostilaPages: "Páginas 56 a 74",
        biblicalReferences: [
          { sigla: "2Co 5.21", texto: "Aquele que não conheceu pecado, ele o fez pecado por nós; para que, nele, fôssemos feitos justiça de Deus." },
          { sigla: "Cl 2.9", texto: "Porquanto, nele, habita corporalmente toda a plenitude da Divindade." }
        ],
        content: `
### Revisão Crítica da Semana 3:
1. **O Homem:** Criação digna e coroada com a Imago Dei; distinção entre alma e espírito (dicotomia vs. tricotomia).
2. **A Queda:** Pecado como transgressão da lei divina com consequências mortais físicas, espirituais e eternas.
3. **Cristo Homem e Deus:** A união de duas naturezas perfeitas refutando o arianismo, docetismo e nestorianismo.
4. **Obra Salvadora:** Humilhação na encarnação e cruz; Exaltação na ressurreição e ascensão; Expiação substitutiva e sacerdotal perfeita.
`,
        memoryCard: {
          topic: "Síntese Semanal 3",
          summary: "Homem criado à imagem de Deus; queda em Adão trouxe depravação total; Cristo encarnou (verdadeiro Deus e homem), morreu como substituto vicário e ressuscitou em triunfo.",
          biblicalAcronyms: "Gn 1.27; Rm 5.12; Jo 1.14; 2Co 5.21"
        },
        dailyQuiz: {
          question: "Por que era indispensável que Cristo fosse tanto verdadeiro Deus quanto verdadeiro homem para realizar com perfeição a redenção da humanidade?",
          keyConcepts: ["verdadeiro homem", "representar a humanidade", "sofrer penalidade", "verdadeiro deus", "valor infinito", "suportar a ira", "vencer a morte"],
          expectedAnswer: "Era necessário ser verdadeiro homem porque a penalidade do pecado cabia à natureza humana e exigia sofrimento físico e espiritual real em substituição ao pecador. E era necessário ser verdadeiro Deus para que Seu sacrifício tivesse mérito e valor infinitos, suportasse a plenitude da ira santa de Deus e triunfasse sobre o diabo, o pecado e a morte na ressurreição.",
          explanation: "Essa pergunta é um clássico de concílios pastorais e provas teológicas de credenciamento."
        }
      }
    ],
    weeklyQuiz: [
      {
        id: "w3_q1",
        question: "1. Como a teologia bíblica explica a transmissão do pecado de Adão para a sua descendência de acordo com a teoria da chefia natural (agostiniana) e a teoria federal?",
        expectedAnswer: "Na teoria da chefia natural (agostiniana), Adão é a fonte biológica e seminal da humanidade; todos estavam organicamente presentes nele e pecaram nele. Na teoria federal, Adão atuava como o representante jurídico da aliança estabelecida por Deus para toda a humanidade, de modo que sua queda teve a culpa legal imputada a todos os seus representados.",
        keyConcepts: ["chefia natural", "agostiniana", "unidade seminal", "teoria federal", "representante legal", "imputacao da culpa"]
      },
      {
        id: "w3_q2",
        question: "2. Diferencie o Arianismo do Docetismo e apresente a resposta bíblica para cada uma dessas heresias.",
        expectedAnswer: "O Arianismo negava a divindade eterna de Jesus, considerando-o a primeira criatura feita; refutado por João 1.1 e Colossenses 2.9 (Ele é Deus eterno). O Docetismo negava a humanidade física real de Cristo, alegando que Seu corpo era mera ilusão; refutado por 1 João 4.2-3 e Lucas 24.39 (Ele veio em carne real e ressuscitou corporalmente).",
        keyConcepts: ["arianismo", "negava divindade", "criatura", "docetismo", "negava humanidade", "ilusao", "jo 1.1", "1jo 4.2"]
      },
      {
        id: "w3_q3",
        question: "3. O que significa a doutrina da Kénosis (esvaziamento de Cristo) em Filipenses 2 e o que ela NÃO significa?",
        expectedAnswer: "A Kénosis significa que Cristo renunciou voluntariamente à manifestação gloriosa de Sua majestade divina e ao exercício independente de Seus atributos para assumir a condição de servo e morrer na cruz. Ela NÃO significa que Cristo deixou de ser Deus ou perdeu Seus atributos divinos essenciais.",
        keyConcepts: ["kenosis", "esvaziamento", "forma de servo", "nao deixou de ser deus", "abriu mao da gloria visivel"]
      },
      {
        id: "w3_q4",
        question: "4. Quais são as principais teorias sobre a expiação de Cristo e por que a teologia batista adota a expiação penal substitutiva?",
        expectedAnswer: "As principais teorias são Sociniana (exemplo), Influência Moral (apelo afetivo), Governamental (justiça pública), Resgate (vitória sobre o diabo) e Satisfação/Penal Substitutiva. Os batistas adotam a expiação penal substitutiva porque as Escrituras afirmam claramente que Cristo levou o castigo em nosso lugar (Is 53; 2Co 5.21), aplacando a ira divina como propiciação e resgatando os crentes pela justiça imputada.",
        keyConcepts: ["teorias da expiacao", "sociniana", "moral", "resgate", "penal substitutiva", "castigo em nosso lugar", "isaias 53"]
      }
    ]
  },

  // SEMANA 4
  {
    week: 4,
    title: "Semana 4: Pneumatologia, Soteriologia, Escatologia e Ética",
    subtitle: "Páginas 75 a 95 da Apostila",
    description: "Estudo sobre a Pessoa e Obra do Espírito Santo, a Ordem da Salvação (Ordo Salutis), Eclesiologia avançada, Escatologia (Segunda Vinda e Milênio), Céu e Inferno, Ética Cristã e o Simulado Geral.",
    days: [
      {
        day: 1,
        title: "Pneumatologia: Divindade, Pessoa e Obra do Espírito Santo",
        apostilaPages: "Páginas 75 a 78",
        biblicalReferences: [
          { sigla: "At 5.3-4", texto: "Disse então Pedro: Ananias, por que encheu Satanás o teu coração, para que mentisses ao Espírito Santo?... Não mentiste aos homens, mas a Deus." },
          { sigla: "Jo 14.16-17", texto: "E eu rogarei ao Pai, e ele vos dará outro Consolador, a fim de que esteja para sempre convosco, o Espírito da verdade." }
        ],
        content: `
### 1. A Plena Divindade do Espírito Santo
O Espírito Santo é a terceira pessoa da Trindade, co-eterna e consubstancial com o Pai e o Filho:
* **Recebe Nomes Divinos:** Chamado expressamente de Deus (At 5.3-4; 1Co 3.16).
* **Possui Perfeições Divinas:** Onipresença (Sl 139.7-10), onisciência (1Co 2.10-11), onipotência (Rm 15.19) e eternidade (Hb 9.14).
* **Realiza Obras Divinas:** Criação cósmica (Gn 1.2), inspiração profética das Escrituras (2Pe 1.21), regeneração do pecador (Jo 3.5) e ressurreição dos mortos (Rm 8.11).
* **Recebe Honras Divinas:** Incluído na fórmula batismal (Mt 28.19) e na bênção apostólica (2Co 13.13).

### 2. A Natureza Pessoal do Espírito Santo
O Espírito Santo não é uma energia fluida ou força impessoal. Ele é um **Ser pessoal**:
* Possui atributos de personalidade: **intelecto** (1Co 2.11), **sentimento/afeto** (pode ser entristecido, Ef 4.30) e **vontade** (distribui os dons como quer, 1Co 12.11).
* Jesus usa o pronome masculino e o título pessoal de *Parakletos* (Consolador/Advogado, Jo 14.26).

### 3. A Atuação do Espírito Santo no AT versus NT
* **No Antigo Testamento:** O Espírito Santo vinha sobre pessoas específicas (profetas, reis, juízes) temporariamente para capacitá-las para missões pontuais, podendo retirar-se. Não habitava permanentemente no homem.
* **No Novo Testamento:** A partir do Pentecostes, habita de forma permanente no coração de todos os regenerados, selando o crente para o dia da redenção final (Ef 1.13-14).
`,
        memoryCard: {
          topic: "Pneumatologia",
          summary: "O Espírito Santo é Deus pleno e Pessoa divina (possui intelecto, vontade e afeto). No AT atuava temporariamente; no NT habita permanentemente no crente regenerado.",
          biblicalAcronyms: "At 5.3-4; Jo 14.16-17; Ef 4.30; 1Co 12.11"
        },
        dailyQuiz: {
          question: "Apresente duas evidências bíblicas da divindade e duas da personalidade do Espírito Santo, destacando a diferença de Sua atuação no AT e no NT.",
          keyConcepts: ["nomes divinos", "atos 5.3-4", "atributos divinos", "intelecto", "vontade", "pode ser entristecido", "at temporario", "nt habitacao permanente"],
          expectedAnswer: "Evidências de divindade: chamado expressamente de Deus em Atos 5.3-4 e possui atributos divinos como onipresença (Sl 139). Evidências de personalidade: possui vontade na distribuição de dons (1Co 12.11) e sentimentos, podendo ser entristecido (Ef 4.30). No Antigo Testamento, Ele descia temporariamente sobre líderes e se retirava; a partir de Pentecostes (Novo Testamento), Ele habita permanentemente em cada crente regenerado.",
          explanation: "Estruture em duas provas de divindade, duas de personalidade e a mudança dispensacional da habitação permanente."
        }
      },
      {
        day: 2,
        title: "Soteriologia: Graça Comum, Eleição e a Conversão",
        apostilaPages: "Páginas 78 a 84",
        biblicalReferences: [
          { sigla: "Ef 2.8-9", texto: "Porque pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus; não de obras, para que ninguém se glorie." },
          { sigla: "Jo 3.3", texto: "A isto, respondeu Jesus: Em verdade, em verdade te digo que, se alguém não nascer de novo, não pode ver o reino de Deus." }
        ],
        content: `
### 1. Graça Comum versus Graça Especial
* **Graça Comum:** Ações providenciais pelas quais Deus concede bênçãos gerais (chuva, sol, inteligência, ordem civil, cultura) a crentes e ímpios indiscriminadamente, refreando o mal. **Não salva** ninguém nem regenera a natureza decaída.
* **Graça Especial/Eficaz:** A intervenção sobrenatural salvífica reservada aos eleitos, que transforma radicalmente o coração e confere a salvação eterna.

### 2. Chamado Geral versus Chamado Eficaz
* **Chamado Geral:** Proclamação exterior do evangelho dirigida a toda criatura, convidando ao arrependimento.
* **Chamado Eficaz:** Ação interna e irresistível do Espírito Santo que acompanha a Palavra, regenerando o coração e capacitando o eleito a responder com fé viva.

### 3. A Conversão: Arrependimento e Fé
Dois lados inseparáveis da mesma moeda na resposta ao Evangelho:
* **Arrependimento:** Pesar piedoso pelo pecado com decisão sincera de abandoná-lo. Envolve três facetas:
  1. *Intelectual:* Mudança de conceito mental sobre o pecado.
  2. *Emocional:* Mudança de sentimento (tristeza segundo Deus).
  3. *Volitivo:* Mudança de propósito na vontade de voltar-se para Deus.
* **Fé Salvífica:** Confiança e entrega total a Cristo. Envolve:
  1. *Conhecimento (Notitia):* Compreensão intelectual da verdade do Evangelho.
  2. *Assentimento (Assensus):* Crença convicta de que esses fatos são verdadeiros.
  3. *Confiança/Apropriação (Fiducia):* Entrega e repouso voluntário da alma nos méritos de Cristo.
`,
        memoryCard: {
          topic: "Graça & Conversão",
          summary: "Graça Comum preserva o cosmos; Graça Especial salva. Conversão une Arrependimento (mudança de mente, afeto e propósito) e Fé (conhecimento, assentimento e confiança).",
          biblicalAcronyms: "Ef 2.8-9; Jo 3.3; Mt 5.45; At 20.21"
        },
        dailyQuiz: {
          question: "Quais são os três elementos que constituem a Fé salvífica e os três elementos que compõem o verdadeiro Arrependimento?",
          keyConcepts: ["fe salvifica", "conhecimento", "assentimento", "confianca", "arrependimento", "mudanca de conceito", "sentimento", "proposito"],
          expectedAnswer: "A Fé salvífica é constituída por: Conhecimento (intelectual), Assentimento (emocional/convicção) e Confiança/Fiducia (volitivo/entrega pessoal a Cristo). O verdadeiro Arrependimento é composto por: Mudança de conceito (intelectual), Mudança de sentimento/pesar pelo pecado (emocional) e Mudança de propósito/abandono do pecado (volitivo).",
          explanation: "Essa questão é cobrada quase com frequência absoluta em bancas doutrinárias (página 83 da apostila)."
        }
      },
      {
        day: 3,
        title: "Soteriologia: Justificação, Santificação e Perseverança",
        apostilaPages: "Páginas 84 a 87",
        biblicalReferences: [
          { sigla: "Rm 5.1", texto: "Justificados, pois, mediante a fé, temos paz com Deus por meio de nosso Senhor Jesus Cristo." },
          { sigla: "Jo 10.28-29", texto: "Eu lhes dou a vida eterna; jamais perecerão, e ninguém as arrebatará da minha mão. Aquilo que meu Pai me deu é maior do que tudo; e da mão do Pai ninguém pode arrebatar." }
        ],
        content: `
### 1. A Justificação Forense
* **Definição:** Ato legal e instantâneo de Deus pelo qual Ele perdoa todos os pecados do homem e o **declara justo** diante de Seu tribunal, imputando-lhe a justiça de Cristo.
* **Dimensões:**
  * *Elemento Negativo:* Cancelamento da culpa e remoção de toda a penalidade da condenação.
  * *Elemento Positivo:* Adoção de filhos, imputação da justiça perfeita de Cristo e concessão do direito à vida eterna.
* **Causa:** Não decorre de boas obras do homem, mas unicamente da graça mediante a fé em Jesus (Rm 3.24; 5.1).

### 2. A Santificação Progressiva
* **Definição:** Obra sobrenatural contínua de Deus na qual o crente coopera ativamente, mortificando o velho homem e desenvolvendo a nova vida em Cristo.
* **Natureza:** É um processo que dura toda a vida terrena e é **imperfeita em grau nesta vida** (o crente continuará batalhando contra a carne enquanto viver).
* **Meios da Graça:** A Palavra de Deus, a oração e a comunhão da Igreja (Jo 17.17).

### 3. A Doutrina da Perseverança dos Santos
* **Ensino Central:** Aqueles a quem Deus regenerou e justificou eficazmente pela Sua graça **jamais cairão de forma total ou definitiva**. Estão guardados eternamente pelo poder onipotente de Deus e perseverarão até o fim na salvação.
* **Bases:** O amor eterno de Deus, o valor indefectível do sangue de Cristo, o selo do Espírito Santo e as promessas de Jesus (Jo 10.28-29; Rm 8.35-39).
`,
        memoryCard: {
          topic: "Justificação & Perseverança",
          summary: "Justificação é ato forense instantâneo (declaração de justiça). Santificação é processo contínuo e cooperativo. Os verdadeiros santos perseveram eternamente.",
          biblicalAcronyms: "Rm 5.1; 2Co 5.21; Jo 10.28-29; Rm 8.38-39"
        },
        dailyQuiz: {
          question: "Defina a Justificação, contrastando-a com a Santificação, e explique por que a doutrina bíblica afirma a segurança eterna e perseverança dos santos.",
          keyConcepts: ["justificacao", "ato forense", "declara justo", "instantaneo", "santificacao", "processo continuo", "cooperativo", "perseveranca dos santos", "guardados por deus"],
          expectedAnswer: "A Justificação é um ato legal, instantâneo e forense no qual Deus perdoa o pecador e o declara justo pela imputação da justiça de Cristo. A Santificação é um processo contínuo e cooperativo que dura toda a vida, mortificando o pecado. A segurança e perseverança dos santos decorrem do fato de que os verdadeiros regenerados estão selados pelo Espírito e guardados pelo poder onipotente de Deus, de modo que nenhuma força pode separá-los do amor de Cristo (Jo 10.28; Rm 8.38-39).",
          explanation: "Destaque o contraste: justificação é ato legal externo imediato; santificação é transformação interna progressiva."
        }
      },
      {
        day: 4,
        title: "Escatologia, Destinos Eternos e Ética Cristã",
        apostilaPages: "Páginas 92 a 95",
        biblicalReferences: [
          { sigla: "At 1.11", texto: "Esse Jesus que dentre vós foi recebido em cima no céu, há de vir assim como para o céu o vistes ir." },
          { sigla: "Hb 9.27", texto: "E, como aos homens está ordenado morrerem uma vez, vindo depois disso o juízo." }
        ],
        content: `
### 1. Escatologia Individual e o Estado Intermediário
* **O que acontece após a morte física?**
  * *Concepção Ortodoxa Bíblica:* Entre a morte física e a ressurreição corporal futura, o espírito humano entra em um estado intermediário de consciência plena: os justos desfrutam imediatamente da presença e consolo de Deus ("dormir no Senhor"), e os ímpios sofrem a ausência de Deus e tormento consciente (Lc 16.19-31; 2Co 5.8).
  * *Heresias Rejeitadas:* Sono da alma (adventistas), purgatório (católicos) e reencarnação/ressurreição instantânea. Contato com os mortos é expressamente proibido pela Bíblia.

### 2. A Segunda Vinda de Cristo
Será **pessoal, física, visível, repentina e triunfal** (Mt 24.30; 1Ts 5.2).

### 3. As Três Concepções sobre o Milênio
1. **Pré-milenismo:** Crê que Cristo retornará visivelmente antes do milênio para inaugurar um reinado literal de 1000 anos na terra.
2. **Pós-milenismo:** Crê que o Evangelho triunfará no coração dos homens transformando o mundo na era do milênio espiritual; ao final dessa era de bênçãos, Cristo retornará.
3. **Amilenismo:** Defende que o "milênio" de Apocalipse 20 é simbólico e corresponde à era atual da Igreja; a Segunda Vinda trará imediatamente o juízo final e a criação do novo céu e nova terra.

### 4. Céu, Inferno e Ética
* **Céu:** Morada eterna onde Deus manifesta plenamente Sua gloriosa presença abençoadora aos santos com corpos ressurretos.
* **Inferno:** Lugar real de castigo consciente e separação eterna de Deus destinado ao Diabo e aos impenitentes.
* **Ética Bíblica e Cristã:** Sistema de determinação do certo e errado fundamentado na revelação das Escrituras e no caráter santo de Deus para orientar a vida na sociedade.
`,
        memoryCard: {
          topic: "Escatologia & Ética",
          summary: "Estado intermediário consciente (sem sono ou purgatório). Segunda Vinda visível e física. Três visões milenares (pré, pós e amilenismo). Céu e inferno eternos.",
          biblicalAcronyms: "At 1.11; Hb 9.27; Mt 25.46; Ap 20-22"
        },
        dailyQuiz: {
          question: "Quais as características da Segunda Vinda de Jesus e quais são as três principais concepções teológicas a respeito do Milênio descritas na apostila?",
          keyConcepts: ["segunda vinda", "pessoal", "fisica", "visivel", "repentina", "pre-milenismo", "pos-milenismo", "amilenismo"],
          expectedAnswer: "A Segunda Vinda de Cristo será pessoal, física, corporal, visível a todos os olhos, repentina e gloriosa. As três concepções sobre o milênio são: 1) Pré-milenismo (Cristo volta antes do milênio para reinar literalmente na terra); 2) Pós-milenismo (a igreja evangeliza e cristianiza o mundo inaugurando o milênio, e Cristo volta ao final); 3) Amilenismo (o milênio é simbólico e representa o reinado espiritual atual de Cristo na era da Igreja, seguido logo pelo juízo final).",
          explanation: "Aponte as 5 características da Parousia e as três distinções escatológicas das páginas 93-94 da apostila."
        }
      },
      {
        day: 5,
        title: "Revisão Geral e Preparação para o Grande Simulado",
        apostilaPages: "Páginas 5 a 95",
        biblicalReferences: [
          { sigla: "2Tm 2.15", texto: "Procura apresentar-te a Deus aprovado, como obreiro que não tem de que se envergonhar, que maneja bem a palavra da verdade." },
          { sigla: "1Pe 3.15", texto: "Antes, santificai a Cristo, como Senhor, em vosso coração, estando sempre preparados para responder a todo aquele que vos pedir razão da esperança que há em vós." }
        ],
        content: `
### Instruções para o Grande Simulado de 60 Questões Abertas:
1. Este simulado cobre **100% dos 4 blocos e 95 páginas** da sua apostila.
2. Cada questão foi elaborada espelhando o rigor e o vocabulário de concílios doutrinários e provas examinadoras.
3. **Não há limite de tempo travando você:** você tem total liberdade para realizar as 60 questões ao longo de até 3 dias (ou no seu próprio ritmo).
4. Todas as suas respostas são **salvas automaticamente caractere por caractere** no seu navegador/aplicativo.
5. Ao concluir, o motor de correção fornecerá o **Espelho Oficial**, a **Nota Geral**, e o diagnóstico do que você acertou ou onde faltou conceituar.
`,
        memoryCard: {
          topic: "Preparação Final",
          summary: "Manejar bem a palavra da verdade. O Simulado de 60 questões abertas testa a amplitude total dos 4 módulos doutrinários.",
          biblicalAcronyms: "2Tm 2.15; 1Pe 3.15"
        },
        dailyQuiz: {
          question: "Como o estudante de teologia deve se posicionar diante das Escrituras conforme 2 Timóteo 2.15 e qual a importância de articular com clareza as doutrinas da fé?",
          keyConcepts: ["aprovado", "obreiro", "maneja bem a palavra", "clareza", "fidelidade doutrinaria"],
          expectedAnswer: "O estudante e servo de Deus deve buscar apresentar-se aprovado diante de Deus, como obreiro diligente que não tem de que se envergonhar e que maneja com retidão e fidelidade a Palavra da verdade, proclamando e defendendo a sã doutrina para a edificação da Igreja e a glória de Deus.",
          explanation: "Consolidação de propósito e compromisso com o estudo metódico da Palavra."
        }
      },
      {
        day: 6,
        title: "Simulado Geral Aberto (Início das 60 Questões) e Quiz Semanal 4",
        apostilaPages: "Páginas 75 a 95",
        biblicalReferences: [
          { sigla: "Rm 8.38-39", texto: "Porque eu estou bem certo de que nem a morte, nem a vida, nem os anjos, nem os principados... poderá separar-nos do amor de Deus, que está em Cristo Jesus, nosso Senhor." },
          { sigla: "Ap 22.20", texto: "Aquele que dá testemunho destas coisas diz: Certamente, venho sem demora. Amém! Vem, Senhor Jesus!" }
        ],
        content: `
### Início do Simulado Final!
Acesse a aba **Simulado Final (60 Questões)** para responder às questões discursivas oficiais. Você pode navegar livremente entre as perguntas, revisar e salvar quantas vezes quiser.
`,
        memoryCard: {
          topic: "Simulado Final",
          summary: "60 questões discursivas abrangentes. Responda no seu ritmo em até 3 dias com salvamento automático.",
          biblicalAcronyms: "2Tm 4.7-8; Ap 22.20"
        },
        dailyQuiz: {
          question: "Qual o resumo da esperança cristã expressa em Apocalipse 22 e Romanos 8 para o crente justificado?",
          keyConcepts: ["esperanca crista", "amor de deus inseparavel", "vem senhor jesus", "glorificacao"],
          expectedAnswer: "A esperança cristã repousa na certeza absoluta de que nada pode separar o crente do amor de Deus em Cristo Jesus (Rm 8.38-39) e na bendita expectativa da volta de Cristo para consumar Seu Reino eterno e enxugar dos olhos toda lágrima (Ap 22.20).",
          explanation: "Fim do plano de 4 semanas com foco na esperança escatológica e perseverança da fé."
        }
      }
    ],
    weeklyQuiz: [
      {
        id: "w4_q1",
        question: "1. Como as Escrituras comprovam a divindade e a personalidade do Espírito Santo contra as alegações de que Ele seria uma força impessoal?",
        expectedAnswer: "O Espírito Santo possui nomes divinos (chamado de Deus em At 5.3-4), atributos incomunicáveis (onipresença, eternidade) e realiza obras divinas (criação, regeneração). Ele é um ser pessoal porque possui mente, intelecto, vontade própria na distribuição de dons e afetos, podendo ser entristecido (Ef 4.30), características que nenhuma energia ou força impessoal possui.",
        keyConcepts: ["divindade", "personalidade", "mente", "afetos", "vontade", "atos 5.3-4", "efesios 4.30"]
      },
      {
        id: "w4_q2",
        question: "2. Explique a diferença entre Justificação e Santificação na soteriologia cristã quanto ao tempo, natureza e cooperação humana.",
        expectedAnswer: "A Justificação é um ato legal e forense instantâneo no qual Deus declara o crente justo por imputação dos méritos de Cristo, sendo uma obra monergista exclusiva de Deus (sem cooperação humana). A Santificação é uma obra sobrenatural progressiva que dura toda a existência terrena, é imperfeita em grau nesta vida e exige a cooperação voluntária do crente na mortificação da carne e prática de boas obras.",
        keyConcepts: ["justificacao", "instantanea", "forense", "sem cooperacao", "santificacao", "progressiva", "cooperativa", "duracao da vida"]
      },
      {
        id: "w4_q3",
        question: "3. O que a Bíblia ensina sobre o estado intermediário dos mortos e por que as teorias do sono da alma e do purgatório são rejeitadas?",
        expectedAnswer: "A Bíblia ensina que após a morte física crentes e ímpios permanecem conscientes: os salvos desfrutam da presença e repouso no Senhor (Lc 23.43; Fp 1.23) e os perdidos sofrem em tormento separado de Deus (Lc 16.19-31). O sono da alma é rejeitado porque a identidade e consciência continuam ativas; o purgatório é rejeitado porque o sacrifício de Cristo foi perfeito e suficiente, não havendo purificação posterior por obras humanas.",
        keyConcepts: ["estado intermediario", "consciencia ativa", "presenca de deus", "sem sono da alma", "sem purgatorio", "sacrificio suficiente"]
      },
      {
        id: "w4_q4",
        question: "4. Descreva sucintamente as três escolas de interpretação sobre o Milênio: Pré-milenismo, Pós-milenismo e Amilenismo.",
        expectedAnswer: "O Pré-milenismo ensina que Cristo voltará antes de um reinado terreno literal de 1000 anos. O Pós-milenismo ensina que a proclamação do Evangelho cristianizará e converterá a sociedade terrena inaugurando uma era de paz (milênio), após a qual Cristo retornará. O Amilenismo ensina que o milênio é simbólico e corresponde ao reinado espiritual presente de Cristo na era da Igreja, que culminará diretamente na Segunda Vinda, no juízo geral e no estado eterno.",
        keyConcepts: ["pre-milenismo", "volta antes de 1000 anos literais", "pos-milenismo", "igreja cristianiza o mundo", "amilenismo", "milenio simbolico", "era da igreja"]
      }
    ]
  }
];

fs.writeFileSync(path.join(__dirname, 'data', 'studyPlanData.js'), 'const studyPlanData = ' + JSON.stringify(studyPlanData, null, 2) + ';\nif (typeof module !== "undefined") module.exports = studyPlanData;\n');
console.log("data/studyPlanData.js gerado com sucesso!");
