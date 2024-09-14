/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("on3crvfed2uiabi");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "on3crvfed2uiabi",
    "created": "2024-09-13 16:02:36.635Z",
    "updated": "2024-09-13 16:02:36.635Z",
    "name": "users2",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vvuzxyjy",
        "name": "email",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cvowusbr",
        "name": "password",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
