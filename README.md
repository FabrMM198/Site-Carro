# Concessionária Virtual - FIAT MOBI

Este é um projeto de uma landing page interativa para a apresentação do veículo FIAT Mobi. O site foi projetado com um visual moderno e foco na experiência do usuário, apresentando informações de parcelamento, design e especificações técnicas de forma dinâmica.

## Objetivo do Projeto

O objetivo principal deste projeto é apresentar o FIAT Mobi por meio de uma página de rolagem suave com transição por seções e coletar leads de potenciais clientes através de formulários de contato integrados (como test-drive e compra).

---

## Arquivos do Projeto e Suas Funcionalidades

O projeto é estruturado por três arquivos principais, cada um responsável por uma camada do desenvolvimento web (Estrutura, Estilo e Comportamento):

### 1. `index.html`
* **Função:** Camada de estrutura (HTML5).
* **Descrição:** Contém o esqueleto do site. Define os slides principais (seção do vídeo de introdução, imagem promocional e imagem da fábrica) e os modais ocultos contendo os formulários Jotform para "Comprar agora" e "Test drive", além do painel com especificações do veículo ("Saiba mais").

### 2. `style.css`
* **Função:** Camada de estilo e design (CSS3).
* **Descrição:** Define toda a estética do site, incluindo:
  * Fonte padrão (Poppins).
  * Posicionamento absoluto e relativo para sobreposição de textos e mídias.
  * Efeito de **Scroll Snapping** (`scroll-snap-type`), que força a tela a se alinhar e "encaixar" perfeitamente em cada slide ao rolar a página.
  * Animações de transição suave (`transition`) para a abertura lateral dos formulários.

### 3. `scripts.js`
* **Função:** Camada de interatividade e comportamento (JavaScript).
* **Descrição:** Gerencia o comportamento dos modais e da máscara de fundo escuro:
  * Seleciona os elementos no HTML via `querySelector`.
  * Cria funções como `abrirFormulario()`, `fecharFormulario()`, etc., para mover os formulários para dentro e para fora da tela mudando a propriedade CSS `left`, além de exibir ou ocultar a máscara de fundo.

---

## Funcionalidades em Destaque

* **Rolagem Magnética (Scroll Snap):** Cada seção do site ocupa exatamente 100% da altura da tela e se ajusta automaticamente durante a rolagem.
* **Formulários Dinâmicos:** Os formulários abrem de forma lateral com um efeito de transição suave sem recarregar a página.
* **Máscara de Fundo Interativa:** Uma camada escura cobre o site ao abrir um formulário para focar a atenção do usuário no modal. Clicar nessa máscara também fecha o formulário aberto automaticamente.
* **Integração Externa:** Envio de formulários seguro processado através da plataforma Jotform.

---

## Como Executar o Projeto

1. Faça o download ou clone este repositório.
2. Certifique-se de que a pasta `img` contém todas as mídias necessárias (`LOGO.png`, `FIAT MOBI VIDEO VENDA.mp4`, etc.).
3. Dê um duplo clique no arquivo `index.html` para abri-lo diretamente em qualquer navegador de sua preferência.
