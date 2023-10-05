# CJ’s Entertainment and Media Chatbot System

## About

See a [demo](https://cjgroupchatbot-9s5xwjke.b4a.run/)**

The proposal presented here aims to build on this strong foundation, offering an innovative solution aligned with CJ's commitment to enhancing customer experience and engagement. By leveraging the latest advances in technology Artificial Intelligence and customer behavior analysis, the proposed solution will enable CJ to stay ahead of the competition and continue to provide its customers with an unparalleled entertainment experience.

## Deploy

Back4app Containers makes building, deploying, and scaling your code simple , so you don't have to worry about DevOps. The platform eliminates the gap between development and production by automating repetitive, non-value tasks and managing the server-side infrastructure for you.

**[Deploy with Back4App](https://www.back4app.com/docs-containers)**

**Docker**

Build locally:

```shell
docker build -t chatgpt-ui .
docker run -e OPENAI_API_KEY=xxxxxxxx -p 3000:3000 chatgpt-ui
```

Pull from ghcr:

```
docker run -e OPENAI_API_KEY=xxxxxxxx -p 3000:3000 ghcr.io/mckaywrigley/chatbot-ui:main
```

## Running Locally

**1. Clone Repo**

```bash
git clone https://github.com/mckaywrigley/chatbot-ui.git
```

**2. Install Dependencies**

```bash
npm i
```

**3. Provide OpenAI API Key**

Create a .env.local file in the root of the repo with your OpenAI API Key:

```bash
OPENAI_API_KEY=YOUR_KEY
```

**4. Run App**

```bash
npm run dev
```

**5. Use It**

You should be able to start chatting.

**6. More information**

| Script | Command |
| --- | --- |
| dev | next dev |
| build | next build |
| start | next start |
| lint | next lint |
| format | prettier --write . |
| test | vitest |
| coverage | vitest run --coverage |


## Configuration

When deploying the application, the following environment variables can be set:

| Environment Variable              | Default value                  | Description                                                                                                                               |
| --------------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| OPENAI_API_KEY                    |                                | The default API key used for authentication with OpenAI                                                                                   |
| OPENAI_API_HOST                   | `https://api.openai.com`       | The base url, for Azure use `https://<endpoint>.openai.azure.com`                                                                         |
| OPENAI_API_TYPE                   | `openai`                       | The API type, options are `openai` or `azure`                                                                                             |
| OPENAI_API_VERSION                | `2023-03-15-preview`           | Only applicable for Azure OpenAI                                                                                                          |
| AZURE_DEPLOYMENT_ID               |                                | Needed when Azure OpenAI, Ref [Azure OpenAI API](https://learn.microsoft.com/zh-cn/azure/cognitive-services/openai/reference#completions) |
| OPENAI_ORGANIZATION               |                                | Your OpenAI organization ID                                                                                                               |
| DEFAULT_MODEL                     | `gpt-3.5-turbo`                | The default model to use on new conversations, for Azure use `gpt-35-turbo`                                                               |
| NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT | [see here](utils/app/const.ts) | The default system prompt to use on new conversations                                                                                     |
| NEXT_PUBLIC_DEFAULT_TEMPERATURE   | 1                              | The default temperature to use on new conversations                                                                                       |
| GOOGLE_API_KEY                    |                                | See [Custom Search JSON API documentation][GCSE]                                                                                          |
| GOOGLE_CSE_ID                     |                                | See [Custom Search JSON API documentation][GCSE]                                                                                          |
## Project Details

| Name | Version |
| --- | --- |
| cj-ai-chatbot | 0.1.0 |

## Dependencies

| Package | Version |
| --- | --- |
| @dqbd/tiktoken | ^1.0.2 |
| @tabler/icons-react | ^2.9.0 |
| eventsource-parser | ^0.1.0 |
| i18next | ^22.4.13 |
| next | 13.2.4 |
| next-i18next | ^13.2.2 |
| openai | ^3.2.1 |
| react | 18.2.0 |
| react-dom | 18.2.0 |
| react-hot-toast | ^2.4.0 |
| react-i18next | ^12.2.0 |
| react-markdown | ^8.0.5 |
| react-query | ^3.39.3 |
| react-syntax-highlighter | ^15.5.0 |
| rehype-mathjax | ^4.0.2 |
| remark-gfm | ^3.0.1 |
| remark-math | ^5.1.1 |
| uuid | ^9.0.0 |

## Dev Dependencies

| Package | Version |
| --- | --- |
| @mozilla/readability | ^0.4.4 |
| @tailwindcss/typography | ^0.5.9 |
| @trivago/prettier-plugin-sort-imports | ^4.1.1 |
| @types/jsdom | ^21.1.1 |
| @types/node | 18.