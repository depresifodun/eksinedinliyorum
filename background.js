var eski_sarki_ismi = "Kurban - Uyut Beni";

//youtube muzikte şarkı çalarken sekme bilgisinin değişmediği durum var

function yayinla(sarki_ismi) {
    bunu_yolla = 'şu an "' + sarki_ismi + '" dinliyorum';
    const data = new URLSearchParams();
    data.append('content', bunu_yolla);
    fetch('https://eksisozluk.com/set-profile-biography', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: data.toString()
        })
    }

function handleUpdated(tabId, changeInfo, tabInfo) {
  
  if (tabInfo.url.includes("open.spotify") || tabInfo.url.includes("music.youtube")){
    let sarki_ismi = tabInfo.title;
    if (sarki_ismi == "music.youtube.com/" || sarki_ismi == "open.spotify.com/"){ return "bok"}
    if (sarki_ismi.includes("Spotify")){ return "bok"}
    if (sarki_ismi == "YouTube Music"){ return "bok"}
    sarki_ismi = sarki_ismi.replace("YouTube Music","");
    sarki_ismi = sarki_ismi.replace("| ","");

    if (sarki_ismi != eski_sarki_ismi){
        console.log(sarki_ismi);
        eski_sarki_ismi = sarki_ismi;
        yayinla(sarki_ismi);
    }
  }
}

browser.tabs.onUpdated.addListener(handleUpdated);
