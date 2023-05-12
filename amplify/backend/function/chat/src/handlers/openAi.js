const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
    // TODO: move these to environment variables
//   organization: "org-0nmrFWw6wSm6xIJXSbx4FpTw",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

module.exports = {openaiClient: openai}