/*
 * Create an event emitter that goes like this
 * emitter = new Emitter();
 *
 * Allows you to subscribe to some event
 * sub1 = emitter.subscribe('function_name', callback1);
 * (you can have multiple callbacks to the same event)
 * sub2 = emitter.subscribe('function_name', callback2);
 *
 * You can emit the event you want with this api
 * (you can receive 'n' number of arguments)
 * sub1.emit('function_name', foo, bar);
 *
 * And allows you to release the subscription like this
 * (but you should be able to still emit from sub2)
 * sub1.release();
 */

 class Emitter{
   constructor() {
     this.eventsMap = new Map()
   }

   subscribe(name, cb) {
     this.eventsMap.has(name) || this.eventsMap.set(name, [])
     this.eventsMap.get(name).push(cb)

     return {
       release: () => {
        const events = this.eventsMap.get(name)
        events && this.eventsMap.set(name, events.filter(event => event !== cb))
       }
     }
   }

   emit(name, ...args) {
     const events = this.eventsMap.get(name)

     if (events && events.length) {
       events.forEach(event => event(...args))
     }
   }
 }

const emitter = new Emitter()

const sub = emitter.subscribe('hello', (name = 'you') => console.log('hello ' + name))
const sub2 = emitter.subscribe('bye', (name = 'you') => console.log('bye bye ' + name))

// 1 sub
emitter.emit('hello', 'hongbin')
console.log('1 ---------------')

// 2 two events on the same event
const sub3 = emitter.subscribe('hello', () => console.log('hello again'))
emitter.emit('hello', 'hongbin')
console.log('2 ---------------')

// 3 sub2, without arguments
emitter.emit('bye')
console.log('3 ---------------')

// 4 release sub1
sub.release()
emitter.emit('hello')
console.log('4 ---------------')

// 5 repeat events to sub2
const sub4 = emitter.subscribe('bye', (name = 'you') => console.log('bye bye ' + name))
emitter.emit('bye', 'hongbin')
console.log('5 ---------------')

// 6 then release one of them
sub2.release()
emitter.emit('bye', 'hongbin')
console.log('6 ---------------')

// 7 release all
sub4.release()
emitter.emit('bye', 'hongbin')
console.log('7 ---------------')