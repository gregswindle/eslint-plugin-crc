# Analytics
> ![Information][icon-pie-chart] `eslint-plugin-crc` analytics and metrics installation and configuration information.

## Table of contents
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [1. Google Tag Manager](#1-google-tag-manager)
  * [1.1. Installation](#11-installation)
  * [1.2. Campaigns](#12-campaigns)
- [2. Shortened URLs](#2-shortened-urls)
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->


## 1. Google Tag Manager

<img alt="Google Tag Manager logo" src="../img/ga-suite/ic-tag-manager.svg" height="100" width="100">

<table>
  <tr>
    <th colspan="3">Tag Manager Account Name</th>
  </tr>
  <tr>
    <td colspan="3"><a href="https://tagmanager.google.com/#/admin/accounts/2072581326?containerId=7980776" rel="noopener" title="Go to Account Settings (requires authentication)">eslint-plugin-crc</a></td>
  </tr>
  <tr>
    <th>Container Name</th>
    <th>Container Type</th>
    <th>Container ID</th>
  </tr>
  <tr>
    <td><a rel="noopener" href="https://tagmanager.google.com/#/container/accounts/2072581326/containers/7980776/workspaces/1" title="Go to jsdoc's Default Workspace">jsdoc</a></td>
    <td>Web</td>
    <td>GTM-WK35H3T</td>
  </tr>
</table>

### 1.1. Installation
> ![Copy and paste][icon-paste] Copy the code below and paste it onto every page of your website.

Paste this code as high in the `<head>` of the page as possible:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WK35H3T');</script>
<!-- End Google Tag Manager -->
```

Additionally, paste this code immediately after the opening <body> tag:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WK35H3T"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

> ![More information][icon-info] Visit Google Tag Manager > Web Tracking > [Quick Start Guide][gtm-wt-qsg-url] for more information about installing the Google Tag Manager snippet.

### 1.2. Campaigns

TBD.

## 2. Shortened URLs
> ![More information][icon-info] Using [Google URL Shortener](https://goo.gl/ "Go to Google URL Shortener").

![Icon][icon-link]

Destination | Original URL | Short URL
------------|--------------|----------
Specifying Parser | https://eslint.org/docs/user-guide/configuring#specifying-parser  | https://goo.gl/WngFV9
 The Context Object | https://eslint.org/docs/developer-guide/working-with-rules-new#the-context-object | https://goo.gl/tuUSG5

---

Icons by [Icons8](https://icons8.com/articles/weve-contributed-an-icon-to-imageoptim/).


[gtm-wt-qsg-url]: https://developers.google.com/tag-manager/quickstart
[icon-link]: ../img/ga-suite/icons8-link-96.png
[icon-pie-chart]: ../img/ga-suite/icons8-pie-chart-25.png
[icon-info]: ../img/icons8/icon-about-25.png
[icon-paste]: ../img/icons8/icon-paste-25.png
