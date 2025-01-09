interface AgendaItem {
  id: string;
  title: string;
  timing: string[];
  tag: string[];
  duration: number;
  speakers: string[];
}

interface Timing {
  [day: string]: {
    [hall: string]: AgendaItem[];
  };
}

export const timing: Timing = {
  dayOne: {
    hallA: [
      {
        id: "1",
        timing: ["10:50 AM", "11:10 AM"],
        title:
          "Charting the Path to Responsible AI: Balancing Innovation with Accountability",
        tag: ["AI"],
        duration: 20,
        speakers: ["97"],
      },
      {
        id: "2",
        timing: ["11:10 AM", "11:15 AM"],
        title: "SESSION CHANGE",
        tag: [],
        duration: 5,
        speakers: [],
      },
      {
        id: "3",
        timing: ["11:15 AM", "12:05 PM"],
        title:
          "Scaling AI for Impact - Strategies for Enterprise Growth and Innovation",
        tag: ["AI", "Innovation"],
        duration: 50,
        speakers: ["42", "90", "40", "43"],
      },
      {
        id: "4",
        timing: ["12:05 PM", "12:15 PM"],
        title: "SESSION CHANGE",
        tag: [],
        duration: 10,
        speakers: [],
      },
      {
        id: "5",
        timing: ["12:10 PM", "01:00 PM"],
        title:
          "Next-Gen Cybersecurity - The Role of AI in the hyperconnected world",
        tag: ["AI"],
        duration: 50,
        speakers: ["58", "61", "89", "543", "406"],
      },
      {
        id: "6",
        timing: ["01:00 PM", "02:00 PM"],
        title: "NETWORKING & LUNCH BREAK",
        tag: [],
        duration: 60,
        speakers: [],
      },
      {
        id: "7",
        timing: ["02:00 PM", "02:45 PM"],
        title:
          "GCC Next for Tamil Nadu: Strengthening Global Technology Leadership",
        tag: ["GCC"],
        duration: 45,
        speakers: ["144", "68", "75", "94"],
      },
      {
        id: "8",
        timing: ["02:45 PM", "02:55 PM"],
        title: "SESSION CHANGE",
        tag: [],
        duration: 10,
        speakers: [],
      },
      {
        id: "9",
        timing: ["02:55 PM", "03:50 PM"],
        title: "The IT Engine: Driving Tamil Nadu's Economic Growth",
        tag: ["Role of IT in the state's development"],
        duration: 45,
        speakers: ["147", "131", "32", "132", "116"],
      },
      {
        id: "10",
        timing: ["03:50 PM", "04:00 PM"],
        title: "NETWORKING & BREAK",
        tag: [],
        duration: 10,
        speakers: [],
      },
      {
        id: "11",
        timing: ["04:00 PM", "04:45 PM"],
        title: "AI for Public Good",
        tag: ["AI"],
        duration: 60,
        speakers: ["154", "531", "535"],
      },
      {
        id: "1000",
        timing: ["04:50 PM", "05:00 PM"],
        title: "Industry Metaverse for Gen AI",
        tag: ["AI"],
        duration: 10,
        speakers: ["400"],
      },
    ],
    hallB: [
      {
        id: "12",
        timing: ["10:50 AM", "11:35 AM"],
        title: "The State of Deep Tech Investments: Today and Tomorrow",
        tag: ["Deeptech"],
        duration: 45,
        speakers: ["87", "88", "159", "542", "540"],
      },
      {
        id: "13",
        timing: ["11:45 AM", "12:20 PM"],
        title:
          "Innovative Solutions to Combat Climate ChangeL A Global Prespective",
        tag: ["Climate Change", "A Global Prespective"],
        duration: 35,
        speakers: ["91", "36", "37", "8"],
      },
      {
        id: "14",
        timing: ["12:20 PM", "12:30 PM"],
        title: "SESSION CHANGE",
        tag: [],
        duration: 10,
        speakers: [],
      },
      {
        id: "15",
        timing: ["12:30 PM", "01:00 PM"],
        title:
          "Building a Resilinet Tamil Nadu: Local Solutions for Climate Action",
        tag: ["Climate Change", "A Local Prespective"],
        duration: 30,
        speakers: ["123", "130", "532", "91"],
      },
      {
        id: "16",
        timing: ["01:00 PM", "02:00 PM"],
        title: "NETWORKING & LUNCH BREAK",
        tag: [],
        duration: 60,
        speakers: [],
      },
      {
        id: "17",
        timing: ["02:00 PM", "02:15 PM"],
        title: "TN Startups - 3 Journeys",
        tag: ["Tech Startup Ecosystem"],
        duration: 15,
        speakers: ["140", "84", "125", "63"],
      },
      {
        id: "18",
        timing: ["02:15 PM", "03:30 PM"],
        title:
          "The Role of private equity in taking TN startups national  and global",
        tag: ["Tech Startup Ecosystem"],
        duration: 75,
        speakers: ["20", "65", "139", "33", "84", "125"],
      },
      {
        id: "19",
        timing: ["03:30 PM", "04:00 PM"],
        title: "NETWORKING & BREAK",
        tag: [],
        duration: 30,
        speakers: [],
      },
      {
        id: "20",
        timing: ["04:00 PM", "05:00 PM"],
        title: "Global Technology Trends and Local Impact",
        tag: ["G2G Tech Innovation"],
        duration: 60,
        speakers: ["137", "34", "38", "100", "79", "402"],
      },
    ],
    hallC: [
      {
        id: "21",
        timing: ["11:00 AM", "12:05 PM"],
        title: "Quantum - The New Frontier of Computing",
        tag: ["Quantum Computing"],
        duration: 60,
        speakers: ["16", "151", "86", "72"],
      },
      {
        id: "22",
        timing: ["12:05 PM", "12:15 PM"],
        title: "SESSION CHANGE",
        tag: [],
        duration: 10,
        speakers: [],
      },
      {
        id: "23",
        timing: ["12:15 PM", "01:00 PM"],
        title:
          "Building Skilled Talent Supply and Awarness for Emerging Industries & Jobs",
        tag: ["AVGC Global Standard"],
        duration: 45,
        speakers: ["121", "112", "143", "98", "93"],
      },
      {
        id: "24",
        timing: ["01:00 PM", "02:00 PM"],
        title: "NETWORKING & LUNCH BREAK",
        tag: [],
        duration: 60,
        speakers: [],
      },
      {
        id: "25",
        timing: ["02:00 PM", "02:45 PM"],
        title: "EV Ecosystem",
        tag: ["EV"],
        duration: 45,
        speakers: ["73", "141", "538", "541", "403"],
      },
      {
        id: "26",
        timing: ["02:45 PM", "02:55 PM"],
        title: "SESSION CHANGE",
        tag: [],
        duration: 10,
        speakers: [],
      },
      {
        id: "27",
        timing: ["02:55 PM", "03:50 PM"],
        title:
          "AI in Travel and Hospitality: Shaping the Future of Cost, Experience, and Next-Gen Travel",
        tag: ["AI"],
        duration: 45,
        speakers: ["35", "67", "47", "78", "407"],
      },
      {
        id: "28",
        timing: ["03:50 PM", "04:00 PM"],
        title: "NETWORKING & BREAK",
        tag: ["All Tracks"],
        duration: 10,
        speakers: [],
      },
      {
        id: "29",
        timing: ["04:00 PM", "05:00 PM"],
        title:
          "Building Games from Tamil Nadu for the Global & Domestic Markets",
        tag: ["AVGC Global Standard"],
        duration: 60,
        speakers: ["110", "126", "113", "160", "66"],
      },
    ],
    hallD: [
      {
        id: "30",
        timing: ["09:30 AM", "10:30 AM"],
        title: "Inaugural Session",
        tag: ["All Tracks"],
        duration: 60,
        speakers: ["1", "3", "5", "12", "13", "9", "7"],
      },
      {
        id: "31",
        timing: ["10:30 AM", "10:50 AM"],
        title: "NETWORKING & BREAK",
        tag: [],
        duration: 20,
        speakers: [],
      },
      {
        id: "32",
        timing: ["11:00 AM", "11:35 AM"],
        title:
          "Leveraging the Power of IT to Pave the Path to 1 Trillion Dollar Ecosystem in Tamil Nadu",
        tag: ["AI"],
        duration: 35,
        speakers: ["12", "13", "405"],
      },
      {
        id: "33",
        timing: ["11:45 AM", "12:15 PM"],
        title:
          "Powering Progress to $1 Trillion economy: Youth Leading the Digital Revolution",
        tag: ["AI"],
        duration: 30,
        speakers: ["3", "18"],
      },
      {
        id: "34",
        timing: ["12:15 PM", "12:30 PM"],
        title: "SESSION CHANGE",
        tag: [],
        duration: 15,
        speakers: [],
      },
      {
        id: "35",
        timing: ["12:30 PM", "01:15 PM"],
        title:
          "Innovation Centres: Accelerating Tamil Nadu's Tech Startup Growth",
        tag: ["Tech Startup Ecosystem"],
        duration: 45,
        speakers: ["9", "122", "102", "39", "88"],
      },
      {
        id: "36",
        timing: ["01:15 PM", "02:00 PM"],
        title: "NETWORKING & LUNCH BREAK",
        tag: [],
        duration: 45,
        speakers: [],
      },
      {
        id: "37",
        timing: ["02:00 PM", "02:45 PM"],
        title:
          "Space Startups and Tamil Nadu's Emergence as a Space Investment Hub",
        tag: ["Satellite Technology"],
        duration: 45,
        speakers: ["146", "18", "124"],
      },
      {
        id: "38",
        timing: ["02:45 PM", "02:55 PM"],
        title: "SESSION CHANGE",
        tag: [],
        duration: 10,
        speakers: [],
      },
      {
        id: "39",
        timing: ["02:55 PM", "03:50 PM"],
        title:
          "Building a Globally secured and sustained enterprises through GCC",
        tag: ["GCC"],
        duration: 45,
        speakers: ["101", "29", "30", "83", "77"],
      },
      {
        id: "40",
        timing: ["03:50 PM", "04:00 PM"],
        title: "NETWORKING & BREAK",
        tag: [],
        duration: 10,
        speakers: [],
      },
      {
        id: "41",
        timing: ["04:00 PM", "05:00 PM"],
        title:
          "Innovation as a Growth Catalyst: Tamil Nadu's Role in India Tech Future",
        tag: ["Innovation in industry"],
        duration: 60,
        speakers: ["76", "21", "28", "29", "48"],
      },
    ],
  },
  dayTwo: {
    hallA: [
      {
        id: "42",
        timing: ["10:00 AM", "11:00 AM"],
        title:
          "Future-proofing the Workspace - Skilling and Scaling for Deep technologies",
        tag: ["AI"],
        duration: 45,
        speakers: ["103", "157", "62", "109", "82", "51"],
      },
      {
        id: "403",
        timing: ["11:00 AM", "11:10 AM"],
        title: "SESSION CHANGE",
        tag: [],
        duration: 10,
        speakers: [],
      },
      {
        id: "43",
        timing: ["11:10 AM", "12:15 PM"],
        title:
          "Beyond Chennai:: Building Emerging Tech Hubs for Tamil Nadu's Next Wave of Growth",
        tag: ["Development of secondary tech hubs"],
        duration: 45,
        speakers: ["105", "119", "111", "656"],
      },
      {
        id: "44",
        timing: ["12:15 PM", "12:30 PM"],
        title: "NETWORKING & BREAK",
        tag: [],
        duration: 15,
        speakers: [],
      },
      {
        id: "45",
        timing: ["12:30 PM", "01:15 PM"],
        title: "Future-Ready Tamil Nadu: Scaling Emerging Tech Ecosystems",
        tag: ["Emerging technologies and their impact"],
        duration: 45,
        speakers: ["106", "70", "85", "534"],
      },
      {
        id: "46",
        timing: ["01:15 PM", "02:15 PM"],
        title: "NETWORKING & LUNCH BREAK",
        tag: [],
        duration: 60,
        speakers: [],
      },
      {
        id: "47",
        timing: ["02:15 PM", "03:00 PM"],
        title: "AI meets quantum - The next frontier",
        tag: ["AI"],
        duration: 45,
        speakers: ["150", "31", "46", "560", "539"],
      },
      {
        id: "48",
        timing: ["03:00 PM", "03:15 PM"],
        title: "NETWORKING & BREAK",
        tag: [],
        duration: 15,
        speakers: [],
      },
      {
        id: "49",
        timing: ["03:15 PM", "04:00 PM"],
        title:
          "Leveraging AI in Cyber Defense, Can we predict and prevent crime leveraging AI?",
        tag: ["AI"],
        duration: 45,
        speakers: ["162", "11", "26"],
      },
    ],
    hallB: [
      {
        id: "58",
        timing: ["10:00 AM", "10:45 AM"],
        title: "Hyperlocal Marketplaces - Future of Economy",
        tag: [""],
        duration: 30,
        speakers: ["92", "117", "88", "18", "410"],
      },
      {
        id: "404",
        timing: ["10:45 AM", "11:25 AM"],
        title: "Award Function",
        tag: [],
        duration: 40,
        speakers: [],
      },
      {
        id: "51",
        timing: ["11:25 AM", "12:15 PM"],
        title:
          "Building a Tech Talent Ecosystem: Nuturing the NExt Generation of Innovators",
        tag: ["Talent development and retention"],
        duration: 45,
        speakers: ["96", "80", "136", "156", "145"],
      },
      {
        id: "52",
        timing: ["12:15 PM", "12:30 PM"],
        title: "NETWORKING & BREAK",
        tag: [],
        duration: 15,
        speakers: [],
      },
      {
        id: "50",
        timing: ["12:30 PM", "01:15 PM"],
        title:
          "From TN to the Globe - Beyond Borders Expanding Tamil Nadu's Digital Workforce",
        tag: ["Talent development", "Scaling Operations and global outreach"],
        duration: 45,
        speakers: ["81", "153", "107", "152"],
      },
      {
        id: "54",
        timing: ["01:15 PM", "02:15 PM"],
        title: "NETWORKING & LUNCH BREAK",
        tag: [],
        duration: 60,
        speakers: [],
      },
      {
        id: "55",
        timing: ["02:15 PM", "03:00 PM"],
        title: "AI adoption across industries",
        tag: ["AI"],
        duration: 45,
        speakers: ["138", "60", "135", "54"],
      },
      {
        id: "56",
        timing: ["03:00 PM", "03:15 PM"],
        title: "NETWORKING & BREAK",
        tag: [],
        duration: 15,
        speakers: [],
      },
      {
        id: "57",
        timing: ["03:15 PM", "04:00 PM"],
        title:
          "Next-Gen Technologies Transforming Space Exploration and Defense Systems",
        tag: ["Technologies for Defense and Space"],
        duration: 45,
        speakers: ["140", "10", "411"],
      },
    ],
    hallC: [
      {
        id: "102",
        timing: ["10:00 AM", "10:30 AM"],
        title: "AI-Driven Economic Growth in India",
        tag: ["AI Infrastrusture"],
        duration: 30,
        speakers: ["15", "412"],
      },
      {
        id: "56",
        timing: ["10:30 AM", "10:40 AM"],
        title: "SESSION CHANGE",
        tag: [],
        duration: 10,
        speakers: [],
      },
      {
        id: "53",
        timing: ["10:40 AM", "11:15 AM"],
        title: "Making AI Real - The Infra",
        tag: ["AI Infrastrusture"],
        duration: 35,
        speakers: ["412", "44", "253"],
      },
      {
        id: "56",
        timing: ["11:15 AM", "11:25 AM"],
        title: "SESSION CHANGE",
        tag: [],
        duration: 10,
        speakers: [],
      },
      {
        id: "59",
        timing: ["11:25 AM", "12:15 PM"],
        title:
          "Leveraging AI in Cyber Defense, what talent needed in Tamil Nadu to build a world class cyber capability",
        tag: ["AI"],
        duration: 45,
        speakers: ["128", "55", "78", "129", "69"],
      },
      {
        id: "60",
        timing: ["12:15 PM", "12:30 PM"],
        title: "NETWORKING & BREAK",
        tag: [],
        duration: 15,
        speakers: [],
      },
      {
        id: "61",
        timing: ["12:30 PM", "01:15 PM"],
        title: "Cultivating Entrepreneurship in TN via Angel Investing",
        tag: ["Entrepreneurship"],
        duration: 45,
        speakers: ["23", "69", "133", "127"],
      },
      {
        id: "62",
        timing: ["01:15 PM", "02:15 PM"],
        title: "NETWORKING & LUNCH BREAK",
        tag: [],
        duration: 60,
        speakers: [],
      },
      {
        id: "63",
        timing: ["02:15 PM", "03:00 PM"],
        title:
          "Data-Driven Telco: How organizations are Enabling predictive insights and Enhanced Network Performance",
        tag: ["GCC"],
        duration: 45,
        speakers: ["115", "50", "45", "413", "536"],
      },
      {
        id: "64",
        timing: ["03:00 PM", "03:05 PM"],
        title: "NETWORKING & BREAK",
        tag: [],
        duration: 5,
        speakers: [],
      },
      {
        id: "65",
        timing: ["03:05 PM", "03:40 PM"],
        title: "Lessons on Unlocking AI Success",
        tag: ["AI"],
        duration: 35,
        speakers: ["56", "414"],
      },
      {
        id: "6462",
        timing: ["03:40 PM", "03:45 PM"],
        title: "SESSION CHANGE",
        tag: [],
        duration: 5,
        speakers: [],
      },
      {
        id: "8372",
        timing: ["03:45 PM", "04:00 PM"],
        title: "Startup Oppurtunities Defense and Space Tech Ecosystem",
        tag: ["AI"],
        duration: 15,
        speakers: ["24"],
      },
    ],
    hallD: [
      {
        id: "66",
        timing: ["10:00 AM", "10:45 AM"],
        title:
          "Driving Innovation and Resilience: The Role of GCC's in Shaping the Future of BSI",
        tag: ["GCC BFSI"],
        duration: 45,
        speakers: ["64", "27", "71", "149"],
      },
      {
        id: "67",
        timing: ["10:55 AM", "11:40 AM"],
        title:
          "Future-Proofing Global Healthcare: The Strategic Vision of GCC Leadership",
        tag: ["GCC"],
        duration: 45,
        speakers: ["115", "59", "74"],
      },
      {
        id: "100",
        timing: ["11:45 AM", "12:15 PM"],
        title:
          "Digital Public Infrastructure for Fintech, Innovation and Inclusion",
        tag: ["Fintech"],
        duration: 30,
        speakers: ["14", "137"],
      },
      {
        id: "68",
        timing: ["12:15 PM", "12:30 PM"],
        title: "NETWORKING & BREAK",
        tag: [],
        duration: 15,
        speakers: [],
      },
      {
        id: "69",
        timing: ["12:30 PM", "01:15 PM"],
        title: "Enterprise Grade AI",
        tag: ["Emerging technologies and their impact"],
        duration: 45,
        speakers: ["19", "17"],
      },
      {
        id: "70",
        timing: ["01:15 PM", "02:15 PM"],
        title: "NETWORKING & LUNCH BREAK",
        tag: [],
        duration: 60,
        speakers: [],
      },
      {
        id: "71",
        timing: ["02:15 PM", "03:00 PM"],
        title: "Innovation in Tamil Computing",
        tag: ["Tamil Computing"],
        duration: 45,
        speakers: ["57", "408", "409"],
      },
      {
        id: "73",
        timing: ["03:00 PM", "03:20 PM"],
        title: "Cybersecurity in the age of AI",
        tag: [""],
        duration: 20,
        speakers: ["22"],
      },
      {
        id: "400",
        timing: ["03:20 PM", "03:30 PM"],
        title: "SESSION CHANGE",
        tag: [],
        duration: 10,
        speakers: [],
      },
      {
        id: "101",
        timing: ["03:30 PM", "03:50 PM"],
        title:
          "Positioning India as a Global AI Powerhouse: Strategies for Leadership and Innovation",
        tag: [""],
        duration: 30,
        speakers: ["6"],
      },
      {
        id: "401",
        timing: ["03:50 PM", "04:10 PM"],
        title:
          "Towards a Trillion-Dollar Tamil Nadu: Harnessing the Power of Information Technology",
        tag: ["AI"],
        duration: 20,
        speakers: ["5"],
      },
      {
        id: "402",
        timing: ["04:10 PM", "04:30 PM"],
        title: "NETWORKING & BREAK",
        tag: [],
        duration: 20,
        speakers: [],
      },
      {
        id: "74",
        timing: ["04:30 PM", "05:30 PM"],
        title: "Valedictory Section",
        tag: ["All Tracks"],
        duration: 60,
        speakers: ["2", "3", "4", "6", "7", "10", "21", "120"],
      },
    ],
  },
};
