class MediaPlayer {
  constructor(config) {
    this.media = config.element;
    this.plugins = config.plugins || [];

    this._initPlugins();
  }
  _initPlugins() {
    /* Al metodo RUN le pasamos un objeto que solo tiene acceso a ciertas
      propiedades de MediaPlayer(this) no a todas */
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },

      set muted(value) {
        this.media.muted = true;
      },
    };

    this.plugins.forEach((plugin) => {
      plugin.run(player);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    this.media.paused ? this.play() : this.pause();
  }
  toggleMute() {
    this.media.muted ? this.unmute() : this.mute();
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
}

export default MediaPlayer;
