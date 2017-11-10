
var CarImagePreloader = (function () {
    function CarImagePreloader(body_name) {
        this.images = {}; // dict: key - car_category_color, value: Image
        this.max_loading = 5; // Сколько можно грузить обновременно
        this.queue = []; // очередь из объектов: {key, link}
        this.curr_loading = 0; // Сколько грузится сейчас

        this.interface_block = false;  // Должен ли быть сейчас заблокирован интерфейс
        this.max_loading_time = 5000; // 5 sec

        this.max_progress_count = 0;
        this.current_body_name = "";

        this.callback = null;
    }
    
    CarImagePreloader.prototype.load_next = function () {
        if (this.queue.length == 0 && this.curr_loading == 0) {
            this.on_load_end(true);
            return;
        }
        if (this.queue.length == 0) {return;}

        var target = this.queue.shift();
        if (this.images[target.key] != null) {
            setTimeout(function () {carImagePreloader.load_next();}, 10);
            return;
        }

        var img = new Image();

        img.onload = function () {
            // console.log("On load: ", target);
            carImagePreloader.images[target.key] = img;
            carImagePreloader.curr_loading--;
            carImagePreloader.load_next();
            carImagePreloader.on_load_one_image();
        };

        img.onerror = function () {
            console.log('Not found file: ', target);
            carImagePreloader.curr_loading--;
            carImagePreloader.load_next();
        };
        
        // console.log("Start load: ", target);
        img.src = target.link;
        this.curr_loading++;
    };

    CarImagePreloader.prototype.preload_car = function (car_name, callback) {
        this.queue = [];  // очищаем очередь загрузок

        function format_key() {
            return Array.from(arguments).join('.');
        }

        var car_setting = all_cars[car_name];
        this.current_body_name = car_name;
        this.callback = typeof callback === "function" ? callback : null;

        // todo: реализовать обход любого объекта с возвратом списка заданных полей и их адресов

        // добавление watermark
        if (car_setting.watermark)
            this.queue.push({key: format_key(car_name, "watermark"), link: car_setting.watermark});

        // добавление toning_body_map
        for (var key in car_setting.toning_body_map)
            if (car_setting.toning_body_map.hasOwnProperty(key) && car_setting.toning_body_map[key].img)
                this.queue.push({key: format_key(car_name, key), link: car_setting.toning_body_map[key].img});
        // добаввление остальных картинок
        for (var cat_name in car_setting.categories)
            if (car_setting.categories.hasOwnProperty(cat_name) && car_setting.categories[cat_name].items) {
                var items = car_setting.categories[cat_name].items;
                for (var item_name in items)
                    if (items.hasOwnProperty(item_name)) {
                        var item = items[item_name];
                        if (item.hasOwnProperty("colors")) 
                            for(var color_name in item.colors)
                                if (item.colors.hasOwnProperty(color_name) && item.colors[color_name].img)
                                    this.queue.push({key: format_key(car_name, cat_name, item_name, color_name), link: item.colors[color_name].img});
                        if (item.img)
                            this.queue.push({key: format_key(car_name, cat_name, item_name), link: item.img});
                    }
            }

        this.max_progress_count = this.queue.length;
        
        for(var i = this.curr_loading; i < this.max_loading; i++)
            this.load_next();

        this.on_load_start();
        setTimeout(function () {carImagePreloader.on_load_end(false);}, this.max_loading_time);
    };

    CarImagePreloader.prototype.on_load_one_image = function () {
        // console.log("CarImagePreloader.prototype.on_load_one_image");
        if (!this.interface_block) return;

        $("#constructor-preloader-progress").first().text((100. - 100. * this.queue.length / this.max_progress_count).toFixed(0) + "%");
    };

    CarImagePreloader.prototype.on_load_start = function () {
        // console.log("CarImagePreloader.prototype.on_load_start");
        this.interface_block = true;

        var jq_preloader = $("#constructor-preloader").first();
        jq_preloader.css("display", "block");

        // Пишем сюда имя загружаемой машинки
        $("#constructor-preloader-car").first().text(this.current_body_name);

    };

    CarImagePreloader.prototype.on_load_end = function (all_loading) {
        if (!this.interface_block) return;
        console.log("CarImagePreloader.prototype.on_load_end", all_loading);
        this.interface_block = false;

        var jq_preloader = $("#constructor-preloader").first();
        jq_preloader.css("display", "none");
        
        if (this.callback) this.callback();
    };


    return CarImagePreloader;
})();

var carImagePreloader = new CarImagePreloader();

