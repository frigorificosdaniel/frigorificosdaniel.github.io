/**
 * Cookie consent (GDPR / ePrivacy / Legea 506/2004) + conditional Google Analytics 4 loading.
 * - Nothing from Google Analytics is loaded or stored until the visitor accepts.
 * - Reject is as prominent as Accept. Choice is remembered for 6 months.
 * - "Setări cookie" / "Cookie settings" links (data-cookie-settings) reopen the banner.
 * - Withdrawing consent removes GA cookies and disables measurement.
 */
(function () {
  var GA_ID = 'G-8RWGLY5D6P';
  var KEY = 'cookie_consent';
  var MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182; // ~6 months

  var T = {
    ro: {
      title: 'Respectăm confidențialitatea dumneavoastră',
      text: 'Folosim cookie-uri de analiză (Google Analytics) doar cu acordul dumneavoastră, pentru a înțelege cum este folosit site-ul și a-l îmbunătăți. Site-ul funcționează complet și fără ele.',
      more: 'Politica de cookie-uri',
      accept: 'Accept',
      reject: 'Refuz',
      region: 'Setări cookie'
    },
    en: {
      title: 'We respect your privacy',
      text: 'We use analytics cookies (Google Analytics) only with your consent, to understand how the site is used and improve it. The site works fully without them.',
      more: 'Cookie policy',
      accept: 'Accept',
      reject: 'Reject',
      region: 'Cookie settings'
    }
  };

  function lang() {
    try { return localStorage.getItem('lang') === 'en' ? 'en' : 'ro'; } catch (e) { return 'ro'; }
  }
  function read() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (v && typeof v.analytics === 'boolean' && Date.now() - v.ts < MAX_AGE_MS) return v;
    } catch (e) {}
    return null;
  }
  function write(analytics) {
    try { localStorage.setItem(KEY, JSON.stringify({ analytics: analytics, ts: Date.now() })); } catch (e) {}
  }

  var gaLoaded = false;
  function loadGA() {
    window['ga-disable-' + GA_ID] = false;
    if (gaLoaded) return;
    gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag('consent', 'default', {
      ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'granted'
    });
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true, allow_google_signals: false, allow_ad_personalization_signals: false });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }
  function unloadGA() {
    window['ga-disable-' + GA_ID] = true;
    var names = ['_ga', '_ga_' + GA_ID.replace('G-', ''), '_gid', '_gat'];
    var host = location.hostname.split('.');
    var domains = ['', location.hostname];
    if (host.length > 1) domains.push('.' + host.slice(-2).join('.'));
    names.forEach(function (n) {
      domains.forEach(function (d) {
        document.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
      });
    });
  }

  function injectCss() {
    if (document.getElementById('cc-style')) return;
    var st = document.createElement('style');
    st.id = 'cc-style';
    st.textContent =
      '#cc-banner{position:fixed;left:12px;right:12px;bottom:12px;z-index:2147483000;max-width:640px;margin:0 auto;' +
      'background:var(--bg-secondary,#fff);color:var(--text-primary,#111);border:1px solid var(--border-color,#ccc);' +
      'border-radius:16px;box-shadow:0 10px 40px rgba(0,0,0,.3);padding:18px;font:14px/1.5 Inter,system-ui,sans-serif}' +
      '#cc-banner h2{margin:0 0 6px;font-size:16px;font-weight:700}' +
      '#cc-banner p{margin:0 0 12px;color:var(--text-secondary,#555)}' +
      '#cc-banner a{color:var(--accent-blue,#2563eb);text-decoration:underline}' +
      '#cc-banner .cc-actions{display:flex;gap:10px;flex-wrap:wrap}' +
      '#cc-banner button{flex:1 1 140px;min-height:44px;padding:10px 16px;border-radius:12px;font-weight:600;cursor:pointer;' +
      'border:2px solid var(--accent-blue,#2563eb);background:var(--accent-blue,#2563eb);color:#fff}' +
      '#cc-banner button.cc-reject{background:transparent;color:var(--accent-blue,#2563eb)}' +
      '#cc-banner button:focus-visible{outline:3px solid #f59e0b;outline-offset:2px}';
    document.head.appendChild(st);
  }

  function hide() {
    var b = document.getElementById('cc-banner');
    if (b) b.remove();
  }
  function show() {
    injectCss();
    hide();
    var t = T[lang()];
    var b = document.createElement('div');
    b.id = 'cc-banner';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-live', 'polite');
    b.setAttribute('aria-label', t.region);
    b.innerHTML =
      '<h2></h2><p></p><p style="margin-bottom:12px"><a href="/cookies/"></a></p>' +
      '<div class="cc-actions"><button type="button" class="cc-reject"></button><button type="button" class="cc-accept"></button></div>';
    b.querySelector('h2').textContent = t.title;
    b.querySelectorAll('p')[0].textContent = t.text;
    b.querySelector('a').textContent = t.more;
    b.querySelector('.cc-reject').textContent = t.reject;
    b.querySelector('.cc-accept').textContent = t.accept;
    b.querySelector('.cc-accept').addEventListener('click', function () { write(true); loadGA(); hide(); });
    b.querySelector('.cc-reject').addEventListener('click', function () { write(false); unloadGA(); hide(); });
    document.body.appendChild(b);
  }

  function init() {
    var c = read();
    if (c && c.analytics) loadGA(); else if (!c) show();

    document.addEventListener('click', function (e) {
      var el = e.target.closest && e.target.closest('[data-cookie-settings]');
      if (el) { e.preventDefault(); show(); return; }
      // keep banner language in sync with the RO/EN toggle
      if (e.target.closest && e.target.closest('.lang-btn') && document.getElementById('cc-banner')) {
        setTimeout(show, 0);
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
