export default class Person {
  eat() {
    console.log('eat method')
  }

  run() {
    console.log('run method')
  }

  static build() {
    console.log('build method')

    return new Person()
  }
}