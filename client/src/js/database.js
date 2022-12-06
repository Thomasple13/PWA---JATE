import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try{
    const wordsDb = await openDB('words', 1);


    const tx = wordsDb.transaction('words', 'readwrite');
  

    const store = tx.objectStore('words');
  

    const request = store.add({ content: content });
  

    const result = await request;
  } catch(error){
    console.error('putDb not implemented')
  }
}


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try{
    console.log('GET from the database');


  const wordsDb = await openDB('words', 1);


  const tx = wordsDb.transaction('words', 'readonly');


  const store = tx.objectStore('words');


  const request = store.getAll();


  const result = await request;
  console.log('result.value', result);
  return result;
  } catch(error){
    console.error('getDb not implemented');
  }
}

initdb();
