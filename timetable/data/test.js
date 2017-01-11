/**
 * Created by Dawson on 1/6/2017.
 */


var processedObj = {
    "course": {
        "name": "Software Design I - Introduction to Software Development", "credits": 4, "tutorial": [{
            "name": "01",
            "serial": "14871",
            "supervisors": ["Spencer Smith"],
            "times": [[2, "mo", 12, 30, 14, 20, "ITB 139"]],
            "loc": "ITB 139"
        }, {
            "name": "02",
            "serial": "14872",
            "supervisors": ["Spencer Smith"],
            "times": [[2, "fr", 8, 30, 10, 20, "ITB 139"]],
            "loc": "ITB 139"
        }, {
            "name": "03",
            "serial": "15994",
            "supervisors": ["Spencer Smith"],
            "times": [[2, "mo", 14, 30, 16, 20, "T13 106"]],
            "loc": "T13 106"
        }], "core": [{
            "name": "01",
            "serial": "14869",
            "supervisors": ["Spencer Smith"],
            "times": [[2, "mo", 11, 30, 12, 20, "HH 302"], [2, "we", 11, 30, 12, 20, "HH 302"], [2, "fr", 13, 30, 14, 20, "HH 302"]],
            "loc": "HH 302"
        }, {
            "name": "02",
            "serial": "11869",
            "supervisors": ["Jacques Carette"],
            "times": [[2, "mo", 8, 30, 10, 20, "ABB 165"]]
        }, {
            "name": "03",
            "serial": "11870",
            "supervisors": ["Jacques Carette"],
            "times": [[2, "tu", 14, 30, 16, 20, "JHE 210"]]
        }], "lab": [{
            "name": "01",
            "serial": "11596",
            "supervisors": ["Ryan Leduc"],
            "times": [[2, "th", 8, 30, 11, 20, "ITB 238"]]
        }, {
            "name": "02",
            "serial": "11597",
            "supervisors": ["Ryan Leduc"],
            "times": [[2, "we", 8, 30, 11, 20, "ITB 238"]]
        }, {
            "name": "03",
            "serial": "11598",
            "supervisors": ["Ryan Leduc"],
            "times": [[2, "tu", 8, 30, 11, 20, "ITB 238"]]
        }, {
            "name": "04",
            "serial": "11599",
            "supervisors": ["Ryan Leduc"],
            "times": [[2, "mo", 8, 30, 11, 20, "ITB 238"]]
        }], "code": "SFWRENG 2AA4", "term": 2
    }
    ,
    "tutorial": [{
        "name": "01",
        "serial": "14871",
        "supervisors": ["Spencer Smith"],
        "times": [[2, "mo", 12, 30, 14, 20, "ITB 139"]],
        "loc": "ITB 139"
    }, {
        "name": "02",
        "serial": "14872",
        "supervisors": ["Spencer Smith"],
        "times": [[2, "fr", 8, 30, 10, 20, "ITB 139"]],
        "loc": "ITB 139"
    }, {
        "name": "03",
        "serial": "15994",
        "supervisors": ["Spencer Smith"],
        "times": [[2, "mo", 14, 30, 16, 20, "T13 106"]],
        "loc": "T13 106"
    }], "core": [{
        "name": "01",
        "serial": "14869",
        "supervisors": ["Spencer Smith"],
        "times": [[2, "mo", 11, 30, 12, 20, "HH 302"], [2, "we", 11, 30, 12, 20, "HH 302"], [2, "fr", 13, 30, 14, 20, "HH 302"]],
        "loc": "HH 302"
    }, {
        "name": "02",
        "serial": "11869",
        "supervisors": ["Jacques Carette"],
        "times": [[2, "mo", 8, 30, 10, 20, "ABB 165"]]
    }, {
        "name": "03",
        "serial": "11870",
        "supervisors": ["Jacques Carette"],
        "times": [[2, "tu", 14, 30, 16, 20, "JHE 210"]]
    }], "lab": [{
        "name": "01",
        "serial": "11596",
        "supervisors": ["Ryan Leduc"],
        "times": [[2, "th", 8, 30, 11, 20, "ITB 238"]]
    }, {
        "name": "02",
        "serial": "11597",
        "supervisors": ["Ryan Leduc"],
        "times": [[2, "we", 8, 30, 11, 20, "ITB 238"]]
    }, {
        "name": "03",
        "serial": "11598",
        "supervisors": ["Ryan Leduc"],
        "times": [[2, "tu", 8, 30, 11, 20, "ITB 238"]]
    }, {
        "name": "04",
        "serial": "11599",
        "supervisors": ["Ryan Leduc"],
        "times": [[2, "mo", 8, 30, 11, 20, "ITB 238"]]
    }],
    "tutLin": [{
        "coursePart": {
            "name": "01",
            "serial": "14871",
            "supervisors": ["Spencer Smith"],
            "times": [[2, "mo", 12, 30, 14, 20, "ITB 139"]],
            "loc": "ITB 139"
        }, "oldTimes": [[2, "mo", 12, 30, 14, 20, "ITB 139"]], "times": [{"day": 1, "start": 9, "end": 13}]
    }, {
        "coursePart": {
            "name": "02",
            "serial": "14872",
            "supervisors": ["Spencer Smith"],
            "times": [[2, "fr", 8, 30, 10, 20, "ITB 139"]],
            "loc": "ITB 139"
        }, "oldTimes": [[2, "fr", 8, 30, 10, 20, "ITB 139"]], "times": [{"day": 5, "start": 1, "end": 5}]
    }, {
        "coursePart": {
            "name": "03",
            "serial": "15994",
            "supervisors": ["Spencer Smith"],
            "times": [[2, "mo", 14, 30, 16, 20, "T13 106"]],
            "loc": "T13 106"
        }, "oldTimes": [[2, "mo", 14, 30, 16, 20, "T13 106"]], "times": [{"day": 1, "start": 13, "end": 17}]
    }],
    "coreLin": [{
        "coursePart": {
            "name": "01",
            "serial": "14869",
            "supervisors": ["Spencer Smith"],
            "times": [[2, "mo", 11, 30, 12, 20, "HH 302"], [2, "we", 11, 30, 12, 20, "HH 302"], [2, "fr", 13, 30, 14, 20, "HH 302"]],
            "loc": "HH 302"
        },
        "oldTimes": [[2, "mo", 11, 30, 12, 20, "HH 302"], [2, "we", 11, 30, 12, 20, "HH 302"], [2, "fr", 13, 30, 14, 20, "HH 302"]],
        "times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {
            "day": 5,
            "start": 11,
            "end": 13
        }]
    }, {
        "coursePart": {
            "name": "02",
            "serial": "11869",
            "supervisors": ["Jacques Carette"],
            "times": [[2, "mo", 8, 30, 10, 20, "ABB 165"]]
        }, "oldTimes": [[2, "mo", 8, 30, 10, 20, "ABB 165"]], "times": [{"day": 1, "start": 1, "end": 5}]
    }, {
        "coursePart": {
            "name": "03",
            "serial": "11870",
            "supervisors": ["Jacques Carette"],
            "times": [[2, "tu", 14, 30, 16, 20, "JHE 210"]]
        }, "oldTimes": [[2, "tu", 14, 30, 16, 20, "JHE 210"]], "times": [{"day": 2, "start": 13, "end": 17}]
    }], "labLin": [{
        "coursePart": {
            "name": "01",
            "serial": "11596",
            "supervisors": ["Ryan Leduc"],
            "times": [[2, "th", 8, 30, 11, 20, "ITB 238"]]
        }, "oldTimes": [[2, "th", 8, 30, 11, 20, "ITB 238"]], "times": [{"day": 4, "start": 1, "end": 7}]
    }, {
        "coursePart": {
            "name": "02",
            "serial": "11597",
            "supervisors": ["Ryan Leduc"],
            "times": [[2, "we", 8, 30, 11, 20, "ITB 238"]]
        }, "oldTimes": [[2, "we", 8, 30, 11, 20, "ITB 238"]], "times": [{"day": 3, "start": 1, "end": 7}]
    }, {
        "coursePart": {
            "name": "03",
            "serial": "11598",
            "supervisors": ["Ryan Leduc"],
            "times": [[2, "tu", 8, 30, 11, 20, "ITB 238"]]
        }, "oldTimes": [[2, "tu", 8, 30, 11, 20, "ITB 238"]], "times": [{"day": 2, "start": 1, "end": 7}]
    }, {
        "coursePart": {
            "name": "04",
            "serial": "11599",
            "supervisors": ["Ryan Leduc"],
            "times": [[2, "mo", 8, 30, 11, 20, "ITB 238"]]
        }, "oldTimes": [[2, "mo", 8, 30, 11, 20, "ITB 238"]], "times": [{"day": 1, "start": 1, "end": 7}]
    }], "name": "Software Design I - Introduction to Software Development"
}


//////////////////////////////////////////////////

var lessData = [
    //Software Design I - Introduction to Software Development
    // THIS =
    [{
        "times": [
            {"day": 1, "start": 7, "end": 9},
            {"day": 3, "start": 7, "end": 9}, {
            "day": 5,
            "start": 11,
            "end": 13
        }]
    }, {"times": [
        {"day": 1, "start": 1, "end": 5}]},
        {"times": [
            {"day": 2, "start": 13, "end": 17}]}],
    [{"times": [{"day": 1, "start": 9, "end": 13}]}, {
        "times": [{
            "day": 5,
            "start": 1,
            "end": 5
        }]
    }, {"times": [{"day": 1, "start": 13, "end": 17}]}],
    [{"times": [{"day": 4, "start": 1, "end": 7}]}, {"times": [{"day": 3, "start": 1, "end": 7}]}, {
        "times": [{
            "day": 2,
            "start": 1,
            "end": 7
        }]
    }, {"times": [{"day": 1, "start": 1, "end": 7}]}]
];


[{
    "core": {
        "times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {
            "day": 5,
            "start": 11,
            "end": 13
        }]
    }, "tutorial": {"times": [{"day": 1, "start": 9, "end": 13}]}
}, {
    "core": {
        "times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {
            "day": 5,
            "start": 11,
            "end": 13
        }]
    }, "tutorial": {"times": [{"day": 5, "start": 1, "end": 5}]}
}, {
    "core": {
        "times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {
            "day": 5,
            "start": 11,
            "end": 13
        }]
    }, "tutorial": {"times": [{"day": 1, "start": 13, "end": 17}]}
}, {
    "core": {
        "times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {
            "day": 5,
            "start": 11,
            "end": 13
        }]
    }, "lab": {"times": [{"day": 4, "start": 1, "end": 7}]}
}, {
    "core": {
        "times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {
            "day": 5,
            "start": 11,
            "end": 13
        }]
    }, "lab": {"times": [{"day": 3, "start": 1, "end": 7}]}
}, {
    "core": {
        "times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {
            "day": 5,
            "start": 11,
            "end": 13
        }]
    }, "lab": {"times": [{"day": 2, "start": 1, "end": 7}]}
}, {
    "core": {
        "times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {"day": 5, "start": 11, "end": 13}]
    },
    "lab": {"times": [{"day": 1, "start": 1, "end": 7}]}
},
    {
    "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
    "tutorial": {"times": [{"day": 1, "start": 9, "end": 13}]}
}, {
    "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
    "tutorial": {"times": [{"day": 5, "start": 1, "end": 5}]}
}, {
    "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
    "tutorial": {"times": [{"day": 1, "start": 13, "end": 17}]}
}, {
    "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
    "lab": {"times": [{"day": 4, "start": 1, "end": 7}]}
}, {
    "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
    "lab": {"times": [{"day": 3, "start": 1, "end": 7}]}
}, {
    "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
    "lab": {"times": [{"day": 2, "start": 1, "end": 7}]}
}, {
    "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
    "lab": {"times": [{"day": 1, "start": 1, "end": 7}]}
}, {
    "core": {"times": [{"day": 2, "start": 13, "end": 17}]},
    "tutorial": {"times": [{"day": 1, "start": 9, "end": 13}]}
}, {
    "core": {"times": [{"day": 2, "start": 13, "end": 17}]},
    "tutorial": {"times": [{"day": 5, "start": 1, "end": 5}]}
}, {
    "core": {"times": [{"day": 2, "start": 13, "end": 17}]},
    "tutorial": {"times": [{"day": 1, "start": 13, "end": 17}]}
}, {
    "core": {"times": [{"day": 2, "start": 13, "end": 17}]},
    "lab": {"times": [{"day": 4, "start": 1, "end": 7}]}
}, {
    "core": {"times": [{"day": 2, "start": 13, "end": 17}]},
    "lab": {"times": [{"day": 3, "start": 1, "end": 7}]}
}, {
    "core": {"times": [{"day": 2, "start": 13, "end": 17}]},
    "lab": {"times": [{"day": 2, "start": 1, "end": 7}]}
}, {"core": {"times": [{"day": 2, "start": 13, "end": 17}]}, "lab": {"times": [{"day": 1, "start": 1, "end": 7}]}}]


var o =
    [
        {
            "core": {"times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {"day": 5,"start": 11,"end": 13}]},
        "tutorial": {"times": [{"day": 1, "start": 9, "end": 13}]}},
        {
            "core": {"times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {"day": 5,"start": 11,"end": 13}]},
            "tutorial": {"times": [{"day": 5, "start": 1, "end": 5}]}
    }, {
        "core": {
            "times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {
                "day": 5,
                "start": 11,
                "end": 13
            }]
        }, "tutorial": {"times": [{"day": 1, "start": 13, "end": 17}]}
    }, {
        "core": {
            "times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {
                "day": 5,
                "start": 11,
                "end": 13
            }]
        }, "lab": {"times": [{"day": 4, "start": 1, "end": 7}]}
    }, {
        "core": {
            "times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {
                "day": 5,
                "start": 11,
                "end": 13
            }]
        }, "lab": {"times": [{"day": 3, "start": 1, "end": 7}]}
    }, {
        "core": {
            "times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {
                "day": 5,
                "start": 11,
                "end": 13
            }]
        }, "lab": {"times": [{"day": 2, "start": 1, "end": 7}]}
    }, {
        "core": {
            "times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {
                "day": 5,
                "start": 11,
                "end": 13
            }]
        }, "lab": {"times": [{"day": 1, "start": 1, "end": 7}]}
    }, {
        "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
        "tutorial": {"times": [{"day": 1, "start": 9, "end": 13}]}
    }, {
        "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
        "tutorial": {"times": [{"day": 5, "start": 1, "end": 5}]}
    }, {
        "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
        "tutorial": {"times": [{"day": 1, "start": 13, "end": 17}]}
    }, {
        "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
        "lab": {"times": [{"day": 4, "start": 1, "end": 7}]}
    }, {
        "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
        "lab": {"times": [{"day": 3, "start": 1, "end": 7}]}
    }, {
        "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
        "lab": {"times": [{"day": 2, "start": 1, "end": 7}]}
    }, {
        "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
        "lab": {"times": [{"day": 1, "start": 1, "end": 7}]}
    }, {
        "core": {"times": [{"day": 2, "start": 13, "end": 17}]},
        "tutorial": {"times": [{"day": 1, "start": 9, "end": 13}]}
    }, {
        "core": {"times": [{"day": 2, "start": 13, "end": 17}]},
        "tutorial": {"times": [{"day": 5, "start": 1, "end": 5}]}
    }, {
        "core": {"times": [{"day": 2, "start": 13, "end": 17}]},
        "tutorial": {"times": [{"day": 1, "start": 13, "end": 17}]}
    }, {
        "core": {"times": [{"day": 2, "start": 13, "end": 17}]},
        "lab": {"times": [{"day": 4, "start": 1, "end": 7}]}
    }, {
        "core": {"times": [{"day": 2, "start": 13, "end": 17}]},
        "lab": {"times": [{"day": 3, "start": 1, "end": 7}]}
    }, {
        "core": {"times": [{"day": 2, "start": 13, "end": 17}]},
        "lab": {"times": [{"day": 2, "start": 1, "end": 7}]}
    }, {"core": {"times": [{"day": 2, "start": 13, "end": 17}]}, "lab": {"times": [{"day": 1, "start": 1, "end": 7}]}}]


var k =
    [{
        "core": {"times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {"day": 5,"start": 11,"end": 13}]},
        "tutorial": {"times": [{"day": 1, "start": 9, "end": 13}]},
        "lab": {"times": [{"day": 1, "start": 1, "end": 7}]}
    }, {
        "core": {
            "times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {
                "day": 5,
                "start": 11,
                "end": 13
            }]
        },
        "tutorial": {"times": [{"day": 5, "start": 1, "end": 5}]},
        "lab": {"times": [{"day": 1, "start": 1, "end": 7}]}
    }, {
        "core": {
            "times": [{"day": 1, "start": 7, "end": 9}, {"day": 3, "start": 7, "end": 9}, {
                "day": 5,
                "start": 11,
                "end": 13
            }]
        },
        "tutorial": {"times": [{"day": 1, "start": 13, "end": 17}]},
        "lab": {"times": [{"day": 1, "start": 1, "end": 7}]}
    }, {
        "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
        "tutorial": {"times": [{"day": 1, "start": 9, "end": 13}]},
        "lab": {"times": [{"day": 1, "start": 1, "end": 7}]}
    }, {
        "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
        "tutorial": {"times": [{"day": 5, "start": 1, "end": 5}]},
        "lab": {"times": [{"day": 1, "start": 1, "end": 7}]}
    }, {
        "core": {"times": [{"day": 1, "start": 1, "end": 5}]},
        "tutorial": {"times": [{"day": 1, "start": 13, "end": 17}]},
        "lab": {"times": [{"day": 1, "start": 1, "end": 7}]}
    }, {
        "core": {"times": [{"day": 2, "start": 13, "end": 17}]},
        "tutorial": {"times": [{"day": 1, "start": 9, "end": 13}]},
        "lab": {"times": [{"day": 1, "start": 1, "end": 7}]}
    }, {
        "core": {"times": [{"day": 2, "start": 13, "end": 17}]},
        "tutorial": {"times": [{"day": 5, "start": 1, "end": 5}]},
        "lab": {"times": [{"day": 1, "start": 1, "end": 7}]}
    }, {
        "core": {"times": [{"day": 2, "start": 13, "end": 17}]},
        "tutorial": {"times": [{"day": 1, "start": 13, "end": 17}]},
        "lab": {"times": [{"day": 1, "start": 1, "end": 7}]}
    }]


var u = [{
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "01", "day": 4, "start": 1, "end": 7}], "name": "01"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "01", "day": 4, "start": 1, "end": 7}], "name": "01"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "01", "day": 4, "start": 1, "end": 7}], "name": "01"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "01", "day": 4, "start": 1, "end": 7}], "name": "01"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "01", "day": 4, "start": 1, "end": 7}], "name": "01"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "01", "day": 4, "start": 1, "end": 7}], "name": "01"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "01", "day": 4, "start": 1, "end": 7}], "name": "01"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "01", "day": 4, "start": 1, "end": 7}], "name": "01"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "01", "day": 4, "start": 1, "end": 7}], "name": "01"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "02", "day": 1, "start": 1, "end": 5}], "name": "02"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {"times": [{"name": "03", "day": 2, "start": 13, "end": 17}], "name": "03"},
    "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {
    "core": {
        "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
            "name": "01",
            "day": 3,
            "start": 7,
            "end": 9
        }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
    },
    "tutorial": {"times": [{"name": "02", "day": 5, "start": 1, "end": 5}], "name": "02"},
    "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
}, {"core": {"times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {"name": "01", "day": 3, "start": 7, "end": 9}]];

    var i =
        [{
            "core": {"times": [{"name": "01", "day": 1, "start": 17, "end": 19}, {"name": "01","day": 3,"start": 17,"end": 19}, {"name": "01", "day": 4, "start": 17, "end": 19}], "name": "01"},
            "tutorial": {"times": [{"name": "01", "day": 5, "start": 7, "end": 9}], "name": "01"}
        }, {
            "core": {
                "times": [{"name": "01", "day": 1, "start": 17, "end": 19}, {
                    "name": "01",
                    "day": 3,
                    "start": 17,
                    "end": 19
                }, {"name": "01", "day": 4, "start": 17, "end": 19}], "name": "01"
            }, "tutorial": {"times": [{"name": "02", "day": 3, "start": 11, "end": 13}], "name": "02"}
        }, {
            "core": {
                "times": [{"name": "01", "day": 1, "start": 17, "end": 19}, {
                    "name": "01",
                    "day": 3,
                    "start": 17,
                    "end": 19
                }, {"name": "01", "day": 4, "start": 17, "end": 19}], "name": "01"
            }, "tutorial": {"times": [{"name": "03", "day": 3, "start": 15, "end": 17}], "name": "03"}
        }, {
            "core": {
                "times": [{"name": "01", "day": 1, "start": 17, "end": 19}, {
                    "name": "01",
                    "day": 3,
                    "start": 17,
                    "end": 19
                }, {"name": "01", "day": 4, "start": 17, "end": 19}], "name": "01"
            }, "tutorial": {"times": [{"name": "04", "day": 2, "start": 5, "end": 7}], "name": "04"}
        }, {
            "core": {
                "times": [{"name": "01", "day": 1, "start": 17, "end": 19}, {
                    "name": "01",
                    "day": 3,
                    "start": 17,
                    "end": 19
                }, {"name": "01", "day": 4, "start": 17, "end": 19}], "name": "01"
            }, "tutorial": {"times": [{"name": "05", "day": 2, "start": 7, "end": 9}], "name": "05"}
        }]



            [{
            "core": {
                "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
                    "name": "01",
                    "day": 3,
                    "start": 7,
                    "end": 9
                }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
            },
            "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
            "lab": {"times": [{"name": "01", "day": 4, "start": 1, "end": 7}], "name": "01"}
        }, {
            "core": {
                "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
                    "name": "01",
                    "day": 3,
                    "start": 7,
                    "end": 9
                }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
            },
            "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
            "lab": {"times": [{"name": "01", "day": 4, "start": 1, "end": 7}], "name": "01"}
        }, {
            "core": {
                "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
                    "name": "01",
                    "day": 3,
                    "start": 7,
                    "end": 9
                }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
            },
            "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
            "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
        }, {
            "core": {
                "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
                    "name": "01",
                    "day": 3,
                    "start": 7,
                    "end": 9
                }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
            },
            "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
            "lab": {"times": [{"name": "02", "day": 3, "start": 1, "end": 7}], "name": "02"}
        }, {
            "core": {
                "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
                    "name": "01",
                    "day": 3,
                    "start": 7,
                    "end": 9
                }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
            },
            "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
            "lab": {"times": [{"name": "03", "day": 2, "start": 1, "end": 7}], "name": "03"}
        }, {
            "core": {
                "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
                    "name": "01",
                    "day": 3,
                    "start": 7,
                    "end": 9
                }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
            },
            "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
            "lab": {"times": [{"name": "03", "day": 2, "start": 1, "end": 7}], "name": "03"}
        }, {
            "core": {
                "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
                    "name": "01",
                    "day": 3,
                    "start": 7,
                    "end": 9
                }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
            },
            "tutorial": {"times": [{"name": "01", "day": 1, "start": 9, "end": 13}], "name": "01"},
            "lab": {"times": [{"name": "04", "day": 1, "start": 1, "end": 7}], "name": "04"}
        }, {
            "core": {
                "times": [{"name": "01", "day": 1, "start": 7, "end": 9}, {
                    "name": "01",
                    "day": 3,
                    "start": 7,
                    "end": 9
                }, {"name": "01", "day": 5, "start": 11, "end": 13}], "name": "01"
            },
            "tutorial": {"times": [{"name": "03", "day": 1, "start": 13, "end": 17}], "name": "03"},
            "lab": {"times": [{"name": "04", "day": 1, "start": 1, "end": 7}], "name": "04"}
        }]

var c =
    [
        {"name":"01","day":1,"start":7,"end":9},
        {"name":"01","day":3,"start":7,"end":9},
        {"name":"01","day":5,"start":11,"end":13},
        {"name":"01","day":1,"start":9,"end":13},
        {"name":"01","day":4,"start":1,"end":7}
        ]