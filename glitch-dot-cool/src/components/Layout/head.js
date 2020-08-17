import React from "react"
import { Helmet } from "react-helmet"

const displayRandomSiteTitle = () => {
  let titles = [
    "gℓιт¢н[∂σт]¢σσℓ",
    "glï†¢h[Ðð†]¢ððl",
    "₲Ⱡł₮₵Ⱨ[ĐØ₮]₵ØØⱠ]",
    "ɢʟɪᴛᴄʜ[ᴅᴏᴛ]ᴄᴏᴏʟ",
    "g͎l͎i͎t͎c͎h͎[͎d͎o͎t͎]͎c͎o͎o͎l͎",
    "g͓̽l͓̽i͓̽t͓̽c͓̽h͓̽[͓̽d͓̽o͓̽t͓̽]͓̽c͓̽o͓̽o͓̽l͓̽",
    "g̶l̶i̶t̶c̶h̶[̶d̶o̶t̶]̶c̶o̶o̶l̶",
  ]

  let selected = Math.floor(Math.random() * titles.length)

  return titles[selected]
}

const Head = ({ title }) => {
  return (
    // <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
    <Helmet title={`${title} | ${displayRandomSiteTitle()}`}>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#191919" />
      <meta name="msapplication-TileColor" content="#191919" />
      <meta name="theme-color" content="#191919" />

      <script type="text/javascript">
        {`
          var _paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
          _paq.push(["setCookieDomain", "*.glitch.cool"]);
          _paq.push(["setDomains", ["*.glitch.cool"]]);
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="//analytics.glitch.cool/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        `}
      </script>
    </Helmet>
  )
}

export default Head
