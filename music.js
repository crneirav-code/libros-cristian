/* Official YouTube embeds. No player, API or tracking request is loaded before selection. */
(() => {
  const stage = document.querySelector('#music-player');
  if (!stage) return;
  const buttons = [...document.querySelectorAll('[data-music-id]')];
  const status = document.querySelector('.music-status');
  const stop = document.querySelector('.music-stop');
  const idle = stage.firstElementChild.cloneNode(true);
  let player = null, selectedId = '', generation = 0, apiPromise, playbackTimer;
  function api() {
    if (window.YT?.Player) return Promise.resolve(window.YT);
    if (apiPromise) return apiPromise;
    apiPromise = new Promise((resolve, reject) => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { previous?.(); resolve(window.YT); };
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      script.onerror = reject;
      document.head.append(script);
    });
    return apiPromise;
  }
  function clearPlayer() {
    generation++;
    clearTimeout(playbackTimer);
    if (player) { try { player.destroy(); } catch (_) {} }
    player = null;
    stage.replaceChildren();
    delete stage.dataset.playerError;
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    const id = button.dataset.musicId, title = button.dataset.musicTitle;
    if (selectedId === id && stage.querySelector('iframe')) {
      try { player?.playVideo(); } catch (_) {}
      return;
    }
    clearPlayer();
    selectedId = id;
    const current = generation;
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    stop.hidden = false;
    stage.classList.add('has-player');
    status.textContent = 'Preparando: ' + title + '.';
    const frame = document.createElement('iframe');
    frame.id = 'cneira-youtube-player';
    frame.title = title + ' · Cneira · Reproductor de YouTube';
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    const params = new URLSearchParams({autoplay:'1',playsinline:'1',rel:'0',enablejsapi:'1',origin:window.location.origin});
    frame.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?' + params;
    stage.append(frame);
    frame.addEventListener('load', () => {
      if (current === generation) status.textContent = title + ' · Usa los controles de YouTube para reproducir.';
    });
    api().then(YT => {
      if (current !== generation) return;
      player = new YT.Player(frame, {events:{
        onReady: event => {
          if (current !== generation) return;
          status.textContent = title + ' · Pulsa reproducir si no empieza.';
          event.target.playVideo();
          playbackTimer = setTimeout(() => {
            if (current === generation && !stage.dataset.playerError) status.textContent = 'Si no comienza, abre la canción con su enlace de YouTube Music.';
          }, 15000);
        },
        onStateChange: event => {
          if (current !== generation) return;
          if (event.data === 1) { clearTimeout(playbackTimer); status.textContent = 'Reproduciendo: ' + title + '.'; }
          if (event.data === 2) status.textContent = 'En pausa: ' + title + '.';
          if (event.data === 0) status.textContent = 'Terminó ' + title + '. Elige otra canción para seguir.';
        },
        onAutoplayBlocked: () => {
          if (current === generation) status.textContent = 'Pulsa el botón de reproducción dentro del video.';
        },
        onError: event => {
          if (current !== generation) return;
          clearTimeout(playbackTimer);
          stage.dataset.playerError = String(event.data);
          status.textContent = (event.data === 101 || event.data === 150)
            ? 'YouTube no permite reproducir esta canción aquí. Ábrela en YouTube Music.'
            : 'YouTube no pudo reproducir esta canción aquí. Puedes abrirla en YouTube Music.';
        }
      }});
    }).catch(() => {
      if (current === generation) status.textContent = title + ' · Usa el reproductor o el enlace a YouTube Music.';
    });
  }));
  stop.addEventListener('click', () => {
    clearPlayer(); selectedId = '';
    stage.classList.remove('has-player');
    stage.append(idle.cloneNode(true));
    buttons.forEach(b => b.setAttribute('aria-pressed','false'));
    status.textContent = 'Reproducción detenida. Elige otra canción cuando quieras.';
    stop.hidden = true;
    buttons[0].focus();
  });
})();
