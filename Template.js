// By Elaina Da Catto //   // Based on "Cute" theme by @PrincessAkira //
// Meow ~~~ //


const observer = new MutationObserver((mutations) => {
    const panel = document.querySelector(
       'div.lol-settings-options > lol-uikit-scrollable'
    );
    if (
       panel &&
       mutations.find((record) => Array.from(record.addedNodes).includes(panel))
    ) {
       const row = document.createElement('div');
       row.classList.add('lol-settings-general-row');


// Create button //
       const label = document.createElement('p');
       label.classList.add('lol-settings-window-size-text');
       label.textContent = 'Reload Theme';
       label.style.marginBottom = '12px';
 
       const searchdiv = document.createElement('searchbox-container');
       searchdiv.style.marginBottom = '12px';
       searchdiv.style.display = 'inline-block';
 

// Create a text field //
       const input = document.createElement('lol-uikit-flat-input');
 
       const btn = document.createElement('lol-uikit-flat-button-secondary');
       btn.style.display = 'flex';
       btn.textContent = 'Reload theme';
       btn.style.marginBottom = '12px';
       btn.onclick = () => {
          location.reload();
          themeReload();
       };
 
       row.append(label);
       row.append(btn);
       row.append(input);
 
       panel.prepend(row);
    }
 });
 function accessThemeCSS(value) {
    const root = document.documentElement;
    root.style.setProperty('--background', `url(${decodeURIComponent(value)})`);
 }


// Reload theme button //
 function themeReload() {
    var style = document.createElement('link');
    style.href = 'put ur link here';
    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);
 }
 window.addEventListener('load', () => {
    const interval = setInterval(() => {
       const manager = document.getElementById(
          'lol-uikit-layer-manager-wrapper'
       );
       if (manager) {
          clearInterval(interval);
          observer.observe(manager, {
             attributes: true,
             childList: true,
             subtree: true,
             characterData: true,
          });
       }
    }, 500);


// CSS link //
    document
       .getElementsByTagName('body')[0]
       .insertAdjacentHTML(
          'afterbegin',
          '<link rel="stylesheet" href="put ur link here" />'
       );


// Video Background link (You can Disable it or delete the link to using static background) //
    document.querySelector('body').innerHTML += "<video src="+"'Put ur link here' style='position: absolute;top: 0;width: 1280px;z-index: -1;pointer-events: none;' autoplay loop muted></video>"


// Background music link (Delete link to disable)
var source = "put ur link here"
var audio = document.createElement("audio");
// Auto play audio //
audio.autoplay = true;
// Loop audio //
audio.loop = true;
// Audio volume (0.0 is mute, 1.0 is highest) //
audio.volume = 0.2;
audio.load()
audio.addEventListener("load", function() { 
    audio.play(); 
}, true);
audio.src = source;


// Console Log
console.clear();
console.log('Seggs :3');
console.log('By Elaina Da Catto');
console.log('Meow ~~~');
});


// End. Maybe //