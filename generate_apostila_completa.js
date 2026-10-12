const fs = require('fs');
const path = require('path');

const apostilaSections = [
  {
    id: "sec_sumario",
    title: "Sumário Geral (Págs. 1 a 4)",
    pages: "1-4",
    content: `
### Sumário da Apostila
* **Família** ................................................................................... 5
* **Batismo e Ceia** ............................................................................ 7
* **Autonomia e soberania da Igreja** ........................................................... 8
* **Diaconato** ................................................................................. 9
* **Visitação** ................................................................................ 10
* **Missões** .................................................................................. 11
* **Dízimo** ................................................................................... 11
* **Plano Cooperativo** ........................................................................ 12
* **Declaração doutrinária da CBB (19 Artigos)** ............................................... 13
* **Dez razões porque sou crente Batista** ...................................................... 31
* **Estudo de Deus (Teologia Sistemática em Perguntas e Respostas)** ............................ 34
  * Prolegômenos e Teologia Sistemática ....................................................... 34
  * Revelação de Deus (Geral e Especial) ...................................................... 36
  * Registro da Revelação, Inspiração e Inerrância ............................................ 41
  * A Natureza, Nomes e Atributos de Deus ..................................................... 46
  * Triunidade e Decretos Divinos ............................................................. 48
  * Criação Material e Espiritual (Angelologia e Demônios) .................................... 53
  * Antropologia (Origem e Natureza do Homem, Imago Dei) ....................................... 56
  * Hamartiologia (Origem, Imputação e Consequência do Pecado) ................................. 60
  * Cristologia (Pessoa, Naturezas, Heresias, Estados e Ofícios) ............................... 64
  * Pneumatologia (Espírito Santo: Divindade, Pessoa e Obra) ................................... 75
  * Soteriologia (Graça, Chamado, Conversão, Regeneração, Justificação, Santificação, Glória) .. 78
  * Eclesiologia (Natureza, Governo, Oficiais, Ordenanças e Disciplinas) ....................... 88
  * Escatologia Individual e Geral (Milênio, Segunda Vinda, Céu e Inferno) ..................... 92
  * Ética Cristã e Bíblica ................................................................... 95
`
  },
  {
    id: "sec_bloco1",
    title: "Bloco 1: Vida Comunitária e Eclesiologia Prática (Págs. 5 a 12)",
    pages: "5-12",
    content: `
### Família (Pág. 5-6)
A família é uma instituição criada por Deus, onde podemos viver o amor, harmonia, como também os grandes desafios de se viver unido. Como é uma instituição divina o homem não pode corrompê-la. Está no plano de Deus (Ef 5.31). Deus criou a família com o propósito de ser o alicerce para cada pessoa. O alicerce é a base que oferece sustentação e firmeza para a construção de qualquer edifício; sendo frágil, coloca em risco o edifício por mais luxuoso que possa ser. O papel da Igreja hoje é fortalecer os lares para que possam ser conduzidos ao centro da vontade de Deus.
Os pais são os principais responsáveis pela construção da família (direção e orientação). Aos filhos é reservado respeito e obediência (Ef 6.1-4). Filhos são bênçãos (Gn 1.28). O casamento é monogâmico e de entrega mútua.
**Sobre o Divórcio:** Deus em sua perfeita vontade **não aprova o divórcio**, mas pela dureza do coração concede em duas circunstâncias:
1. Por infidelidade conjugal (Mt 5.31-32).
2. No caso de impossibilidade de reconciliação em casais mistos quando o descrente quer apartar-se (1Co 7.15).

### Batismo e Ceia (Pág. 7-8)
O Batismo e a Ceia são **ordenanças** (Mt 28.19; 1Co 11.24). O Batismo representa o sepultamento do homem velho e pecaminoso ressurgindo para uma nova vida com Cristo (Cl 2.12; Rm 6.3-5). É um símbolo e testemunho público; **é um equívoco pensar que o batismo salva o pecador**. Exemplos bíblicos de salvos sem batismo em água: Zaqueu e o ladrão da cruz.
A Ceia do Senhor é ordenança memorial que traz à memória a morte de Cristo e celebra Sua nova aliança. Para os batistas, o crente **não recebe nenhuma graça especial** ao participar dela.

### Autonomia e Soberania da Igreja (Pág. 8)
A Igreja é uma congregação local de membros regenerados reunidos voluntariamente para adorar a Deus. É livre, autônoma e independente de hierarquias denominacionais externas. Seu governo é **democrático e congregacional**; seus oficiais bíblicos são pastores e diáconos. Cristo é o único Cabeça e supremo dirigente da Igreja (Cl 1.18).

### Diaconato (Pág. 9-10)
Baseado em 1Tm 3.8-13 e Atos 6.1-4. A verdadeira função do diácono é **SERVIR**. Atribuições: ajudar nas finanças, visitações aos enfermos e novos convertidos, socorro e assistência social, disciplina eclesiástica e ministério de oração, permitindo aos pastores a dedicação ao ministério da Palavra.

### Visitação (Pág. 10-11)
A Igreja é um corpo vivo. A visitação expressa comunhão autêntica da igreja primitiva, consolo aos aflitos, hospitalidade (1Pe 4.9) e cuidado recíproco. É um dos maiores fatores de crescimento e consolidação da comunidade de fé.

### Missões (Pág. 11)
A missão principal da Igreja é evangelizar (Mc 16.15). Nasceu do amor de Deus. Numa igreja viva, todo crente é um ganhador de almas; se não fizer missões, a igreja atrofia. O primeiro missionário foi o próprio Deus ao enviar Seu Filho unigênito.

### Dízimo e Plano Cooperativo (Pág. 11-12)
O dízimo (a décima parte) é o plano de Deus para o sustento de Seu Reino, baseado na gratidão alegre do crente (Gn 28.20-22; Ml 3.8-10). O **Plano Cooperativo** é a cooperação voluntária das igrejas batistas para projetos conjuntos de missões mundiais, seminários teológicos e ação social.
`
  },
  {
    id: "sec_bloco2",
    title: "Bloco 2: Declaração Doutrinária da CBB (Págs. 13 a 30)",
    pages: "13-30",
    content: `
### Princípios Históricos dos Batistas (Pág. 13-14)
1. Escrituras Sagradas como única regra inerrante de fé e conduta.
2. Igreja local como comunidade democrática e autônoma de regenerados e biblicamente batizados.
3. Rigorosa separação entre Igreja e Estado.
4. Absoluta liberdade de consciência religiosa.
5. Responsabilidade individual de cada pessoa perante Deus (sacerdócio dos crentes).
6. Autenticidade e apostolicidade das congregações neotestamentárias.

### Os 19 Artigos da CBB em Síntese:
* **Art. 1 - Escrituras Sagradas (p. 14):** Palavra de Deus em linguagem humana, inspirada pelo Espírito Santo, verdade sem mescla de erro.
* **Art. 2 - Deus (p. 15):** Único Deus vivo, Espírito infinito, eterno, imutável, triúno (Pai, Filho e Espírito Santo).
* **Art. 3 - Deus Pai (p. 16):** Paternidade universal na criação e paternal para com os regenerados em Cristo por adoção.
* **Art. 4 - Deus Filho (p. 16):** Jesus Cristo, eterno Verbo, verdadeiro Deus e verdadeiro homem, único Mediador e Salvador.
* **Art. 5 - Deus Espírito Santo (p. 17):** Divino e pessoal, regenera, sela, habita no crente e capacita com dons.
* **Art. 6 - O Homem (p. 18):** Criado à imagem e semelhança de Deus, com valor, dignidade e liberdade de consciência.
* **Art. 7 - O Pecado (p. 19):** Transgressão voluntária que resultou na queda, separação de Deus e incapacidade de auto-salvação.
* **Art. 8 - Salvação (p. 19):** Dom gracioso mediante fé e arrependimento, envolvendo regeneração, justificação, santificação e glorificação.
* **Art. 9 - Eleição (p. 21):** Escolha eterna e soberana de Deus, em consonância com Sua presciência e o livre-arbítrio responsável.
* **Art. 10 - Reino de Deus (p. 22):** Domínio eterno de Deus nos corações regenerados, a ser consumado na volta de Cristo.
* **Art. 11 - Igreja (p. 22):** Congregação local autônoma e democrática de regenerados.
* **Art. 12 - Batismo e Ceia (p. 23):** Duas ordenanças simbólicas e memoriais instituídas por Cristo.
* **Art. 13 - O Dia do Senhor (p. 24):** O domingo como dia de descanso cristão e adoração congregacional.
* **Art. 14 - Ministério da Palavra (p. 25):** Chamado divino de pastores vocacionados, consagrados e sustentados pela congregação.
* **Art. 15 - Mordomia (p. 26):** Administração fiel da vida, tempo, talentos e dízimos pertencentes a Deus.
* **Art. 16 - Evangelização e Missões (p. 26):** Proclamação global do Evangelho a todas as nações.
* **Art. 17 - Educação Religiosa (p. 27):** Ensino e doutrinação bíblica continuada para formação dos discípulos.
* **Art. 18 - Liberdade Religiosa e Ordem Social (p. 27-28):** Estado leigo, igreja livre; atuação cristã como sal e luz no combate às injustiças.
* **Art. 19 - Morte e Destino Eterno (p. 29-30):** Continuidade da consciência; ressurreição final: galardão no céu para os justos e castigo consciente eterno no inferno para os ímpios.
`
  },
  {
    id: "sec_bloco3",
    title: "Bloco 3: Identidade - Dez Razões Porque Sou Crente Batista (Págs. 31 a 33)",
    pages: "31-33",
    content: `
1. **Líder sem par:** Jesus Cristo como único Senhor e cabeça supremo da igreja.
2. **Culto com decência e ordem:** Cultos simples, reverentes e alegres, sem rituais secretos ou ocultos.
3. **Um só livro divino:** A Bíblia como única autoridade normativa para fé e conduta.
4. **Só Jesus Cristo salva:** Salvação exclusiva pelos méritos da cruz de Cristo.
5. **Relacionamento direto com Deus:** Sacerdócio de todos os crentes, orando diretamente ao Pai sem mediadores humanos.
6. **Autonomia e democracia da congregação:** Cada congregação toma suas próprias deliberações com a participação de todos os membros.
7. **Igreja missionária:** Vocação de levar o Evangelho aos confins da terra no Brasil e no exterior.
8. **Separação entre Igreja e Estado:** Defesa intransigente da liberdade de consciência para todos os cidadãos.
9. **Meta de expansão constante:** Plantação sistemática de novas congregações.
10. **Desafio de discipulado diário:** Compromisso corajoso e prático de santidade e serviço no cotidiano.
`
  },
  {
    id: "sec_bloco4",
    title: "Bloco 4: Catecismo de Teologia Sistemática em Q&A (Págs. 34 a 95)",
    pages: "34-95",
    content: `
### Bibliologia & Teologia Própria (Págs. 34-56)
* **Teologia:** Conhecimento sistematizado de Deus e de Suas relações com o cosmos.
* **Revelação Geral:** Pelas obras de Deus (natureza, consciência moral, providência na história). Não é suficiente para salvação; serve para deixar o homem culpado perante a justiça.
* **Teologia Natural e Provas:** Cosmológico (causa do universo), Ontológico (ideia do ser perfeito), Teleológico (ordem e inteligência cósmica), Moral (lei moral objetiva), Histórico (senso religioso universal).
* **Revelação Especial:** Encarnada na Bíblia e em Cristo; pessoal, proposicional e redentora.
* **Inspiração Bíblica:** Ação sobrenatural do Espírito Santo que guiou o registro escrito dos autores originais. Posição ortodoxa: Teoria Verbal e Plena. Rejeita-se intuição, mera iluminação, dinâmica e ditado mecânico.
* **Inerrância:** A Bíblia diz a verdade em tudo quanto afirma; a teoria da inerrância limitada é refutada pelas Escrituras (Sl 119.96).
* **Nomes Divinos:** Adonai, El, Elohim no AT; Theos, Kyrios, Pater, Pantokrator no NT.
* **Atributos:** Incomunicáveis (Asseidade/Existência autônoma, Imutabilidade, Infinidade, Unidade) e Comunicáveis (Sabedoria, Santidade, Justiça, Bondade, Amor).
* **Trindade:** Um Deus em três Pessoas co-eternas (Tertuliano). Igualdade ontológica de essência e subordinação econômica de papéis.
* **Decretos Divinos:** Eterno propósito para a glória de Deus. Posição calvinista (incondicional) vs. arminiana (baseada na presciência).
* **Criação & Anjos:** Criação ex nihilo (do nada). Anjos são seres espirituais criados (querubins, serafins, arcanjos). Satanás e demônios são anjos rebeldes caídos.

### Antropologia, Hamartiologia & Cristologia (Págs. 56-74)
* **Homem:** Formado do pó e sopro divino para glorificar a Deus. Dicotomia (corpo e alma/espírito) vs. Tricotomia. Alma: Criacionismo vs. Traducionismo. Imago Dei moral, espiritual, mental e relacional.
* **Pecado:** Transgressão voluntária da lei de Deus gerando culpa e corrupção moral. Teorias de imputação: Pelagiana (rejeitada), Arminiana, Federal (representante legal) e Agostiniana (chefia natural seminal).
* **Depravação Total:** Corrupção de todas as faculdades humanas, tornando o pecador incapaz de salvar-se a si mesmo. Castigo: morte espiritual, sofrimentos terrenos, morte física e morte eterna.
* **Pessoa de Cristo:** Uma Pessoa em duas naturezas (verdadeiro Deus e verdadeiro homem).
* **Heresias Históricas:**
  * *Ebionismo:* Jesus mero homem.
  * *Arianismo:* Jesus criatura criada, não Deus eterno.
  * *Docetismo:* Corpo de Jesus mera ilusão.
  * *Apolinarismo:* Sem mente humana racional (substituída pelo Logos).
  * *Nestorianismo:* Duas pessoas distintas.
  * *Eutiquianismo:* Natureza mista absorvida.
* **Estados de Cristo:** Humilhação (encarnação, esvaziamento/kénosis, sofrimento, morte na cruz e sepultamento) e Exaltação (ressurreição ao 3º dia, ascensão aos céus, assento à destra do Pai e Segunda Vinda em glória).
* **Ofícios de Cristo:** Profeta (revela a Deus), Sacerdote (expia e intercede) e Rei (governa sobre todo o cosmos).
* **Expiação:** Vicária, propiciatória (aplacando a justa ira de Deus), substitutiva e reconciliadora. Teorias da expiação: Sociniana (exemplo), Moral, Governamental, Resgate e Satisfação Penal Substitutiva.

### Pneumatologia, Soteriologia, Eclesiologia & Escatologia (Págs. 75-95)
* **Espírito Santo:** Terceira pessoa divina, plenamente Deus e dotado de personalidade (mente, afetos, vontade). No AT atuava temporariamente; no NT habita permanente no crente regenerado.
* **Soteriologia:**
  * *Graça Comum:* Benefícios universais providenciais (não salva).
  * *Graça Especial:* Salvação dos eleitos.
  * *Chamado:* Geral (exterior) vs. Eficaz (interno irresistível).
  * *Conversão:* Arrependimento (mudança de conceito, sentimento e propósito) e Fé (conhecimento, assentimento e confiança).
  * *Regeneração:* Novo nascimento espiritual instantâneo operado pelo Espírito Santo.
  * *Justificação:* Ato forense legal instantâneo em que Deus declara o pecador justo pela imputação da justiça de Cristo.
  * *Santificação:* Obra sobrenatural progressiva e cooperativa, imperfeita em grau nesta vida.
  * *Perseverança dos Santos:* Os verdadeiramente regenerados jamais cairão total ou definitivamente da salvação, guardados pelo poder de Deus.
  * *Glorificação:* Ponto culminante final da salvação com corpos incorruptíveis.
* **Eclesiologia:** Igreja organismo e organização com governo congregacional; oficiais: pastores e diáconos; disciplinas: formativa, corretiva e cirúrgica; ordenanças: batismo por imersão e Ceia memorial.
* **Escatologia:** Estado intermediário consciente (rejeita sono da alma e purgatório); Segunda Vinda pessoal, física, visível, repentina e gloriosa. Milênio: Pré-milenismo (reinado literal de 1000 anos), Pós-milenismo (cristianização prévia do mundo) e Amilenismo (milênio simbólico na era da Igreja). Céu abençoador e Inferno com castigo consciente eterno.
* **Ética:** Ética bíblica e cristã fundamentada no caráter moral de Deus revelado na Bíblia.
`
  }
];

fs.writeFileSync(path.join(__dirname, 'data', 'apostilaData.js'), 'const apostilaSections = ' + JSON.stringify(apostilaSections, null, 2) + ';\nif (typeof module !== "undefined") module.exports = apostilaSections;\n');
console.log("data/apostilaData.js gerado com sucesso com os 4 blocos integrais!");
