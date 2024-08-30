/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1e69gr5ppk9jclu")

  collection.indexes = []

  // remove
  collection.schema.removeField("aiaulatn")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1e69gr5ppk9jclu")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_jp9kzk8` ON `rooms` (`roomId`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aiaulatn",
    "name": "roomId",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 10,
      "max": 10,
      "pattern": "^[a-zA-Z0-9]{10}$"
    }
  }))

  return dao.saveCollection(collection)
})
