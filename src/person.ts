export default class Calculator {
  private result: number

  private constructor () {
    this.result = 0
  }

  public add (value: number): Calculator {
    this.result += value
    return this
  }

  public subtract (value: number): Calculator {
    this.result -= value
    return this
  }

  public addDuplicated0(value: number): Calculator {
    this.result += value
    const numbers = [10, 2, 30, 1, 5];
    numbers.sort(); // Noncompliant: lexicographic sort
    console.log(numbers); // Output: [1, 10, 2, 30, 5]
    return this
  }

  public addDuplicated1(value: number): Calculator {
    this.result += value
    return this
  }

  public multiply (value: number): Calculator {
    this.result *= value
    return this
  }

  // @ts-ignore
  public getResult (): number {
    console.log(this.result)
  }

  static build (): Calculator {
    return new Calculator()
  }


}
