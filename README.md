# NAJA.AI — Assistente acadêmico

Interface de assistente acadêmico para consulta de professores, horários e informações do IFMG Ibirité.

**Contexto:** Protótipo acadêmico web.  
**Tecnologias:** HTML, CSS e JavaScript.

## Visão do projeto

Esta versão pública reúne uma interface web e perguntas sobre professores, aulas e espaços do campus. Não deve ser confundida com o assistente desktop do repositório `NajaAI`. A árvore atual não contém um servidor Node/Express; não é necessário instalar npm para visualizar estas páginas.

## Executar localmente

Clone o repositório e sirva os arquivos localmente. Com Python instalado:

```bash
git clone https://github.com/GuiPaicheco/NAJA.AI.git
cd NAJA.AI
python -m http.server 8000 --bind 127.0.0.1
```

Abra [http://127.0.0.1:8000/index.html](http://127.0.0.1:8000/index.html). Preserve as pastas de imagens, estilos e scripts. Recursos externos, quando usados pela página, podem exigir conexão com a internet.

## Estrutura

- `bg-sound.mp3`
- `chat.html`
- `index.html`
- `snake.png`

## Desenvolvimento

O repositório reúne o código e os materiais do projeto. Para avaliar mudanças, consulte o histórico de commits e diferencie recursos implementados de evoluções previstas.

Esta revisão documenta os arquivos disponíveis; não executou testes funcionais nem certificou o funcionamento das integrações.
