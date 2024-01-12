import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest: PagesFunction = mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "DP-Booking", email: "divepoint@tn87.de" }],
    },
  ],
  from: {
    name: "Dive-Point-Webmailer",
    email: "support@d1ve.xyz",
  },
  return Response.redirect(home, 301);
});
