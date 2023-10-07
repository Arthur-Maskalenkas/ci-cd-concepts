export default class Person {
  eat (): void {
    console.log('eat method')
  }

  run (): void {
    console.log('run method')
  }

  static build (): Person {
    console.log('build method')

    return new Person()
  }
}
