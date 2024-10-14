var APP_DATA = {
  "scenes": [
    {
      "id": "0-comlab",
      "name": "ComLab",
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
        "yaw": -2.1252740045438774,
        "pitch": -0.029154439437768076,
        "fov": 1.4413225997054397
      },
      "linkHotspots": [
        {
          "yaw": -1.2913378920011667,
          "pitch": 0.0778689622924098,
          "rotation": 0,
          "target": "1-cois-faculty"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.349908810910282,
          "pitch": 0.019165637814316128,
          "title": "Computer Laboratory (College Department)",
          "text": "This is the Computer Laboratory (College Department) at EXACT Colleges of Asia that is located in the main building (Dr. Marcos Hall). Dedicated for students pursuing computer-related courses. It provides essential resources and tools for hands-on learning and practical application of computing skills."
        },
        {
          "yaw": -1.6042691761313002,
          "pitch": 0.2856094285507158,
          "title": "PC Specifications",
          "text": "Processor: i3 11th gen <br> Ram: 8gb DDR4 <br> Gpu: gt1030 4gb"
        }
      ]
    },
    {
      "id": "1-cois-faculty",
      "name": "CoIS Faculty",
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
        "yaw": -0.6497995061271169,
        "pitch": 0.04373165915667343,
        "fov": 1.4413225997054397
      },
      "linkHotspots": [
        {
          "yaw": -1.0724672333980472,
          "pitch": 0.1667021429914044,
          "rotation": 0,
          "target": "0-comlab"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.484067110853319,
          "pitch": -0.04174630373648469,
          "title": "Faculty Office for the College of Information Systems",
          "text": "This is the Faculty Office for the College of Information Systems at EXACT Colleges of Asia, located in the main building. It provides administrative support and resources for faculty members specializing in information systems education."
        }
      ]
    }
  ],
  "name": "ComLab",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
