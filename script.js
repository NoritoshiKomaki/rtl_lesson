const { IncomingWebhook } = require("@slack/webhook");

const webhook = new IncomingWebhook(
  "https://hooks.slack.com/services/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"
)(async () => {
  await webhook.send({
    text: "hello",
  });
})();
