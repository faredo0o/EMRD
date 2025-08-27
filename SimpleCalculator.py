class SimpleCalculator:
    def add(self, a, b):
        return a + b

    def subtract(self, a, b):
        return a - b

    def multiply(self, a, b):
        return a * b

    def divide(self, a, b):
        if b == 0:
            raise ValueError("Cannot divide by zero!")
        return a / b

# Example usage
if __name__ == "__main__":
    calculator = SimpleCalculator()
    print("Addition: ", calculator.add(10, 5))
    print("Subtraction: ", calculator.subtract(10, 5))
    print("Multiplication: ", calculator.multiply(10, 5))
    print("Division: ", calculator.divide(10, 5))