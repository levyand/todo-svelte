<script lang="ts">
  import type { PageData } from './$types';
  import { enhance } from '$app/forms';

  export let data: PageData;
</script>

<h1>TODO App</h1>

<form method="post" action="?/new" use:enhance>
  <input type="text" name="todo" autocomplete="off" />
</form>

<ul>
  {#each data.todos as todo}
    <li>
      {todo.text}
      <form method="post" action="?/delete" use:enhance>
        <input type="hidden" hidden name="id" value={todo.id} />
        <button type="submit">
          Delete
        </button>
      </form>
    </li>
  {/each}
</ul>

<style>
</style>
