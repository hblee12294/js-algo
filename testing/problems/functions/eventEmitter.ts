interface IEventEmitter {
  on(eventName: string, listener: Function): IEventEmitter;
  off(eventName: string, listener: Function): IEventEmitter;
  emit(eventName: string, ...args: Array<any>): boolean;
}

export class EventEmitter implements IEventEmitter {
  private record = new Map<string, Set<Function>>();

  constructor() {}

  on(eventName: string, listener: Function): IEventEmitter {
    const callbacks = this.record.get(eventName);

    if (callbacks) {
      callbacks.add(listener);
    } else {
      this.record.set(eventName, new Set([listener]));
    }

    return this;
  }

  off(eventName: string, listener: Function): IEventEmitter {
    const callbacks = this.record.get(eventName);

    if (callbacks) {
      callbacks.delete(listener);
    }

    return this;
  }

  emit(eventName: string, ...args: Array<any>): boolean {
    const callbacks = this.record.get(eventName);

    if (callbacks?.size) {
      callbacks.forEach((callback) => callback(...args));

      return true;
    }

    return false;
  }
}
