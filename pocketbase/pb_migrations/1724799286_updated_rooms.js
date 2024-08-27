/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1e69gr5ppk9jclu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2uqhwgpy",
    "name": "createdBy",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1e69gr5ppk9jclu")

  // remove
  collection.schema.removeField("2uqhwgpy")

  return dao.saveCollection(collection)
})
