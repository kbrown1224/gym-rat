<script setup>
import { Bar, Line } from "vue-chartjs";
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
import { useRouter } from "vue-router";

const router = useRouter();
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

const chartData = {
  labels: ["Chest", "Arms", "Legs", "Back & Shoulders"],
  datasets: [
    {
      data: [10, 9, 8, 7],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
      ],
    },
  ],
};
const chartOptions = {
  responsive: true,
  indexAxis: "y",
  plugins: {
    // title: {
    //   display: true,
    //   text: 'Workout Distribution',
    //   color: 'white',
    //   // font: {
    //   //   size: 20,
    //   //   family: "Poppins",
    //   //   weight: 'light'
    //   // }
    // },
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

const lineChartData = {
  labels: ["8/1", "8/8", "8/15", "8/22", "8/29", "9/5", "9/12", "9/19"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      borderColor: "#f87979",
      data: [4, 3, 4, 4, 2, 5, 4, 4],
      tension: 0.4,
    },
  ],
};

const lineChartOptions = {
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

const lastWorkouts = [
  {
    muscleGroupName: "Chest",
    muscleGroupId: 1,
    lastWorkout: "2022-10-01",
    daysAgo: 7,
  },
  {
    muscleGroupName: "Arms",
    muscleGroupId: 2,
    lastWorkout: "2022-10-02",
    daysAgo: 6,
  },
  {
    muscleGroupName: "Legs",
    muscleGroupId: 3,
    lastWorkout: "2022-10-03",
    daysAgo: 5,
  },
  {
    muscleGroupName: "Shoulders & Back",
    muscleGroupId: 4,
    lastWorkout: "2022-10-04",
    daysAgo: 4,
  },
];

const columns = [
  {
    label: "Muscle Group",
    name: "muscleGroupName",
    field: "muscleGroupName",
    align: "left",
  },
  {
    label: "Last Workout",
    name: "lastWorkout",
    field: "lastWorkout",
    align: "center",
  },
  { label: "Days Ago", name: "daysAgo", field: "daysAgo", align: "center" },
  {
    label: "Start Workout",
    name: "startWorkout",
    field: "startWorkout",
    align: "center",
  },
];

function startWorkout(muscleGroupId) {
  console.log(muscleGroupId);
  router.push({
    name: "workout",
    params: {
      muscleGroupId: muscleGroupId,
    },
  });
}
</script>

<template>
  <q-page class="q-py-md q-px-xl">
    <div class="row">
      <div class="col-12">
        <q-table
          class="glassy"
          title="Last Workouts"
          :rows="lastWorkouts"
          :columns="columns"
          hide-bottom
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="muscleGroupName" :props="props">{{
                props.row.muscleGroupName
              }}</q-td>
              <q-td key="lastWorkout" :props="props">{{
                props.row.lastWorkout
              }}</q-td>
              <q-td key="daysAgo" :props="props">{{ props.row.daysAgo }}</q-td>

              <q-td key="startWorkout" :props="props">
                <q-btn
                  push
                  class="text-black"
                  color="primary"
                  label="start"
                  @click="startWorkout(props.row.muscleGroupId)"
                />
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
    <div class="row q-pt-md">
      <div class="col-8">
        <div class="row justify-between">
          <div class="col-4 q-pr-sm">
            <q-card class="glassy">
              <q-card-section>
                <div class="text-h4 text-center">This Year</div>
              </q-card-section>
              <q-separator />

              <q-card-section>
                <div class="text-h5 text-center">100</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-4 q-pr-sm">
            <q-card class="glassy">
              <q-card-section>
                <div class="text-h4 text-center">This Month</div>
              </q-card-section>
              <q-separator />

              <q-card-section>
                <div class="text-h5 text-center">15</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-4 q-pr-sm">
            <q-card class="glassy">
              <q-card-section>
                <div class="text-h4 text-center">This Week</div>
              </q-card-section>
              <q-separator />

              <q-card-section>
                <div class="text-h5 text-center">2</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <Line
              :chart-options="lineChartOptions"
              :chart-data="lineChartData"
              chart-id="lineChartId"
              :height="200"
            />
          </div>
        </div>
      </div>
      <div class="col-4">
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData"
          chart-id="chartId"
        />
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.glassy {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
