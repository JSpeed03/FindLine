var APP_DATA = {
  "scenes": [
    {
      "id": "0-faculty-office",
      "name": "Faculty Office",
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
        "yaw": -2.7992582135440482,
        "pitch": 0.06895865809286406,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.7349429719838767,
          "pitch": -0.013721203852052,
          "rotation": 0,
          "target": "6-clinic"
        },
        {
          "yaw": 0.732516014718616,
          "pitch": 0.10828724539828372,
          "rotation": 3.141592653589793,
          "target": "1-publication-office"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.6730574830152225,
          "pitch": 0.0745071680726852,
          "title": "Faculty Office",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the Faculty Office at EXACT Colleges of Asia, serving as a centralized hub for administrative support and coordination for faculty members across various departments.\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "1-publication-office",
      "name": "Publication Office",
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
        "yaw": 1.7509521743195524,
        "pitch": 0.24305222557176087,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.3179746405576367,
          "pitch": 0.08399714310964157,
          "rotation": 0,
          "target": "0-faculty-office"
        },
        {
          "yaw": -2.322783026020172,
          "pitch": 0.21445548520706126,
          "rotation": 3.141592653589793,
          "target": "2-guidance-office"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3487155065682046,
          "pitch": 0.4432632867906392,
          "title": "Publication Office",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the School Publication Office at EXACT Colleges of Asia, located in the main building, where student journalists and staff create and manage the school's publications and media content.\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "2-guidance-office",
      "name": "Guidance Office",
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
        "yaw": -0.7716829719430773,
        "pitch": 0.2949168825634114,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 2.2185106729302255,
          "pitch": 0.05223661732232898,
          "rotation": 0,
          "target": "1-publication-office"
        },
        {
          "yaw": 2.2185104335650943,
          "pitch": 0.2132680901413302,
          "rotation": 3.141592653589793,
          "target": "3-conference-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7716829719430773,
          "pitch": 0.2949168825634114,
          "title": "Guidance Office",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the Guidance Office at EXACT Colleges of Asia, located in the main building. It provides support and resources to students for academic, personal counseling, and career guidance.\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "3-conference-room",
      "name": "Conference Room",
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
        "yaw": 0.4509784225818194,
        "pitch": -0.04390624743612115,
        "fov": 2.0943951023931953
      },
      "linkHotspots": [
        {
          "yaw": 2.0769734430690727,
          "pitch": 0.10705582442077954,
          "rotation": 0,
          "target": "2-guidance-office"
        },
        {
          "yaw": 0.9687593823243823,
          "pitch": 0.1206412006983193,
          "rotation": 0,
          "target": "4-quadrangle-gymnasium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4688936941141506,
          "pitch": 0.1105182666816713,
          "title": "Conference Room",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the Conference Room at EXACT Colleges of Asia that is located in the main building (Dr. Marcos Hall). This is where the faculty members gather for meetings and discussions.\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "4-quadrangle-gymnasium",
      "name": "Quadrangle Gymnasium",
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
        "yaw": -1.1102064464777754,
        "pitch": -0.05305860996845624,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8959496675004104,
          "pitch": 0.05290159676629713,
          "rotation": 0,
          "target": "3-conference-room"
        },
        {
          "yaw": 2.009056651265361,
          "pitch": 0.07471131759990257,
          "rotation": 0,
          "target": "5-lighthouse"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1102064464777754,
          "pitch": -0.05305860996845624,
          "title": "Quadrangle Gymnasium",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the Quadrangle Gymnasium at EXACT Colleges of Asia that is located beside Dr. Marcos Hall. It serves as a hub for physical fitness activities, sports events and other activities.\n\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "5-lighthouse",
      "name": "Lighthouse",
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
        "yaw": -0.265131032078628,
        "pitch": -0.32167903500853434,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0251863360813012,
          "pitch": -0.012554677516634527,
          "rotation": 0,
          "target": "4-quadrangle-gymnasium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.38880869358204606,
          "pitch": -0.15883708846255118,
          "title": "Lighthouse",
          "text": "<div>This is the Lighthouse building at EXACT Colleges of Asia, located beside the main building. It houses the NSTP Office, providing support and resources for the National Service Training Program.</div><div><br></div>"
        }
      ]
    },
    {
      "id": "6-clinic",
      "name": "Clinic",
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
        "yaw": 0.04848108108038218,
        "pitch": 0.06904704835974584,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.8709923482712263,
          "pitch": 0.07170904769189512,
          "rotation": 0,
          "target": "7-library--1"
        },
        {
          "yaw": -1.4414518640149012,
          "pitch": 0.11676359092096433,
          "rotation": 0.7853981633974483,
          "target": "0-faculty-office"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.04848108108038218,
          "pitch": 0.06904704835974584,
          "title": "Clinic",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the Clinic that is located at Capt. Padilla Hall within EXACT Colleges of Asia. it provides essential healthcare services and support for the entire campus community.\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "7-library--1",
      "name": "Library  1",
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
        "yaw": -1.5261213374832607,
        "pitch": -0.14558606825423936,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.9802528204504704,
          "pitch": 0.06825179171247342,
          "rotation": 0,
          "target": "8-library-2"
        },
        {
          "yaw": 0.1598318821234006,
          "pitch": 0.11693702452934929,
          "rotation": 0,
          "target": "6-clinic"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5261213374832607,
          "pitch": -0.14558606825423936,
          "title": "Library 1",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the Library 1 Facility at EXACT Colleges of Asia that is located in the main building (Dr. Marcos Hall). It offers extensive resources and study spaces for students across various disciplines. It provides a quiet environment conducive to research, study, and academic enrichment.\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "8-library-2",
      "name": "Library 2",
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
        "yaw": 1.9211532359352184,
        "pitch": -0.02272011863593093,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.0881858810879947,
          "pitch": 0.13360876612292927,
          "rotation": 0,
          "target": "9-library-3"
        },
        {
          "yaw": 0.688029743811164,
          "pitch": 0.15426792749280693,
          "rotation": 0.7853981633974483,
          "target": "7-library--1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9211532359352184,
          "pitch": -0.02272011863593093,
          "title": "Library 2",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the Library 2 Facility at EXACT Colleges of Asia that is located in the main building (Dr. Marcos Hall). It offers extensive resources and study spaces for students across various disciplines. It provides a quiet environment conducive to research, study, and academic enrichment.\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "9-library-3",
      "name": "Library 3",
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
        "yaw": 1.1007838418551188,
        "pitch": 0.04782483053967823,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -3.107124767300771,
          "pitch": 0.0787382067046849,
          "rotation": 0,
          "target": "10-amphitheatre"
        },
        {
          "yaw": -0.5497920973277033,
          "pitch": 0.17093428365045327,
          "rotation": 0,
          "target": "8-library-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.1007838418551188,
          "pitch": 0.04782483053967823,
          "title": "Library 3",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the Library 3 Facility at EXACT Colleges of Asia that is located in the main building (Dr. Marcos Hall). It offers extensive resources and study spaces for students across various disciplines. It provides a quiet environment conducive to research, study, and academic enrichment.\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "10-amphitheatre",
      "name": "Amphitheatre",
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
        "yaw": -1.9738906662362634,
        "pitch": 0.11306894551414359,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.5500014956626718,
          "pitch": 0.08474344744106688,
          "rotation": 0,
          "target": "11-auditorium"
        },
        {
          "yaw": 0.612095131148271,
          "pitch": 0.026988379297364418,
          "rotation": 0,
          "target": "9-library-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.949144803289954,
          "pitch": 0.0883482710132455,
          "title": "Amphitheatre",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the Amphitheatre at EXACT Colleges of Asia, serving as a venue for various events, performances, and gatherings, promoting community engagement.\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "11-auditorium",
      "name": "Auditorium",
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
        "yaw": -1.8613161160244864,
        "pitch": 0.09539381916480139,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.2974160156085013,
          "pitch": -0.007792439690680553,
          "rotation": 6.283185307179586,
          "target": "12-tesda-training-center"
        },
        {
          "yaw": -2.2994060747703386,
          "pitch": 0.08643204265544391,
          "rotation": 3.141592653589793,
          "target": "10-amphitheatre"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.863546799533296,
          "pitch": 0.09539358549881172,
          "title": "Auditorium",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the Auditorium at Exact Colleges of Asia, located in the main building (Dr. Marcos Hall). It is a venue designed for lectures, presentations, and events, offering ample seating and advanced audiovisual facilities to support a range of academic and cultural activities.\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "12-tesda-training-center",
      "name": "Tesda Training center",
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
        "yaw": -1.429115430915651,
        "pitch": -0.010177151485660119,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.4099401134438043,
          "pitch": 0.18186394058504263,
          "rotation": 6.283185307179586,
          "target": "13-gymnasium-court"
        },
        {
          "yaw": 2.092932699551336,
          "pitch": 0.13164614020242915,
          "rotation": 0.7853981633974483,
          "target": "11-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8940444652854111,
          "pitch": 0.01607162298443754,
          "title": "Tesda Training Center",
          "text": "&nbsp;<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the TESDA Training Center at Exact Colleges of Asia, where welding courses are conducted. It provides hands-on training with modern equipment, ensuring students gain practical skills essential for the welding industry.\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "13-gymnasium-court",
      "name": "Gymnasium Court",
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
        "yaw": -1.1196682163902025,
        "pitch": -0.10416166411410721,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.32144493031576,
          "pitch": 0.026870455084013756,
          "rotation": 3.9269908169872414,
          "target": "14-parking-lot"
        },
        {
          "yaw": 2.6260122307455447,
          "pitch": 0.030729603276572703,
          "rotation": 2.356194490192345,
          "target": "12-tesda-training-center"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9853565477662087,
          "pitch": -0.02854520375565528,
          "title": "Gymnasium Court",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the Gymnasium Court at Exact Colleges of Asia. It offers a versatile space for various sports activities, physical education classes, and events, equipped with modern facilities to support athletic training and competitions.\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "14-parking-lot",
      "name": "Parking lot",
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
        "yaw": 1.5147814190281963,
        "pitch": -0.06101687095046415,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.9258803067300025,
          "pitch": 0.01324176182329495,
          "rotation": 0.7853981633974483,
          "target": "15-pool-area"
        },
        {
          "yaw": -3.0620563255807802,
          "pitch": 0.004260219374003782,
          "rotation": 5.497787143782138,
          "target": "13-gymnasium-court"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.1267474591310975,
          "pitch": 0.20603796572729216,
          "title": "Parking Lot",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the parking lot at EXACT Colleges of Asia that provides abundant space for students and faculty to park their vehicles conveniently near the main buildings.\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "15-pool-area",
      "name": "Pool area",
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
        "yaw": -2.177716004799345,
        "pitch": -0.041127712153997464,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.84399333000367,
          "pitch": 0.01655215692508527,
          "rotation": 0,
          "target": "16-training-center"
        },
        {
          "yaw": 0.4637417995813049,
          "pitch": 0.009969436718913371,
          "rotation": 0,
          "target": "14-parking-lot"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.267211378394304,
          "pitch": 0.31669772358571,
          "title": "Pool Area",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the pool area at EXACT Colleges of Asia, providing students with a venue for aquatic activities and swimming lessons, contributing to their fitness and recreational experiences.\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "16-training-center",
      "name": "Training Center",
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
        "yaw": 2.904227103018532,
        "pitch": -0.20757229559655244,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.630736582558992,
          "pitch": 0.006466056729516723,
          "rotation": 0,
          "target": "17-firefighting-area"
        },
        {
          "yaw": 0.1091954641671613,
          "pitch": 0.033585361779501,
          "rotation": 0,
          "target": "15-pool-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3458713374238798,
          "pitch": -0.12173970540727197,
          "title": "Training Center",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the EXACT Training Center that is dedicated to maritime training, it offers specialized facilities and programs for skill development and practical learning.\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "17-firefighting-area",
      "name": "Firefighting Area",
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
        "yaw": -1.7528882011581182,
        "pitch": 0.01176577443864879,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.8558824817280026,
          "pitch": -0.0292725874285793,
          "rotation": 0,
          "target": "18-man-made-area"
        },
        {
          "yaw": 1.3793737252382101,
          "pitch": -0.02631712573658085,
          "rotation": 0,
          "target": "16-training-center"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.143611016464284,
          "pitch": 0.21149267686565665,
          "title": "Firefighting Area",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the firefighting area at EXACT Colleges of Asia, dedicated to training purposes. This is the place where trainees engage in realistic scenarios for hands-on learning, gaining essential firefighting skills and preparedness.\n<br></span></font><div><br></div>"
        }
      ]
    },
    {
      "id": "18-man-made-area",
      "name": "Man-made Area",
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
        "yaw": -2.053543053948948,
        "pitch": -0.016414434828554647,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.1052777278013188,
          "pitch": -0.08812554078626356,
          "rotation": 0,
          "target": "17-firefighting-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.053543053948948,
          "pitch": -0.016414434828554647,
          "title": "Man-made River",
          "text": "<font color=\"#e4e6eb\" face=\"Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif\"><span style=\"font-size: 15px; white-space-collapse: preserve;\">This is the man-made river at EXACT Colleges of Asia, designed for Maritime training purposes. It provides an environment for practical exercises, enhancing training experiences for maritime students.\n<br></span></font><div><br></div>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
