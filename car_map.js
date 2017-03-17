var all_cars = {
    "RS_A5": {
        toning_body_map: {
            "blue_1": {"img": "images/images/RS_A5/202_body_tonir/20201.png", "z": 3},
            "blue_2": {"img": "images/images/RS_A5/202_body_tonir/20202.png", "z": 3},
            "blue_3": {"img": "images/images/RS_A5/202_body_tonir/20203.png", "z": 3},
            "white_1": {"img": "images/RS_A5/202_body_tonir/20211.png", "z": 3},
            "white_2": {"img": "images/RS_A5/202_body_tonir/20212.png", "z": 3},
            "white_3": {"img": "images/RS_A5/202_body_tonir/20213.png", "z": 3},
            "black_1": {"img": "images/RS_A5/202_body_tonir/20221.png", "z": 3},
            "black_2": {"img": "images/RS_A5/202_body_tonir/20222.png", "z": 3},
            "black_3": {"img": "images/RS_A5/202_body_tonir/20223.png", "z": 3},
            "black2_1": {"img": "images/RS_A5/202_body_tonir/20241.png", "z": 3},
            "black2_2": {"img": "images/RS_A5/202_body_tonir/20242.png", "z": 3},
            "black2_3": {"img": "images/RS_A5/202_body_tonir/20243.png", "z": 3},
            "gray_1": {"img": "images/RS_A5/202_body_tonir/20231.png", "z": 3},
            "gray_2": {"img": "images/RS_A5/202_body_tonir/20232.png", "z": 3},
            "gray_3": {"img": "images/RS_A5/202_body_tonir/20233.png", "z": 3},
            "green_1": {"img": "images/RS_A5/202_body_tonir/20251.png", "z": 3},
            "green_2": {"img": "images/RS_A5/202_body_tonir/20252.png", "z": 3},
            "green_3": {"img": "images/RS_A5/202_body_tonir/20253.png", "z": 3},
            "orange_1": {"img": "images/RS_A5/202_body_tonir/20261.png", "z": 3},
            "orange_2": {"img": "images/RS_A5/202_body_tonir/20262.png", "z": 3},
            "orange_3": {"img": "images/RS_A5/202_body_tonir/20263.png", "z": 3},
            "red_1": {"img": "images/RS_A5/202_body_tonir/20271.png", "z": 3},
            "red_2": {"img": "images/RS_A5/202_body_tonir/20272.png", "z": 3},
            "red_3": {"img": "images/RS_A5/202_body_tonir/20273.png", "z": 3},
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
                    "200": {"name": "Тень", "img": "images/RS_A5/200_shadow/200.png", "z": 1}
                }
            },
            "wheels": {
                "with_color": true,
                "name": "Колёса",
                "stock": "20100",
                "items": {
                    "20100": { // По умолчанию будет браться 0 элемент в списке цветов
                        "name": "wheel 1",
                        "def_color": "color1",
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
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5/204_rapids/20401.png", "z": 4},
                            "color2": {"img": "images/RS_A5/204_rapids/20411.png", "z": 4},
                            "color3": {"img": "images/RS_A5/204_rapids/20421.png", "z": 4},
                            "color4": {"img": "images/RS_A5/204_rapids/20431.png", "z": 4},
                            "color5": {"img": "images/RS_A5/204_rapids/20441.png", "z": 4},
                            "color6": {"img": "images/RS_A5/204_rapids/20451.png", "z": 4},
                            "color7": {"img": "images/RS_A5/204_rapids/20461.png", "z": 4},
                            "color8": {"img": "images/RS_A5/204_rapids/20471.png", "z": 4},
                        }
                    },
                },
            },

            "radiator": {
                "name": "Радиатор",
                "stock": null,
                "items": {
                    "20701": {"name": "Нак1", "img": "images/RS_A5/207_radiator/20701.png", "z": 7},
                    "20711": {"name": "Нак2", "img": "images/RS_A5/207_radiator/20711.png", "z": 7},
                    "20721": {"name": "Нак3", "img": "images/RS_A5/207_radiator/20721.png", "z": 7},
                    "20731": {"name": "Нак4", "img": "images/RS_A5/207_radiator/20731.png", "z": 7},
                    "20741": {"name": "Нак5", "img": "images/RS_A5/207_radiator/20741.png", "z": 7},
                    "20751": {"name": "Нак6", "img": "images/RS_A5/207_radiator/20751.png", "z": 7},
                    "20761": {"name": "Нак7", "img": "images/RS_A5/207_radiator/20761.png", "z": 7},
                    "20771": {"name": "Нак8", "img": "images/RS_A5/207_radiator/20771.png", "z": 7},
                    "20781": {"name": "Нак9", "img": "images/RS_A5/207_radiator/20781.png", "z": 7},
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
                        "colors": {
                            "color1": {"img": "images/RS_A5/203_splitter/20301.png", "z": 4},
                            "color2": {"img": "images/RS_A5/203_splitter/20311.png", "z": 4},
                            "color3": {"img": "images/RS_A5/203_splitter/20321.png", "z": 4},
                            "color4": {"img": "images/RS_A5/203_splitter/20331.png", "z": 4},
                            "color5": {"img": "images/RS_A5/203_splitter/20341.png", "z": 4},
                            "color6": {"img": "images/RS_A5/203_splitter/20351.png", "z": 4},
                            "color7": {"img": "images/RS_A5/203_splitter/20361.png", "z": 4},
                            "color8": {"img": "images/RS_A5/203_splitter/20371.png", "z": 4},
                        }
                    },
                    "type_2": {
                        "name": "Тип 2",
                        "def_color": "color1",
                        "colors": {
                            "color1": {"img": "images/RS_A5/203_splitter/20302.png", "z": 4},
                            "color2": {"img": "images/RS_A5/203_splitter/20312.png", "z": 4},
                            "color3": {"img": "images/RS_A5/203_splitter/20322.png", "z": 4},
                            "color4": {"img": "images/RS_A5/203_splitter/20332.png", "z": 4},
                            "color5": {"img": "images/RS_A5/203_splitter/20342.png", "z": 4},
                            "color6": {"img": "images/RS_A5/203_splitter/20352.png", "z": 4},
                            "color7": {"img": "images/RS_A5/203_splitter/20362.png", "z": 4},
                            "color8": {"img": "images/RS_A5/203_splitter/20372.png", "z": 4},
                        }
                    },
                },
            },


            "back_mirrors": null,

            "strut": null,
            "visor": null,
            "roof": null,
            "eyelashes": null
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