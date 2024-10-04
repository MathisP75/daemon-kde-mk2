var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "UserBackgroundHints": ""
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.binaryclock",
                    "title": "Binary Clock"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "UserBackgroundHints": "ShadowBackground"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.piechart",
                            "showTitle": "false",
                            "title": "Memory Usage"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "memory/physical/used": "92,244,254"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"memory/physical/used\"]",
                            "lowPrioritySensorIds": "[\"memory/physical/total\"]",
                            "totalSensors": "[\"memory/physical/usedPercent\"]"
                        },
                        "/org.kde.ksysguard.piechart/General": {
                            "smoothEnds": "false"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor.memory",
                    "title": "Memory Usage"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "UserBackgroundHints": "ShadowBackground"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.linebars",
                            "showTitle": "false",
                            "title": "Total CPU Use"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "cpu/all/usage": "92,244,254",
                            "cpu/loadaverages/loadaverage1": "50,82,90"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"cpu/all/usage\",\"cpu/loadaverages/loadaverage1\"]",
                            "lowPrioritySensorIds": "[\"cpu/all/cpuCount\",\"cpu/all/coreCount\"]",
                            "totalSensors": "[\"cpu/all/usage\"]"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor.cpu",
                    "title": "Total CPU Use"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "displayedText": "Number"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.pager",
                    "title": "Pager"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "UserBackgroundHints": "ShadowBackground"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.linechart",
                            "showTitle": "false",
                            "title": "Network speed"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "network/all/download": "92,244,254",
                            "network/all/upload": "50,82,90"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"network/all/download\",\"network/all/upload\"]"
                        },
                        "/org.kde.ksysguard.linechart/General": {
                            "lineChartSmooth": "false"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor.net",
                    "title": "Network speed"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "displayedText": "Number"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.pager",
                    "title": "Pager"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "Applet-74:0,0,832,256,0;Applet-83:0,256,208,272,0;Applet-82:208,256,208,272,0;Applet-81:416,256,208,272,0;Applet-79:624,256,208,272,0;Applet-89:0,528,416,288,0;Applet-90:416,528,160,224,0;",
                    "ItemGeometries-2048x1280": "Applet-187:1232,832,256,304,0;Applet-185:1232,1136,128,96,0;Applet-256:1360,1136,624,96,0;Applet-191:1504,832,464,144,0;Applet-188:1504,992,464,128,0;Applet-189:3447.27,1160,176,54,0;",
                    "ItemGeometries-2560x1440": "Applet-74:0,0,832,256,0;Applet-83:0,256,208,272,0;Applet-82:208,256,208,272,0;Applet-81:416,256,208,272,0;Applet-79:624,256,208,272,0;",
                    "ItemGeometriesHorizontal": "Applet-187:1232,832,256,304,0;Applet-185:1232,1136,128,96,0;Applet-256:1360,1136,624,96,0;Applet-191:1504,832,464,144,0;Applet-188:1504,992,464,128,0;Applet-189:3447.27,1160,176,54,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/General": {
                    "ToolBoxButtonState": "top",
                    "ToolBoxButtonX": "563"
                },
                "/Wallpaper/org.kde.color/General": {
                    "Color": "32,13,20"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/mathis_daemon_kde/Pictures/Screenshots/Screenshot_20241003_104319.png",
                    "SlidePaths": "/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "1168",
                            "popupWidth": "641"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true",
                            "icon": "/home/mathis_daemon_kde/daemon2.0/Assets/path12.svg",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "containmentType": "Plasma",
                            "lengthPixels": "10"
                        }
                    },
                    "plugin": "org.kde.latte.spacer"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "iconSpacing": "0",
                            "launchers": "applications:firefox.desktop,applications:systemsettings.desktop,applications:org.kde.konsole.desktop,preferred://filemanager,applications:code-oss-url-handler.desktop,applications:org.kde.plasma.themeexplorer.desktop,applications:gimp.desktop,applications:org.inkscape.Inkscape.desktop,applications:org.kde.okular.desktop,applications:org.kde.kirigami2.gallery.desktop,applications:org.kde.iconexplorer.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.plasm6desktopindicator"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "60",
                            "popupHeight": "5",
                            "popupWidth": "401"
                        }
                    },
                    "plugin": "com.github.tilorenz.compact_pager"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "3",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 3.5555555555555554,
            "hiding": "normal",
            "location": "left",
            "maximumLength": 69.11111111111111,
            "minimumLength": 69.11111111111111,
            "offset": 0
        },
        {
            "alignment": "right",
            "applets": [
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "placeHolderIcon": "blueman-untrust",
                            "useActivityIcon": "false"
                        }
                    },
                    "plugin": "org.kde.windowtitle.Fork"
                },
                {
                    "config": {
                    },
                    "plugin": "zayron.simple.separator"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "show_requestLogout": "true",
                            "show_requestReboot": "true",
                            "show_suspendToRam": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.lock_logout"
                },
                {
                    "config": {
                    },
                    "plugin": "zayron.simple.separator"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "380",
                            "popupWidth": "362"
                        }
                    },
                    "plugin": "org.kde.plasma.networkmanagement"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "90",
                            "popupHeight": "432",
                            "popupWidth": "432"
                        }
                    },
                    "plugin": "org.kde.plasma.bluetooth"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "597",
                            "popupWidth": "432"
                        },
                        "/General": {
                            "migrated": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.volume"
                },
                {
                    "config": {
                        "/General": {
                            "showPercentage": ""
                        }
                    },
                    "plugin": "org.kde.plasma.battery"
                },
                {
                    "config": {
                    },
                    "plugin": "zayron.simple.separator"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "701",
                            "popupWidth": "432"
                        }
                    },
                    "plugin": "org.kde.plasma.clipboard"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "60",
                            "popupHeight": "400",
                            "popupWidth": "560"
                        }
                    },
                    "plugin": "org.kde.plasma.devicenotifier"
                },
                {
                    "config": {
                        "/Appearance": {
                            "selectedIcon": "org.kde.archUpdate"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "archNews": "true",
                            "aur": "true",
                            "checkOnStartup": "true",
                            "interval": "false",
                            "wrapper": "/usr/bin/yay"
                        },
                        "/Miscellaneous": {
                            "timestamp": "1727785253000"
                        },
                        "/Upgrade": {
                            "terminal": "/usr/bin/alacritty"
                        }
                    },
                    "plugin": "com.github.exequtic.apdatifier"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "90",
                            "popupHeight": "324",
                            "popupWidth": "324"
                        },
                        "/General": {
                            "history": "#0d0b16,#351117,#200d14,#4e1019,#060c19"
                        }
                    },
                    "plugin": "org.kde.plasma.colorpicker"
                },
                {
                    "config": {
                    },
                    "plugin": "zayron.simple.separator"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "55"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "PreloadWeight": "80",
                            "popupHeight": "223",
                            "popupWidth": "148"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.piechart",
                            "showTitle": "true",
                            "title": "Total CPU Use"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "cpu/all/usage": "53,93,101",
                            "gpu/all/usage": "53,56,101"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"cpu/all/usage\"]",
                            "lowPrioritySensorIds": "[\"cpu/all/cpuCount\",\"cpu/all/coreCount\"]",
                            "totalSensors": "[\"cpu/all/usage\"]"
                        },
                        "/org.kde.ksysguard.piechart/General": {
                            "smoothEnds": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.cpu"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "PreloadWeight": "70",
                            "popupHeight": "63",
                            "popupWidth": "148"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.textonly",
                            "showTitle": "false",
                            "title": "Total CPU Use"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "cpu/all/averageFrequency": "61,53,101",
                            "cpu/all/usage": "31,12,19"
                        },
                        "/SensorLabels": {
                            "cpu/all/usage": "CPU"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"cpu/all/usage\"]",
                            "lowPrioritySensorIds": "[\"cpu/all/cpuCount\",\"cpu/all/coreCount\"]",
                            "totalSensors": "[\"cpu/all/usage\"]"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.cpu"
                },
                {
                    "config": {
                    },
                    "plugin": "zayron.simple.separator"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "PreloadWeight": "55",
                            "popupHeight": "215",
                            "popupWidth": "148"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.piechart",
                            "showTitle": "false",
                            "title": "Total CPU Use"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "cpu/all/usage": "53,93,101",
                            "memory/physical/usedPercent": "24,255,255"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"memory/physical/usedPercent\"]",
                            "lowPrioritySensorIds": "[]",
                            "totalSensors": "[]"
                        },
                        "/org.kde.ksysguard.piechart/General": {
                            "smoothEnds": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.cpu"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "PreloadWeight": "55",
                            "popupHeight": "22",
                            "popupWidth": "148"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.textonly",
                            "showTitle": "false",
                            "title": "Total CPU Use"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "cpu/all/usage": "53,93,101",
                            "memory/physical/usedPercent": "31,12,19"
                        },
                        "/SensorLabels": {
                            "memory/physical/usedPercent": "RAM"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"memory/physical/usedPercent\"]",
                            "lowPrioritySensorIds": "[]",
                            "totalSensors": "[]"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.cpu"
                },
                {
                    "config": {
                    },
                    "plugin": "zayron.simple.separator"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.piechart",
                            "title": "Total CPU Use"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "cpu/all/usage": "53,93,101",
                            "gpu/all/usage": "24,255,255"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"gpu/all/usage\"]",
                            "lowPrioritySensorIds": "[]",
                            "totalSensors": "[]"
                        },
                        "/org.kde.ksysguard.piechart/General": {
                            "smoothEnds": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.cpu"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "PreloadWeight": "70",
                            "popupHeight": "22",
                            "popupWidth": "148"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.textonly",
                            "showTitle": "false",
                            "title": "Total CPU Use"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "cpu/all/usage": "53,93,101",
                            "gpu/all/usage": "31,12,19",
                            "gpu/all/usedVram": "101,64,53",
                            "gpu/gpu0/usage": "32,13,20"
                        },
                        "/SensorLabels": {
                            "gpu/all/usage": "GPUs"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"gpu/all/usage\"]",
                            "lowPrioritySensorIds": "[]",
                            "totalSensors": "[]"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.cpu"
                },
                {
                    "config": {
                    },
                    "plugin": "zayron.simple.separator"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.netspeedWidget"
                },
                {
                    "config": {
                    },
                    "plugin": "zayron.simple.separator"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "sensors": "[{\"name\":\"GPU 1 Temperature\",\"sensorId\":\"gpu/gpu0/temperature\"},{\"name\":\"Maximum CPU Temperature\",\"sensorId\":\"cpu/all/maximumTemperature\"},{\"name\":\"Minimum CPU Temperature\",\"sensorId\":\"cpu/all/minimumTemperature\"}]"
                        }
                    },
                    "plugin": "org.kde.olib.thermalmonitor"
                },
                {
                    "config": {
                    },
                    "plugin": "zayron.simple.separator"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "fontFamily": "Default",
                            "fontSize": "8",
                            "wattageThreshold": "68"
                        }
                    },
                    "plugin": "org.kde.plasma.powerusage"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.mediabar"
                },
                {
                    "config": {
                    },
                    "plugin": "zayron.simple.separator"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                },
                {
                    "config": {
                    },
                    "plugin": "com.himdek.kde.plasma.overview"
                },
                {
                    "config": {
                    },
                    "plugin": "zayron.simple.separator"
                },
                {
                    "config": {
                        "/Appearance": {
                            "dateDisplayFormat": "BesideTime",
                            "use24hFormat": "2"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "zayron.simple.separator"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "95",
                            "popupHeight": "432",
                            "popupWidth": "324"
                        }
                    },
                    "plugin": "org.kde.plasma.notifications"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 2,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 113.77777777777777,
            "minimumLength": 110.22222222222223,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
