import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "ACME Support", email: "mail@tn87.de" }],
    },
  ],
  from: { name: "Enquiry", email: "no-reply@d1ve.xyz" },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thank-you" },
    }),
});
