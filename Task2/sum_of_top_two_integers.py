import unittest


def sum_of_top_integers(x: int, numbers: list):
    ordered_numbers = sorted(numbers, reverse=True)
    sum = 0
    for num in ordered_numbers[:x]:
        sum += num

    return sum


class Test(unittest.TestCase):
    def test_normal_case(self):
        self.assertEqual(sum_of_top_integers(2, [1, 4, 2, 3, 5]), 9)

    def test_multiple_top_integers(self):
        self.assertEqual(sum_of_top_integers(2, [1, 5, 5, 5, 5]), 10)

    def test_negative_numbers(self):
        self.assertEqual(sum_of_top_integers(2, [10, -5, -3]), 7)

    def test_short_list(self):
        self.assertEqual(sum_of_top_integers(2, [1]), 1)

    def test_empty_list(self):
        self.assertEqual(sum_of_top_integers(2, []), 0)


if __name__ == "__main__":
    unittest.main()
