var APP_DATA = {
  "scenes": [
    {
      "id": "0-engine-room-2",
      "name": "Engine Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.6889785269082775,
        "pitch": 0.1330940198665509,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.3511256766469941,
          "pitch": 0.09969694291062403,
          "rotation": 0,
          "target": "1-cockpit-simulator"
        },
        {
          "yaw": 0.7602965673153523,
          "pitch": 0.10861258907142712,
          "rotation": 0,
          "target": "3-bridge-simulator"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.5227464764652385,
          "pitch": 0.12032602908852752,
          "title": "Engine Room 2",
          "text": "<div>This is the Engine Room at EXACT Colleges of Asia, where marine students gain hands-on experience and practical training in operating and maintaining ship engines.</div><div><br></div>"
        }
      ]
    },
    {
      "id": "1-cockpit-simulator",
      "name": "Cockpit Simulator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.298087240088762,
        "pitch": 0.08708662094328545,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.7390512363814867,
          "pitch": -0.022809241410149284,
          "rotation": 0,
          "target": "0-engine-room-2"
        },
        {
          "yaw": -1.7384311208714767,
          "pitch": 0.11747267423272945,
          "rotation": 3.141592653589793,
          "target": "2-engine-room-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.26865604624080675,
          "pitch": 0.09042858472007254,
          "title": "Cockpit Simulator",
          "text": "<div>This is the Cockpit Simulator at EXACT Colleges of Asia, dedicated for Maritime students to simulate maritime navigation and practice essential ship-handling skills in a realistic and controlled setting.</div><div><br></div>"
        }
      ]
    },
    {
      "id": "2-engine-room-1",
      "name": "Engine Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.466238673189352,
        "pitch": 0.04818087183664588,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.8610014181874242,
          "pitch": 0.08735077425928495,
          "rotation": 0.7853981633974483,
          "target": "1-cockpit-simulator"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8700915437759065,
          "pitch": 0.2618169368756593,
          "title": "Engine Room 1",
          "text": "<div>This is the Engine Room at EXACT Colleges of Asia, where marine students gain hands-on experience and practical training in operating and maintaining ship engines.</div><div><br></div>"
        }
      ]
    },
    {
      "id": "3-bridge-simulator",
      "name": "Bridge Simulator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.9846618269283702,
        "pitch": 0.01796660374417769,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.4074559772690467,
          "pitch": 0.025882495616880163,
          "rotation": 0,
          "target": "4-marine-faculty"
        },
        {
          "yaw": -1.4128919148700856,
          "pitch": 0.15435265932911335,
          "rotation": 3.141592653589793,
          "target": "0-engine-room-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.137029473936524,
          "pitch": 0.12923788723573892,
          "title": "Bridge Simulator",
          "text": "<div>This is the Bridge Simulator at EXACT Colleges of Asia, designed for Maritime students to practice and develop their navigation and ship-handling skills in a realistic environment.</div><div><br></div>"
        }
      ]
    },
    {
      "id": "4-marine-faculty",
      "name": "Marine faculty",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.8973556170920496,
        "pitch": 0.023416834967335376,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.8644871863706634,
          "pitch": 0.1166879379414798,
          "rotation": 0.7853981633974483,
          "target": "3-bridge-simulator"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7780995595376066,
          "pitch": -0.018615778851891918,
          "title": "Maritime Faculty",
          "text": "This is the Faculty Office of the College of Maritime (Engineering and Transportation) at EXACT Colleges of Asia, serving as the administrative center for faculty members specializing in maritime education."
        }
      ]
    }
  ],
  "name": "Engine Room 2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
