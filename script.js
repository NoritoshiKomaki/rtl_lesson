const axios = require('axios'); 



    const data = {
        "text": "料理が新しく投稿されました!"
    }

    axios.post(
        {"https://hooks.slack.com/services/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"},
        JSON.stringify(data),
        // corsエラー回避
        {
            withCredentials: false,
            transformRequest: [(data, headers) => {
            delete headers.post["Content-Type"]
            return data
            }]
        }
    )
    .then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log(e)
    });
