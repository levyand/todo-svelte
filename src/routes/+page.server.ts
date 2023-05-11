import type { PageServerLoad, Actions } from './$types';

type Todo = {
  id: string;
  text: string;
  completed: boolean;
  created_at: Date;
  completed_at?: Date;
};

let todos: Todo[] = [];

export const load = (async () => {
  return {
    todos
  };
}) satisfies PageServerLoad;

export const actions = {
  new: async ({ request }) => {
    const data = await request.formData();

    const todo = String(data.get('todo'));

    todos = todos.concat({
      id: crypto.randomUUID(),
      text: todo,
      completed: false,
      created_at: new Date()
    });
  },
  delete: async ({ request }) => {
    const data = await request.formData();

    const id = String(data.get('id'));

    todos = todos.filter(t => t.id !== id);
  }
} satisfies Actions;
