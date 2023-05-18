<template>
  <div id="app">
     <button v-if="!isRecording" @click="play">Play</button>
  </div>
</template>

<script>
import * as Tone from 'tone';
export default {
  name: 'ToneTest',
  data() {
    return {

    };
  },
  props: {
   
  },
  methods: {
    play(){
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("C4", "8n");


		const toneMeter = new Tone.Meter({ channels: 2 });
		Tone.Destination.chain(toneMeter);
		// meter({
		// 	tone: toneMeter,
		// 	parent: document.querySelector("#content")
		// });

        this.makeChannel("audio", "../assets/bz.mp3", 1);
		this.makeChannel("voice", "../assets/voice.mp3", 1);
        Tone.Transport.start();
    },
    makeChannel(name, url, pan){
            const channel = new Tone.Channel({
				pan
			}).toDestination();
			const player = new Tone.Player({
				url: url,
				loop: false
			}).sync().start(0);
			player.connect(channel);
			// // add a UI element
			// ui({
			// 	name,
			// 	tone: channel,
			// 	parent: document.querySelector("#content")
			// });

    }
   
  },
  watch: {

  },
  async mounted() {

  },
};
</script>