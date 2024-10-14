var APP_DATA = {
  "scenes": [
    {
      "id": "0-tourism-faculty",
      "name": "Tourism faculty",
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
        "yaw": -1.50442988932984,
        "pitch": 0.06898932397076152,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.8870231951589185,
          "pitch": 0.05559311821239454,
          "rotation": 0,
          "target": "1-speech-lab"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.709859393839178,
          "pitch": 0.00891386287413809,
          "title": "Faculty Office of the College of Tourism Management",
          "text": "<div>This is the Faculty Office of the College of Tourism Management at EXACT Colleges of Asia, providing administrative support and resources for faculty members specializing in tourism education.</div><div><br></div>"
        }
      ]
    },
    {
      "id": "1-speech-lab",
      "name": "Speech lab",
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
        "yaw": 0.8233432352095633,
        "pitch": 0.011424191491290259,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.2600722903993855,
          "pitch": 0.08467875702604388,
          "rotation": 0,
          "target": "0-tourism-faculty"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.60471004231362,
          "pitch": 0.05448080641321695,
          "title": "Speech Laboratory",
          "text": "<div>This is the Speech Laboratory at EXACT Colleges of Asia that is located in the main building (Dr. Marcos Hall). where students improve their communication skills through guided practice and exercises.</div><div><br></div>"
        }
      ]
    }
  ],
  "name": "Tourism Faculty",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
