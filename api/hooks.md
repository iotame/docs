# Hooks
Hooks comprise the main event functionality of iotame. Throughout the lifetime of the application hooks are triggered in order to filter or mutate data and perform actions. Events can have an arbitrary amount of hooks attached to them, which are executed in the following order:

1. **Filter**  
  Filters decide whether or not to continue the execution after whichever event they are attached to. They are used to verify data integrity before storing to the database or the like. If they decide to not stop execution, they return `true`, if execution should be halted they return `false`. The first time any filter returns `false` control-flow is returned to the caller, i.e. no other Filters are called afterwards.
2. **Mutations**  
  Mutations receive data with their event and are free to mutate the data, before returning it.
3. **Actions**  
  Actions are executed in response to events. They are the correct place to send device notifications, call APIs or the like.

### Event registration
Event naming should be as short as possible, while being as specific as needed for any extension to register its hooks. The goal is to allow extensions to hook into specifically the event they need. If an extension needs to listen to updates from bluetooth devices, they shouldn't need to register their hooks to listen to all device updates and then manually check whether the device uses bluetooth. This information should be included in the name.

Good: `device.update.bluetooth.eq3`  
Bad: `device.update`

With this, an extension can listen to either all device updates `device.update.*`, all bluetooth updates `device.update.bluetooth` or specifically `eq3` updates with the full event identifier.

### Dispatching events
All extensions have a `dispatch` function, which they can use to dispatch events on their own. This function returns a promise, so we recommend using ES6's `async` & `await` syntax.

```js
import Extension from '@iotame/api'

module.exports = class extends Extension {
    async someUpdateTask () {
        let data = getSomeData()

        try {
            let mutatedData = await this.dispatch('extension.example.event', data)

            storeInDatabase(mutatedData)
        } catch (e) {}
    }
}
```

The `catch` block will only be executed if a Filter rejects the event. Mutations and Actions rejecting are automatically cleaned up and don't stop execution of the caller's function.

!> Keep in mind that in order to use `await` you must mark your function as `async`. [Read this article](https://ponyfoo.com/articles/understanding-javascript-async-await) for more information on asynchronous functions.

### Registering a hook
To register a hook, your Extension class needs to contain a `hooks` function, returning an array of hooks. The action performed by a hook can be synchronous or asynchronous, returning a promise (e.g. by using the `async` keyword).

```js
import { Extension, Action } from '@iotame/api'

module.exports = class extends Extension {
  hooks () {
    return [
        (new Action())
            .on('devicemanager.greeting')
            .do(() => { console.log('I am listening!') })
    ]
  }
}
```
