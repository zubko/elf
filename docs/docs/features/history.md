# State History

The `stateHistory` function provides a convenient way for `undo` and `redo` functionality, saving you the trouble of maintaining a history in the app yourself.

First, you need to install the package by using the CLI command or npm:

```bash
npm i @ngneat/elf-state-history
```

Then, call the `stateHistory` method when you want to start monitoring.

```ts
import { Store, createState } from '@ngneat/elf';
import { stateHistory } from '@ngneat/elf-state-history';

const { state, config } = createState(withEntities<Todo>());

const todosStore = new Store({ state, name, config });

class TodosRepository {
  private persist = stateHistory(todosStore);
}
```

This allows you to use the following methods and queries to jump to points in the store's history timeline:

`undo`, `redo`, `jumpToPast`, `jumpToFuture`, `hasPast`, `hasFuture`, `hasPast$`, `hasFuture$`

You can also call the `pause` and `resume` methods to toggle the monitoring of the state changes.

As the second parameter you can pass a `StateHistoryOptions` object, which can be used to define the store's maximum age and state comparator function.