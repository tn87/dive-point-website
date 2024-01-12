import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Aport", email: "mail@tn87.de" }],
    },
  ],
  from: { name: "Enquiry", email: "mail@d1ve.xyz" },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/contact" },
    }),
});
