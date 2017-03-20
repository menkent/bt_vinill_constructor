var all_cars = {
    "RS_A5": {  // Это все-все настройки одной машинки
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
                "stock": "white", // Если этот параметр задан, то будет установлен по умолчанию при старте
                "items": { // Списко элементом категории - Итемы!
                    "blue": {"name": "Синий", "color": "blue"},  // Color = обязательный параметр, именно он складывается с тонировкой
                    "white": {"name": "Белый", "color": "white"},
                    "black": {"name": "Чёрный", "color": "black"},
                    "whitesmoke": {"name": "Гр.белый", "color": "whitesmoke"},
                    "gray": {"name": "Серый", "color": "gray"},
                    "green": {"name": "Зелёный", "color": "green"},
                    "yellow": {"name": "Жёлтый", "color": "yellow"},
                    "red": {"name": "Красный", "color": "red"},
                }
            },
            "toning": {  // Категория типа тонировки. Здесь нет картинок, так как цвет кузова_тонировка => картинка
                "name": "Тонировка",
                "stock": "1",  // По-умолчанию нет тонировки
                "items": {
                    "1": {"name": "Тонировка 1", "type": 1},  // Отсутствие тонировки
                    "2": {"name": "Тонировка 2", "type": 2},
                    "3": {"name": "Тонировка 3", "type": 3}
                }
            },

            "shadow": {  // Категория тени под машинкой
                "name": "Тень",
                "stock": null, // Если сток не указан, значит по умолчанию не будет никакой картинки
                "items": {
                    "200": {"name": "Тень", "img": "images/RS_A5/200_shadow/200.png", "z": 1}  // z-index при отрисовке конкретной картинки
                }
            },
            "wheels": {  // Категория колёс
                "with_color": true, // Значит есть третья строка выбора цвета (не в прямом смысле цвета колеса, а возможно варианта окраски)
                "name": "Колёса",
                "stock": "20100",
                "items": {
                    "20100": {
                        "name": "wheel 1",
                        "def_color": "color1",  // Этот параметр говорит о типе (цвете) колеса по-умолчанию
                        "colors": {
                            "color1": {"img": "images/RS_A5/201_wheels/20100.png", "z": 2},
                        }
                    },
                    "20101": {
                        "name": "wheel 2",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5/201_wheels/20101.png", "z": 2},
                            "color2": {"img": "images/RS_A5/201_wheels/20102.png", "z": 2},
                            "color3": {"img": "images/RS_A5/201_wheels/20103.png", "z": 2},
                        }
                    },
                    "20104": {
                        "name": "wheel 3",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5/201_wheels/20104.png", "z": 2},
                            "color2": {"img": "images/RS_A5/201_wheels/20105.png", "z": 2},
                            "color3": {"img": "images/RS_A5/201_wheels/20106.png", "z": 2},
                        }
                    },
                    "20107": {
                        "name": "wheel 4",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5/201_wheels/20107.png", "z": 2},
                            "color2": {"img": "images/RS_A5/201_wheels/20108.png", "z": 2},
                            "color3": {"img": "images/RS_A5/201_wheels/20109.png", "z": 2},
                        }
                    },
                    "20110": {
                        "name": "wheel 5",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5/201_wheels/20110.png", "z": 2},
                            "color2": {"img": "images/RS_A5/201_wheels/20111.png", "z": 2},
                            "color3": {"img": "images/RS_A5/201_wheels/20112.png", "z": 2},
                        }
                    },
                    "20113": {
                        "name": "wheel 6",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5/201_wheels/20113.png", "z": 2},
                            "color2": {"img": "images/RS_A5/201_wheels/20114.png", "z": 2},
                            "color3": {"img": "images/RS_A5/201_wheels/20115.png", "z": 2},
                        }
                    },
                    "20116": {
                        "name": "wheel 7",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5/201_wheels/20116.png", "z": 2},
                            "color2": {"img": "images/RS_A5/201_wheels/20117.png", "z": 2},
                        }
                    },
                    "20118": {
                        "name": "wheel 8",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5/201_wheels/20118.png", "z": 2},
                            "color2": {"img": "images/RS_A5/201_wheels/20119.png", "z": 2},
                        }
                    },
                }
            },

            "rapids": {
                "with_color": true,
                "stock": null,
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

            "radiator": {
                "name": "Радиатор",
                "stock": null,
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

            "splitter": {
                "with_color": true,
                "stock": null,
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

            "back_mirrors": {  // Категория зеркал заднего вида
                "name": "Зеркала",
                "stock": null,
                "items": {
                    "20621": {"name": "Зеркало1", "img": "images/RS_A5/206_back_mirrors/20621.png", "z": 6},
                    "20622": {"name": "Зеркало2", "img": "images/RS_A5/206_back_mirrors/20622.png", "z": 6}
                }
            },

            "strut": {  // Категория стоек
                "name": "Стойка",
                "stock": null,
                "items": {
                    "20821": {"name": "Затонировать", "img": "images/RS_A5/208_strut/20821.png", "z": 8},
                }
            },

            "visor": {
                "name": "Козырек",
                "stock": null,
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
                "items": {
                    "21021": {"name": "Крыша", "img": "images/RS_A5/210_roof/21021.png", "z": 10},
                }
            },
            "eyelashes": {
                "name": "Реснички",
                "stock": null,
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
            }
        },
    },


    "RS_A5FL": {
        toning_body_map: {
            "blue_1": {"img": "images/RS_A5FL/102_body_tonir/10201.png", "z": 3},
            "blue_2": {"img": "images/RS_A5FL/102_body_tonir/10202.png", "z": 3},
            "blue_3": {"img": "images/RS_A5FL/102_body_tonir/10203.png", "z": 3},
            "white_1": {"img": "images/RS_A5FL/102_body_tonir/10211.png", "z": 3},
            "white_2": {"img": "images/RS_A5FL/102_body_tonir/10212.png", "z": 3},
            "white_3": {"img": "images/RS_A5FL/102_body_tonir/10213.png", "z": 3},
            "black_1": {"img": "images/RS_A5FL/102_body_tonir/10221.png", "z": 3},
            "black_2": {"img": "images/RS_A5FL/102_body_tonir/10222.png", "z": 3},
            "black_3": {"img": "images/RS_A5FL/102_body_tonir/10223.png", "z": 3},
            "black2_1": {"img": "images/RS_A5FL/102_body_tonir/10241.png", "z": 3},
            "black2_2": {"img": "images/RS_A5FL/102_body_tonir/10242.png", "z": 3},
            "black2_3": {"img": "images/RS_A5FL/102_body_tonir/10243.png", "z": 3},
            "gray_1": {"img": "images/RS_A5FL/102_body_tonir/10231.png", "z": 3},
            "gray_2": {"img": "images/RS_A5FL/102_body_tonir/10232.png", "z": 3},
            "gray_3": {"img": "images/RS_A5FL/102_body_tonir/10233.png", "z": 3},
            "green_1": {"img": "images/RS_A5FL/102_body_tonir/10251.png", "z": 3},
            "green_2": {"img": "images/RS_A5FL/102_body_tonir/10252.png", "z": 3},
            "green_3": {"img": "images/RS_A5FL/102_body_tonir/10253.png", "z": 3},
            "orange_1": {"img": "images/RS_A5FL/102_body_tonir/10261.png", "z": 3},
            "orange_2": {"img": "images/RS_A5FL/102_body_tonir/10262.png", "z": 3},
            "orange_3": {"img": "images/RS_A5FL/102_body_tonir/10263.png", "z": 3},
            "red_1": {"img": "images/RS_A5FL/102_body_tonir/10271.png", "z": 3},
            "red_2": {"img": "images/RS_A5FL/102_body_tonir/10272.png", "z": 3},
            "red_3": {"img": "images/RS_A5FL/102_body_tonir/10273.png", "z": 3},
        },
        categories: {
            "body_color": {
                "name": "Цвет кузова",
                "stock": "white",
                "items": {
                    "blue": {"name": "Синий", "color": "blue"},
                    "white": {"name": "Белый", "color": "white"},
                    "black": {"name": "Чёрный", "color": "black"},
                    "black2": {"name": "Чёрный2", "color": "black2"},
                    "gray": {"name": "Серый", "color": "gray"},
                    "green": {"name": "Зелёный", "color": "green"},
                    "orange": {"name": "Оранжевый", "color": "orange"},
                    "red": {"name": "Красный", "color": "red"},
                }
            },
            "toning": {
                "name": "Тонировка",
                "stock": "1",
                "items": {
                    "1": {"name": "Тонировка 1", "type": 1},  // Отсутствие тонировки
                    "2": {"name": "Тонировка 2", "type": 2},
                    "3": {"name": "Тонировка 3", "type": 3}
                }
            },
            "shadow": {
                "name": "Тень",
                "stock": null,
                "items": {
                    "100": {"name": "Тень", "img": "images/RS_A5FL/100_shadow/1001.png", "z": 1}
                }
            },

            "wheels": null,
            "splitter": null,
            "rapids": null,
            "back_mirrors": null,
            "radiator": null,
            "strut": null,
            "visor": null,
            "roof": null,
            "eyelashes": null

        },
    },
};