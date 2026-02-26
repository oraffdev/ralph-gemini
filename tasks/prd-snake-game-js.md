# PRD: Jogo da Cobrinha (Snake Game) - Vanilla JavaScript

## 1. Introdução
Desenvolver uma versão clássica do jogo "Snake" (Cobrinha) utilizando JavaScript puro e a API de Canvas do HTML5. O objetivo é criar uma experiência de jogo fluida no navegador, onde o jogador controla uma cobra que cresce ao consumir alimentos e deve evitar colisões fatais.

## 2. Objetivos
- Implementar um motor de jogo básico baseado em frames.
- Utilizar a API de Canvas para renderização de alto desempenho.
- Criar controles responsivos via teclado.
- Garantir que a lógica de jogo (movimento, crescimento, colisão) seja robusta.

## 3. Histórias de Usuário

### US-001: Configuração do Canvas e Loop do Jogo
**Description:** Como jogador, quero abrir a página e ver uma área de jogo definida para que eu possa começar a jogar.

**Acceptance Criteria:**
- [ ] Elemento `<canvas>` criado e centralizado na página.
- [ ] Contexto 2D do canvas inicializado corretamente.
- [ ] Loop de animação (`requestAnimationFrame` ou `setInterval`) funcionando.
- [ ] Área de jogo limpa a cada frame.
- [ ] **Verify in browser using dev-browser skill**.

### US-002: Renderização e Movimento da Cobra
**Description:** Como jogador, quero que a cobra se mova continuamente na tela para que eu possa controlá-la.

**Acceptance Criteria:**
- [ ] Cobra representada como um array de coordenadas (blocos).
- [ ] A cobra se move automaticamente em uma direção inicial.
- [ ] Implementar sistema de grade (ex: blocos de 20x20 pixels) para o movimento.
- [ ] **Verify in browser using dev-browser skill**.

### US-003: Controles de Teclado
**Description:** Como jogador, quero usar as setas do teclado para mudar a direção da cobra.

**Acceptance Criteria:**
- [ ] Escutar eventos de teclado (`keydown`).
- [ ] Teclas Seta para Cima, Baixo, Esquerda e Direita mudam a direção.
- [ ] Impedir que a cobra inverta a direção em 180 graus instantaneamente.
- [ ] **Verify in browser using dev-browser skill**.

### US-004: Sistema de Comida e Pontuação
**Description:** Como jogador, quero comer alimentos para crescer e aumentar minha pontuação.

**Acceptance Criteria:**
- [ ] Comida gerada em posição aleatória alinhada à grade.
- [ ] Detectar colisão entre a cabeça da cobra e a comida.
- [ ] A cobra aumenta de tamanho (adiciona um bloco) ao comer.
- [ ] Pontuação atual exibida na tela.
- [ ] **Verify in browser using dev-browser skill**.

### US-005: Detecção de Colisão e Game Over
**Description:** Como jogador, quero que o jogo termine se eu colidir com as bordas ou comigo mesmo.

**Acceptance Criteria:**
- [ ] Detectar colisão da cabeça com as bordas do canvas.
- [ ] Detectar colisão da cabeça com qualquer segmento do corpo.
- [ ] Exibir mensagem de "Game Over" e permitir reiniciar.
- [ ] **Verify in browser using dev-browser skill**.

## 4. Requisitos Funcionais
- **FR-1:** O jogo deve rodar inteiramente no lado do cliente (navegador).
- **FR-2:** O canvas deve ter dimensões fixas (ex: 400x400 ou 600x600).
- **FR-3:** A velocidade do jogo deve permitir uma jogabilidade confortável (ex: 10-15 atualizações por segundo).
- **FR-4:** A pontuação deve ser reiniciada a cada novo jogo.

## 5. Não-Objetivos (Fora de Escopo)
- Não haverá persistência de recordes (Local Storage).
- Não haverá múltiplos níveis ou dificuldades.
- Não haverá suporte para dispositivos móveis (touch).
- Não haverá efeitos sonoros ou trilha sonora.

## 6. Considerações de Design
- Estilo visual minimalista (fundo preto, cobra verde, comida vermelha).
- Interface limpa, focando apenas no canvas e no placar.

## 7. Considerações Técnicas
- Utilizar `requestAnimationFrame` para suavidade ou `setTimeout` para controle fixo de velocidade.
- Estruturar o código de forma modular (ex: `Snake`, `Food`, `Game` objects/classes).

## 8. Métricas de Sucesso
- Jogo carrega em menos de 1 segundo.
- Zero erros no console do desenvolvedor.
- Movimento da cobra é fluido e sem "lags" perceptíveis.
