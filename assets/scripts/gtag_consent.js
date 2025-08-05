function hasConsent() {
    return localStorage.getItem('gtag_consent') === 'true';
}
function giveConsent() {
    localStorage.setItem('gtag_consent', 'true');
    loadGtag();
    document.getElementById('consent-banner').style.display = 'none';
}
function denyConsent() {
    localStorage.setItem('gtag_consent', 'false');
    document.getElementById('consent-banner').style.display = 'none';
}
function loadGtag() {
    if (window.gtagScriptLoaded) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-LW3TKFZLD8';
    document.head.appendChild(s);
    s.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-LW3TKFZLD8');
    };
    window.gtagScriptLoaded = true;
}
document.addEventListener('DOMContentLoaded', function() {
    if (hasConsent()) {
    loadGtag();
    } else if (localStorage.getItem('gtag_consent') !== 'false') {
    document.getElementById('consent-banner').style.display = 'block';
    }
});