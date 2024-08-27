/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1e69gr5ppk9jclu",
    "created": "2024-08-27 22:53:23.641Z",
    "updated": "2024-08-27 22:53:23.641Z",
    "name": "rooms",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aiaulatn",
        "name": "roomId",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 10,
          "max": 10,
          "pattern": "^[a-zA-Z0-9]{10}$"
        }
      },
      {
        "system": false,
        "id": "edgzljmc",
        "name": "roomName",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 5,
          "max": null,
          "pattern": "^[a-zA-Z0-9]{5}$"
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_jp9kzk8` ON `rooms` (`roomId`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1e69gr5ppk9jclu");

  return dao.deleteCollection(collection);
})
