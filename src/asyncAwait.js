const { promiseResolve, promiseReject } = require('./promises');
const { getDogs, getCats, getBirds } = require('../utils/utilPromises');
/**
 * Materials:
 * - https://javascript.info/async-await
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 */

/**
 * TASK-1: Resolve the created earlier promiseResolve() promise
 * using async/await syntax inside the asyncPromiseResolve function
 * and modify the message to -> Resolved! with async await
 * @returns {Promise<"Resolved! with async await">}
 *
 */
  async function asyncPromiseResolve() {
  
    await promiseResolve();
  
    return "Resolved! with async await";
  }


/**
 * TASK-2: Reject the created earlier promiseReject() promise
 * using async/await syntax inside the asyncPromiseReject function
 * and modify the message to -> Rejected! with async await
 * @returns {Promise<"Rejected! with async await">}
 */
    async function asyncPromiseReject() {
      try {
        await promiseReject();
      } 
      catch (error) {
        throw new Error("Rejected! with async await");
    }
  }



/**
 * TASK-3:
 * 1. Get the results array of 3 promises: getDogs(), getCats() and getBirds() from the './utils/utilPromises' file using await syntax;
 * 2. Modify the array ['dogs', 'cats', 'birds'] -> ['DOGS', 'CATS', ''BIRDS]
 * 3. Return the modified array
 * @returns {Promise<"['DOGS', 'CATS', 'BIRDS']">}
 */
  async function asyncPromiseAll() {

    const [dogs, cats, birds] = await Promise.all([getDogs(), getCats(), getBirds()]);
    const modifiedArray = [dogs.toUpperCase(), cats.toUpperCase(), birds.toUpperCase()];

    return modifiedArray;
  }


module.exports = {
  asyncPromiseResolve,
  asyncPromiseReject,
  asyncPromiseAll,
};
