<template>
  <div id="app">
    <template v-if="showError">
      Your browser doesn’t support audio recording or you’ve blocked microphone access.
    </template>

    <template v-else>
      <dictaphone @stop="handleRecording($event)" @error="handleError" mime-type="audio/mp3">
        <template slot-scope="{ isRecording, startRecording, stopRecording }">
          <button v-if="!isRecording" @click="startRecording">Start recording</button>
          <button v-else @click="stopRecording">Stop recording</button>
          <spectrum-analyser :style="{ opacity: isRecording ? 1 : .5, display:'block' }"/>
        </template>
      </dictaphone>

      <template v-if="audioSource">
        <audio :src="audioSource" controls></audio>
      </template>

      
    </template>

    <template>
       <tone-test-analysys/>
    </template>
  </div>
</template>

<script>

import Dictaphone from '@/components/Dictaphone';
import SpectrumAnalyser from '@/components/SpectrumAnalyser';
// import ToneTest from '@/components/ToneTest';
import ToneTestAnalysys from '@/components/ToneTestAnalysys';

export default {
  name: 'app',
  data() {
    return {
      audioSource: null,
      showError: false,
    };
  },
  methods: {
    handleError() {
      this.showError = true;
    },
    // eslint-disable-next-line no-unused-vars
    handleRecording({ blob, src }) {
      this.audioSource = src;
    },
  },
  components: {
    Dictaphone,
    SpectrumAnalyser,
    // ToneTest,
    ToneTestAnalysys
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>