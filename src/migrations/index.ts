import * as migration_20261027_145546_initial_production_schema from './20261027_145546_initial_production_schema';

export const migrations = [
  {
    up: migration_20261027_145546_initial_production_schema.up,
    down: migration_20261027_145546_initial_production_schema.down,
    name: '20261027_145546_initial_production_schema'
  },
];
