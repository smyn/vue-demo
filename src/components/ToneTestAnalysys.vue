<template>
  <div id="app">
     <button v-if="!isRecording" @click="play">Play222</button>
     <div ref="content">
			<tone-play-toggle></tone-play-toggle>
		</div>
  </div>
</template>

<script>
import * as Tone from 'tone';
// import { drawer}  from '@tonejs/gui';
export default {
  name: 'ToneTestAnalysys',
  data() {
    return {

    };
  },
  props: {
   
  },
  methods: {
    play(){
      const player = new Tone.Player({
        url: "https://tonejs.github.io/audio/berklee/arpeggio2.mp3",
        loop: true
      }).toDestination();

      const toneMeter = new Tone.Meter();
      player.connect(toneMeter);

      const toneFFT = new Tone.FFT();
      player.connect(toneFFT);

      const toneWaveform = new Tone.Waveform();
      player.connect(toneWaveform);

      // // bind the GUI
      // drawer().add({
      //   tone: player,
      //   name: "Player",
      //   open: true,
      // });

      // meter({
      //   tone: toneMeter,
      //   parent: this.$refs.content
      // });
      // fft({
      //   tone: toneFFT,
      //   parent: this.$refs.content
      // });
      // waveform({
      //   tone: toneWaveform,
      //   parent: this.$refs.content
      // });
      
    },
  },
  watch: {

  },
  async mounted() {

  },
};
</script>