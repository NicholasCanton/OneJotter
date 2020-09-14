/**
 * When you create a new database or increase the version number of an existing database (by specifying a higher version number than you did previously, when Opening a database), the onupgradeneeded event will be triggered. In the handler for this event, you should create the object stores needed for this version of the database
 */

// https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

var database = {
    name: 'Notebook',
    version: 1,
};

function getIndexedDB() {
    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
    return indexedDB;
}

function deleteDatabase() {
    var indexedDB = getIndexedDB();
    indexedDB.deleteDatabase('Notebook');
}

function insertCategory(entity) {
    var indexedDB = getIndexedDB();
    alert(indexedDB);
    alert(JSON.stringify(entity))

    var request = indexedDB.open('Notebook', 1);
    request.onerror = function(e) {
        console.log(e.currentTarget.error.message);
        alert(e.currentTarget.error.message);
    };

    request.onsuccess = function(e) {
        var db = e.target.result;
        alert('onsuccess');

        var transaction = db.transaction('category', 'readwrite');
        var store = transaction.objectStore('category');
        store.add(entity);
        db.close();
    };

    request.onupgradeneeded = function(e) {
        var db = e.target.result;
        if (db.objectStoreNames.contains('categories')) {} else {
            //db.createObjectStore('category', { keyPath: "creationDate" });
            var objectStore = db.createObjectStore('categories', { keyPath: 'id', autoIncrement: true });
            console.log(objectStore)
        }

        if (db.objectStoreNames.contains('notes')) {} else {
            var objectStore = db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
            console.log(objectStore)
        }

        if (db.objectStoreNames.contains('folders')) {} else {
            var objectStore = db.createObjectStore('folders', { keyPath: 'id', autoIncrement: true });
            console.log(objectStore)
        }
    };
}