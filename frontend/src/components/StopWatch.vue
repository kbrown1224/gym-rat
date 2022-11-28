<template>
  <div class="time">{{ time }}</div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "StopWatch",
  data() {
    return {
      time: null,
      isRunning: false,
      startTime: null,
      times: [0, 0, 0, 0],
      frameId: null,
    };
  },
  expose: ["start", "stop", "pause", "time"],
  mounted() {
    this.start();
  },
  methods: {
    start() {
      if (this.isRunning) throw new Error("Stopwatch has already started.");
      this.isRunning = true;
      if (!this.startTime) this.startTime = performance.now();
      this.$emit("start", this.startTime);
      this.frameId = requestAnimationFrame(this.step);
    },
    stop() {
      if (!this.isRunning)
        throw new Error("Stopwatch has not been started yet.");
      this.isRunning = false;
      this.startTime = null;
      this.times = [0, 0, 0, 0];
      this.$emit("stop", performance.now(), this.time);
      cancelAnimationFrame(this.frameId);
    },
    pause() {
      this.isRunning = !this.isRunning;
      if (this.isRunning) {
        this.startTime = performance.now();
        this.calculate(performance.now());
        this.frameId = requestAnimationFrame(this.step);
      }
      this.$emit("pause", this.isRunning, this.time);
    },
    formatTimes(times = this.times) {
      const hours = pad0(times[0], 2);
      const minutes = pad0(times[1], 2);
      const seconds = pad0(times[2], 2);
      return `${hours}:${minutes}:${seconds}`;

      function pad0(value, count) {
        let result = value.toString();
        while (result.length < count) {
          result = "0" + result;
          --count;
        }
        return result;
      }
    },
    step(timestamp) {
      if (!this.isRunning) return;
      this.calculate(timestamp);
      this.startTime = timestamp;
      this.time = this.formatTimes();
      this.frameId = requestAnimationFrame(this.step);
    },
    calculate(timestamp) {
      const diff = timestamp - this.startTime;
      this.times[3] += diff / 10;
      if (this.times[3] >= 100) {
        this.times[3] -= 100;
        this.times[2] += 1;
      }
      if (this.times[2] >= 60) {
        this.times[2] -= 60;
        this.times[1] += 1;
      }
      if (this.times[1] >= 60) {
        this.times[1] -= 60;
        this.times[0] += 1;
      }
    },
  },
});
</script>
