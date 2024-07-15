# React + TypeScript + Vite
# Projeto de Busca em API com React

Este projeto foi desenvolvido com o objetivo de demonstrar uma aplicação simples que realiza busca em uma API utilizando React. Aqui estão os principais pontos do projeto:

- **Busca em API**: Implementação de funcionalidade para buscar dados de uma API externa utilizando `useState` para armazenar os resultados e `useEffect` para acionar a busca baseada na interação do usuário.

- **Filtro de Busca**: Implementação de um filtro que permite ao usuário digitar um termo de busca e filtrar os resultados obtidos da API. O filtro é atualizado dinamicamente à medida que o usuário digita, utilizando `useEffect` para acionar a atualização do filtro.

- **Organização de Código**: As funcionalidades foram organizadas de forma modular e reutilizável. Funções específicas, como a busca na API e o filtro de resultados, foram separadas em arquivos próprios (`./functions/index.ts`) para melhor organização e manutenção do código.

- **Otimização com `useCallback`**: Utilização de `useCallback` para memoizar a função de busca na API com debounce, evitando chamadas excessivas à API e melhorando o desempenho da aplicação.

Este projeto serve como um exemplo básico de como integrar buscas em API em aplicações React, seguindo boas práticas de organização e otimização de código.
