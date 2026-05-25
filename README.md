# Bikcraft — Bicicletas Elétricas de Alta Precisão

Este é o primeiro projeto desenvolvido integralmente a partir de um [design no Figma](https://www.figma.com/community/file/1640874545017103544) que criei, servindo como uma vitrine de técnicas modernas de desenvolvimento frontend e design focado em conversão.

## Visão Geral

O Bikcraft é uma plataforma institucional e e-commerce de bicicletas elétricas personalizadas. O projeto foca na entrega de uma experiência de usuário (UX) fluida, utilizando animações sutis, tipografia refinada e uma arquitetura de CSS modular para garantir escalabilidade e performance no browser.

## Stack Tecnológica

O projeto foi construído utilizando tecnologias fundamentais da web, priorizando a ausência de frameworks pesados para manter um controle total sobre o DOM e o tempo de carregamento.

- **HTML5 Semântico**: Utilização de tags estruturais para SEO e acessibilidade (A11y), garantindo que o conteúdo seja interpretável por motores de busca e tecnologias assistivas.
- **CSS3 Moderno (Modular)**: Organização baseada em componentes e utilitários (`css/utilities`, `css/global`, `css/home`). Uso extensivo de Flexbox e Grid para layouts responsivos.
- **JavaScript (ES6+)**: Implementação de lógica de interface para manipulação de galeria, acordeões de FAQ e gerenciamento de estados de navegação sem dependências externas pesadas.
- **Simple Anime**: Plugin leve para orquestração de animações de entrada (fadeInDown) baseadas em atributos `data-anime`.

## Destaques Técnicos

### Renderização e Performance
- **Otimização de Ativos**: Uso de SVG para ícones e logotipos, garantindo nitidez em qualquer densidade de pixels (Retina displays) e redução no payload inicial.
- **Imagens Responsivas**: Implementação da tag `<picture>` com diferentes fontes de imagem para otimizar o carregamento em dispositivos móveis.

### Interatividade e Experiência
- **Animações de Scroll**: Feedback visual conforme o usuário navega pela página, utilizando o `SimpleAnime` para gatilhos de entrada.
- **Renderização de Ativos**: Uso estratégico de SVGs para ícones e decorações, e técnicas de substituição de imagens para uma experiência visual de alta qualidade.
- **Gerenciamento de Estado UI**: Lógica customizada em JavaScript para alternância dinâmica de imagens na galeria (interações em tempo real) e persistência visual de seleção de planos via parâmetros de URL.
- **Formulários Inteligentes**: Validação e UX aprimorada em formulários de orçamento e contato, com estados claros de interação.

## Execução e Instalação

Como o projeto utiliza tecnologias nativas do navegador, sua execução é direta:

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/projeto-bikcraft.git
   ```
2. Abra o arquivo `index.html` em qualquer navegador moderno ou utilize uma extensão de servidor local (ex: *Live Server* do VS Code).

## Observações

Este projeto foi desenvolvido com foco em demonstrar habilidades de *creative development* e engenharia de interface. Cada decisão de design e código foi tomada para equilibrar estética visual e performance técnica.


