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
