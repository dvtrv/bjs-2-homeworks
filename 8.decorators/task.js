// //Задача № 1

function cachingDecoratorNew(func) {
    const cache = [];
    function wrapper(...args) {
        const hash = md5(args);
        let objInCache = cache.find((item) => item.hash === hash);
        if (objInCache) {
            console.log(`Из кеша: ${objInCache.value}`);
            return `Из кеша: ${objInCache.value}`;
        }

        let result = func(...args);
        cache.push({ hash: hash, value: result });
        if (cache.length > 5) {
            cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;

    }
    return wrapper;
}


// //Задача № 2

function debounceDecoratorNew(fn, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
    function wrapper(...args) {
        wrapper.allCount++;
        if (timeoutId === null) {
            fn.apply(this, args);
            wrapper.count++;
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
            wrapper.count++;
        },delay);
    }
    return wrapper;
}