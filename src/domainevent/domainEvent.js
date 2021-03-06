/**
 * @interface
 */
class DomainEvent {
  date = new Date();
  context = null;

  constructor(context = null) {
    if (new.target === this) {
      throw new Error('must be implemented');
    }

    this.context = context;
  }

  /**
   * @return {Date}
   */
  occurredOn() {
    return this.date;
  }

  withContext(context) {
    this.context = context;

    return this;
  }
}

module.exports = {DomainEvent};
