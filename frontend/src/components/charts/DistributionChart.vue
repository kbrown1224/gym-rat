<script setup>
import { getCssVar } from "quasar";
import { api } from "../../boot/axios";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { onMounted, ref, computed } from "vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const stats = ref({});
const loaded = ref(false);
onMounted(async () => {
  const statsResponse = await api.get("/api/workout/statistics");
  stats.value = statsResponse.data;
  loaded.value = true;
});

const distChartData = computed(() => {
  if (stats.value != {}) {
    return {
      labels: stats.value.distribution.workouts,
      datasets: [
        {
          data: stats.value.distribution.counts,
          backgroundColor: getCssVar("primary"),
          borderColor: getCssVar("positive"),
          borderWidth: 3,
        },
      ],
    };
  } else {
    return {};
  }
});

const distChartOptions = {
  responsive: true,
  indexAxis: "y",
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: { color: "white" },
    },
    y: {
      ticks: { color: "white" },
      grid: {
        display: false,
      },
    },
  },
};

const plugin = {
  id: "bar_glow",
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext("2d");
    let _stroke = ctx.stroke;
    ctx.stroke = function () {
      ctx.save();
      ctx.shadowColor = ctx.strokeStyle;
      ctx.shadowBlur = 8;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 4;
      _stroke.apply(this, arguments);
      ctx.restore();
    };
  },
};
</script>

<template>
  <Bar
    :chart-options="distChartOptions"
    :chart-data="distChartData"
    chart-id="distChart"
    v-if="loaded"
    :plugins="[plugin]"
  />
</template>
