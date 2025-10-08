//Types
import { ProjectType } from '../config/types'

export const projects: Array<ProjectType> = [
  {
    id: 0,
    title: `RetrofitAR - Future of Construction`,
    imgPath: '/assets/projects/RetrofitAR/thumbnail/thumbnail.mp4',
    mainsTag: ['HCI', 'Mixed Reality'],
    secondsTags: ['HCI'],
    filter: 'ALL',
    imgAbout: '/assets/projects/RetrofitAR/cover.png',
    client: [
      `An Industrial-Level`,
      `Mixed Reality Application`,
      `For the Construction Industry`
    ],
    role: [
      `Skillset:`,
      `Unity3D, C#`,
      `Computer Vision`,
      `Spatial Computing`,
      `Mixed Reality Toolkit (MRTK)`,
      `Human Computer Interaction (HCI)`,
    ],
    credits: [
      `Roles:`,
      `Lead Developer`,
      `Co-lead UX/UI Designer`,
      `Team:`,
      `Fraunhofer CMI Energy Team (10+ people)`,
      `Funder:`,
      `Department of Energy (DOE)`
    ],
    description: [
      {
        title: `RetrofitAR: What and Why?`,
        desc: `The U.S. has roughly 160–170 million people living in houses, with 70% residing in single-family homes—the primary target for exterior retrofits. Yet today, deep wall retrofits remain costly, error-prone, and heavily labor-intensive, slowing the nation’s progress toward energy-efficient housing.\n\nTo address this, we developed RetrofitAR, an Augmented Reality application for Microsoft HoloLens 2 that redefines how workers with limited training install prefabricated insulation panel blocks (PBs) and trim. Instead of relying on traditional paper instructions, semi-skilled workers receive real-time, visual guidance that shows exactly which PB to select from the pallet and precisely where to place it on the façade—turning a complex process into an intuitive, step-by-step workflow.\n\nBacked by over $6 million in funding from the U.S. Department of Energy (DOE), field demonstrations proved RetrofitAR’s transformative impact: two semi-skilled workers installed a full 10’×20’ wall section outdoors in just 14 minutes, compared with 3.5 hours using traditional methods—a 15× increase in speed. Scaled to a full house, this translates to completing deep retrofits in under 3 days by a two-person crew, at costs below $6/ft². RetrofitAR has been piloted in Massachusetts homes and will undergo further testing in cold-climate states including Pennsylvania, New Hampshire, and Vermont.`,
        side: 'left',
      },
      {
        title: `Tech Specs`,
        desc: `QR Code Recognition (Computer Vision, HCI)\n\nWe leveraged QR codes for robust and reliable tracking of panel blocks (PBs) in dynamic outdoor environments. Each PB is tagged with a unique QR code, allowing the HoloLens 2 to quickly and accurately identify and track individual blocks during installation. This approach ensures precise placement guidance, even under challenging lighting conditions and varying weather.\n\nSpatial Mapping and Anchoring\n\nWe developed a custom spatial mapping and anchoring system based on Azure services that allows the HoloLens 2 to create a detailed 3D map of the building façade. This enables the application to accurately position virtual PBs in relation to the real-world structure, ensuring that workers receive precise placement instructions.\n\nPrecise, Concise, and User-fridnely UX/UI Design\n\nWe utilized Microsoft’s Mixed Reality Toolkit (MRTK) to streamline development and implement best practices for user interaction and experience design. We developed a robust framework for building intuitive interfaces and interactions tailored to the HoloLens 2 platform. User can simply show/hide the menu system by raising/lowering their palms to interact with the AR system.`,
        side: 'right',
      },
      // {
      //   title: `POST-PRODUCTION`,
      //   desc: `Une fois l’animation de chaque scène terminée, on passe au montage, il faut assembler toutes les scènes pour en faire une vidéo. C’est aussi l’étape de tous les réglages, on accorde les violons, toutes les scènes doivent s’enchaîner comme prévu dans le scénario. C’est à cette étape que l’on rajoute la partie audio, le sound design qui va venir habillé de manière auditive la vidéo.`,
      //   side: 'left',
      // },
    ],
    renderFinal: true,
    hrefButtonRenderFinal: '#',
    videoPathRenderFinal: `https://www.youtube.com/watch?v=zx91N345Wzc`,
    // Dayong: Optional poster image for the video (use an existing image or add a dedicated poster)
    videoPoster: '/assets/projects/RetrofitAR/shed/shed.jpg',
    typeRenderFinal: 'video',
    renderFinalArray: true,
    renderFinalContent: [
      [
        `https://youtu.be/qhf9uMGCIiI`,
        `/assets/projects/RetrofitAR/ui/magicball.jpg`,
      ],
      [
        `/assets/projects/RetrofitAR/ui/flowchart.png`,
        `/assets/projects/RetrofitAR/ui/lsa.png`,
      ],
    ],
  },
  {
    id: 1,
    title: `DiagramAR - Visualize Geometry in AR (Boston University)`,
    imgPath: '/assets/projects/DiagramAR/thumbnail.png',
    mainsTag: ['HCI', 'iOS & Android',],
    secondsTags: ['HCI'],
    filter: 'ALL',
    imgAbout: '/assets/projects/DiagramAR/cover.png',
    client: [
      `An Innovative App for`,
      `Learning CS132 (Linear Algebra) at`,
      `Boston University`
    ],
    role: [
      `Skillset:`,
      `Unity3D, Shader, C#`,
      `Vuforia, iOS, Android`,
      `Human Computer Interaction (HCI)`,
      `Augmented Reality, Machine Learning`,
    ],
    credits: [
      `Role:`,
      `Lead Android Developer`,
      `Supervisor:`,
      `Prof. Mark Crovella, Boston University`,
    ],
    description: [
      {
        title: `DiagramAR: What and Why?`,
        desc: `As many students have experienced, trying to understand complex 3-dimensional diagrams displayed on a 2-dimensional textbook page can be quite confusing. DiagramAR solves this problem by efficiently converting 2D Matplotlib figures from lecture notes into immersive AR visualizations in real time. The user can move the figure in their surroundings and manipulate the values of the figure’s equations on their smart devices.\n\nThis app was originally developed at Boston University to support teaching introductory linear algebra (by Prof. Mark Crovella). It currently supports visualizations for fundamental linear algebra concepts, such as vectors, lines, planes, and curved surfaces.`,
        side: 'left',
      },
      {
        title: `Tech Specs`,
        desc: `QR Code Encoding\n\nWhen an instructor creates a 2D figure, the attributes of that figure are stored in a JSON file. This file can be delivered to the app via a menu system, or can be encoded in a QR code right next to the 2D figure in the lecture notes. For less complex figures with smaller JSON files, the app can obtain a JSON string that is encoded directly within the QR code, requiring no internet connection for the user.\n\nSeamless Integration Between Lectures and the App\n\nFigures can be made available on the DiagramAR app as automatic byproducts of the instructor’s preparation of the lecture notes. In this way, the AR figures are created with little additional work on both the students’ and the instructor's part.`,
        side: 'right',
      },
      {
        title: `Try It Out!`,
        desc: ``,
        side: 'right',
        buttonText: 'Download Android APK',
        buttonUrl: 'https://drive.google.com/file/d/184JfUsO_A6i_wSrlWodvud2R0bm_0gHb/view?usp=share_link',
      },
    ],
    renderFinal: false,
    hrefButtonRenderFinal: '#',
    typeRenderFinal: 'video',
    videoPathRenderFinal: 'https://www.instagram.com/p/CMHdAjaj-6s/?igsh=Y2drZXo4OGJtN2px',
    renderFinalArray: true,
    renderFinalContent: [
      [
        'https://www.instagram.com/p/CMHdAjaj-6s/?igsh=Y2drZXo4OGJtN2px',
        `/assets/projects/DiagramAR/gallary/add_equation.png`,
        `/assets/projects/DiagramAR/gallary/menu.png`,
      ],
      [
        `/assets/projects/DiagramAR/gallary/floor.png`,
        `/assets/projects/DiagramAR/gallary/cup.png`,
        `/assets/projects/DiagramAR/gallary/qr_code.png`,
      ],
    ],
  },
  {
    id: 2,
    title: `Auto-3D Mesh Generation`,
    imgPath: '/assets/projects/MeshGeneration/thumbnail.png',
    mainsTag: ['3D Printing', 'Mesh'],
    secondsTags: ['3D',],
    filter: 'ALL',
    imgAbout: '/assets/projects/MeshGeneration/cover.png',
    client: [
      `A Tool that can Automatically Convert`,
      `Raw Scanned Point Cloud Data into`,
      `Watertigiht 3D Meshes for 3D Printing`
    ],
    role: [
      `Skillset:`,
      `Python, Open3D`,
      `MeshLab, Blender`,
      `3D Imaging, 3D Printing`,
    ],
    credits: [
      `Role:`,
      `StartUp Tech Collaborator`,
    ],
    description: [
      {
        title: `Why Did I Create This Tool?`,
        desc: `Our feet deserve better care when it comes to choosing shoes.\n\nIn most footwear brands, size is almost the only factor considered during selection. Yet our feet are far more complex, and this “one-size-fits-all” approach often leads to discomfort and even long-term health issues.\n\nTo address this, I collaborated with Fitasy, a technology startup founded by MIT engineers that leverages spatial AI and 3D printing to create custom-fit footwear, to develop an automated middleware that can transform raw scanned foot scans into watertight 3D meshes (e.g., STL files), which can be directly used for 3D printing and manufacturing.\n\nThis lightweight (<100MB) tool plays a critical role in the workflow. With it, users can quickly generate a 3D-printable mesh simply by feeding in point cloud data containing xyz coordinates from a foot scan.`,
        side: 'left',
      },
      {
        title: `Tech Specs`,
        desc: `ICP (Iterative Closest Point) Alignment\n\nThe input point clouds might contain multiple partial scans of a foot (bottom, top, sides, etc), which need to be aligned into a single coordinate system. I implemented the ICP algorithm to iteratively refine the alignment by minimizing the distance between corresponding points in overlapping regions. This step ensures that fragmented point clouds are seamlessly combined into a complete, anatomically accurate foot geometry\n\nPoisson Surface Reconstruction\n\nTo convert the aligned point cloud into a watertight mesh, we employed Poisson surface reconstruction. This method estimates a smooth surface that best fits the input points while ensuring that the resulting mesh is closed and free of holes.\n\nMesh Post-Processing\n\nAfter generating the initial mesh, we applied several post-processing steps to enhance its quality. This includes mesh simplification to reduce polygon count while preserving detail, smoothing to eliminate noise, and hole filling to ensure the mesh is watertight and ready for 3D printing.`,
        side: 'right',
      },
    ],
    renderFinal: true,
    // Dayong: use inline PDF preview for project deliverable
    hrefButtonRenderFinal: '/assets/projects/MeshGeneration/mesh.pdf',
    typeRenderFinal: 'pdf',
    documentPathRenderFinal: '/assets/projects/MeshGeneration/mesh.pdf',
    documentButtonText: 'Download PDF',
    renderFinalArray: true,
    renderFinalContent: [
      [
        `/assets/projects/MeshGeneration/icp.png`,
      ],
    ],
  },
  {
    id: 3,
    title: `A Comparative Study on Performance of XML parser APIs`,
    imgPath: '/assets/projects/XML/thumbnail.png',
    mainsTag: ['Publications', 'ACM'],
    secondsTags: ['Publications',],
    filter: 'ALL',
    imgAbout: '/assets/projects/XML/cover.png',
    client: [
      `A Comparative Study on Performance of`,
      `XML Parser APIs (DOM and SAX) `,
      `in Parsing Efficiency`
    ],
    role: [
      `Role:`,
      `First Author`,
      `Paper Presenter at University of Malaya, Kuala Lumpur, Malaysia`,
      `Conference:`,
      `The 3rd International Conference on Cryptography, Security and Privacy (ICCSP)`,
    ],
    credits: [
      // `Role:`,
      // `StartUp Tech Collaborator`,
    ],
    description: [
      {
        title: `Abstract`,
        desc: `As a semi-structure language, XML is widely used in converting unstructured data to structured data due to its simplicity, extendibility and interoperability. There are numerous XML parser APIs that perform the same function of parsing XML document. This paper compares the performance between two famous XML parser APIs, DOM and SAX, in terms of speed, memory consumption and modifiability in parsing process. This experiment concluded that DOM API takes more time, more memory with higher level of modifiability while SAX API takes less time, less memory with lower level of modifiability.  `,
        side: 'left',
        buttonText: 'View on ACM Digital Library',
        buttonUrl: 'https://dl.acm.org/doi/10.1145/3309074.3309124',
      },
      // {
      //   title: `Tech Specs`,
      //   desc: `ICP (Iterative Closest Point) Alignment\n\nThe input point clouds might contain multiple partial scans of a foot (bottom, top, sides, etc), which need to be aligned into a single coordinate system. I implemented the ICP algorithm to iteratively refine the alignment by minimizing the distance between corresponding points in overlapping regions. This step ensures that fragmented point clouds are seamlessly combined into a complete, anatomically accurate foot geometry\n\nPoisson Surface Reconstruction\n\nTo convert the aligned point cloud into a watertight mesh, we employed Poisson surface reconstruction. This method estimates a smooth surface that best fits the input points while ensuring that the resulting mesh is closed and free of holes.\n\nMesh Post-Processing\n\nAfter generating the initial mesh, we applied several post-processing steps to enhance its quality. This includes mesh simplification to reduce polygon count while preserving detail, smoothing to eliminate noise, and hole filling to ensure the mesh is watertight and ready for 3D printing.`,
      //   side: 'right',
      // },
    ],
    renderFinal: true,
    // Dayong: use inline PDF preview for project deliverable
    hrefButtonRenderFinal: 'https://dl.acm.org/doi/10.1145/3309074.3309124',
    typeRenderFinal: 'pdf',
    documentPathRenderFinal: '/assets/projects/XML/paper.pdf',
    documentButtonText: 'View on ACM Digital Library',
    renderFinalArray: true,
    renderFinalContent: [
      [
        // `/assets/projects/MeshGeneration/icp.png`,
      ],
    ],
  },
  {
    id: 4,
    title: `RumourClock: Visual Representation of Online Romour Spreading`,
    imgPath: '/assets/projects/Rumour/thumbnail.png',
    mainsTag: ['Publications', 'Visual Sociology'],
    secondsTags: ['Publications',],
    filter: 'ALL',
    imgAbout: '/assets/projects/Rumour/cover.png',
    client: [
      `RumourClock: `,
      `A Breakthrough in Visualizing`,
      `Online Rumors and misinformation Spreading`,
    ],
    role: [
      `Role:`,
      `First Author`,
      `Conference:`,
      `The 2nd International Conference on Future Smart Cities`,
      `Springer Nature:`,
      `Resilient and Responsible Smart Cities 2021 Volume 1`,
    ],
    credits: [
      // `Role:`,
      // `StartUp Tech Collaborator`,
    ],
    description: [
      {
        title: `RumourClock: What and Why?`,
        desc: `In today’s hyper-connected world, misinformation spreads as fast — or faster — than verified facts. Platforms like Facebook, Twitter, and Instagram face mounting challenges to identify and contain online rumors that fuel social unrest, health misinformation, or political polarization.\n\nWe proposed RumourClock, an advanced visual analytics system designed to represent the scale, pace, and dynamics of online rumor propagation.\n\nRumorClock is a time-aware, scalable visualization model that tracks and compares online rumor spread across large social networks. Unlike traditional tools that rely on static text or simplified graphs, RumorClock offers a dynamic, multi-dimensional lens to understand how rumors evolve.`,
        side: 'left',
        // buttonText: 'View on ACM Digital Library',
        // buttonUrl: 'https://dl.acm.org/doi/10.1145/3309074.3309124',
      },
      {
        title: `Highlights of RumourClock`,
        desc: `Scalable Rumor Representation: Capable of handling massive data from multiple rumor sources across extended timeframes.\n\nTemporal Comparison: Visualizes how different rumors surge, fade, or intersect over time, helping researchers and platforms pinpoint “viral windows.”\n\nInsight-Driven Visualization: Offers more than just graphics — delivers actionable intelligence for public policy, social media governance, and digital journalism.`,
        side: 'right',
        buttonText: 'View on Springer Nature',
        buttonUrl: 'https://link.springer.com/chapter/10.1007/978-3-030-63567-1_9',
      },
    ],
    renderFinal: true,
    // Dayong: use inline PDF preview for project deliverable
    hrefButtonRenderFinal: 'https://link.springer.com/chapter/10.1007/978-3-030-63567-1_9',
    typeRenderFinal: 'pdf',
    documentPathRenderFinal: '/assets/projects/Rumour/paper.pdf',
    documentButtonText: 'View on Springer Nature',
    renderFinalArray: true,
    renderFinalContent: [
      [
        // `/assets/projects/MeshGeneration/icp.png`,
      ],
    ],
  },
  {
    id: 5,
    title: `Sahara's Miracle - A Cyberpunk City Built with Maya`,
    imgPath: '/assets/projects/Sahara/thumbnail.png',
    mainsTag: ['3D', 'Maya'],
    secondsTags: ['3D'],
    filter: 'ALL',
    imgAbout: '/assets/projects/Sahara/cover.png',
    client: [
      `A Cyberpunk Style 3D City`,
      `Built with Autodesk Maya and Python`,
    ],
    role: [
      `Skillset:`,
      `Designing, Imagination`,
      `3D Modeling, Texturing, Lighting`,
    ],
    credits: [
      `Roles:`,
      `Designer, Modeler, Editor`,
    ],
    description: [
      {
        title: `Background Story`,
        desc: `In the near future, artificial intelligence has reached unprecedented heights, yet human life continues to decline. Out of necessity, a city was built in the vast Sahara Desert, a towering cyberpunk fortress known as Sahara’s Miracle. Its skyline is guarded by colossal ULTRA warriors, while a radiant bridge reminiscent of Norse legend forms the city’s heart, flanked by fighter jets ready to defend its people.\n\nThe city appears indestructible, a monument to technology and survival. But when night falls, beneath the glowing arches and shadowed corridors, the true human stories -  fragile, hidden, and enduring - emerge.`,
        side: 'left',
      },
    ],
    renderFinal: true,
    hrefButtonRenderFinal: '#',
    videoPathRenderFinal: `https://www.youtube.com/watch?v=BRchJgm0xKA`,
    // Dayong: Optional poster image for the video (use an existing image or add a dedicated poster)
    videoPoster: '/assets/projects/Sahara/thumbnail.png',
    typeRenderFinal: 'video',
    renderFinalArray: true,
    renderFinalContent: [
      [
        '/assets/projects/Sahara/gallery/draft1.png',
        '/assets/projects/Sahara/gallery/draft3.png',
      ],
      [
        '/assets/projects/Sahara/gallery/draft2.png',
        '/assets/projects/Sahara/gallery/draft4.png',
      ],
      [
        '/assets/projects/Sahara/gallery/prime.png',
        '/assets/projects/Sahara/gallery/final1.png',
      ],
      [
        '/assets/projects/Sahara/gallery/final2.png',
        '/assets/projects/Sahara/gallery/final3.png',
      ],
    ],
  },
  {
    id: 6,
    title: `Yong Bro - Educational Content Creator`,
    imgPath: '/assets/projects/Yong/thumbnail.png',
    mainsTag: ['Social Media', 'Educational'],
    secondsTags: ['Social Media'],
    filter: 'ALL',
    imgAbout: '/assets/projects/RetrofitAR/cover.png',
    client: [
      `An Industrial-Level`,
      `Mixed Reality Application`,
      `For the Construction Industry`
    ],
    role: [
      `Skillset:`,
      `Unity3D, C#`,
      `Computer Vision`,
      `Spatial Computing`,
      `Mixed Reality Toolkit (MRTK)`,
      `Human Computer Interaction (HCI)`,
    ],
    credits: [
      `Roles:`,
      `Lead Developer`,
      `Co-lead UX/UI Designer`,
      `Team:`,
      `Fraunhofer CMI Energy Team (10+ people)`,
      `Funder:`,
      `Department of Energy (DOE)`
    ],
    description: [
      {
        title: `RetrofitAR: What and Why?`,
        desc: `The U.S. has roughly 160–170 million people living in houses, with 70% residing in single-family homes—the primary target for exterior retrofits. Yet today, deep wall retrofits remain costly, error-prone, and heavily labor-intensive, slowing the nation’s progress toward energy-efficient housing.\n\nTo address this, we developed RetrofitAR, an Augmented Reality application for Microsoft HoloLens 2 that redefines how workers with limited training install prefabricated insulation panel blocks (PBs) and trim. Instead of relying on traditional paper instructions, semi-skilled workers receive real-time, visual guidance that shows exactly which PB to select from the pallet and precisely where to place it on the façade—turning a complex process into an intuitive, step-by-step workflow.\n\nBacked by over $6 million in funding from the U.S. Department of Energy (DOE), field demonstrations proved RetrofitAR’s transformative impact: two semi-skilled workers installed a full 10’×20’ wall section outdoors in just 14 minutes, compared with 3.5 hours using traditional methods—a 15× increase in speed. Scaled to a full house, this translates to completing deep retrofits in under 3 days by a two-person crew, at costs below $6/ft². RetrofitAR has been piloted in Massachusetts homes and will undergo further testing in cold-climate states including Pennsylvania, New Hampshire, and Vermont.`,
        side: 'left',
      },
      {
        title: `Tech Specs`,
        desc: `QR Code Recognition (Computer Vision, HCI)\n\nWe leveraged QR codes for robust and reliable tracking of panel blocks (PBs) in dynamic outdoor environments. Each PB is tagged with a unique QR code, allowing the HoloLens 2 to quickly and accurately identify and track individual blocks during installation. This approach ensures precise placement guidance, even under challenging lighting conditions and varying weather.\n\nSpatial Mapping and Anchoring\n\nWe developed a custom spatial mapping and anchoring system based on Azure services that allows the HoloLens 2 to create a detailed 3D map of the building façade. This enables the application to accurately position virtual PBs in relation to the real-world structure, ensuring that workers receive precise placement instructions.\n\nPrecise, Concise, and User-fridnely UX/UI Design\n\nWe utilized Microsoft’s Mixed Reality Toolkit (MRTK) to streamline development and implement best practices for user interaction and experience design. We developed a robust framework for building intuitive interfaces and interactions tailored to the HoloLens 2 platform. User can simply show/hide the menu system by raising/lowering their palms to interact with the AR system.`,
        side: 'right',
      },
      // {
      //   title: `POST-PRODUCTION`,
      //   desc: `Une fois l’animation de chaque scène terminée, on passe au montage, il faut assembler toutes les scènes pour en faire une vidéo. C’est aussi l’étape de tous les réglages, on accorde les violons, toutes les scènes doivent s’enchaîner comme prévu dans le scénario. C’est à cette étape que l’on rajoute la partie audio, le sound design qui va venir habillé de manière auditive la vidéo.`,
      //   side: 'left',
      // },
    ],
    renderFinal: true,
    hrefButtonRenderFinal: '#',
    videoPathRenderFinal: `https://www.youtube.com/watch?v=zx91N345Wzc`,
    // Dayong: Optional poster image for the video (use an existing image or add a dedicated poster)
    videoPoster: '/assets/projects/RetrofitAR/shed/shed.jpg',
    typeRenderFinal: 'video',
    renderFinalArray: true,
    renderFinalContent: [
      [
        `https://youtu.be/qhf9uMGCIiI`,
        `/assets/projects/RetrofitAR/ui/magicball.jpg`,
      ],
      [
        `/assets/projects/RetrofitAR/ui/flowchart.png`,
        `/assets/projects/RetrofitAR/ui/lsa.png`,
      ],
    ],
  },
]
