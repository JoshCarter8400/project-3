export function pluralize(name, count) {
  if (count === 1) {
    return name;
  }

  return name + 's';
}

export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    // open connection to our database this wil need to be changed if we change the name of our project
    const request = window.indexedDB.open('project-3', 1);

    // create variables to hold refs to database, transaction(tx), and object store
    let db, tx, store;

    // if version has changed(or if this is first time using database), run this method and create the three object stores
    request.onupgradeneeded = function (e) {
      const db = request.result; //create object store for each type of data and set primary key index to be the "_id" of the data
      db.createObjectStore('services', { keyPath: '_id' });
      db.createObjectStore('cart', { keyPath: '_id' });
    };

    // handle errors with connecting
    request.onerror = function (e) {
      console.log('Ooops there was an error');
    };

    request.onsuccess = function (e) {
      // save reference of database to the db variable
      db = request.result;
      // open a transaction do whatever we pass into `storeName` (must match one of the object store names)
      tx = db.transaction(storeName, 'readwrite');
      // save a ref to that object store
      store = tx.objectStore(storeName);

      // if there's any errors let us know
      db.onerror = function (e) {
        console.log('error', e);
      };

      switch (method) {
        case 'put':
          store.put(object);
          resolve(object);
          break;
        case 'get':
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case 'delete':
          store.delete(object._id);
          break;
        default:
          console.log('No valid method');
          break;
      }

      // when the transaction is complete close the connection
      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}
