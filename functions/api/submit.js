let content = "";
for (var i of request.headers.entries()) {
  content += i[0] + ": " + i[1] + "\n";
}
let send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    personalizations: [
      { to: [{ email: "recipient@example.com", name: "Test Recipient" }] },
    ],
    from: {
      email: "sender@example.com",
      name: "Test Sender",
    },
    subject: "Test Subject",
    content: [
      {
        type: "text/plain",
        value: "Test message content\n\n" + content,
      },
    ],
  }),
});

let respContent = "";
// only send the mail on "POST", to avoid spiders, etc.
if (request.method == "POST") {
  const resp = await fetch(send_request);
  const respText = await resp.text();

  respContent = resp.status + " " + resp.statusText + "\n\n" + respText;
}
