`use strict`

function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        let hash = args.join(',');
        let index = cache.findIndex(item => item.hash === hash);
        if (index !== -1) {
            console.log(("Из кэша: " + cache[index].value));
            return ("Из кэша: " + cache[index].value);
        } else {
            let result = func(...args);
            let item = {hash, value: result};
            cache.push(item);
            if (cache.length > 5) {
                cache.shift()
            }
            console.log("Вычисляем: " + result);
            return ("Вычисляем: " + result);
        }
    }

    return wrapper
}

function debounceDecoratorNew(func, ms) {
    let flag = false;
    let timeout;

    function wrapper(...arg) {
        if (flag === false) {
            func(...arg);
            flag = true;
            timeout = setTimeout(() => {
                flag = false
            }, ms)
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func(...arg);
                flag = false;
            }, ms)
        }
    }
    return wrapper;
}

function debounceDecorator2(func, ms) {
    let flag = false;
    let timeout;
    function wrapper(...arg) {
        wrapper.count++;
        console.log("Вызов функции номер " + wrapper.count);
        if (flag === false) {
            func(...arg);
            flag = true;
            timeout = setTimeout(() => {
                flag = false
            }, ms);
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func(...arg);
                flag = false;
            }, ms);
        }
    }
    wrapper.count = 0;
    return wrapper;
}
