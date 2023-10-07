import Calculator from './person'
{/''}dasdsa
function main (): void {
  const calculator = Calculator.build()

  calculator.add(1)
  calculator.add(2)
  calculator.add(3)

  calculator.addDuplicated0(1)
  calculator.addDuplicated1(2)

  calculator.multiply(2)

  calculator.getResult()
}

main()
