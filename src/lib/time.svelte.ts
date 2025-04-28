import { onDestroy } from "svelte";

export class Time {
  #binaryValues = $state<string[]>([])
  #timer: number;

  constructor() {
    this.#timer = setInterval(() => {
      this.refresh();
    }, 1000);

    onDestroy(() => {
      clearInterval(this.#timer);
    })
  }

  get binaryValues() {
    return this.#binaryValues;
  }

  private splitTime(date: Date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return {
      hours,
      minutes,
      seconds,
    };

  }

  private getBinary(input: number) {
    const outputs = [
      Math.floor(input / 10).toString(2).padStart(4, '0'),
      (input % 10).toString(2).padStart(4, '0'),
    ]

    return outputs;
  }

  private refresh() {
    const date = new Date();
    const splits = this.splitTime(date);
    const hrBinary = this.getBinary(splits.hours);
    const minBinary = this.getBinary(splits.minutes);
    const secBinary = this.getBinary(splits.seconds);

    const result = [
      ...hrBinary,
      ...minBinary,
      ...secBinary,
    ]

    this.#binaryValues = result;
  }
}
