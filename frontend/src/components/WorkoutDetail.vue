<script setup>
const props = defineProps({
  workout: Object,
});

function deleteWorkout() {
  console.log(props.workout);
}

function resumeWorkout() {
  console.log(props.workout);
}
</script>

<template>
  <q-card class="glassy" style="width: 600px">
    <q-card-section>
      <div class="text-h3 text-center">{{ workout.workoutGroup.name }}</div>
    </q-card-section>

    <q-separator dark inset color="positive" />

    <q-card-section>
      <div>
        <span class="text-positive">Date Started</span>:
        {{ workout.workoutDate }}
      </div>
      <div><span class="text-positive">Lifts</span>:</div>
      <ul>
        <li v-for="lift in workout.lifts" :key="lift.id">
          {{ lift.exercise.name }}
        </li>
      </ul>
    </q-card-section>

    <q-separator dark inset color="positive" class="q-mb-md" />

    <q-card-actions align="right">
      <q-btn label="Close" outline color="white" v-close-popup />
      <q-btn label="Delete Workout" color="negative" @click="deleteWorkout" />
      <q-btn label="Resume Workout" color="positive" @click="resumeWorkout" />
    </q-card-actions>
  </q-card>
</template>
