/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1e69gr5ppk9jclu")

  // update
  collection.schema.addField(new SchemaField({
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
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1e69gr5ppk9jclu")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
