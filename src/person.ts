export default class Person {
  eat (): void {
    console.log('eat method')
  }

  run (): void {
    console.log('run method')
  }

  static build (): Person {
    let text = 'text'
    let text2 = 33213213123123123213213213213321312312 + 'a'
    console.log(text)

    return new Person()
  }
}
