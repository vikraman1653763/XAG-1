export const serverUrl = 'https://xagrotortek.in:8443';
// export const serverUrl = 'http://127.0.0.1:8080';


export const courses = [
    {   id: "7days",
        title: "Small Category (7 days) - Training Curriculum as per DGCA", 
        description: "Learn the basics of drone operation including safety protocols and basic flight maneuvers.",
        duration: 7, 
        topic: 68,
        bgImage: '/training/train3.jpeg', 
        kg: 25 ,
        days: [
            {

                day: 1, 
                courseDetails: [
                    { title: 'Basic principles of flight', content: 'Fundamentals of flight, Aerodynamics,Take-off, flight and landing Maneuvers, turns and circuit pattern' },
                    { title: 'Regulations of DGCA, Civil Aviation Requirements', content: 'Classification, Basic Air Regulations, Salient Points, Do’s and Don’ts' },
                    { title: 'ATC procedures & Radio Telephony', content: 'Understanding ATC operations,Airspace Structure and Airspace Restrictions with knowledge of No Drone Zones,Communicating with ATC including Position and Altitude Reporting,Flight Planning Procedures,Collision avoidance,Radio Telephony (RT) techniques,Standard radio terminology and RT Phraseology,Practice Session in Radio Communication' },
                ]
            } ,{ 
                day: 2, 
                courseDetails: [
                    { title: 'Fixed wing operations and aerodynamics', content: 'Types of fixed wing drones, make, parts and terminology,Operation and maneuvers of fixed wing drones,Applications and operations,Advantages/disadvantages over multi rotor drones' },
                    { title: 'Multi rotor introduction ', content: 'Basic drone terminology,Types of drones, material used and size of drones,Motors and propellers,Electronic Speed Controller (ESC), flight controllers,Operation and Applications of drones,Advantages/disadvantages over multi rotor drones ' },
                    { title: 'Weather and meteorology', content: 'The standard atmosphere,Measuring air pressure,Heat and temperature,Wind,Moisture, cloud formation,Met Terminal Aviation Routine Weather Report (METAR)' },
                    { title: ' Drone equipment maintenance', content: 'Maintenance of drone, flight control box, ground station,Maintenance of ground equipment, batteries and payloads,Scheduled servicing,Repair of equipment,Fault finding and rectification' }


                ]
            },
            { 
                day: 3, 
                courseDetails: [
                    { title: ' Emergency identification and handling', content: 'In flight emergencies,Loss of link,Fly-aways (Straying),Loss of power,Control surface failures ' },
                    { title: 'Payload, installation and utilization ', content: 'Types of payloads,Parts of payloads,Installation,Features of payloads,Utilization ' },
                    { title: 'Image and video interpretation ', content: 'Principles of observation,Interpretation of image/video,Analysis' },
                    { title: 'Auxiliary Sessions | BVLOS Experiment & Night flying Operations ', content: 'Concept of Operations,Test Procedure,Special Operations Risk Assessment ' },

                ]
            },
            { 
                day: 4, 
                courseDetails: [
                    { title: 'Flight Simulator Training ', content: 'Pre-flight checks and start-up,Preparation cum coordination for flight,Take-off and flight stage,Approach and landing,After flight check ' },
                    { title: 'Practical lessons in Lab ', content: 'Assembling of drone,De-assembling,Integration of sub-sections/ modules,Integration of engine/propulsion system,,Fault finding and rectification,Repair maintenance and documentation ' },
                ]
            },
            { 
                day: 5, 
                courseDetails: [
                    { title: ' ', content: ' Practical flying with instructor' },
                ]
            },
            { 
                day: 6, 
                courseDetails: [
                    { title: ' ', content: 'Practical flying with instructor/solo flying (full day) ' },
                ]
            },
            { 
                day: 7, 
                courseDetails: [
                    { title: ' ', content: 'Practical flying with instructor/solo flying (full day),Practical flying test,Distribution of certificate & conclusion of training ' },
                ]
            }

        ]
    },
    {   id: "10days", 
        title: "Small & Medium Category (10 days) - Training Curriculum as per DGCA", 
        description: "Master advanced flight techniques and maneuvers for various drone models.", 
        duration: 10, 
        topic: 74, 
        bgImage: '/training/train3.png', 
        kg: 150 ,
        days: [
            { 
                day: 1, 
                courseDetails: [
                    { title: 'Basic principles of flight ', content: ' Fundamentals of flight,Aerodynamics,Take-off, flight, and landing,Maneuvers, turns and circuit pattern' },
                    { title: ' Regulations of DGCA, Civil Aviation Requirements', content: ' Classification,Basic Air Regulations,Salient points,Do’s and Don’ts' },
                    { title: 'ATC procedures & Radio Telephony ', content: ' Understanding ATC operations,Airspace Structure and Airspace Restrictions with knowledge of No Drone Zones,Communicating with ATC including Position and Altitude Reporting,Flight Planning Procedures,Collision avoidance,Radio Telephony (RT) techniques,Standard radio terminology and RT Phraseology,Practice Session in Radio Communication' },
                ]
            },
            { 
                day: 2, 
                courseDetails: [
                    { title: 'Fixed wing operations and aerodynamics ', content: 'Types of fixed wing drones, make, parts and terminology,Operation and maneuvers of fixed wing drones,Applications and operations,Advantages/disadvantages over multi rotor drones ' },
                    { title: ' Multi rotor introduction', content: 'Basic drone terminology,Types of drones, material used and size of drones,Motors and propellers,Electronic Speed Controller (ESC), flight controllers,Operation and Applications of drones,Advantages/disadvantages over multi rotor drones ' },
                    { title: 'Weather and meteorology ', content: ' The standard atmosphere,Measuring air pressure,Heat and temperature,Wind,Moisture, cloud formation,Met Terminal Aviation Routine Weather Report (METAR)' },
                    { title: 'Drone equipment maintenance ', content: ' Maintenance of drone, flight control box, ground station,Maintenance of ground equipment, batteries and payloads,Scheduled servicing,Repair of equipment,Fault finding and rectification' },
                ]
            },
            { 
                day: 3, 
                courseDetails: [
                    { title: ' Emergency identification and handling', content: 'In flight emergencies,Loss of link,Fly-aways (Straying),Loss of power,Control surface failures ' },
                    { title: 'Payload, installation and utilization ', content: ' Types of payloads,Parts of payloads,Installation,Features of payloads,Utilization' },
                    { title: 'Image and video interpretation ', content: 'Principles of observation,Interpretation of image/video,Analysis ' },
                    { title: ' Auxiliary Sessions | BVLOS Experiment & Night flying Operations', content: ' Concept of Operations,Test Procedure,Special Operations Risk Assessmen' },
                ]
            },
            { 
                day: 4, 
                courseDetails: [
                    { title: 'Flight Simulator Training ', content: 'Pre-flight checks and start-up,Preparation cum coordination for flight,Take-off and flight stage,Approach and landing,After flight checks ' },
                    { title: 'Practical lessons in Lab ', content: 'Assembling of drone,De-assembling,Integration of sub-sections/ modules,Integration of engine/propulsion system,Fault finding and rectification,Repair maintenance and documentation ' },
                ]
            },
            { 
                day: 5, 
                courseDetails: [
                    { title: ' ', content: 'Practical flying with instructor (Small category)' },
                ]
            },
            { 
                day: 6, 
                courseDetails: [
                    { title: ' ', content: ' Practical flying with instructor/solo flying (Small category)' },
                ]
            },
            { 
                day: 7, 
                courseDetails: [
                    { title: ' ', content: 'Practical flying with instructor/solo flying (Small category),Practical flying test (Small category) ' },
                ]
            },
            { 
                day: 8, 
                courseDetails: [
                    { title: ' ', content: 'Engine Basics & Maintenance,Fuel filling and De-fueling,Practical flying with instructor (Medium Category) ' },
                ]
            },
            { 
                day: 9, 
                courseDetails: [
                    { title: ' ', content: ' Practical flying with instructor/solo flying (Medium Category)' },
                ]
            },
            { 
                day: 10, 
                courseDetails: [
                    { title: ' ', content: ' Practical flying with instructor/solo flying (Medium Category),Practical flying test (Medium Category),Distribution of certificate & conclusion of training' },
                ]
            }
        ]

    },
];