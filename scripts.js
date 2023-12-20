const axios = require("axios");

// Slack Incoming Webhook URL
const webhookUrl =
  "https://hooks.slack.com/services/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";

// メッセージを構築
const message = {
  text: "GitHub Actions からの通知: Pull Request がオープンまたは更新されました。",
  attachments: [
    {
      color: "#36a64f",
      fields: [
        {
          title: "リポジトリ",
          value: process.env.GITHUB_REPOSITORY,
          short: true,
        },
        {
          title: "プルリクエスト",
          value:
            process.env.GITHUB_SERVER_URL +
            "/" +
            process.env.GITHUB_REPOSITORY +
            "/pull/" +
            process.env.GITHUB_PULL_REQUEST,
          short: true,
        },
      ],
    },
  ],
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
