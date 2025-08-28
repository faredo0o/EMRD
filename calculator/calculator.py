class AdvancedCalculator:
    def __init__(self):
        self.history = []

    def add(self, a, b):
        result = a + b
        self.history.append(f"{a} + {b} = {result}")
        return result

    def subtract(self, a, b):
        result = a - b
        self.history.append(f"{a} - {b} = {result}")
        return result

    def multiply(self, a, b):
        result = a * b
        self.history.append(f"{a} * {b} = {result}")
        return result

    def divide(self, a, b):
        if b == 0:
            error = "Error: Division by zero"
            self.history.append(error)
            return error
        result = a / b
        self.history.append(f"{a} / {b} = {result}")
        return result

    def square_root(self, a):
        try:
            result = a ** 0.5
            self.history.append(f"sqrt({a}) = {result}")
            return result
        except ValueError:
            error = "Error: Invalid input for square root"
            self.history.append(error)
            return error

    def exponentiate(self, a, b):
        result = a ** b
        self.history.append(f"{a} ^ {b} = {result}")
        return result

    def sin(self, a):
        import math
        result = math.sin(a)
        self.history.append(f"sin({a}) = {result}")
        return result

    def cos(self, a):
        import math
        result = math.cos(a)
        self.history.append(f"cos({a}) = {result}")
        return result

    def tan(self, a):
        import math
        result = math.tan(a)
        self.history.append(f"tan({a}) = {result}")
        return result

    def log(self, a, base=10):
        import math
        try:
            result = math.log(a, base)
            self.history.append(f"log({a}, base {base}) = {result}")
            return result
        except ValueError:
            error = "Error: Invalid input for logarithm"
            self.history.append(error)
            return error

    def clear_history(self):
        self.history.clear()

    def get_history(self):
        return self.history

    def reset(self):
        self.clear_history()