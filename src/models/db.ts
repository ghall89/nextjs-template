import Dexie, { EntityTable } from 'dexie';

import { ToDo } from './ToDo';

const db = new Dexie('ToDos', {}) as Dexie & {
  collections: EntityTable<ToDo, 'id'>;
};

db.version(1).stores({
  collections: '&id, createdDt, name, completed',
});

export { db };
