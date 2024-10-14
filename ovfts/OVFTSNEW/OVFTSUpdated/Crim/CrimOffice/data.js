var APP_DATA = {
  "scenes": [
    {
      "id": "0-criminology-faculty-office",
      "name": "Criminology Faculty Office",
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
        "yaw": 0.9075395130654531,
        "pitch": 0.07130656480193487,
        "fov": 1.4413225997054397
      },
      "linkHotspots": [
        {
          "yaw": 1.0830047883018779,
          "pitch": 0.20340370722487577,
          "rotation": 0,
          "target": "1-dr-sanggalang-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6544423045838244,
          "pitch": 0.022235250443149113,
          "title": "Criminology Faculty Office",
          "text": "<span>This is the Criminology Faculty Office located at Dr. Sanggalang Hall, serving as the administrative hub for faculty members specializing in Criminology Education.</span>"
        }
      ]
    },
    {
      "id": "1-dr-sanggalang-hall",
      "name": "Dr. Sanggalang Hall",
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
        "yaw": 0.6444452386615964,
        "pitch": 0.0018221524648627252,
        "fov": 1.4413225997054397
      },
      "linkHotspots": [
        {
          "yaw": 1.3740438706421845,
          "pitch": 0.0253362229975167,
          "rotation": 0,
          "target": "0-criminology-faculty-office"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.45121202114181536,
          "pitch": -0.2353385395329397,
          "title": "<span style=\"color: rgb(228, 230, 235); font-family: &quot;Segoe UI Historic&quot;, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif; font-size: 15px; white-space-collapse: preserve; background-color: rgb(76, 76, 76);\">Dr. Sanggalang Hall</span>",
          "text": "<span style=\"color: rgb(228, 230, 235); font-family: &quot;Segoe UI Historic&quot;, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif; font-size: 15px; white-space-collapse: preserve; background-color: rgb(76, 76, 76);\">Dr. Sanggalang Hall is one of the buildings at EXACT Colleges of Asia, houses the criminology department. This dedicated building provides specialized facilities and resources to support the criminology program.\n</span><div><span style=\"color: rgb(228, 230, 235); font-family: &quot;Segoe UI Historic&quot;, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif; font-size: 15px; white-space-collapse: preserve; background-color: rgb(76, 76, 76);\"><br></span></div>"
        }
      ]
    }
  ],
  "name": "CrimOffice",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
