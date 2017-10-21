
var main_car = null;

$(document).ready(function () {
    var hash_url = window.location.hash;

    if (hash_url && hash_url.length) {
        hash_url = hash_url.split('#')[1];
        if (hash_url.length) {
            var new_car = ConstructorCar.prototype.load(hash_url);
            if (new_car) {
                main_car = new_car;
                main_car.redraw($("#constructor-view"));
                main_car.redraw_interface();
                onHashChange();
                
                carImagePreloader.preload_car(main_car.body_name);
            }
        }
    }

    if (!main_car) init_body_cars();


    // Инициализация кликов
    $("#constructor-arrow-left").click(function(){switchCar(false);});
    $("#constructor-arrow-right").click(function(){switchCar(true);});

});

function object_fields_to_list(obj) {
    var res = [];
    for (var elem in obj)
        res.push(obj[elem]);
    return res;
}


var ConstructorCar = (function () {
    function ConstructorCar(body_name) {
        this.body_name = body_name;

        this.settings = all_cars[body_name].categories;
        this.toning_body_map = all_cars[body_name].toning_body_map;

        
        this.toning = null; // Цвет тонировки - нужно указывать сток
        this.body_color = null;  // Цвет кузова - нужен сток
        
        this.body = null;
        // Это ссылки непосредственно на итемы из объекта all_cars
        this.wheels = null; // Колёса - нужно указывать сток
        this.wheels_color = null;  // Цвет колёс - тоже нужно указывать сток
        this.shadow = null; // Тень под автомобилем
        this.back_mirrors = null; // Зеркала заднего вида
        this.splitter = null; // сплиттер
        this.rapids = null; // пороги
        this.radiator = null; // radiator
        this.strut = null; // Стойка
        this.visor = null; // Визор
        this.roof = null; // Крыша
        this.eyelashes = null; // Реснички
		this.logo = null; // Лого
		


        //this.standart_elems_names = ["body", "shadow", "back_mirror", "radiator", "strut", "visor", "roof", "eyelashes"];
        //this.colors_elems_names = ["wheels", "rapids", "splitter"];

        this.standart_elems_names = ["body"];
        this.colors_elems_names = [];
        this.in_body_color_elems = {}; // Здесь хранятся пары category / item_key для которых работает функция "в цвет кузова" category_item_key = [category, item_key]

        var categories_list = ["body", "shadow", "back_mirrors", "radiator", "strut", "visor", "roof", "eyelashes", "wheels", "rapids", "splitter", "logo"];
        for (var i = 0; i < categories_list.length; i++)
            if (this.settings[categories_list[i]])
                if (this.settings[categories_list[i]].with_color)
                    this.colors_elems_names.push(categories_list[i]);
                else
                    this.standart_elems_names.push(categories_list[i]);

        this.set_stock_init();
    }

    ConstructorCar.prototype.set_stock_init = function () {
        // Установка стоковых вариантов для всех частей, где они нужны
        for (var category_name in this.settings)
            if (this.settings.hasOwnProperty(category_name) && this.settings[category_name] && this.settings[category_name].stock) {
                this[category_name] = this.settings[category_name].items[this.settings[category_name].stock];
                if (this.settings[category_name].with_color) {
                    this[category_name + "_color"] = this[category_name].def_color;
                }
            }
    };

    ConstructorCar.prototype.set_item = function(options) {
        var category = options.category;
        var item_key = options.item_key;
        var action = options.action;
        // console.log("ConstructorCar.prototype.set_item", category, item_key, action);

        if (!action) {
            // Если нужно итем снять
            this[category] = null;
            // проверить на stock
            if (this.settings[category].stock)
                this[category] = this.settings[category].items[this.settings[category].stock];
        }
        else {
            // Если нужно заменить или установить итем
            this[category] = this.settings[category].items[item_key];
        }
        // Здесь всегда при выборе итема будем выбирать дефолтный цвет - более адекватное поведение
        if (this[category] && this.settings[category].with_color) {
            var set_success = false;
            if (this.settings[category].items[item_key]["need_body_color"])
                set_success = this.set_body_color(category, item_key);
            if (!set_success)
                this.set_item_color({category: category, item_key: item_key, item_color: this[category].def_color, action: true, need_redraw: false});
                // this[category + "_color"] = this[category].def_color;
        }
        else {
            // Если категория не выбрана или она без цвета, то удалить из списка "в цвет кузова"
            if (this.in_body_color_elems.hasOwnProperty(category + "_" + item_key))
                delete this.in_body_color_elems[category + "_" + item_key];
        }

        if (category == "body_color") // Значит нужно обновить все детали "в цвет кузова"
           this.refresh_in_body_color();

        if (options.need_redraw) {
            this.redraw($("#constructor-view"));
            if (category != "body_color")
                this.redraw_current_category(category);
        }
    };

    ConstructorCar.prototype.set_item_color = function(options) {
        var category = options.category,
            item_key = options.item_key,
            item_color = options.item_color,
            action = options.action,
            from_body_color = options.from_body_color;
        if (!action) {
            // Если нужно итем снять
            this[category + "_color"] = this[category].def_color;
        }
        else {
            // Если нужно заменить или установить итем
            this[category + "_color"] = this[category].colors[item_color] ? item_color : this[category].def_color;
        }

        if (from_body_color)
            this.in_body_color_elems[category + "_" + item_key] = [category, item_key];
        else {
            //console.log("change color", this.in_body_color_elems, category, item_key);
            if (this.in_body_color_elems.hasOwnProperty(category + "_" + item_key))
                delete this.in_body_color_elems[category + "_" + item_key];
        }
        if (options.need_redraw) {
            this.redraw($("#constructor-view"));
            this.redraw_current_category(category);
        }
        return true;
    };

    ConstructorCar.prototype.redraw = function(jq_elem) {
        // console.log("ConstructorCar.prototype.redraw");
        // todo: сделать чтобы redraw смотрел на src картинок и менял только те, которые изменились
        jq_elem.empty();

        // Вычисление body (через цвет кузова и тонировку)
        var body_link = this.body_color.color + '_' + this.toning.type;
        if (!this.toning_body_map.hasOwnProperty(body_link) || !this.toning_body_map[body_link]) {
            console.log("Не найдена пара: кузов тонировка: ", body_link);
            this.toning = this.settings.toning.items[this.settings.toning.stock];
            body_link = this.body_color.color + '_' + this.toning.type;  // Стандартная тонировка, которая должна быть задана для каждого цвета
        }
        this.body = this.toning_body_map[body_link];
        // Отрисовка всех элементов без выбора цвета
        var st_categories = this.standart_elems_names;
        for (var i = 0; i < st_categories.length; i++ ) {
            var item = this[st_categories[i]];
            if (item != null ) {
                jq_elem.append("<img src=" + item.img + " alt='' data-category='" + st_categories[i] + "' class='elem' style='z-index:" + item.z + "'>");
            }
        }

        // Отрисовка всех элементов с выбором цвета
        var color_categories = this.colors_elems_names;
        for (var i = 0; i < color_categories.length; i++ ) {
            var category = color_categories[i];
            if (this[category]) {
                var item = this[category].colors[this[category + "_color"]];
                if (item != null) {
                    jq_elem.append("<img src=" + item.img + " alt='' data-category='" + category + "' class='elem' style='z-index:" + item.z + "'>");
                }
            }
        }

        window.location.hash = this.save(); // Обновление ссылки на данную машинку
    };

    ConstructorCar.prototype.redraw_current_category = function (category_name) {
        // Подсветка текущего выбранного итема в текущей категории
        // console.log("ConstructorCar.prototype.redraw_current_category", category_name);
        var curr_key = null;
        var curr_obj = this[category_name];
        var jq_colors = $("#constructor-category-color");
        var all_elements = $("#constructor-category").find(".elem");
        all_elements.removeClass("activated");
        if (! curr_obj) {
            // all_elements.removeClass("activated");
            // todo: сделать здесь подсветку сток-итема, если при этом сток не выбирается, то есть = null
            //if (this.settings[category_name].stock == null)
            $("#constructor-category").find(".elem.null-stock").addClass("activated");
            jq_colors.css("display", "none");
            return;
        }

        for (var item_key in this.settings[category_name].items)
            if (this.settings[category_name].items[item_key] == curr_obj)
                curr_key = item_key;

        if (!curr_key) {
            jq_colors.css("display", "none");
            return;
        }

        for (var i = 0; i < all_elements.length; i++)
            if ($(all_elements[i]).data("item_key") == curr_key)
                $(all_elements[i]).addClass("activated");
        // Отрисовать все цвета, если это необходимо
        if (jq_colors.data("category") != category_name || jq_colors.data("item_key") != curr_key)
            init_color_for_item(category_name, curr_key);
        // Выьрать и подвсветить выбранный сейчас цвет
        if (this.settings[category_name].with_color && object_fields_to_list(this.settings[category_name].items[curr_key].colors).length > 1) {
            var curr_color = this[category_name + "_color"];
            jq_colors.css("display", "block");
            var jq_all_colors = jq_colors.find(".elem");
            jq_all_colors.removeClass("activated");
            for (var i = 0; i < jq_all_colors.length; i++)
                if ($(jq_all_colors[i]).data("key_color") == curr_color)
                    $(jq_all_colors[i]).addClass("activated");

            // Если данный итем выбран как "в цвет кузова"
            if (this.in_body_color_elems.hasOwnProperty(category_name + "_" + curr_key))
                jq_colors.find(".to-body-color").addClass("activated");
            else
                jq_colors.find(".to-body-color").removeClass("activated");
        }
        else {
            jq_colors.css("display", "none");
        }

    };

    ConstructorCar.prototype.set_body_color = function (category, item_key, need_redraw) {
        var color_key = this.can_body_color(category, item_key);
        if (color_key) {
            this.set_item_color({category: category, item_key: item_key, item_color: color_key, action: true, from_body_color: true, need_redraw: need_redraw});
            return true;
        }
        return false
    };

    ConstructorCar.prototype.can_body_color = function (category, item_key) {
        var b_c = this.body_color.color;
        var settings = this.settings[category].items[item_key];
        for (var color_key in settings.colors)
            if (settings.colors.hasOwnProperty(color_key) && settings.colors[color_key].hasOwnProperty("body_color") && settings.colors[color_key].body_color == b_c)
                return color_key;
        return false;
    };

    ConstructorCar.prototype.refresh_in_body_color = function () {
        var all_items = [];
        for (var key in this.in_body_color_elems)
            all_items.push(this.in_body_color_elems[key]);

        for (var i = 0; i < all_items.length; i++)
            if (this.can_body_color(all_items[i][0], all_items[i][1]))
                this.set_body_color(all_items[i][0], all_items[i][1], false);
    };

    ConstructorCar.prototype.save = function () {
        var car_str = "body_name=" + this.body_name; // body_name=body_name; затем сохраняем все-все объекты и цвета объектов
        // Тонировка и цвет кузова
        var standart_elems_names = ["body_color", "toning"].concat(this.standart_elems_names);

        for (var i = 0; i < standart_elems_names.length; i++) {
            var category = standart_elems_names[i];
            if (category && this[category] != null && this.settings[category])
                for (var key in this.settings[category].items)
                    if (this.settings[category].items[key] == this[category])
                        car_str = car_str + ";" + category + "=" + key;  // "category=key" для стандартных категорий
        }

        for (var i = 0; i < this.colors_elems_names.length; i++) {
            var category = this.colors_elems_names[i];
            if (category && this[category] != null && this[category + "_color"] != null && this.settings[category])
                for (var key in this.settings[category].items)
                    if (this.settings[category].items[key] == this[category])
                        car_str = car_str + ";" + category + "=" + key + ":" + this[category + "_color"];  // "category=key_color" для категорий с цветом
        }

        // Сохранение in_body_color_elems
        var bcs = ";in_body_color_elems=";
        for (var key in this.in_body_color_elems)
            if (this.in_body_color_elems.hasOwnProperty(key))
                bcs = bcs + this.in_body_color_elems[key][0] + ":" + this.in_body_color_elems[key][1] + ',';

        car_str = car_str + bcs;
        return car_str;
    };

    ConstructorCar.prototype.load = function (car_str) {
        // console.log("ConstructorCar.prototype.load", car_str);
        var elems = car_str.split(";");
        if (elems.length < 2) return;
        var body_name_arr = elems.shift().split("=");
        if (body_name_arr[0] != "body_name" || !all_cars.hasOwnProperty(body_name_arr[1])) return;
        var car = new ConstructorCar(body_name_arr[1]);
        for (var i = 0; i < elems.length; i++) {
            var rec_arr = elems[i].split("=");
            var category = rec_arr[0];
            if (rec_arr.length == 2 && car.settings.hasOwnProperty(category)) { // Если это категория = значение
                var rec_color = rec_arr[1].split(":");
                if (rec_color.length == 2) { // если здесь есть цвет
                    var item_key = rec_color[0];
                    var color_key = rec_color[1];
                    if (car.settings[category].items.hasOwnProperty(item_key) && car.settings[category].items[item_key].colors.hasOwnProperty(color_key)){
                        car[category] = car.settings[category].items[item_key];
                        car[category + "_color"] = color_key;
                    }
                }
                else {
                    var item_key = rec_arr[1];
                    if (car.settings[category].items.hasOwnProperty(item_key)){
                        car[category] = car.settings[category].items[item_key];
                    }
                }
            }
        }
        var in_body_color_arr = elems[elems.length - 1].split("=");
        if (in_body_color_arr[0] === "in_body_color_elems" && in_body_color_arr[1]) {
            var pairs_str = in_body_color_arr[1].split(",") || [];
            pairs_str.map(function (curr) {
                var m = curr.split(":");
                if (m.length === 2 && car.settings.hasOwnProperty(m[0]) &&
                    car.settings[m[0]].items.hasOwnProperty(m[1]) && car.settings[m[0]].items[m[1]].need_body_color)
                    car.in_body_color_elems[m[0] + "_" + m[1]] = m;
            })
        }

        return car;
    };

    ConstructorCar.prototype.redraw_header = function () {
        var jq_car_types = $("#constructor-ch-car");
        jq_car_types.empty();
        jq_car_types.text(this.body_name);
    };

    ConstructorCar.prototype.redraw_current_car_color = function (aColor) {
        var color_name = aColor || this.body_color.color;
        // console.log("ConstructorCar.prototype.redraw_current_car_color", color_name);
        var jq_body_colors = $("#constructor-body-color");
        var colors = jq_body_colors.find('.elem');
        colors.removeClass("activated");
        jq_body_colors.find('[data-item_key="' + color_name + '"]').addClass("activated");
    };

    ConstructorCar.prototype.redraw_interface = function (aColor) {
        this.redraw_current_car_color();
        this.redraw_header();
        init_constructor_for_body();
    };

    return ConstructorCar;
})();



// Отрисовка списка доступных машинок (делается 1 раз)
function init_body_cars() {
    var index = 0;
    var car_types = [];
    for (var key in all_cars)
        if (all_cars.hasOwnProperty(key))
            car_types.push(key);

    carImagePreloader.preload_car(
        car_types[0],
        function () {
            main_car = new ConstructorCar(car_types[0]);
            main_car.redraw($("#constructor-view"));
            main_car.redraw_interface();
        });

}

// Отрисовка всех категорий-настроек машинки
function init_constructor_for_body() {
    // console.log("init_constructor_for_body", main_car.settings);
    var car_setting = main_car.settings;
    // Пройти по всем настройкам машинки и установить все категории
    var jq_category_list = $("#constructor-category-list");
    jq_category_list.empty();

    for (var key in car_setting)
        if (key != "body_color" && car_setting.hasOwnProperty(key) && car_setting[key] && car_setting[key].items) {
            var category = car_setting[key];
            jq_category_list.append("<div class='elem' data-car_category_name='" + key + "' onclick='clickCategoryChoice(event, this)'>" + category.name + "</div>");
        }

    // Обновление body_color Делаем отдельно. Обработка кликов на них тоже
    var jq_body_colors = $("#constructor-body-color");
    jq_body_colors.empty();
    for (var key_body_color in car_setting.body_color.items)
        if (car_setting.body_color.items.hasOwnProperty(key_body_color)) {
            var color_rec = car_setting.body_color.items[key_body_color];
            var activated = main_car.body_color == color_rec ? ' activated' : "";
            jq_body_colors.append("<div class='elem" + activated + "' style='background-color: " + color_rec.html_color + "'" +
                " data-category='body_color' data-item_key='" + key_body_color + "' onclick='clickBodyColorChoice(event, this)'></div>");
        }

    jq_category_list.find(".elem")[0].click();
}

// Обработка клика (выбора) категории и отрисовка вариантов выбора в конкретной категории
function clickCategoryChoice(event, elem) {
    //console.log("clickCategoryChoice", event, elem);
    var car_category = $(elem).data("car_category_name");

    // Подсветка текущей категории
    var jq_car_categories = $("#constructor-category-list");
    jq_car_categories.find(".elem").removeClass("activated");
    $(elem).addClass("activated");

    // Отображение элементов данной категории
    var jq_categories_items = $("#constructor-category");
    jq_categories_items.empty();
    var cat_setting = main_car.settings[car_category].items;

    // Отображение кнопки stock
    if(main_car.settings[car_category].stock == null) {
        jq_categories_items.append("<div class='elem null-stock' data-category='" + car_category + "' onclick='clickItemStockChoice(event, this)'>" + main_car.settings[car_category].stock_name + "</div>");
    }

    // Отображенеи всех итемов категории
    for (var key in cat_setting)
        if (cat_setting.hasOwnProperty(key)) {
            jq_categories_items.append("<div class='elem' data-category='" + car_category + "' data-item_key='" + key + "' onclick='clickItemChoice(event, this)'>" + cat_setting[key].name + "</div>");
        }

    main_car.redraw_current_category(car_category);
}

function clickBodyColorChoice(event, elem) {
    // console.log("clickBodyColorChoice");
    var old_state = $(elem).hasClass("activated");
    var item_key = $(elem).data("item_key");
    var category = $(elem).data("category");

    if (!old_state) {
        main_car.set_item({category: category, item_key: item_key, action: true, need_redraw: true});
    }
    else {
        main_car.set_item({category: category, item_key: item_key, action: false, need_redraw: true});
    }

    // Показать какой из цветов выбран
    var jq_body_colors = $("#constructor-body-color");
    jq_body_colors.find('.elem').removeClass("activated");
    $(elem).addClass("activated");

    // Обновить текущую выбранную категорию
    var car_category_name = $("#constructor-category-list").find(".elem.activated").first().data("car_category_name");
    if (car_category_name)
        main_car.redraw_current_category(car_category_name);
}


function init_color_for_item(category, item_key) {
    var jq_colors = $("#constructor-category-color");
    jq_colors.data("category", category);
    jq_colors.data("item_key", item_key);
    if (item_key && main_car.settings[category].with_color && object_fields_to_list(main_car.settings[category].items[item_key].colors).length > 1) {
        // Отобразить все варианты цветов в данной категории
        jq_colors.empty();
        jq_colors.css("display", "block");
        // Отрисовать кнопку "в цвет кузова", если это необходимо
        if (main_car.settings[category].items[item_key].need_body_color && main_car.can_body_color(category, item_key)) {
            jq_colors.append("<div class='to-body-color' data-category='" + category + "' data-item_key='" + item_key + "' onclick='clickToBodyColor(event, this)'>В цвет кузова</div>");
        }

        // Отрисовка всех видов-цветов
        for (var key_color in main_car.settings[category].items[item_key].colors) {
            switch (main_car.settings[category].items[item_key].html_type) {
                case "palette":
                    jq_colors.append("<div class='elem palette' style='background-color: " + main_car.settings[category].items[item_key].colors[key_color].html_color + "'" +
                        "data-category='" + category + "' data-item_key='" + item_key + "'  data-key_color='" + key_color + "' onclick='clickColorItemChoice(event, this)'></div>");
                    break;
                default:
                    jq_colors.append("<div class='elem' data-category='" + category + "' data-item_key='" + item_key + "'  data-key_color='" + key_color + "' onclick='clickColorItemChoice(event, this)'>" + key_color + "</div>");
            }
        }
    }
    else {
        jq_colors.css("display", "none");
    }
}

// Обработка клика по итему их текущей-выбранной категории
function clickItemChoice(event, elem) {
    //console.log("clickItemChoice", event, elem);
    var old_state = $(elem).hasClass("activated");
    var item_key = $(elem).data("item_key");
    var category = $(elem).data("category");

    if (!old_state) {
        main_car.set_item({category: category, item_key: item_key, action: true, need_redraw: true});
        main_car.redraw_current_category(category);
    }
    //else {
    //    main_car.set_item({category: category, item_key: item_key, action: false, need_redraw: true});
    //}
}

// Обработка клика по кнопке, возвращающей текущую категорию в стоковое состояние
function clickItemStockChoice(event, elem) {
    //console.log("clickItemStockChoice", event, elem);
    if ($(elem).hasClass("activated")) return;
    var category = $(elem).data("category");
    var item_key = null;
    var jq_categories_items = $("#constructor-category").find(".elem");
    for (var i = 0; i < jq_categories_items.length; i++)
        if ($(jq_categories_items[i]).hasClass("activated"))
            item_key = $(jq_categories_items[i]).data("item_key");
    main_car.set_item({category: category, item_key: item_key, action: false, need_redraw: true});
}


function clickColorItemChoice(event, elem) {
    var old_state = $(elem).hasClass("activated");
    var item_key = $(elem).data("item_key");
    var category = $(elem).data("category");
    var key_color = $(elem).data("key_color");

    if (!old_state) {
        main_car.set_item_color({category: category, item_key: item_key, item_color: key_color, action: true, need_redraw: true});
    }
    //else {
    //    main_car.set_item_color({category: category, item_key: item_key, item_color: key_color, action: false, need_redraw: true});
    //}
}


function clickToBodyColor(event, elem) {
    var item_key = $(elem).data("item_key");
    var category = $(elem).data("category");
    // Нужно взять текущий body_color и кликнуть на него в списке досупных
    main_car.set_body_color(category, item_key, true);
}


function switchCar(next) {
    var ll = [];
    for (var key in all_cars) ll.push(key);
    var current_index = ll.indexOf(main_car.body_name);
    if (current_index < 0 || current_index >= ll.length) current_index = 0;

    if (next)
        current_index = (current_index + 1) % ll.length;
    else
        if (current_index == 0)
            current_index = ll.length - 1;
        else
            current_index--;

    carImagePreloader.preload_car(
        ll[current_index],
        function () {
            main_car = new ConstructorCar(ll[current_index]);
            main_car.redraw($("#constructor-view"));
            main_car.redraw_interface();
        });

}


window.addEventListener("hashchange", onHashChange, false);

function onHashChange() {
    // console.log("new hash is ", window.location.hash);
    // console.log("new link is ", window.location.href);
    var el = document.getElementById('url');
    if (el) el.value = window.location.href;
}