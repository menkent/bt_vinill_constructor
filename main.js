
var main_car = null;

$(document).ready(function () {
    init_body_cars();
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
        this.back_mirror = null; // Зеркала заднего вида
        this.splitter = null; // сплиттер
        this.rapids = null; // пороги
        this.radiator = null; // radiator
        this.strut = null; // Стойка
        this.visor = null; // Визор
        this.roof = null; // Крыша
        this.eyelashes = null; // Реснички


        //this.standart_elems_names = ["body", "shadow", "back_mirror", "radiator", "strut", "visor", "roof", "eyelashes"];
        //this.colors_elems_names = ["wheels", "rapids", "splitter"];

        this.standart_elems_names = ["body"];
        this.colors_elems_names = [];
        this.in_body_color_elems = {}; // Здесь хранятся пары category / item_key для которых работает функция "в цвет кузова" category_item_key = [category, item_key]

        var categories_list = ["body", "shadow", "back_mirror", "radiator", "strut", "visor", "roof", "eyelashes", "wheels", "rapids", "splitter"];
        for (var i = 0; i < categories_list.length; i++)
            if (this.settings[categories_list[i]])
                if (this.settings[categories_list[i]].with_color)
                    this.colors_elems_names.push(categories_list[i]);
                else
                    this.standart_elems_names.push(categories_list[i]);

        this.set_stock();
        this.redraw($("#constructor-view"));
    }

    ConstructorCar.prototype.set_stock = function () {
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

        if (category == "body_color") // Значит нужно обновить все детали "в цвет кузова"
           this.refresh_in_body_color();

        if (options.need_redraw) {
            this.redraw($("#constructor-view"));
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
        //console.log("ConstructorCar.prototype.redraw");
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
    };

    ConstructorCar.prototype.redraw_current_category = function (category_name) {
        // Подсветка текущего выбранного итема в текущей категории
        var curr_key = null;
        var curr_obj = this[category_name];
        var jq_colors = $("#constructor-category-color");
        if (! curr_obj) {
            $("#constructor-category").find(".elem").removeClass("activated");
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

        var all_elements = $("#constructor-category").find(".elem");
        all_elements.removeClass("activated");
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

        this.redraw($("#constructor-view"));
        this.redraw_current_category("body_color");

    };

    return ConstructorCar;
})();



// Отрисовка списка доступных машинок (делается 1 раз)
function init_body_cars(name) {    
    var index = 0;
    var car_types = [];
    for(var key in all_cars)
        if (all_cars.hasOwnProperty(key))
            car_types.push(key);

    // Очищаем список вариантов машин и загружаем новый
    var jq_car_types = $("#constructor-ch-car").empty();
    for (var i = 0; i < car_types.length ;i++) {
        jq_car_types.append("<div class='elem' data-car_body='" + car_types[i] + "' onclick='clickCarChoice(event, this)'>"
            + car_types[i] + "</div>");
        if (name && name == car_types[i]) index = i;
    }

    // Автоматически выбираем машинку
    jq_car_types.find(".elem")[index].click();
}

// Обработка клика на машинку
function clickCarChoice(event, elem) {
    //console.log("clickBodyChoice", event, elem);
    var car_body = $(elem).data("car_body");

    // Отключаем выделение всех машинок и включаем нужную. Затем готовим конструктор
    var jq_car_types = $("#constructor-ch-car");
    jq_car_types.find(".elem").removeClass("activated");
    $(elem).addClass("activated");

    main_car = new ConstructorCar(car_body);
    init_constructor_for_body(car_body);
}

// Отрисовка всех категорий-настроек машинки
function init_constructor_for_body(car_body) {
    //console.log("init_constructor_for_body", car_body);
    var car_setting = main_car.settings;
    // Пройти по всем настройкам машинки и установить все категории
    var jq_category_list = $("#constructor-category-list");
    jq_category_list.empty();

    for (var key in car_setting)
        if (car_setting.hasOwnProperty(key) && car_setting[key] && car_setting[key].items) {
            var category = car_setting[key];
            jq_category_list.append("<div class='elem' data-car_category_name='" + key + "' onclick='clickCategoryChoice(event, this)'>" + category.name + "</div>");
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

    for (var key in cat_setting)
        if (cat_setting.hasOwnProperty(key)) {
            jq_categories_items.append("<div class='elem' data-category='" + car_category + "' data-item_key='" + key + "' onclick='clickItemChoice(event, this)'>" + cat_setting[key].name + "</div>");
        }

    main_car.redraw_current_category(car_category);

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
    }
    else {
        main_car.set_item({category: category, item_key: item_key, action: false, need_redraw: true});
    }

    main_car.redraw_current_category(category);
}

function clickColorItemChoice(event, elem) {
    var old_state = $(elem).hasClass("activated");
    var item_key = $(elem).data("item_key");
    var category = $(elem).data("category");
    var key_color = $(elem).data("key_color");

    if (!old_state) {
        main_car.set_item_color({category: category, item_key: item_key, item_color: key_color, action: true, need_redraw: true});
    }
    else {
        main_car.set_item_color({category: category, item_key: item_key, item_color: key_color, action: false, need_redraw: true});
    }
}


function clickToBodyColor(event, elem) {
    var item_key = $(elem).data("item_key");
    var category = $(elem).data("category");
    // Нужно взять текущий body_color и кликнуть на него в списке досупных
    main_car.set_body_color(category, item_key, true);
}





