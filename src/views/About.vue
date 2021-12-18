<template>
  <v-container>
    <v-row>
      <v-col cols="6" offset="3">
        <v-card class="mt-16">
          <v-card-title>
            <v-text-field
              prepend-inner-icon="mdi-pencil"
              v-model="title"
              label="Title"
            ></v-text-field>
          </v-card-title>
          <v-expand-transition>
            <v-card-text v-show="title">
              <v-textarea
                prepend-inner-icon="mdi-note-text"
                rows="3"
                v-model="description"
                label="notes"
              ></v-textarea>
            </v-card-text>
          </v-expand-transition>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="addTodo" class="primary white--text"
              ><v-icon left>mdi-plus</v-icon> Add Todo</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="my-4"></v-divider>
    <v-row>
      <v-col cols="12" sm="4" md="4" v-for="(todo, i) in todos" :key="i">
        <v-card class="rounded-xl">
          <v-card-title class="secondary white--text py-2">{{
            todo.title
          }}</v-card-title>
          <v-card-text class="py-4 headline">
            {{ todo.description }}
            <v-checkbox hide-details :value="todo.completed"></v-checkbox>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "TODO_PAGE",
  data() {
    return {
      title: "",
      description: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      let newTodo = {
        title: this.title,
        description: this.description,
      };
      newTodo.id = this.todos.length + 1;
      newTodo.completed = false;
      this.todos.push(newTodo);
    },
  },
};
</script>

