<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TransitionsTodoList -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap mt-4">
        Using multiple custom transitions, it is easy to bring a simple todo list to life!
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-text-field
                v-model="task"
                label="What are you working on?"
                solo
                @keydown.enter="create"
                >
                <v-fade-transition v-slot:append>
                    <v-icon
                    v-if="task"
                    @click="create"
                    >
                    add_circle
                    </v-icon>
                </v-fade-transition>
                </v-text-field>

                <h2 class="display-1 success--text pl-4">
                Tasks:&nbsp;
                <v-fade-transition leave-absolute>
                    <span :key="`tasks-${tasks.length}`">
                    {{ tasks.length }}
                    </span>
                </v-fade-transition>
                </h2>

                <v-divider class="mt-4"></v-divider>

                <v-row
                class="my-1"
                align="center"
                >
                <span class="mx-4 info--text font-weight-medium">
                    Remaining: {{ remainingTasks }}
                </span>

                <v-divider vertical></v-divider>

                <span class="mx-4 success--text font-weight-medium">
                    Completed: {{ completedTasks }}
                </span>

                <v-spacer></v-spacer>

                <v-progress-circular
                    :value="progress"
                    class="mr-2"
                ></v-progress-circular>
                </v-row>

                <v-divider class="mb-4"></v-divider>

                <v-card v-if="tasks.length > 0">
                <v-slide-y-transition
                    class="py-0"
                    group
                    tag="v-list"
                >
                    <template v-for="(task, i) in tasks">
                    <v-divider
                        v-if="i !== 0"
                        :key="`${i}-divider`"
                    ></v-divider>

                    <v-list-item :key="`${i}-${task.text}`">
                        <v-list-item-action>
                        <v-checkbox
                            v-model="task.done"
                            :color="task.done && 'grey' || 'info'"
                        >
                            <template v-slot:label>
                            <div
                                :class="task.done && 'grey--text' || 'info--text'"
                                class="ml-4"
                                v-text="task.text"
                            ></div>
                            </template>
                        </v-checkbox>
                        </v-list-item-action>

                        <v-spacer></v-spacer>

                        <v-scroll-x-transition>
                        <v-icon
                            v-if="task.done"
                            color="success"
                        >
                            mdi-check
                        </v-icon>
                        </v-scroll-x-transition>
                    </v-list-item>
                    </template>
                </v-slide-y-transition>
                </v-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "TransitionsTodoList",

  data: () => ({
      tasks: [
        {
          done: false,
          text: 'Foobar',
        },
        {
          done: false,
          text: 'Fizzbuzz',
        },
      ],
      task: null,
  }),
  computed: {
      completedTasks () {
        return this.tasks.filter(task => task.done).length
      },
      progress () {
        return this.completedTasks / this.tasks.length * 100
      },
      remainingTasks () {
        return this.tasks.length - this.completedTasks
      },
    },

    methods: {
      create () {
        this.tasks.push({
          done: false,
          text: this.task,
        })

        this.task = null
      },
    },
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TransitionsTodoList -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap mt-4">
        Using multiple custom transitions, it is easy to bring a simple todo list to life!
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-text-field
                v-model="task"
                label="What are you working on?"
                solo
                @keydown.enter="create"
                >
                <v-fade-transition v-slot:append>
                    <v-icon
                    v-if="task"
                    @click="create"
                    >
                    add_circle
                    </v-icon>
                </v-fade-transition>
                </v-text-field>

                <h2 class="display-1 success--text pl-4">
                Tasks:&nbsp;
                <v-fade-transition leave-absolute>
                    <span :key="`tasks-${tasks.length}`">
                    {{ tasks.length }}
                    </span>
                </v-fade-transition>
                </h2>

                <v-divider class="mt-4"></v-divider>

                <v-row
                class="my-1"
                align="center"
                >
                <span class="mx-4 info--text font-weight-medium">
                    Remaining: {{ remainingTasks }}
                </span>

                <v-divider vertical></v-divider>

                <span class="mx-4 success--text font-weight-medium">
                    Completed: {{ completedTasks }}
                </span>

                <v-spacer></v-spacer>

                <v-progress-circular
                    :value="progress"
                    class="mr-2"
                ></v-progress-circular>
                </v-row>

                <v-divider class="mb-4"></v-divider>

                <v-card v-if="tasks.length > 0">
                <v-slide-y-transition
                    class="py-0"
                    group
                    tag="v-list"
                >
                    <template v-for="(task, i) in tasks">
                    <v-divider
                        v-if="i !== 0"
                        :key="`${i}-divider`"
                    ></v-divider>

                    <v-list-item :key="`${i}-${task.text}`">
                        <v-list-item-action>
                        <v-checkbox
                            v-model="task.done"
                            :color="task.done && 'grey' || 'info'"
                        >
                            <template v-slot:label>
                            <div
                                :class="task.done && 'grey--text' || 'info--text'"
                                class="ml-4"
                                v-text="task.text"
                            ></div>
                            </template>
                        </v-checkbox>
                        </v-list-item-action>

                        <v-spacer></v-spacer>

                        <v-scroll-x-transition>
                        <v-icon
                            v-if="task.done"
                            color="success"
                        >
                            mdi-check
                        </v-icon>
                        </v-scroll-x-transition>
                    </v-list-item>
                    </template>
                </v-slide-y-transition>
                </v-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "TransitionsTodoList",

  data: () => ({
      tasks: [
        {
          done: false,
          text: 'Foobar',
        },
        {
          done: false,
          text: 'Fizzbuzz',
        },
      ],
      task: null,
  }),
  computed: {
      completedTasks () {
        return this.tasks.filter(task => task.done).length
      },
      progress () {
        return this.completedTasks / this.tasks.length * 100
      },
      remainingTasks () {
        return this.tasks.length - this.completedTasks
      },
    },

    methods: {
      create () {
        this.tasks.push({
          done: false,
          text: this.task,
        })

        this.task = null
      },
    },
};
>>>>>>> sjad
</script>