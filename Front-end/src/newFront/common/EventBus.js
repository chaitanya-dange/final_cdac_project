const eventBus = {
  on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(event, callback) {
    document.removeEventListener(event, callback);
  },
};

export default eventBus;

/*This is a JavaScript object that provides a simple event bus implementation based on the DOM events API.

The eventBus object has three methods:

on(event, callback) - This method registers an event listener for the specified event. When the event is triggered, the callback function is called with the detail property of the event as its argument. The detail property is an object that contains any data associated with the event.

dispatch(event, data) - This method triggers an event with the specified event name and passes data as its payload. The event is dispatched using the CustomEvent constructor, which allows you to define a custom event name and any data associated with the event.

remove(event, callback) - This method removes an event listener for the specified event and callback. The callback function should be the same function that was used to register the listener with the on method.

By using the DOM events API, this event bus implementation allows different parts of an application to communicate with each other without relying on a centralized state management system. Components or modules can subscribe to events of interest using the on method, and dispatch events with relevant data using the dispatch method. The remove method allows subscribers to unsubscribe from events when they are no longer interested in them.



 */