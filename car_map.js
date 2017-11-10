var all_cars = {
    "Octavia RS Mk2": {  // Это все-все настройки одной машинки
        watermark: "images/RS_A5/212_watermark/watermark2.png",
        toning_body_map: { // Здесь идут связки цвета кузова и тонировки! важно совпадение ключей через подчёркивание
            "blue_1": {"img": "images/RS_A5/202_body_tonir/20201.png", "z": 3}, // z - z-index при отрисовке конкретной картинки
            "blue_2": {"img": "images/RS_A5/202_body_tonir/20202.png", "z": 3},
            "blue_3": {"img": "images//RS_A5/202_body_tonir/20203.png", "z": 3},
            "white_1": {"img": "images/RS_A5/202_body_tonir/20211.png", "z": 3},
            "white_2": {"img": "images/RS_A5/202_body_tonir/20212.png", "z": 3},
            "white_3": {"img": "images/RS_A5/202_body_tonir/20213.png", "z": 3},
            "black_1": {"img": "images/RS_A5/202_body_tonir/20221.png", "z": 3},
            "black_2": {"img": "images/RS_A5/202_body_tonir/20222.png", "z": 3},
            "black_3": {"img": "images/RS_A5/202_body_tonir/20223.png", "z": 3},
            "gray_1": {"img": "images/RS_A5/202_body_tonir/20241.png", "z": 3},
            "gray_2": {"img": "images/RS_A5/202_body_tonir/20242.png", "z": 3},
            "gray_3": {"img": "images/RS_A5/202_body_tonir/20243.png", "z": 3},
            "whitesmoke_1": {"img": "images/RS_A5/202_body_tonir/20231.png", "z": 3},
            "whitesmoke_2": {"img": "images/RS_A5/202_body_tonir/20232.png", "z": 3},
            "whitesmoke_3": {"img": "images/RS_A5/202_body_tonir/20233.png", "z": 3},
            "green_1": {"img": "images/RS_A5/202_body_tonir/20251.png", "z": 3},
            "green_2": {"img": "images/RS_A5/202_body_tonir/20252.png", "z": 3},
            "green_3": {"img": "images/RS_A5/202_body_tonir/20253.png", "z": 3},
            "yellow_1": {"img": "images/RS_A5/202_body_tonir/20261.png", "z": 3},
            "yellow_2": {"img": "images/RS_A5/202_body_tonir/20262.png", "z": 3},
            "yellow_3": {"img": "images/RS_A5/202_body_tonir/20263.png", "z": 3},
            "red_1": {"img": "images/RS_A5/202_body_tonir/20271.png", "z": 3},
            "red_2": {"img": "images/RS_A5/202_body_tonir/20272.png", "z": 3},
            "red_3": {"img": "images/RS_A5/202_body_tonir/20273.png", "z": 3},
        },
        categories: { // Категории. Одна категория = одна картинка.
            "body_color": {  // Категория цвета кузова. Здесь нет картинок, так как цвет кузова_тонировка => картинка
                "name": "Цвет кузова", // Название категории
                "stock": "blue", // Если этот параметр задан, то будет установлен по умолчанию при старте
                "items": { // Списко элементом категории - Итемы!
                    "blue": {"html_color": "blue", "name": "Синий", "color": "blue"},  // Color = обязательный параметр, именно он складывается с тонировкой
                    "white": {"html_color": "white", "name": "Белый", "color": "white"},  // html_color - цвет для отрисовки в меню выбора цвета кузова
                    "black": {"html_color": "black", "name": "Чёрный", "color": "black"},
                    "whitesmoke": {"html_color": "whitesmoke", "name": "Гр.белый", "color": "whitesmoke"},
                    "gray": {"html_color": "gray", "name": "Серый", "color": "gray"},
                    "green": {"html_color": "green", "name": "Зелёный", "color": "green"},
                    "yellow": {"html_color": "yellow", "name": "Жёлтый", "color": "yellow"},
                    "red": {"html_color": "red", "name": "Красный", "color": "red"},
                }
            },
            
			"shadow": {  // Категория тени под машинкой
                "name": "Тень",
                "stock": null, // Если сток не указан, значит по умолчанию не будет никакой картинки
                "stock_name": "Без", // Имя кнопки - Сток в списке итемов, указывается только когда stock = null
                "items": {
                    "200": {"name": "Тип 1", "img": "images/RS_A5/200_shadow/200.png", "z": 1}  // z-index при отрисовке конкретной картинки
                }
            },
			
			"toning": {  // Категория типа тонировки. Здесь нет картинок, так как цвет кузова_тонировка => картинка
                "name": "Тонер",
                "stock": "1",  // По-умолчанию нет тонировки
                "items": {
                    "1": {"name": "Без", "type": 1},  // Отсутствие тонировки
                    "2": {"name": "Полу", "type": 2},
                    "3": {"name": "Полная", "type": 3}
                }
            },

         
            "wheels": {  // Категория колёс
                "with_color": true, // Значит есть третья строка выбора цвета (не в прямом смысле цвета колеса, а возможно варианта окраски)
                "name": "Диски",
                "stock": "20100",
                "items": {
                    "20100": {
                        "name": "Тип 1",
                        "def_color": "color1",  // Этот параметр говорит о типе (цвете) колеса по-умолчанию
                        "colors": {
                            "color1": {"img": "images/RS_A5/201_wheels/20100.png", "z": 2},
                        }
                    },
                    "20101": {
                        "name": "Тип 2",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5/201_wheels/20101.png", "z": 2},
                            "color2": {"img": "images/RS_A5/201_wheels/20102.png", "z": 2},
                            "color3": {"img": "images/RS_A5/201_wheels/20103.png", "z": 2},
                        }
                    },
                    "20104": {
                        "name": "Тип 3",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5/201_wheels/20104.png", "z": 2},
                            "color2": {"img": "images/RS_A5/201_wheels/20105.png", "z": 2},
                            "color3": {"img": "images/RS_A5/201_wheels/20106.png", "z": 2},
                        }
                    },
                    "20107": {
                        "name": "Тип 4",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5/201_wheels/20107.png", "z": 2},
                            "color2": {"img": "images/RS_A5/201_wheels/20108.png", "z": 2},
                            "color3": {"img": "images/RS_A5/201_wheels/20109.png", "z": 2},
                        }
                    },
                    "20110": {
                        "name": "Тип 5",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5/201_wheels/20110.png", "z": 2},
                            "color2": {"img": "images/RS_A5/201_wheels/20111.png", "z": 2},
                            "color3": {"img": "images/RS_A5/201_wheels/20112.png", "z": 2},
                            "color4": {"img": "images/RS_A5/201_wheels/20113.png", "z": 2},
                            "color5": {"img": "images/RS_A5/201_wheels/20114.png", "z": 2},
                            "color6": {"img": "images/RS_A5/201_wheels/20115.png", "z": 2},
                        }
                    },
                    "20116": {
                        "name": "Тип 6",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5/201_wheels/20116.png", "z": 2},
                            "color2": {"img": "images/RS_A5/201_wheels/20117.png", "z": 2},
                        }
                    },
                    "20118": {
                        "name": "Тип 7",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5/201_wheels/20118.png", "z": 2},
                            "color2": {"img": "images/RS_A5/201_wheels/20119.png", "z": 2},
                        }
                    },
                }
            },

			 "radiator": {
                "name": "Рамка",
                "stock": null,
                "stock_name": "Сток",
                "with_color": true,
                "items": {
                    "ttt1": {
                        "name": "Тип 1",
                        "def_color": "color1",
                        "need_body_color": true,
                        "html_type": "palette",
                        "colors": {
                            "20701": {"html_color": "blue", "img": "images/RS_A5/207_radiator/20701.png", "z": 7, "body_color": "blue"},
                            "20711": {"html_color": "white", "img": "images/RS_A5/207_radiator/20711.png", "z": 7, "body_color": "white"},
                            "20721": {"html_color": "black", "img": "images/RS_A5/207_radiator/20721.png", "z": 7, "body_color": "black"},
                            "20731": {"html_color": "whitesmoke", "img": "images/RS_A5/207_radiator/20731.png", "z": 7, "body_color": "whitesmoke"},
                            "20741": {"html_color": "gray", "img": "images/RS_A5/207_radiator/20741.png", "z": 7, "body_color": "gray"},
                            "20751": {"html_color": "green", "img": "images/RS_A5/207_radiator/20751.png", "z": 7, "body_color": "green"},
                            "20761": {"html_color": "yellow", "img": "images/RS_A5/207_radiator/20761.png", "z": 7, "body_color": "yellow"},
                            "20771": {"html_color": "red", "img": "images/RS_A5/207_radiator/20771.png", "z": 7, "body_color": "red"},
                            "20781": {"html_color": "black", "img": "images/RS_A5/207_radiator/20781.png", "z": 7, "body_color": "black"},
                        },
                    }
                }
            },
			
			"eyelashes": {
                "name": "Ресницы",
                "stock": null,
                "stock_name": "Без",
                "with_color": true,
                "items": {
                    "ttt1": {
                        "name": "Тип 1",
                        "def_color": "color1",
                        "need_body_color": true,
                        "html_type": "palette",
                        "colors": {
                            "21101": {"html_color": "blue", "img": "images/RS_A5/211_eyelashes/21101.png", "z": 11, "body_color": "blue"},
                            "21111": {"html_color": "white", "img": "images/RS_A5/211_eyelashes/21111.png", "z": 11, "body_color": "white"},
                            "21121": {"html_color": "black", "img": "images/RS_A5/211_eyelashes/21121.png", "z": 11, "body_color": "black"},
                            "21131": {"html_color": "whitesmoke", "img": "images/RS_A5/211_eyelashes/21131.png", "z": 11, "body_color": "whitesmoke"},
                            "21141": {"html_color": "gray", "img": "images/RS_A5/211_eyelashes/21141.png", "z": 11, "body_color": "gray"},
                            "21151": {"html_color": "green", "img": "images/RS_A5/211_eyelashes/21151.png", "z": 11, "body_color": "green"},
                            "21161": {"html_color": "yellow", "img": "images/RS_A5/211_eyelashes/21161.png", "z": 11, "body_color": "yellow"},
                            "21171": {"html_color": "red", "img": "images/RS_A5/211_eyelashes/21171.png", "z": 11, "body_color": "red"},
                        },
                    }
                }
            },
			
			"splitter": {
                "with_color": true,
                "stock": null,
                "stock_name": "Без",
                "name": "Сплиттер",
                "items": {
                    "type_1": {
                        "name": "Тип 1",
                        "def_color": "color1",
                        "need_body_color": true,
                        "html_type": "palette",
                        "colors": {
                            "color1": {"html_color": "blue", "img": "images/RS_A5/203_splitter/20301.png", "z": 4, "body_color": "blue"},
                            "color2": {"html_color": "white", "img": "images/RS_A5/203_splitter/20311.png", "z": 4, "body_color": "white"},
                            "color3": {"html_color": "black", "img": "images/RS_A5/203_splitter/20321.png", "z": 4, "body_color": "black"},
                            "color4": {"html_color": "whitesmoke", "img": "images/RS_A5/203_splitter/20331.png", "z": 4, "body_color": "whitesmoke"},
                            "color5": {"html_color": "gray", "img": "images/RS_A5/203_splitter/20341.png", "z": 4, "body_color": "gray"},
                            "color6": {"html_color": "green", "img": "images/RS_A5/203_splitter/20351.png", "z": 4, "body_color": "green"},
                            "color7": {"html_color": "yellow", "img": "images/RS_A5/203_splitter/20361.png", "z": 4, "body_color": "yellow"},
                            "color8": {"html_color": "red", "img": "images/RS_A5/203_splitter/20371.png", "z": 4, "body_color": "red"},
                        }
                    },
                    "type_2": {
                        "name": "Тип 2",
                        "def_color": "color1",
                        "need_body_color": true,
                        "html_type": "palette",
                        "colors": {
                            "color1": {"html_color": "blue", "img": "images/RS_A5/203_splitter/20302.png", "z": 4, "body_color": "blue"},
                            "color2": {"html_color": "white", "img": "images/RS_A5/203_splitter/20312.png", "z": 4, "body_color": "white"},
                            "color3": {"html_color": "black", "img": "images/RS_A5/203_splitter/20322.png", "z": 4, "body_color": "black"},
                            "color4": {"html_color": "whitesmoke", "img": "images/RS_A5/203_splitter/20332.png", "z": 4, "body_color": "whitesmoke"},
                            "color5": {"html_color": "gray", "img": "images/RS_A5/203_splitter/20342.png", "z": 4, "body_color": "gray"},
                            "color6": {"html_color": "green", "img": "images/RS_A5/203_splitter/20352.png", "z": 4, "body_color": "green"},
                            "color7": {"html_color": "yellow", "img": "images/RS_A5/203_splitter/20362.png", "z": 4, "body_color": "yellow"},
                            "color8": {"html_color": "red", "img": "images/RS_A5/203_splitter/20372.png", "z": 4, "body_color": "red"},
                        }
                    },
                },
            },
			
            "rapids": {
                "with_color": true,
                "stock": null,
                "stock_name": "Без",
                "name": "Пороги",
                "items": {
                    "204": {
                        "name": "Тип 1",
                        "def_color": "color1",   // Этот параметр говорит о типе (цвете) порога по-умолчанию
                        "need_body_color": true,  // Этот параметр говорит, что при выборе данного Итема, сначала будет искаться цвет в цвет кузова
                        "html_type": "palette", // Значит отображение третьего ряда будет в виде палитры, используя html_color поле
                        "colors": {
                            "color1": {"html_color": "blue", "img": "images/RS_A5/204_rapids/20401.png", "z": 4, "body_color": "blue"}, // html_color - каким цветом будет нарисован квадратик в палитре - можно юзать через #XXXXXX или rgb()
                            "color2": {"html_color": "white", "img": "images/RS_A5/204_rapids/20411.png", "z": 4, "body_color": "white"}, // body_color - какой ключ будет взят из вариантов выбора цвета кузова при нажатии на "в цвет кузова"
                            "color3": {"html_color": "black", "img": "images/RS_A5/204_rapids/20421.png", "z": 4, "body_color": "black"},
                            "color4": {"html_color": "whitesmoke", "img": "images/RS_A5/204_rapids/20431.png", "z": 4, "body_color": "whitesmoke"},
                            "color5": {"html_color": "gray", "img": "images/RS_A5/204_rapids/20441.png", "z": 4, "body_color": "gray"},
                            "color6": {"html_color": "green", "img": "images/RS_A5/204_rapids/20451.png", "z": 4, "body_color": "green"},
                            "color7": {"html_color": "yellow", "img": "images/RS_A5/204_rapids/20461.png", "z": 4, "body_color": "yellow"},
                            "color8": {"html_color": "red", "img": "images/RS_A5/204_rapids/20471.png", "z": 4, "body_color": "red"},
                        }
                    },
                },
            },

                 
            "back_mirrors": {  // Категория зеркал заднего вида
                "name": "Зеркала",
                "stock": null,
                "stock_name": "Сток",
                "items": {
                    "20621": {"name": "Тип 1", "img": "images/RS_A5/206_back_mirrors/20621.png", "z": 6},
                    "20622": {"name": "Тип 2", "img": "images/RS_A5/206_back_mirrors/20622.png", "z": 6}
                }
            },

            "strut": {  // Категория стоек
                "name": "Стойка",
                "stock": null,
                "stock_name": "Сток",
                "items": {
                    "20821": {"name": "Тип 1", "img": "images/RS_A5/208_strut/20821.png", "z": 8},
                }
            },

            "visor": {
                "name": "Козырек",
                "stock": null,
                "stock_name": "Без",
                "with_color": true,
                "items": {
                    "ttt1": {
                        "name": "Тип 1",
                        "def_color": "color1",
                        "need_body_color": true,
                        "html_type": "palette",
                        "colors": {
                            "20901": {"html_color": "blue", "img": "images/RS_A5/209_visor/20901.png", "z": 9, "body_color": "blue"},
                            "20911": {"html_color": "white", "img": "images/RS_A5/209_visor/20911.png", "z": 9, "body_color": "white"},
                            "20921": {"html_color": "black", "img": "images/RS_A5/209_visor/20921.png", "z": 9, "body_color": "black"},
                            "20931": {"html_color": "whitesmoke", "img": "images/RS_A5/209_visor/20931.png", "z": 9, "body_color": "whitesmoke"},
                            "20941": {"html_color": "gray", "img": "images/RS_A5/209_visor/20941.png", "z": 9, "body_color": "gray"},
                            "20951": {"html_color": "green", "img": "images/RS_A5/209_visor/20951.png", "z": 9, "body_color": "green"},
                            "20961": {"html_color": "yellow", "img": "images/RS_A5/209_visor/20961.png", "z": 9, "body_color": "yellow"},
                            "20971": {"html_color": "red", "img": "images/RS_A5/209_visor/20971.png", "z": 9, "body_color": "red"},
                        },
                    }
                }
            },

            "roof": {
                "name": "Крыша",
                "stock": null,
                "stock_name": "Сток",
                "items": {
                    "21021": {"name": "Тип 1", "img": "images/RS_A5/210_roof/21021.png", "z": 10},
                }
            }
            
        },
    },


    "Octavia RS Mk2 FL": {
        watermark: "images/RS_A5FL/112_watermark/watermark.png",
        toning_body_map: {
            "blue_1": {"img": "images/RS_A5FL/102_body_tonir/10201.png", "z": 3}, // z - z-index при отрисовке конкретной картинки
            "blue_2": {"img": "images/RS_A5FL/102_body_tonir/10202.png", "z": 3},
            "blue_3": {"img": "images/RS_A5FL/102_body_tonir/10203.png", "z": 3},
            "white_1": {"img": "images/RS_A5FL/102_body_tonir/10211.png", "z": 3},
            "white_2": {"img": "images/RS_A5FL/102_body_tonir/10212.png", "z": 3},
            "white_3": {"img": "images/RS_A5FL/102_body_tonir/10213.png", "z": 3},
            "black_1": {"img": "images/RS_A5FL/102_body_tonir/10221.png", "z": 3},
            "black_2": {"img": "images/RS_A5FL/102_body_tonir/10222.png", "z": 3},
            "black_3": {"img": "images/RS_A5FL/102_body_tonir/10223.png", "z": 3},
            "gray_1": {"img": "images/RS_A5FL/102_body_tonir/10241.png", "z": 3},
            "gray_2": {"img": "images/RS_A5FL/102_body_tonir/10242.png", "z": 3},
            "gray_3": {"img": "images/RS_A5FL/102_body_tonir/10243.png", "z": 3},
            "whitesmoke_1": {"img": "images/RS_A5FL/102_body_tonir/10231.png", "z": 3},
            "whitesmoke_2": {"img": "images/RS_A5FL/102_body_tonir/10232.png", "z": 3},
            "whitesmoke_3": {"img": "images/RS_A5FL/102_body_tonir/10233.png", "z": 3},
            "green_1": {"img": "images/RS_A5FL/102_body_tonir/10251.png", "z": 3},
            "green_2": {"img": "images/RS_A5FL/102_body_tonir/10252.png", "z": 3},
            "green_3": {"img": "images/RS_A5FL/102_body_tonir/10253.png", "z": 3},
            "yellow_1": {"img": "images/RS_A5FL/102_body_tonir/10261.png", "z": 3},
            "yellow_2": {"img": "images/RS_A5FL/102_body_tonir/10262.png", "z": 3},
            "yellow_3": {"img": "images/RS_A5FL/102_body_tonir/10263.png", "z": 3},
            "red_1": {"img": "images/RS_A5FL/102_body_tonir/10271.png", "z": 3},
            "red_2": {"img": "images/RS_A5FL/102_body_tonir/10272.png", "z": 3},
            "red_3": {"img": "images/RS_A5FL/102_body_tonir/10273.png", "z": 3},
        },
       categories: { // Категории. Одна категория = одна картинка.
            "body_color": {  // Категория цвета кузова. Здесь нет картинок, так как цвет кузова_тонировка => картинка
                "name": "Цвет кузова", // Название категории
                "stock": "blue", // Если этот параметр задан, то будет установлен по умолчанию при старте
                "items": { // Списко элементом категории - Итемы!
                    "blue": {"html_color": "blue", "name": "Синий", "color": "blue"},  // Color = обязательный параметр, именно он складывается с тонировкой
                    "white": {"html_color": "white", "name": "Белый", "color": "white"},  // html_color - цвет для отрисовки в меню выбора цвета кузова
                    "black": {"html_color": "black", "name": "Чёрный", "color": "black"},
                    "whitesmoke": {"html_color": "whitesmoke", "name": "Гр.белый", "color": "whitesmoke"},
                    "gray": {"html_color": "gray", "name": "Серый", "color": "gray"},
                    "green": {"html_color": "green", "name": "Зелёный", "color": "green"},
                    "yellow": {"html_color": "yellow", "name": "Жёлтый", "color": "yellow"},
                    "red": {"html_color": "red", "name": "Красный", "color": "red"},
                }
            },
            
			"shadow": {  // Категория тени под машинкой
                "name": "Тень",
                "stock": null, // Если сток не указан, значит по умолчанию не будет никакой картинки
                "stock_name": "Без",
                "items": {
                    "100": {"name": "Тип 1", "img": "images/RS_A5FL/100_shadow/1001.png", "z": 1}  // z-index при отрисовке конкретной картинки
                }
            },
			
			"toning": {  // Категория типа тонировки. Здесь нет картинок, так как цвет кузова_тонировка => картинка
                "name": "Тонер",
                "stock": "1",  // По-умолчанию нет тонировки
                "items": {
                    "1": {"name": "Без", "type": 1},  // Отсутствие тонировки
                    "2": {"name": "Полу", "type": 2},
                    "3": {"name": "Полная", "type": 3}
                }
            },

           
            "wheels": {  // Категория колёс
                "with_color": true, // Значит есть третья строка выбора цвета (не в прямом смысле цвета колеса, а возможно варианта окраски)
                "name": "Диски",
                "stock": "10100",
                "items": {
                    "10100": {
                        "name": "Тип 1",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5FL/101_wheels/10100.png", "z": 2},
                            "color2": {"img": "images/RS_A5FL/101_wheels/10101.png", "z": 2},
                            "color3": {"img": "images/RS_A5FL/101_wheels/10102.png", "z": 2},
                        }
                    },
					"10103": {
                        "name": "Тип 2",
                        "def_color": "color1",  // Этот параметр говорит о типе (цвете) колеса по-умолчанию
                        "colors": {
                            "color1": {"img": "images/RS_A5FL/101_wheels/10103.png", "z": 2},
                        }
                    },
                    "10104": {
                        "name": "Тип 3",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5FL/101_wheels/10104.png", "z": 2},
                            "color2": {"img": "images/RS_A5FL/101_wheels/10105.png", "z": 2},
                            "color3": {"img": "images/RS_A5FL/101_wheels/10106.png", "z": 2},
                        }
                    },
                    "10107": {
                        "name": "Тип 4",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5FL/101_wheels/10107.png", "z": 2},
                            "color2": {"img": "images/RS_A5FL/101_wheels/10108.png", "z": 2},
                            "color3": {"img": "images/RS_A5FL/101_wheels/10109.png", "z": 2},
                        }
                    },
                    "10110": {
                        "name": "Тип 5",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5FL/101_wheels/10110.png", "z": 2},
                            "color2": {"img": "images/RS_A5FL/101_wheels/10111.png", "z": 2},
                            "color3": {"img": "images/RS_A5FL/101_wheels/10112.png", "z": 2},
                            "color4": {"img": "images/RS_A5FL/101_wheels/10113.png", "z": 2},
                            "color5": {"img": "images/RS_A5FL/101_wheels/10114.png", "z": 2},
                            "color6": {"img": "images/RS_A5FL/101_wheels/10115.png", "z": 2},
                        }
                    },
                    "10116": {
                        "name": "Тип 6",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5FL/101_wheels/10116.png", "z": 2},
                            "color2": {"img": "images/RS_A5FL/101_wheels/10117.png", "z": 2},
                        }
                    },
                    "10118": {
                        "name": "Тип 7",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5FL/101_wheels/10118.png", "z": 2},
                            "color2": {"img": "images/RS_A5FL/101_wheels/10119.png", "z": 2},
                        }
                    },
                }
            },
			
			"radiator": {
                "name": "Рамка",
                "stock": null,
                "stock_name": "Сток",
                "with_color": true,
                "items": {
                    "ttt1t": {
                        "name": "Тип 1",
                        "def_color": "color1",
                        "need_body_color": true,
                        "html_type": "palette",
                        "colors": {
                            "10701": {"html_color": "blue", "img": "images/RS_A5FL/107_radiator/10701.png", "z": 7, "body_color": "blue"},
                            "10711": {"html_color": "white", "img": "images/RS_A5FL/107_radiator/10711.png", "z": 7, "body_color": "white"},
                            "10721": {"html_color": "black", "img": "images/RS_A5FL/107_radiator/10721.png", "z": 7, "body_color": "black"},
                            "10731": {"html_color": "whitesmoke", "img": "images/RS_A5FL/107_radiator/10731.png", "z": 7, "body_color": "whitesmoke"},
                            "10741": {"html_color": "gray", "img": "images/RS_A5FL/107_radiator/10741.png", "z": 7, "body_color": "gray"},
                            "10751": {"html_color": "green", "img": "images/RS_A5FL/107_radiator/10751.png", "z": 7, "body_color": "green"},
                            "10761": {"html_color": "yellow", "img": "images/RS_A5FL/107_radiator/10761.png", "z": 7, "body_color": "yellow"},
                            "10771": {"html_color": "red", "img": "images/RS_A5FL/107_radiator/10771.png", "z": 7, "body_color": "red"},
                            "10781": {"html_color": "black", "img": "images/RS_A5FL/107_radiator/10781.png", "z": 7, "body_color": "black"},
                        }
                    },
                }
            },
			
			"logo": {
                "name": "Лого",
                "stock": null,
                "stock_name": "Сток",
                "items": {
                      "10901": {"name": "Тип 1", "img": "images/RS_A5FL/109_visor/10901.png", "z": 9},
                }
            },
			    
			"eyelashes": {
                "name": "Ресницы",
                "stock": null,
                "stock_name": "Без",
                "with_color": true,
                "items": {
                    "ttt_1": {
                        "name": "Тип 1",
                        "def_color": "color1",
                        "need_body_color": true,
                        "html_type": "palette",
                        "colors": {
                            "11101": {"html_color": "blue", "img": "images/RS_A5FL/111_eyelashes/11101.png", "z": 11, "body_color": "blue"},
                            "11111": {"html_color": "white", "img": "images/RS_A5FL/111_eyelashes/11111.png", "z": 11, "body_color": "white"},
                            "11121": {"html_color": "black", "img": "images/RS_A5FL/111_eyelashes/11121.png", "z": 11, "body_color": "black"},
                            "11131": {"html_color": "whitesmoke", "img": "images/RS_A5FL/111_eyelashes/11131.png", "z": 11, "body_color": "whitesmoke"},
                            "11141": {"html_color": "gray", "img": "images/RS_A5FL/111_eyelashes/11141.png", "z": 11, "body_color": "gray"},
                            "11151": {"html_color": "green", "img": "images/RS_A5FL/111_eyelashes/11151.png", "z": 11, "body_color": "green"},
                            "11161": {"html_color": "yellow", "img": "images/RS_A5FL/111_eyelashes/11161.png", "z": 11, "body_color": "yellow"},
                            "11171": {"html_color": "red", "img": "images/RS_A5FL/111_eyelashes/11171.png", "z": 11, "body_color": "red"},
                        }
                    },
                     "ttt_2": {
                        "name": "Тип 2",
                        "def_color": "color1",
                        "need_body_color": true,
                        "html_type": "palette",
                        "colors": {
                            "11102": {"html_color": "blue", "img": "images/RS_A5FL/111_eyelashes/11102.png", "z": 11, "body_color": "blue"},
                            "11112": {"html_color": "white", "img": "images/RS_A5FL/111_eyelashes/11112.png", "z": 11, "body_color": "white"},
                            "11122": {"html_color": "black", "img": "images/RS_A5FL/111_eyelashes/11122.png", "z": 11, "body_color": "black"},
                            "11132": {"html_color": "whitesmoke", "img": "images/RS_A5FL/111_eyelashes/11132.png", "z": 11, "body_color": "whitesmoke"},
                            "11142": {"html_color": "gray", "img": "images/RS_A5FL/111_eyelashes/11142.png", "z": 11, "body_color": "gray"},
                            "11152": {"html_color": "green", "img": "images/RS_A5FL/111_eyelashes/11152.png", "z": 11, "body_color": "green"},
                            "11162": {"html_color": "yellow", "img": "images/RS_A5FL/111_eyelashes/11162.png", "z": 11, "body_color": "yellow"},
                            "11172": {"html_color": "red", "img": "images/RS_A5FL/111_eyelashes/11172.png", "z": 11, "body_color": "red"},
                        }
                    },
				}
            },
			
			"splitter": {
                "with_color": true,
                "stock": null,
                "stock_name": "Без",
                "name": "Сплиттер",
                "items": {
                    "type_1_1": {
                        "name": "Тип 1",
                        "def_color": "color1",
                        "need_body_color": true,
                        "html_type": "palette",
                        "colors": {
                            "color1": {"html_color": "blue", "img": "images/RS_A5FL/103_splitter/10301.png", "z": 4, "body_color": "blue"},
                            "color2": {"html_color": "white", "img": "images/RS_A5FL/103_splitter/10311.png", "z": 4, "body_color": "white"},
                            "color3": {"html_color": "black", "img": "images/RS_A5FL/103_splitter/10321.png", "z": 4, "body_color": "black"},
                            "color4": {"html_color": "whitesmoke", "img": "images/RS_A5FL/103_splitter/10331.png", "z": 4, "body_color": "whitesmoke"},
                            "color5": {"html_color": "gray", "img": "images/RS_A5FL/103_splitter/10341.png", "z": 4, "body_color": "gray"},
                            "color6": {"html_color": "green", "img": "images/RS_A5FL/103_splitter/10351.png", "z": 4, "body_color": "green"},
                            "color7": {"html_color": "yellow", "img": "images/RS_A5FL/103_splitter/10361.png", "z": 4, "body_color": "yellow"},
                            "color8": {"html_color": "red", "img": "images/RS_A5FL/103_splitter/10371.png", "z": 4, "body_color": "red"},
                        }
                    },
                }
            },

            "rapids": {
                "with_color": true,
                "stock": null,
                "stock_name": "Без",
                "name": "Пороги",
                "items": {
                    "type_11": {
                        "name": "Тип 1",
                        "def_color": "color1",   // Этот параметр говорит о типе (цвете) порога по-умолчанию
                        "need_body_color": true,  // Этот параметр говорит, что при выборе данного Итема, сначала будет искаться цвет в цвет кузова
                        "html_type": "palette", // Значит отображение третьего ряда будет в виде палитры, используя html_color поле
                        "colors": {
                            "color1": {"html_color": "blue", "img": "images/RS_A5FL/104_rapids/10401.png", "z": 4, "body_color": "blue"}, // html_color - каким цветом будет нарисован квадратик в палитре - можно юзать через #XXXXXX или rgb()
                            "color2": {"html_color": "white", "img": "images/RS_A5FL/104_rapids/10411.png", "z": 4, "body_color": "white"}, // body_color - какой ключ будет взят из вариантов выбора цвета кузова при нажатии на "в цвет кузова"
                            "color3": {"html_color": "black", "img": "images/RS_A5FL/104_rapids/10421.png", "z": 4, "body_color": "black"},
                            "color4": {"html_color": "whitesmoke", "img": "images/RS_A5FL/104_rapids/10431.png", "z": 4, "body_color": "whitesmoke"},
                            "color5": {"html_color": "gray", "img": "images/RS_A5FL/104_rapids/10441.png", "z": 4, "body_color": "gray"},
                            "color6": {"html_color": "green", "img": "images/RS_A5FL/104_rapids/10451.png", "z": 4, "body_color": "green"},
                            "color7": {"html_color": "yellow", "img": "images/RS_A5FL/104_rapids/10461.png", "z": 4, "body_color": "yellow"},
                            "color8": {"html_color": "red", "img": "images/RS_A5FL/104_rapids/10471.png", "z": 4, "body_color": "red"},
                        }
                    },
					"type_21": {
						"name": "Тип 2",
                        "def_color": "color1",   // Этот параметр говорит о типе (цвете) порога по-умолчанию
                        "need_body_color": true,  // Этот параметр говорит, что при выборе данного Итема, сначала будет искаться цвет в цвет кузова
                        "html_type": "palette", // Значит отображение третьего ряда будет в виде палитры, используя html_color поле
                        "colors": {
                            "color1": {"html_color": "blue", "img": "images/RS_A5FL/104_rapids/10402.png", "z": 4, "body_color": "blue"}, // html_color - каким цветом будет нарисован квадратик в палитре - можно юзать через #XXXXXX или rgb()
                            "color2": {"html_color": "white", "img": "images/RS_A5FL/104_rapids/10412.png", "z": 4, "body_color": "white"}, // body_color - какой ключ будет взят из вариантов выбора цвета кузова при нажатии на "в цвет кузова"
                            "color3": {"html_color": "black", "img": "images/RS_A5FL/104_rapids/10422.png", "z": 4, "body_color": "black"},
                            "color4": {"html_color": "whitesmoke", "img": "images/RS_A5FL/104_rapids/10432.png", "z": 4, "body_color": "whitesmoke"},
                            "color5": {"html_color": "gray", "img": "images/RS_A5FL/104_rapids/10442.png", "z": 4, "body_color": "gray"},
                            "color6": {"html_color": "green", "img": "images/RS_A5FL/104_rapids/10452.png", "z": 4, "body_color": "green"},
                            "color7": {"html_color": "yellow", "img": "images/RS_A5FL/104_rapids/10462.png", "z": 4, "body_color": "yellow"},
                            "color8": {"html_color": "red", "img": "images/RS_A5FL/104_rapids/10472.png", "z": 4, "body_color": "red"},
                        }
                    },				
				}
            },

                        
            "back_mirrors": {  // Категория зеркал заднего вида
                "name": "Зеркала",
                "stock": null,
                "stock_name": "Сток",
                "items": {
                    "10621": {"name": "Тип 1", "img": "images/RS_A5FL/106_back_mirrors/10621.png", "z": 6},
                    "10622": {"name": "Тип 2", "img": "images/RS_A5FL/106_back_mirrors/10622.png", "z": 6}
                }
            },

            "strut": {  // Категория стоек
                "name": "Стойка",
                "stock": null,
                "stock_name": "Сток",
                "items": {
                    "10821": {"name": "Тип 1", "img": "images/RS_A5FL/108_strut/10821.png", "z": 8},
                }
            },

           
            "roof": {
                "name": "Крыша",
                "stock": null,
                "stock_name": "Сток",
                "items": {
                    "11021": {"name": "Тип 1", "img": "images/RS_A5FL/110_roof/11021.png", "z": 10},
                }
            }
     
        },
    },
	"Octavia RS Mk3": {
        watermark: "images/RS_A7/312_whatermark/whatermark3.png",
        toning_body_map: {
            "black_1": {"img": "images/RS_A7/302_body_tonir/302001.png", "z": 3}, // z - z-index при отрисовке конкретной картинки
            "black_2": {"img": "images/RS_A7/302_body_tonir/302002.png", "z": 3},
            "black_3": {"img": "images/RS_A7/302_body_tonir/302003.png", "z": 3},
            "silver_1": {"img": "images/RS_A7/302_body_tonir/302011.png", "z": 3},
            "silver_2": {"img": "images/RS_A7/302_body_tonir/302012.png", "z": 3},
            "silver_3": {"img": "images/RS_A7/302_body_tonir/302013.png", "z": 3},
            "moonwhite_1": {"img": "images/RS_A7/302_body_tonir/302021.png", "z": 3},
            "moonwhite_2": {"img": "images/RS_A7/302_body_tonir/302022.png", "z": 3},
            "moonwhite_3": {"img": "images/RS_A7/302_body_tonir/302023.png", "z": 3},
            "candywhite_1": {"img": "images/RS_A7/302_body_tonir/302031.png", "z": 3},
            "candywhite_2": {"img": "images/RS_A7/302_body_tonir/302032.png", "z": 3},
            "candywhite_3": {"img": "images/RS_A7/302_body_tonir/302033.png", "z": 3},
            "steelgrey_1": {"img": "images/RS_A7/302_body_tonir/302041.png", "z": 3},
            "steelgrey_2": {"img": "images/RS_A7/302_body_tonir/302042.png", "z": 3},
            "steelgrey_3": {"img": "images/RS_A7/302_body_tonir/302043.png", "z": 3},
            "meteorgrey_1": {"img": "images/RS_A7/302_body_tonir/302051.png", "z": 3},
            "meteorgrey_2": {"img": "images/RS_A7/302_body_tonir/302052.png", "z": 3},
            "meteorgrey_3": {"img": "images/RS_A7/302_body_tonir/302053.png", "z": 3},
            "metalgrey_1": {"img": "images/RS_A7/302_body_tonir/302061.png", "z": 3},
            "metalgrey_2": {"img": "images/RS_A7/302_body_tonir/302062.png", "z": 3},
            "metalgrey_3": {"img": "images/RS_A7/302_body_tonir/302063.png", "z": 3},
			"raceblue_1": {"img": "images/RS_A7/302_body_tonir/302071.png", "z": 3},
            "raceblue_2": {"img": "images/RS_A7/302_body_tonir/302072.png", "z": 3},
            "raceblue_3": {"img": "images/RS_A7/302_body_tonir/302073.png", "z": 3},
            "rallyegreen_1": {"img": "images/RS_A7/302_body_tonir/302081.png", "z": 3},
            "rallyegreen_2": {"img": "images/RS_A7/302_body_tonir/302082.png", "z": 3},
            "rallyegreen_3": {"img": "images/RS_A7/302_body_tonir/302083.png", "z": 3},
            "sprintyellow_1": {"img": "images/RS_A7/302_body_tonir/302091.png", "z": 3},
            "sprintyellow_2": {"img": "images/RS_A7/302_body_tonir/302092.png", "z": 3},
            "sprintyellow_3": {"img": "images/RS_A7/302_body_tonir/302093.png", "z": 3},
            "corridared_1": {"img": "images/RS_A7/302_body_tonir/302101.png", "z": 3},
            "corridared_2": {"img": "images/RS_A7/302_body_tonir/302102.png", "z": 3},
            "corridared_3": {"img": "images/RS_A7/302_body_tonir/302103.png", "z": 3},
            "riored_1": {"img": "images/RS_A7/302_body_tonir/302111.png", "z": 3},
            "riored_2": {"img": "images/RS_A7/302_body_tonir/302112.png", "z": 3},
            "riored_3": {"img": "images/RS_A7/302_body_tonir/302113.png", "z": 3},
        },
       categories: { // Категории. Одна категория = одна картинка.
            "body_color": {  // Категория цвета кузова. Здесь нет картинок, так как цвет кузова_тонировка => картинка
                "name": "Цвет кузова", // Название категории
                "stock": "corridared", // Если этот параметр задан, то будет установлен по умолчанию при старте
                "items": { // Списко элементом категории - Итемы!
                    "black": {"html_color": "#171717", "name": "Черный", "color": "black"},
					"silver": {"html_color": "#c5c5c5", "name": "Серебристый", "color": "silver"},
					"moonwhite": {"html_color": "#eff0f1", "name": "Белый Мун", "color": "moonwhite"},
					"candywhite": {"html_color": "#e8e8d4", "name": "Белый Кэнди", "color": "candywhite"},
					"steelgrey": {"html_color": "#626964", "name": "Серый", "color": "steelgrey"},
					"meteorgrey": {"html_color": "#757873", "name": "Серый Метеор", "color": "meteorgrey"},
					"metalgrey": {"html_color": "#3e413e", "name": "Серый Метал", "color": "metalgrey"},
					"raceblue": {"html_color": "#1d3263", "name": "Синий", "color": "raceblue"},
					"rallyegreen": {"html_color": "#45801e", "name": "Зеленый", "color": "rallyegreen"},
					"sprintyellow": {"html_color": "#f5e028", "name": "Желтый", "color": "sprintyellow"},
					"corridared": {"html_color": "#a7000b", "name": "Красный Коррида", "color": "corridared"},
					"riored": {"html_color": "#a80003", "name": "Красиный Рио", "color": "riored"},
                }
            },
            
			"shadow": {  // Категория тени под машинкой
                "name": "Тень",
                "stock": null, // Если сток не указан, значит по умолчанию не будет никакой картинки
                "stock_name": "Без",
                "items": {
                    "300": {"name": "Тип 1", "img": "images/RS_A7/300_shadow/3001.png", "z": 1}  // z-index при отрисовке конкретной картинки
                }
            },
			
			"toning": {  // Категория типа тонировки. Здесь нет картинок, так как цвет кузова_тонировка => картинка
                "name": "Тонер",
                "stock": "1",  // По-умолчанию нет тонировки
                "items": {
                    "1": {"name": "Без", "type": 1},  // Отсутствие тонировки
                    "2": {"name": "Полу", "type": 2},
                    "3": {"name": "Полная", "type": 3}
                }
            },

           
            "wheels": {  // Категория колёс
                "with_color": true, // Значит есть третья строка выбора цвета (не в прямом смысле цвета колеса, а возможно варианта окраски)
                "name": "Диски",
                "stock": "30100",
                "items": {
                    "30100": {
                        "name": "Тип 1",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A7/301_wheels/30100.png", "z": 2},
                        }
                    },
					 "30101": {
                        "name": "Тип 2",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A7/301_wheels/30101.png", "z": 2},
                        }
                    },
					 "30102": {
                        "name": "Тип 3",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A7/301_wheels/30102.png", "z": 2},
                            "color2": {"img": "images/RS_A7/301_wheels/30103.png", "z": 2},
                            "color3": {"img": "images/RS_A7/301_wheels/30104.png", "z": 2},
                        }
                    },
					"30105": {
                        "name": "Тип 4",
                        "def_color": "color1",  // Этот параметр говорит о типе (цвете) колеса по-умолчанию
                        "colors": {
                            "color1": {"img": "images/RS_A7/301_wheels/30105.png", "z": 2},
                        }
                    },
                    "30106": {
                        "name": "Тип 5",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A7/301_wheels/30106.png", "z": 2},
                            "color2": {"img": "images/RS_A7/301_wheels/30107.png", "z": 2},
                            "color3": {"img": "images/RS_A7/301_wheels/30108.png", "z": 2},
                        }
                    },
                    "30109": {
                        "name": "Тип 6",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A7/301_wheels/30109.png", "z": 2},
                            "color2": {"img": "images/RS_A7/301_wheels/30110.png", "z": 2},
                            "color3": {"img": "images/RS_A7/301_wheels/30111.png", "z": 2},
                        }
                    },
                    "30112": {
                        "name": "Тип 7",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A7/301_wheels/30112.png", "z": 2},
                            "color2": {"img": "images/RS_A7/301_wheels/30113.png", "z": 2},
                            "color3": {"img": "images/RS_A7/301_wheels/30114.png", "z": 2},
                            "color4": {"img": "images/RS_A7/301_wheels/30115.png", "z": 2},
                            "color5": {"img": "images/RS_A7/301_wheels/30116.png", "z": 2},
                            "color6": {"img": "images/RS_A7/301_wheels/30117.png", "z": 2},
                        }
                    },
                    "30118": {
                        "name": "Тип 8",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A7/301_wheels/30118.png", "z": 2},
                            "color2": {"img": "images/RS_A7/301_wheels/30119.png", "z": 2},
                        }
                    },
                    "30120": {
                        "name": "Тип 9",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A7/301_wheels/30120.png", "z": 2},
                            "color2": {"img": "images/RS_A7/301_wheels/30121.png", "z": 2},
                        }
                    },
                }
            },
			
			"radiator": {
                "name": "Рамка",
                "stock": null,
                "stock_name": "Сток",
                "with_color": true,
                "items": {
                    "ttt1t": {
                        "name": "Тип 1",
                        "def_color": "color1",
                        "need_body_color": true,
                        "html_type": "palette",
                        "colors": {
							"30701": {"html_color": "#171717", "img": "images/RS_A7/307_radiator/30701.png", "z": 7, "body_color": "black"},
                            "30702": {"html_color": "#c5c5c5", "img": "images/RS_A7/307_radiator/30702.png", "z": 7, "body_color": "silver"},
                            "30703": {"html_color": "#eff0f1", "img": "images/RS_A7/307_radiator/30703.png", "z": 7, "body_color": "moonwhite"},
                            "30704": {"html_color": "#e8e8d4", "img": "images/RS_A7/307_radiator/30704.png", "z": 7, "body_color": "candywhite"},
                            "30705": {"html_color": "#626964", "img": "images/RS_A7/307_radiator/30705.png", "z": 7, "body_color": "steelgrey"},
                            "30706": {"html_color": "#757873", "img": "images/RS_A7/307_radiator/30706.png", "z": 7, "body_color": "meteorgrey"},
                            "30707": {"html_color": "#3e413e", "img": "images/RS_A7/307_radiator/30707.png", "z": 7, "body_color": "metalgrey"},
                            "30708": {"html_color": "#1d3263", "img": "images/RS_A7/307_radiator/30708.png", "z": 7, "body_color": "raceblue"},
                            "30709": {"html_color": "#45801e", "img": "images/RS_A7/307_radiator/30709.png", "z": 7, "body_color": "rallyegreen"},
							"30710": {"html_color": "#f5e028", "img": "images/RS_A7/307_radiator/30710.png", "z": 7, "body_color": "sprintyellow"},
                            "30711": {"html_color": "#a7000b", "img": "images/RS_A7/307_radiator/30711.png", "z": 7, "body_color": "corridared"},
                            "30712": {"html_color": "#a80003", "img": "images/RS_A7/307_radiator/30712.png", "z": 7, "body_color": "riored"},
                        }
                    },
                }
            },
			
		 
			"eyelashes": {
                "name": "Ресницы",
                "stock": null,
                "stock_name": "Без",
                "with_color": true,
                "items": {
                    "tttt_1": {
                        "name": "Тип 1",
                        "def_color": "color1",
                        "need_body_color": true,
                        "html_type": "palette",
                        "colors": {
							"311001": {"html_color": "#171717", "img": "images/RS_A7/311_eyelashes/311001.png", "z": 11, "body_color": "black"},
                            "311011": {"html_color": "#c5c5c5", "img": "images/RS_A7/311_eyelashes/311011.png", "z": 11, "body_color": "silver"},
                            "311021": {"html_color": "#eff0f1", "img": "images/RS_A7/311_eyelashes/311021.png", "z": 11, "body_color": "moonwhite"},
                            "311031": {"html_color": "#e8e8d4", "img": "images/RS_A7/311_eyelashes/311031.png", "z": 11, "body_color": "candywhite"},
                            "311041": {"html_color": "#626964", "img": "images/RS_A7/311_eyelashes/311041.png", "z": 11, "body_color": "steelgrey"},
                            "311051": {"html_color": "#757873", "img": "images/RS_A7/311_eyelashes/311051.png", "z": 11, "body_color": "meteorgrey"},
                            "311061": {"html_color": "#3e413e", "img": "images/RS_A7/311_eyelashes/311061.png", "z": 11, "body_color": "metalgrey"},
                            "311071": {"html_color": "#1d3263", "img": "images/RS_A7/311_eyelashes/311071.png", "z": 11, "body_color": "raceblue"},
                            "311081": {"html_color": "#45801e", "img": "images/RS_A7/311_eyelashes/311081.png", "z": 11, "body_color": "rallyegreen"},
							"311091": {"html_color": "#f5e028", "img": "images/RS_A7/311_eyelashes/311091.png", "z": 11, "body_color": "sprintyellow"},
                            "311101": {"html_color": "#a7000b", "img": "images/RS_A7/311_eyelashes/311101.png", "z": 11, "body_color": "corridared"},
                            "311111": {"html_color": "#a80003", "img": "images/RS_A7/311_eyelashes/311111.png", "z": 11, "body_color": "riored"},
                        }
                    },
                     "tttt_2": {
                        "name": "Тип 2",
                        "def_color": "color1",
                        "need_body_color": true,
                        "html_type": "palette",
                        "colors": {
							"311002": {"html_color": "#171717", "img": "images/RS_A7/311_eyelashes/311002.png", "z": 11, "body_color": "black"},
                            "311012": {"html_color": "#c5c5c5", "img": "images/RS_A7/311_eyelashes/311012.png", "z": 11, "body_color": "silver"},
                            "311022": {"html_color": "#eff0f1", "img": "images/RS_A7/311_eyelashes/311022.png", "z": 11, "body_color": "moonwhite"},
                            "311032": {"html_color": "#e8e8d4", "img": "images/RS_A7/311_eyelashes/311032.png", "z": 11, "body_color": "candywhite"},
                            "311042": {"html_color": "#626964", "img": "images/RS_A7/311_eyelashes/311042.png", "z": 11, "body_color": "steelgrey"},
                            "311052": {"html_color": "#757873", "img": "images/RS_A7/311_eyelashes/311052.png", "z": 11, "body_color": "meteorgrey"},
                            "311062": {"html_color": "#3e413e", "img": "images/RS_A7/311_eyelashes/311062.png", "z": 11, "body_color": "metalgrey"},
                            "311072": {"html_color": "#1d3263", "img": "images/RS_A7/311_eyelashes/311072.png", "z": 11, "body_color": "raceblue"},
                            "311082": {"html_color": "#45801e", "img": "images/RS_A7/311_eyelashes/311082.png", "z": 11, "body_color": "rallyegreen"},
							"311092": {"html_color": "#f5e028", "img": "images/RS_A7/311_eyelashes/311092.png", "z": 11, "body_color": "sprintyellow"},
                            "311102": {"html_color": "#a7000b", "img": "images/RS_A7/311_eyelashes/311102.png", "z": 11, "body_color": "corridared"},
                            "311112": {"html_color": "#a80003", "img": "images/RS_A7/311_eyelashes/311112.png", "z": 11, "body_color": "riored"},
                        }
                    },
				}
            },
			
			"splitter": {
                "with_color": true,
                "stock": null,
                "stock_name": "Без",
                "name": "Сплиттер",
                "items": {
                    "type_3_1": {
                        "name": "Тип 1",
                        "def_color": "color1",
                        "need_body_color": true,
                        "html_type": "palette",
                        "colors": {
							"color1": {"html_color": "#171717", "img": "images/RS_A7/303_splitter/303001.png", "z": 4, "body_color": "black"},
                            "color2": {"html_color": "#c5c5c5", "img": "images/RS_A7/303_splitter/303011.png", "z": 4, "body_color": "silver"},
                            "color3": {"html_color": "#eff0f1", "img": "images/RS_A7/303_splitter/303021.png", "z": 4, "body_color": "moonwhite"},
                            "color4": {"html_color": "#e8e8d4", "img": "images/RS_A7/303_splitter/303031.png", "z": 4, "body_color": "candywhite"},
                            "color5": {"html_color": "#626964", "img": "images/RS_A7/303_splitter/303041.png", "z": 4, "body_color": "steelgrey"},
                            "color6": {"html_color": "#757873", "img": "images/RS_A7/303_splitter/303051.png", "z": 4, "body_color": "meteorgrey"},
                            "color7": {"html_color": "#3e413e", "img": "images/RS_A7/303_splitter/303061.png", "z": 4, "body_color": "metalgrey"},
                            "color8": {"html_color": "#1d3263", "img": "images/RS_A7/303_splitter/303071.png", "z": 4, "body_color": "raceblue"},
                            "color9": {"html_color": "#45801e", "img": "images/RS_A7/303_splitter/303081.png", "z": 4, "body_color": "rallyegreen"},
							"color10": {"html_color": "#f5e028", "img": "images/RS_A7/303_splitter/303091.png", "z": 4, "body_color": "sprintyellow"},
                            "color11": {"html_color": "#a7000b", "img": "images/RS_A7/303_splitter/303101.png", "z": 4, "body_color": "corridared"},
                            "color12": {"html_color": "#a80003", "img": "images/RS_A7/303_splitter/303111.png", "z": 4, "body_color": "riored"},
                        }
                    },
					"type_3_2": {
                        "name": "Тип 2",
                        "def_color": "color1",
                        "need_body_color": true,
                        "html_type": "palette",
                        "colors": {
							"color1": {"html_color": "#171717", "img": "images/RS_A7/303_splitter/303002.png", "z": 4, "body_color": "black"},
                            "color2": {"html_color": "#c5c5c5", "img": "images/RS_A7/303_splitter/303012.png", "z": 4, "body_color": "silver"},
                            "color3": {"html_color": "#eff0f1", "img": "images/RS_A7/303_splitter/303022.png", "z": 4, "body_color": "moonwhite"},
                            "color4": {"html_color": "#e8e8d4", "img": "images/RS_A7/303_splitter/303032.png", "z": 4, "body_color": "candywhite"},
                            "color5": {"html_color": "#626964", "img": "images/RS_A7/303_splitter/303042.png", "z": 4, "body_color": "steelgrey"},
                            "color6": {"html_color": "#757873", "img": "images/RS_A7/303_splitter/303052.png", "z": 4, "body_color": "meteorgrey"},
                            "color7": {"html_color": "#3e413e", "img": "images/RS_A7/303_splitter/303062.png", "z": 4, "body_color": "metalgrey"},
                            "color8": {"html_color": "#1d3263", "img": "images/RS_A7/303_splitter/303072.png", "z": 4, "body_color": "raceblue"},
                            "color9": {"html_color": "#45801e", "img": "images/RS_A7/303_splitter/303082.png", "z": 4, "body_color": "rallyegreen"},
							"color10": {"html_color": "#f5e028", "img": "images/RS_A7/303_splitter/303092.png", "z": 4, "body_color": "sprintyellow"},
                            "color11": {"html_color": "#a7000b", "img": "images/RS_A7/303_splitter/303102.png", "z": 4, "body_color": "corridared"},
                            "color12": {"html_color": "#a80003", "img": "images/RS_A7/303_splitter/303112.png", "z": 4, "body_color": "riored"},
                        }
                    },
					"type_3_3": {
                        "name": "Тип 3",
                        "def_color": "color1",
                        "need_body_color": true,
                        "html_type": "palette",
                        "colors": {
							"color1": {"html_color": "#171717", "img": "images/RS_A7/303_splitter/303003.png", "z": 4, "body_color": "black"},
                            "color2": {"html_color": "#c5c5c5", "img": "images/RS_A7/303_splitter/303013.png", "z": 4, "body_color": "silver"},
                            "color3": {"html_color": "#eff0f1", "img": "images/RS_A7/303_splitter/303023.png", "z": 4, "body_color": "moonwhite"},
                            "color4": {"html_color": "#e8e8d4", "img": "images/RS_A7/303_splitter/303033.png", "z": 4, "body_color": "candywhite"},
                            "color5": {"html_color": "#626964", "img": "images/RS_A7/303_splitter/303043.png", "z": 4, "body_color": "steelgrey"},
                            "color6": {"html_color": "#757873", "img": "images/RS_A7/303_splitter/303053.png", "z": 4, "body_color": "meteorgrey"},
                            "color7": {"html_color": "#3e413e", "img": "images/RS_A7/303_splitter/303063.png", "z": 4, "body_color": "metalgrey"},
                            "color8": {"html_color": "#1d3263", "img": "images/RS_A7/303_splitter/303073.png", "z": 4, "body_color": "raceblue"},
                            "color9": {"html_color": "#45801e", "img": "images/RS_A7/303_splitter/303083.png", "z": 4, "body_color": "rallyegreen"},
							"color10": {"html_color": "#f5e028", "img": "images/RS_A7/303_splitter/303093.png", "z": 4, "body_color": "sprintyellow"},
                            "color11": {"html_color": "#a7000b", "img": "images/RS_A7/303_splitter/303103.png", "z": 4, "body_color": "corridared"},
                            "color12": {"html_color": "#a80003", "img": "images/RS_A7/303_splitter/303113.png", "z": 4, "body_color": "riored"},
                        }
                    },
                }
            },

            "rapids": {
                "with_color": true,
                "stock": null,
                "stock_name": "Без",
                "name": "Пороги",
                "items": {
                    "type_31": {
                        "name": "Тип 1",
                        "def_color": "color1",   // Этот параметр говорит о типе (цвете) порога по-умолчанию
                        "need_body_color": true,  // Этот параметр говорит, что при выборе данного Итема, сначала будет искаться цвет в цвет кузова
                        "html_type": "palette", // Значит отображение третьего ряда будет в виде палитры, используя html_color поле
                        "colors": {
							"color1": {"html_color": "#171717", "img": "images/RS_A7/304_rapids/304001.png", "z": 4, "body_color": "black"},
                            "color2": {"html_color": "#c5c5c5", "img": "images/RS_A7/304_rapids/304011.png", "z": 4, "body_color": "silver"},
                            "color3": {"html_color": "#eff0f1", "img": "images/RS_A7/304_rapids/304021.png", "z": 4, "body_color": "moonwhite"},
                            "color4": {"html_color": "#e8e8d4", "img": "images/RS_A7/304_rapids/304031.png", "z": 4, "body_color": "candywhite"},
                            "color5": {"html_color": "#626964", "img": "images/RS_A7/304_rapids/304041.png", "z": 4, "body_color": "steelgrey"},
                            "color6": {"html_color": "#757873", "img": "images/RS_A7/304_rapids/304051.png", "z": 4, "body_color": "meteorgrey"},
                            "color7": {"html_color": "#3e413e", "img": "images/RS_A7/304_rapids/304061.png", "z": 4, "body_color": "metalgrey"},
                            "color8": {"html_color": "#1d3263", "img": "images/RS_A7/304_rapids/304071.png", "z": 4, "body_color": "raceblue"},
                            "color9": {"html_color": "#45801e", "img": "images/RS_A7/304_rapids/304081.png", "z": 4, "body_color": "rallyegreen"},
							"color10": {"html_color": "#f5e028", "img": "images/RS_A7/304_rapids/304091.png", "z": 4, "body_color": "sprintyellow"},
                            "color11": {"html_color": "#a7000b", "img": "images/RS_A7/304_rapids/304101.png", "z": 4, "body_color": "corridared"},
                            "color12": {"html_color": "#a80003", "img": "images/RS_A7/304_rapids/304111.png", "z": 4, "body_color": "riored"},
                        }
                    },		
				}
            },

                        
            "back_mirrors": {  // Категория зеркал заднего вида
                "name": "Зеркала",
                "stock": null,
                "stock_name": "Сток",
                "items": {
                    "30600": {"name": "Тип 1", "img": "images/RS_A7/306_back_mirrors/30600.png", "z": 6},
                    
                }
            },

                  
            "roof": {
                "name": "Крыша",
                "stock": null,
                "stock_name": "Сток",
                "items": {
                    "31031": {"name": "Тип 1", "img": "images/RS_A7/310_roof/31031.png", "z": 10},
                }
            }
     
        },
    },
}