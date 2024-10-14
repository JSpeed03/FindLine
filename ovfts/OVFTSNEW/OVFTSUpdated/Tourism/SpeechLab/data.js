var APP_DATA = {
  "scenes": [
    {
      "id": "0-speechlab",
      "name": "SpeechLab",
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
        "yaw": 0.8158644080015556,
        "pitch": -0.04555381162150951,
        "fov": 1.4413225997054397
      },
      "linkHotspots": [
        {
          "yaw": 1.2607240332272625,
          "pitch": 0.09754096158412295,
          "rotation": 0,
          "target": "1-tourismfaculty"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5796450640027349,
          "pitch": 0.03967768409725991,
          "title": "Speech Laboratory",
          "text": "This is the Speech Laboratory at EXACT Colleges of Asia that is located in the main building (Dr. Marcos Hall). where students improve their communication skills through guided practice and exercises."
        }
      ]
    },
    {
      "id": "1-tourismfaculty",
      "name": "TourismFaculty",
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
        "yaw": -1.4687560021156596,
        "pitch": -0.07005104513967453,
        "fov": 1.4413225997054397
      },
      "linkHotspots": [
        {
          "yaw": 1.8842123428003106,
          "pitch": 0.125674342794726,
          "rotation": 0,
          "target": "0-speechlab"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.695716791102381,
          "pitch": 0.0051287390281817835,
          "title": "Faculty Office of the College of Tourism Management",
          "text": "This is the Faculty Office of the College of Tourism Management at EXACT Colleges of Asia, providing administrative support and resources for faculty members specializing in tourism education."
        }
      ]
    }
  ],
  "name": "Speechlab",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
