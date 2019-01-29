# NIRY practices JavaScript 30 from Wes Bos

#### Постарался соответствовать DRY.

## Собственные дороботки
1. Избавился от залипания
    >**Проблема**: При долгом удержании одного из звуков css класс "playing" не убирался.

    >**Решение**: Добавил обработчик события для 'keyup', который убирает класс "playing" у отпускаемого 'key'.

2. Глюк со стрелками при прохождении круга. 
    >**Проблема**: При прохождении круга стрелка отматывалась назад.

    >**Решение**: При достижении 90deg у любого ".hand" меняем 'transition' на 'none'.

3. Изменение отслеживаеться постоянно над input. 
    >**Проблема**: Изменение должно отслеживаеться только при изменении значения input.
    
    >**Решение**: Добавлен обработчие события 'mousedown' для input, в нем отслеживаеться 'mousemove' и в случае 'mouseup' обработчик для 'mousemove' изымаеться.

4. В .sort использовал вычитание, вместо сравнения.

5. Ничего.

6. Ничего.

7. Ничего.

8. Ничего.

9. Ничего.

10. Баг с нажатием shift без выбора начального чека.
    >**Проблема**: При нажитии с shift без изначального элемента, начальным элементом становился последний в списке чек.
    
    >**Решение**: Добавлена проверка на наличеи начального элемента.
    
11. Добавить fullscreen
    >**Проблема**: Добавить возможность открыть видео на всю страницу, и проблема с range элементами.
    
    >**Решение**: Добавлена кнопка перехода в fullscreen, также переход при двойном нажатии на видео. 
    Проблема с range: Добавлен обработчие события 'mousedown' для input, в нем отслеживаеться 'mousemove' и в случае 'mouseup' обработчик для 'mousemove' изымаеться.