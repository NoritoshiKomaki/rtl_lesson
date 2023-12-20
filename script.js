const axios = require("axios");

// Slack Incoming Webhook URL
const webhookUrl =
  "https://hooks.slack.com/services/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";

// メッセージを構築
const message = {
  text: "GitHub Actions からの通知: Pull Request がオープンまたは更新されました。",
};

// Slackにメッセージを送信
axios
  .post(webhookUrl, message)
  .then((response) => {
    console.log("Slack通知が正常に送信されました:", response.data);
  })
  .catch((error) => {
    console.error("Slack通知の送信中にエラーが発生しました:", error);
    process.exit(1);
  });
