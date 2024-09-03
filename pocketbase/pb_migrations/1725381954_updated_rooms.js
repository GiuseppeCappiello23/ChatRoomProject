/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1e69gr5ppk9jclu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gtw0jeil",
    "name": "partecipants",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1e69gr5ppk9jclu")

  // remove
  collection.schema.removeField("gtw0jeil")

  return dao.saveCollection(collection)
})
