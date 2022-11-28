<script setup>
import { getCssVar } from "quasar";
import { api } from "../../boot/axios";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { onMounted, ref, computed } from "vue";
import "chartjs-plugin-style";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
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

const trendChartData = computed(() => {
  if (stats.value) {
    return {
      labels: stats.value.trend.dates,
      datasets: [
        {
          label: "Data One",
          backgroundColor: getCssVar("positive"),
          borderColor: getCssVar("positive"),
          outerGlowWidth: 5,
          outerGlowColor: "rgb(255, 255, 0)",
          data: stats.value.trend.counts,
          tension: 0.4,
        },
      ],
    };
  } else {
    return {};
  }
});

const trendChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
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
      ticks: {
        color: "white",
        callback: function (value) {
          if (value % 1 === 0) {
            return value;
          }
        },
      },
      grid: {
        display: false,
      },
    },
  },
};

const plugin = {
  id: "line_glow",
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
  <Line
    :chart-options="trendChartOptions"
    :chart-data="trendChartData"
    chart-id="trendChart"
    :height="200"
    v-if="loaded"
    :plugins="[plugin]"
  />
</template>
