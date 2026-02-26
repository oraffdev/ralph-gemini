# PRD: Jogo da Cobrinha (Snake Game) - Python

## 1. Introdução
Desenvolver uma versão clássica do jogo "Snake" (Cobrinha) em Python utilizando a biblioteca Pygame. O objetivo é criar um jogo funcional onde o jogador controla uma cobra que cresce ao comer comida, evitando colidir com as paredes ou com o próprio corpo.

## 2. Objetivos
- Criar uma interface gráfica simples e responsiva.
- Implementar controles de teclado intuitivos.
- Garantir a lógica de crescimento e detecção de colisão correta.
- Exibir a pontuação atual em tempo real.

## 3. Histórias de Usuário

### US-001: Configuração do Ambiente e Janela
**Descrição:** Como jogador, quero abrir o jogo e ver uma janela preta com bordas definidas para que eu saiba onde posso jogar.

**Acceptance Criteria:**
- [ ] Janela de tamanho fixo (ex: 600x400 pixels) inicializada corretamente.
- [ ] Título da janela definido como "Snake Game".
- [ ] Loop principal do jogo rodando a uma taxa de quadros (FPS) constante.

### US-002: Movimento e Controle da Cobra
**Descrição:** Como jogador, quero usar as setas do teclado para mudar a direção da cobra.

**Acceptance Criteria:**
- [ ] A cobra se move continuamente na direção atual.
- [ ] Teclas (Cima, Baixo, Esquerda, Direita) mudam a direção.
- [ ] A cobra não pode inverter a direção 180 graus instantaneamente (ex: ir para baixo enquanto sobe).

### US-003: Geração de Comida e Consumo
**Descrição:** Como jogador, quero que apareça comida aleatoriamente para que eu possa crescer.

**Acceptance Criteria:**
- [ ] Comida aparece em uma posição aleatória (dentro dos limites da grade).
- [ ] Quando a cabeça da cobra atinge a comida, a cobra aumenta de tamanho.
- [ ] Nova comida é gerada imediatamente após ser consumida.

### US-004: Colisões e Fim de Jogo
**Descrição:** Como jogador, quero que o jogo termine se eu bater na parede ou em mim mesmo.

**Acceptance Criteria:**
- [ ] O jogo detecta colisão com as bordas da janela.
- [ ] O jogo detecta colisão da cabeça da cobra com qualquer parte do seu corpo.
- [ ] Uma mensagem de "Game Over" é exibida após a colisão.

## 4. Requisitos Funcionais
- **FR-1:** O sistema deve utilizar a biblioteca `pygame` para renderização.
- **FR-2:** A cobra deve começar com um tamanho inicial de 3 blocos.
- **FR-3:** A pontuação deve aumentar em 10 pontos para cada comida consumida.
- **FR-4:** A velocidade do jogo deve ser constante (ex: 15 FPS).

## 5. Não-Objetivos (Fora de Escopo)
- Não haverá sistema de níveis ou aumento de velocidade progressivo.
- Não haverá persistência de High Score (salvamento em arquivo).
- Não haverá obstáculos extras no cenário além das paredes.
- Não haverá modo multiplayer.

## 6. Considerações Técnicas
- **Biblioteca:** `pygame`.
- **Estrutura:** Script único (`snake.py`).
- **Grade:** O movimento deve ser baseado em blocos (ex: blocos de 10x10 ou 20x20 pixels) para facilitar a detecção de colisão.

## 7. Métricas de Sucesso
- O jogo inicia e fecha sem erros.
- A lógica de colisão funciona em 100% dos casos.
- A fluidez do controle é responsiva.

## 8. Questões Abertas
- Devemos adicionar uma cor diferente para a cabeça da cobra? (Opcional)
