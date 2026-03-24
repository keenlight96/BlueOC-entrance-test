import unittest


def most_frequent(string_list):
    d = dict()
    max_len = 0
    max_len_indice = []
    for string in string_list:
        l = d.setdefault(len(string), [])
        l.append(string)
        if len(l) > max_len:
            max_len = len(l)
            max_len_indice = [len(string)]
        elif len(l) == max_len:
            max_len_indice.append(len(string))

    return (
        d.get(max_len_indice[0])
        if len(max_len_indice) == 1
        else [d.get(idx) for idx in max_len_indice]
    )


class Test(unittest.TestCase):
    def test_normal_case(self):
        self.assertEqual(
            most_frequent(["a", "ab", "abc", "cd", "def", "gh"]), ["ab", "cd", "gh"]
        )

    def test_multiple_results(self):
        self.assertEqual(
            most_frequent(["a", "ab", "abc", "cd", "def", "gh", "ghi"]),
            [["ab", "cd", "gh"], ["abc", "def", "ghi"]],
        )

    def test_one_string(self):
        self.assertEqual(most_frequent(["a"]), ["a"])

    def test_empty_list(self):
        self.assertEqual(most_frequent([]), [])

    def test_empty_string(self):
        self.assertEqual(most_frequent(["", "a", "", "bb"]), ["", ""])


if __name__ == "__main__":
    unittest.main()
