// https://ubuverse.com/deploying-a-static-website-to-cloudflare-pages/

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
  respondWith: () => {
    return Response.redirect("https://d1ve.xyz/thankyou/", 302);
  },
});
