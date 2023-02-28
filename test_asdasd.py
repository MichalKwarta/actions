import pytest
from asdasd import divide
def test_working():
    assert divide(2, 2) == 1
def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError):
        divide(1, 0)
