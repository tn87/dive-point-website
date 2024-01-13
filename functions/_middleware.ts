import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export async function onRequestPost(context) {
  try {
    return await handleRequest(context);
  } catch (e) {
    console.error(e);
    return new Response("Error sending message", { status: 500 });
  }
}

async function handleRequest({ request }) {
  const ip = request.headers.get("CF-Connecting-IP");

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const token = formData.get("cf-turnstile-response");

  const tokenValidated = await validateToken(ip, token);

  if (!tokenValidated) {
    return new Response("Token validation failed", { status: 403 });
  }

  await forwardMessage(name, email, message);

  return new Response("OK", { status: 200 });
}

async function validateToken(ip, token) {
  const TURNSTILE_SECRET_KEY = "0x4AAAAAAAP5xZtd2fj0PmLQzLLMC-VtDBE";

  const formData = new FormData();
  formData.append("secret", TURNSTILE_SECRET_KEY);
  formData.append("response", token);
  formData.append("remoteip", ip);

  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

  const result = await fetch(url, {
    body: formData,
    method: "POST",
  });

  const outcome = await result.json();

  return outcome.success;
}

async function forwardMessage(name, email, message) {
  const onRequest: PagesFunction = mailChannelsPlugin({
    personalizations: [
      {
        to: [{ name: "DP-Booking", email: "divepoint@tn87.de" }],
      },
    ],
    from: {
      name: "Dive-Point-Webmailer",
      email: "support@d1ve.xyz",
    },
    respondWith: () => {
      return Response.redirect("https://d1ve.xyz/thankyou/", 302);
    },
  });
}
