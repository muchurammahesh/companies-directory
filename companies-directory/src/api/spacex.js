function logoUrl(domain, size = 128) {
  if (!domain) {
    return `https://via.placeholder.com/${size}?text=Logo`;
  }
  return `https://logo.clearbit.com/${domain}?size=${size}`;
}

// Build the company -> logo mapping using domains
const COMPANY_LOGOS = {
  "Tata Consultancy Services (TCS)": logoUrl("tcs.com"),
  "Infosys": logoUrl("infosys.com"),
  "Wipro": logoUrl("wipro.com"),
  "HCL Technologies": logoUrl("hcltech.com"),
  "Tech Mahindra": logoUrl("techmahindra.com"),
  "Mindtree (now LTI Mindtree)": logoUrl("ltimindtree.com"),
  "Cognizant Technology Solutions": logoUrl("cognizant.com"),
  "IBM India": logoUrl("ibm.com"),
  "Accenture": logoUrl("accenture.com"),
  "Capgemini India": logoUrl("capgemini.com"),
  "Oracle India": logoUrl("oracle.com"),
  "Amazon Web Services (AWS)": logoUrl("aws.amazon.com"),
  "Google India": logoUrl("google.com"),
  "Microsoft India": logoUrl("microsoft.com"),
  "Zoho Corporation": logoUrl("zoho.com"),
  "Freshworks": logoUrl("freshworks.com"),
  "Paytm": logoUrl("paytm.com"),
  "Flipkart": logoUrl("flipkart.com"),
  "Reliance Jio": logoUrl("jio.com"),
  "PhonePe": logoUrl("phonepe.com"),
  "Meta Platforms": logoUrl("meta.com"),
  "Apple Inc.": logoUrl("apple.com"),
  "Nvidia": logoUrl("nvidia.com"),
  "Intel Corporation": logoUrl("intel.com"),
  "SAP Labs India": logoUrl("sap.com"),
  "Larsen & Toubro Infotech (LTI)": logoUrl("lntinfotech.com"),
  "Hexaware Technologies": logoUrl("hexaware.com"),
  "Persistent Systems": logoUrl("persistent.com"),
  "Birlasoft": logoUrl("birlasoft.com"),
  "Mphasis": logoUrl("mphasis.com"),
  "3i Infotech": logoUrl("3i-infotech.com"),
  "Zensar Technologies": logoUrl("zensar.com"),
  "ITC Infotech": logoUrl("itcinfotech.com"),
  "WNS Global Services": logoUrl("wns.com"),
  "KPIT Technologies": logoUrl("kpit.com"),
  "Cyient": logoUrl("cyient.com"),
  "Mastek": logoUrl("mastek.com"),
  "Sonata Software": logoUrl("sonata-software.com"),
  "Sasken": logoUrl("sasken.com"),
  "Tata Elxsi": logoUrl("tataelxsi.com"),
  "eClerx": logoUrl("eclerx.com"),
  "Happiest Minds": logoUrl("happiestminds.com"),
  "Sutherland": logoUrl("sutherlandglobal.com"),
  "EXL Service": logoUrl("exlservice.com"),
  "LTTS (L&T Technology Services)": logoUrl("ltts.com"),
  "Rolta": logoUrl("rolta.com"),
  "Nucleus Software": logoUrl("nucleussoftware.com"),
  "NIIT": logoUrl("niit.com"),
  "Ramco Systems": logoUrl("ramco.com"),
  "Newgen Software": logoUrl("newgensoft.com"),
  "HCLTech (alternate)": logoUrl("hcltech.com"),
  "Tata Communications": logoUrl("tatacommunications.com"),
  "Techwave": logoUrl("techwave.net"),
  "Incture": logoUrl("incture.com"),
  "Informatica (India ops)": logoUrl("informatica.com"),
  "BlackBuck (tech company)": logoUrl("blackbuck.com"),
  "CarDekho (GirnarSoft)": logoUrl("cardekho.com"),
  "CommonFloor (Quikr) - example": logoUrl("quikr.com"),
  "NDTV Convergence (example)": logoUrl("ndtv.com"),
  "Zeta": logoUrl("zeta.tech"),
  "Modo Labs (example)": logoUrl("modalabs.io"),
  "Rupeek (example fintech)": logoUrl("rupeek.com"),
  "DailyHunt (verSe)": logoUrl("dailyhunt.in"),
  "FreshToHome (example)": logoUrl("freshtohome.com"),
  "Clear": logoUrl("clear.com"),
  "Dunzo": logoUrl("dunzo.com"),
  "Byju's": logoUrl("byjus.com"),
  "Unacademy": logoUrl("unacademy.com"),
  "UpGrad": logoUrl("upgrad.com"),
  "CARS24": logoUrl("cars24.com"),
  "Delhivery": logoUrl("delhivery.com"),
  "Urban Company": logoUrl("urbancompany.com"),
  "RedBus": logoUrl("redbus.in"),
  "PolicyBazaar": logoUrl("policybazaar.com"),
  "Mobikwik": logoUrl("mobikwik.com"),
  "Inetsoft (example)": logoUrl("inetsoft.com"),
  "ShopClues (example)": logoUrl("shopclues.com"),
  "MakeMyTrip": logoUrl("makemytrip.com"),
  "Cleartrip": logoUrl("cleartrip.com"),
  "PayU India": logoUrl("payu.in"),
  "Razorpay": logoUrl("razorpay.com"),
  "Chargebee": logoUrl("chargebee.com"),
  "Zoho Finance (same domain zoho.com)": logoUrl("zoho.com"),
  "Indus Valley Partners (IVP)": logoUrl("ivplabs.com"),
  "L&T Infotech (alternate)": logoUrl("lntinfotech.com"),
  "S.P. Jain (example)": logoUrl("spjain.org"), // educational example
  "C-DOT (example)": logoUrl("cdot.in"),
  "BEL (Bharat Electronics)": logoUrl("bel-india.in"),
  "Bharat Forge (example)": logoUrl("bharatforge.com"),
  "Tech Mahindra (alternate)": logoUrl("techmahindra.com"),
  "Virtusa (India ops)": logoUrl("virtusa.com"),
  "GlobalLogic India": logoUrl("globallogic.com"),
  "Mindcrest (example)": logoUrl("mindcrest.com"),
  "Hexagon (example)": logoUrl("hexagon.com"),
  "Amdocs India": logoUrl("amdocs.com"),
  "Synopsys India": logoUrl("synopsys.com"),
  "Cadence India": logoUrl("cadence.com"),
  "Emertxe (training example)": logoUrl("emertxe.com"),
  "TCS iON": logoUrl("tcsion.com"),
  "Barclays Technology India": logoUrl("barclays.co.uk")
};

export async function fetchLaunches() {
  const companies = [
    {
  id: "0",
  name: "Frontlines Media",
  industry: "EdTech",
  location: "Hyderabad, India",
  founded: 2021, 
  details: "Media and communications company based in Hyderabad, India.",
  links: {
    patch: { 
      small: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Ffrontlinesmedia%2Freels%2F&psig=AOvVaw2Y_aPJOKme8JWC64BKnX1-&ust=1760813847111000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC0vYf1q5ADFQAAAAAdAAAAABAE" 
    },
    wikipedia: "https://www.frontlinesedutech.com/", 
    webcast: "https://frontlinesmedia.in/" 
  }
},

   
    {
      id: "1",
      name: "Tata Consultancy Services (TCS)",
      industry: "IT Services",
      location: "India",
      founded: 1968,
      details: "One of the largest global IT services and consulting companies headquartered in Mumbai, India.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Tata_Consultancy_Services", webcast: "https://www.tcs.com/" }
    },
    {
      id: "2",
      name: "Infosys",
      industry: "IT Services",
      location: "India",
      founded: 1981,
      details: "Global leader in technology services and consulting, headquartered in Bengaluru, India.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Infosys", webcast: "https://www.infosys.com/" }
    },
    {
      id: "3",
      name: "Wipro",
      industry: "IT Services",
      location: "India",
      founded: 1945,
      details: "IT, consulting, and business process services company headquartered in Bengaluru, India.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Wipro", webcast: "https://www.wipro.com/" }
    },
    {
      id: "4",
      name: "HCL Technologies",
      industry: "IT Services",
      location: "India",
      founded: 1976,
      details: "Multinational IT services and consulting company based in Noida, India.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/HCLTech", webcast: "https://www.hcltech.com/" }
    },
    {
      id: "5",
      name: "Tech Mahindra",
      industry: "IT Services",
      location: "India",
      founded: 1986,
      details: "Leading provider of digital transformation and consulting services headquartered in Pune, India.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Tech_Mahindra", webcast: "https://www.techmahindra.com/" }
    },
    {
      id: "6",
      name: "Mindtree (now LTI Mindtree)",
      industry: "IT Services",
      location: "India",
      founded: 1999,
      details: "A global technology consulting and services company headquartered in Bengaluru, India.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Mindtree", webcast: "https://www.ltimindtree.com/" }
    },
    {
      id: "7",
      name: "Cognizant Technology Solutions",
      industry: "IT Services",
      location: "India",
      founded: 1994,
      details: "One of the leading IT services companies with large operations in India.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Cognizant", webcast: "https://www.cognizant.com/" }
    },
    {
  id: "8",
  name: "Mastek",
  industry: "IT Services",
  location: "India",
  founded: 1982,
  details: "Enterprise-level IT services and digital transformation company.",
  links: { 
    patch: { small: logoUrl("mastek.com") }, 
    wikipedia: "https://en.wikipedia.org/wiki/Mastek", 
    webcast: "https://www.mastek.com/" 
  }
},
    {
      id: "9",
      name: "Accenture",
      industry: "Consulting",
      location: "India",
      founded: 1989,
      details: "Global professional services company providing consulting and digital solutions.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Accenture", webcast: "https://www.accenture.com/in-en" }
    },
    {
      id: "10",
      name: "Capgemini India",
      industry: "Consulting",
      location: "India",
      founded: 1967,
      details: "A global leader in consulting, technology services, and digital transformation.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Capgemini", webcast: "https://www.capgemini.com/in-en/" }
    },
    {
      id: "11",
      name: "Oracle India",
      industry: "Software",
      location: "India",
      founded: 1977,
      details: "Specializes in database software, cloud services, and enterprise software solutions.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Oracle_Corporation", webcast: "https://www.oracle.com/in/" }
    },
    {
      id: "12",
      name: "Amazon Web Services (AWS)",
      industry: "Cloud Computing",
      location: "India",
      founded: 2006,
      details: "Leading cloud computing platform offering scalable IT infrastructure services.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Amazon_Web_Services", webcast: "https://aws.amazon.com/" }
    },
    {
  id: "13",
  name: "Zensar Technologies",
  industry: "IT Services",
  location: "India",
  founded: 1991,
  details: "Digital solutions and technology services provider, part of RPG Group.",
  links: { 
    patch: { small: logoUrl("zensar.com") }, 
    wikipedia: "https://en.wikipedia.org/wiki/Zensar_Technologies", 
    webcast: "https://www.zensar.com/" 
  }
},
    {
      id: "14",
      name: "Microsoft India",
      industry: "Technology",
      location: "India",
      founded: 1990,
      details: "Subsidiary of Microsoft Corporation offering software, cloud, and AI solutions.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Microsoft_India", webcast: "https://www.microsoft.com/en-in" }
    },
    {
      id: "15",
      name: "Zoho Corporation",
      industry: "Software",
      location: "India",
      founded: 1996,
      details: "Privately held Indian company that creates cloud-based software for businesses.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Zoho_Corporation", webcast: "https://www.zoho.com/" }
    },
    {
      id: "16",
      name: "Freshworks",
      industry: "Software",
      location: "India",
      founded: 2010,
      details: "Customer engagement software company headquartered in Chennai, India.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Freshworks", webcast: "https://www.freshworks.com/" }
    },
    {
      id: "17",
      name: "Paytm",
      industry: "Fintech",
      location: "India",
      founded: 2010,
      details: "Digital payments and financial services company headquartered in Noida, India.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Paytm", webcast: "https://paytm.com/" }
    },
    {
      id: "18",
      name: "Flipkart",
      industry: "E-commerce",
      location: "India",
      founded: 2007,
      details: "Leading e-commerce company based in Bengaluru, India, owned by Walmart.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Flipkart", webcast: "https://www.flipkart.com/" }
    },
    {
      id: "19",
      name: "Reliance Jio",
      industry: "Telecom",
      location: "India",
      founded: 2007,
      details: "India’s largest mobile network operator, offering digital and broadband services.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Jio", webcast: "https://www.jio.com/" }
    },
    {
      id: "20",
      name: "PhonePe",
      industry: "Fintech",
      location: "India",
      founded: 2015,
      details: "Digital payments and financial services platform headquartered in Bengaluru.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/PhonePe", webcast: "https://www.phonepe.com/" }
    },
    {
      id: "21",
      name: "Meta Platforms",
      industry: "Technology",
      location: "USA",
      founded: 2004,
      details: "Parent company of Facebook, Instagram, and WhatsApp focused on social media and metaverse.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Meta_Platforms", webcast: "https://about.fb.com/" }
    },
    {
      id: "22",
      name: "Apple Inc.",
      industry: "Technology",
      location: "USA",
      founded: 1976,
      details: "Designs and manufactures smartphones, computers, and software products.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Apple_Inc.", webcast: "https://www.apple.com/" }
    },
    {
      id: "23",
      name: "Nvidia",
      industry: "Semiconductors",
      location: "USA",
      founded: 1993,
      details: "Leading manufacturer of GPUs and AI computing solutions headquartered in California.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Nvidia", webcast: "https://www.nvidia.com/" }
    },
    {
      id: "24",
      name: "Intel Corporation",
      industry: "Semiconductors",
      location: "USA",
      founded: 1968,
      details: "Produces semiconductor chips and processors used in computers and servers.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Intel", webcast: "https://www.intel.com/" }
    },
    {
      id: "25",
      name: "SAP Labs India",
      industry: "Software",
      location: "India",
      founded: 1998,
      details: "R&D hub of SAP SE focused on enterprise software development and innovation.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/SAP_SE", webcast: "https://www.sap.com/india/" }
    },
    {
      id: "26",
      name: "Larsen & Toubro Infotech (LTI)",
      industry: "IT Services",
      location: "India",
      founded: 1997,
      details: "Global technology consulting and digital solutions company part of L&T Group.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Larsen_%26_Toubro_Infotech", webcast: "https://www.lntinfotech.com/" }
    },
    {
      id: "27",
      name: "Hexaware Technologies",
      industry: "IT Services",
      location: "India",
      founded: 1990,
      details: "IT and business process outsourcing company based in Navi Mumbai, India.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Hexaware_Technologies", webcast: "https://hexaware.com/" }
    },
    {
      id: "28",
      name: "Persistent Systems",
      industry: "IT Services",
      location: "India",
      founded: 1990,
      details: "Technology services company specializing in cloud, AI, and data solutions.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Persistent_Systems", webcast: "https://www.persistent.com/" }
    },
    {
      id: "29",
      name: "Birlasoft",
      industry: "IT Services",
      location: "India",
      founded: 1995,
      details: "Global IT services company offering cloud and digital solutions, part of CK Birla Group.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Birlasoft", webcast: "https://www.birlasoft.com/" }
    },
    {
      id: "30",
      name: "Mphasis",
      industry: "IT Services",
      location: "India",
      founded: 2000,
      details: "IT solutions provider specializing in cloud and cognitive services headquartered in Bengaluru.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Mphasis", webcast: "https://www.mphasis.com/" }
    },


    {
      id: "31",
      name: "3i Infotech",
      industry: "IT Services",
      location: "India",
      founded: 1993,
      details: "Provides software, cloud, cybersecurity, and digital transformation services.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/3i_Infotech", webcast: "https://3i-infotech.com/" }
    },
    {
      id: "32",
      name: "Zensar Technologies",
      industry: "IT Services",
      location: "India",
      founded: 1991,
      details: "Offers digital solutions, AI, cloud infrastructure, and enterprise applications.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Zensar_Technologies", webcast: "https://www.zensar.com/" }
    },
    {
      id: "33",
      name: "ITC Infotech",
      industry: "IT Services",
      location: "India",
      founded: 1991,
      details: "Global IT solutions provider in banking, insurance, retail and other domains.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/ITC_Infotech", webcast: "https://www.itcinfotech.com/" }
    },
    {
      id: "34",
      name: "WNS Global Services",
      industry: "BPO / IT Services",
      location: "India",
      founded: 1996,
      details: "Provider of global business process management and outsourcing services.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/WNS_Global_Services", webcast: "https://www.wns.com/" }
    },
    {
      id: "35",
      name: "KPIT Technologies",
      industry: "Engineering / IT",
      location: "India",
      founded: 1990,
      details: "Engineering and R&D services for automotive and mobility solutions.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/KPIT_Technologies", webcast: "https://www.kpit.com/" }
    },
    {
      id: "36",
      name: "Cyient",
      industry: "Engineering / IT",
      location: "India",
      founded: 1991,
      details: "Provides engineering, manufacturing, data analytics and networks solutions.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Cyient", webcast: "https://www.cyient.com/" }
    },
    {
      id: "37",
      name: "Mastek",
      industry: "IT Services",
      location: "India",
      founded: 1982,
      details: "Digital transformation and enterprise-level software services.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Mastek", webcast: "https://www.mastek.com/" }
    },
    {
      id: "38",
      name: "Sonata Software",
      industry: "IT Services",
      location: "India",
      founded: 1986,
      details: "Provider of IT consulting and software services to global customers.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Sonata_Software", webcast: "https://www.sonata-software.com/" }
    },
    {
      id: "39",
      name: "Sasken",
      industry: "Embedded / Telecom software",
      location: "India",
      founded: 1989,
      details: "Product engineering and digital transformation services provider.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Sasken", webcast: "https://www.sasken.com/" }
    },
    {
      id: "40",
      name: "Tata Elxsi",
      industry: "Design & Engineering",
      location: "India",
      founded: 1989,
      details: "Design and technology services across automotive, media, and communications.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Tata_Elxsi", webcast: "https://www.tataelxsi.com/" }
    },
    {
      id: "41",
      name: "eClerx",
      industry: "IT / BPO",
      location: "India",
      founded: 2000,
      details: "Knowledge process outsourcing and data analytics services.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Eclerx", webcast: "https://www.eclerx.com/" }
    },
    {
      id: "42",
      name: "Happiest Minds",
      industry: "IT Services",
      location: "India",
      founded: 2011,
      details: "Digital transformation and product engineering company.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Happiest_Minds_Technologies", webcast: "https://www.happiestminds.com/" }
    },
    {
      id: "43",
      name: "Sutherland",
      industry: "BPO / Digital Services",
      location: "India",
      founded: 1986,
      details: "Business process transformation company with global delivery centers.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Sutherland", webcast: "https://www.sutherlandglobal.com/" }
    },
    {
      id: "44",
      name: "EXL",
      industry: "Analytics / BPO",
      location: "India",
      founded: 1999,
      details: "Provider of analytics, operations management and digital services.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Exlservice", webcast: "https://www.exlservice.com/" }
    },
    {
      id: "45",
      name: "LTTS (L&T Technology Services)",
      industry: "Engineering Services",
      location: "India",
      founded: 2012,
      details: "Engineering, R&D and digital solutions for global customers.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/L%26T_Technology_Services", webcast: "https://www.ltts.com/" }
    },
    {
      id: "46",
      name: "Rolta",
      industry: "IT / Systems",
      location: "India",
      founded: 1989,
      details: "System integration and IT solutions company (legacy enterprise focus).",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Rolta", webcast: "https://www.rolta.com/" }
    },
    {
      id: "47",
      name: "Nucleus Software",
      industry: "Banking software",
      location: "India",
      founded: 1986,
      details: "Provides lending and transaction banking software products.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Nucleus_Software", webcast: "https://www.nucleussoftware.com/" }
    },
    {
      id: "48",
      name: "NIIT",
      industry: "Training & IT Solutions",
      location: "India",
      founded: 1981,
      details: "Global skills and talent development company with IT services arm.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/NIIT", webcast: "https://www.niit.com/" }
    },
    {
      id: "49",
      name: "Ramco Systems",
      industry: "Enterprise Software",
      location: "India",
      founded: 1997,
      details: "Enterprise software for aviation, logistics, and HR domains.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Ramco_Systems", webcast: "https://www.ramco.com/" }
    },
    {
      id: "50",
      name: "Newgen Software",
      industry: "Enterprise Software",
      location: "India",
      founded: 1992,
      details: "Digital transformation and process automation software provider.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Newgen_Software_Technologies", webcast: "https://newgensoft.com/" }
    },
    {
      id: "51",
      name: "Tata Communications",
      industry: "Telecom / IT Services",
      location: "India",
      founded: 1986,
      details: "Global provider of managed network and cloud infrastructure services.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Tata_Communications", webcast: "https://www.tatacommunications.com/" }
    },
    {
      id: "52",
      name: "Myntra (Walmart India tech ops example)",
      industry: "E-commerce / Tech",
      location: "India",
      founded: 2007,
      details: "E-commerce fashion platform with large engineering teams.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Myntra", webcast: "https://www.myntra.com/" }
    },
    {
      id: "53",
      name: "Dunzo",
      industry: "Logistics / Tech",
      location: "India",
      founded: 2015,
      details: "Hyperlocal delivery and logistics platform with engineering focus.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Dunzo", webcast: "https://www.dunzo.com/" }
    },
    {
      id: "54",
      name: "Byju's (Tech / Edtech)",
      industry: "EdTech",
      location: "India",
      founded: 2011,
      details: "Large edtech company with product and engineering teams.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Byju%27s", webcast: "https://www.byjus.com/" }
    },
    {
  id: "55",
  name: "Cyient",
  industry: "Engineering / IT Services",
  location: "India",
  founded: 1991,
  details: "Provides engineering, manufacturing, and network operations services.",
  links: { 
    patch: { small: logoUrl("cyient.com") }, 
    wikipedia: "https://en.wikipedia.org/wiki/Cyient", 
    webcast: "https://www.cyient.com/" 
  }
},
    {
      id: "56",
      name: "Razorpay",
      industry: "Fintech",
      location: "India",
      founded: 2013,
      details: "Payments and fintech platform serving merchants and developers.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Razorpay", webcast: "https://razorpay.com/" }
    },
    {
      id: "57",
      name: "Delhivery",
      industry: "Logistics / Tech",
      location: "India",
      founded: 2011,
      details: "Large logistics and supply-chain tech platform.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Delhivery", webcast: "https://www.delhivery.com/" }
    },
    {
      id: "58",
      name: "RedBus",
      industry: "Travel Tech",
      location: "India",
      founded: 2006,
      details: "Online bus ticketing platform with engineering teams.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/RedBus", webcast: "https://www.redbus.in/" }
    },
    {
      id: "59",
      name: "PolicyBazaar",
      industry: "InsurTech",
      location: "India",
      founded: 2008,
      details: "Insurance aggregator and fintech-focused engineering teams.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Policybazaar", webcast: "https://www.policybazaar.com/" }
    },
    {
      id: "60",
      name: "Mobikwik",
      industry: "Fintech",
      location: "India",
      founded: 2009,
      details: "Digital wallet and payments services provider.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/MobiKwik", webcast: "https://www.mobikwik.com/" }
    },
    {
      id: "61",
      name: "MakeMyTrip",
      industry: "Travel Tech",
      location: "India",
      founded: 2000,
      details: "Online travel booking platform with engineering and product teams.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/MakeMyTrip", webcast: "https://www.makemytrip.com/" }
    },
    {
      id: "62",
      name: "Cleartrip",
      industry: "Travel Tech",
      location: "India",
      founded: 2006,
      details: "Online travel aggregator with tech teams.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Cleartrip", webcast: "https://www.cleartrip.com/" }
    },
    {
      id: "63",
      name: "PayU India",
      industry: "Fintech",
      location: "India",
      founded: 2002,
      details: "Payments provider and fintech platform.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/PayU", webcast: "https://www.payu.in/" }
    },
    {
      id: "64",
      name: "Chargebee",
      industry: "SaaS",
      location: "India",
      founded: 2011,
      details: "Subscription billing platform for SaaS companies.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Chargebee", webcast: "https://www.chargebee.com/" }
    },
    {
      id: "65",
      name: "CARS24",
      industry: "Marketplace / Tech",
      location: "India",
      founded: 2015,
      details: "Used car marketplace with strong engineering focus.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Cars24", webcast: "https://www.cars24.com/" }
    },
    {
      id: "66",
      name: "Urban Company",
      industry: "Marketplace / Tech",
      location: "India",
      founded: 2014,
      details: "Home services marketplace with engineering platform.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/UrbanCompany", webcast: "https://urbancompany.com/" }
    },
    {
      id: "67",
      name: "DailyHunt (VerSe Innovation)",
      industry: "Media / Tech",
      location: "India",
      founded: 2009,
      details: "Content and news aggregation platform with engineering teams.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/DailyHunt", webcast: "https://www.dailyhunt.in/" }
    },
    {
      id: "68",
      name: "BlackBuck",
      industry: "Logistics Tech",
      location: "India",
      founded: 2015,
      details: "Fleet and logistics technology platform.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/BlackBuck", webcast: "https://www.blackbuck.com/" }
    },
    {
      id: "69",
      name: "CarDekho (GirnarSoft)",
      industry: "Auto Tech",
      location: "India",
      founded: 2008,
      details: "Auto classifieds and data platform with tech teams.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/CarDekho", webcast: "https://www.cardekho.com/" }
    },{
  id: "70",
  name: "KPIT Technologies",
  industry: "Engineering & IT Services",
  location: "India",
  founded: 1990,
  details: "Specializes in automotive software and product engineering services.",
  links: { 
    patch: { small: logoUrl("kpit.com") }, 
    wikipedia: "https://en.wikipedia.org/wiki/KPIT_Technologies", 
    webcast: "https://www.kpit.com/" 
  }
},
 
    {
      id: "71",
      name: "Virtusa",
      industry: "IT Services",
      location: "India",
      founded: 1996,
      details: "Digital engineering and IT services provider.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Virtusa", webcast: "https://www.virtusa.com/" }
    },
    {
      id: "72",
      name: "GlobalLogic",
      industry: "Product Engineering",
      location: "India",
      founded: 2000,
      details: "Product engineering and digital product development.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/GlobalLogic", webcast: "https://www.globallogic.com/" }
    },
    {
      id: "73",
      name: "Amdocs India",
      industry: "Telecom Software",
      location: "India",
      founded: null,
      details: "Telecom software and services (global company with India operations).",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Amdocs", webcast: "https://www.amdocs.com/" }
    },
    {
      id: "74",
      name: "Synopsys India",
      industry: "EDA / Semiconductors",
      location: "India",
      founded: null,
      details: "Electronic design automation software with India engineering centers.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Synopsys", webcast: "https://www.synopsys.com/" }
    },
    {
      id: "75",
      name: "Cadence India",
      industry: "EDA / Semiconductors",
      location: "India",
      founded: null,
      details: "EDA and semiconductor IP with India teams.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Cadence_Design_Systems", webcast: "https://www.cadence.com/" }
    },
    {
      id: "76",
      name: "Emertxe (training / tech example)",
      industry: "Training / Tech",
      location: "India",
      founded: null,
      details: "Embedded systems training and placement partner (example).",
      links: { patch: { small: "" }, wikipedia: "", webcast: "https://www.emertxe.com/" }
    },
    {
      id: "77",
      name: "TCS iON",
      industry: "Tech / Education",
      location: "India",
      founded: null,
      details: "Strategic unit of TCS focused on education and assessments.",
      links: { patch: { small: "" }, wikipedia: "https://www.tcsion.com/", webcast: "https://www.tcsion.com/" }
    },
    {
      id: "78",
      name: "Barclays Technology India (example)",
      industry: "Financial Tech",
      location: "India",
      founded: null,
      details: "Large banking tech center in India (example).",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Barclays", webcast: "https://www.barclays.co.uk/" }
    },
    {
      id: "79",
      name: "VirtusaPolaris (example)",
      industry: "IT Services",
      location: "India",
      founded: null,
      details: "Merged brand example (Virtusa + Polaris acquisitions).",
      links: { patch: { small: "" }, wikipedia: "", webcast: "https://www.virtusa.com/" }
    },
    {
      id: "80",
      name: "Aparajitha Corporate Services (example)",
      industry: "IT / HR",
      location: "India",
      founded: null,
      details: "Example HR/Payroll tech services company.",
      links: { patch: { small: "" }, wikipedia: "", webcast: "https://www.aparajitha.com/" }
    },
    {
      id: "81",
      name: "Sasken Communication Technologies (alternate)",
      industry: "Telecom / Software",
      location: "India",
      founded: null,
      details: "Telecom software R&D company.",
      links: { patch: { small: "" }, wikipedia: "https://www.sasken.com/", webcast: "https://www.sasken.com/" }
    },
    {
      id: "82",
      name: "Incture (example)",
      industry: "IT Services",
      location: "India",
      founded: null,
      details: "ERP and enterprise solutions provider.",
      links: { patch: { small: "" }, wikipedia: "", webcast: "https://incture.com/" }
    },
    {
      id: "83",
      name: "Informatica (India ops example)",
      industry: "Data Management",
      location: "India",
      founded: null,
      details: "Data management and integration platform.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/Informatica", webcast: "https://www.informatica.com/" }
    },{
  id: "84",
  name: "Sonata Software",
  industry: "IT Services",
  location: "India",
  founded: 1986,
  details: "Offers IT consulting, digital transformation, and software services.",
  links: { 
    patch: { small: logoUrl("sonata-software.com") }, 
    wikipedia: "https://en.wikipedia.org/wiki/Sonata_Software", 
    webcast: "https://www.sonata-software.com/" 
  }},
    {
      id: "85",
      name: "ShopClues (example)",
      industry: "E-commerce",
      location: "India",
      founded: 2011,
      details: "Marketplace / tech example.",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/ShopClues", webcast: "https://www.shopclues.com/" }
    },
    {
      id: "86",
      name: "SBI (SBI technology / example)",
      industry: "Banking Tech",
      location: "India",
      founded: null,
      details: "Large banking group with tech orgs (example).",
      links: { patch: { small: "" }, wikipedia: "https://en.wikipedia.org/wiki/State_Bank_of_India", webcast: "https://www.sbi.co.in/" }
    },
    {
      id: "87",
      name: "HCLTech Digital (example)",
      industry: "IT Services",
      location: "India",
      founded: null,
      details: "HCL digital business unit example.",
      links: { patch: { small: "" }, wikipedia: "", webcast: "https://www.hcltech.com/" }
    },
    {
      id: "88",
      name: "Wipro Digital (example)",
      industry: "IT Services",
      location: "India",
      founded: null,
      details: "Wipro's digital business unit example.",
      links: { patch: { small: "" }, wikipedia: "", webcast: "https://www.wipro.com/" }
    },

  {
    id: "101",
    name: "Sony Corporation",
    industry: "Electronics",
    location: "Japan",
    founded: 1946,
    details: "Multinational conglomerate corporation headquartered in Tokyo, Japan.",
    links: {
      patch: { small: "https://logo.clearbit.com/sony.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Sony",
      webcast: "https://www.sony.com/"
    }
  },
  {
    id: "102",
    name: "Toyota Motor Corporation",
    industry: "Automotive",
    location: "Japan",
    founded: 1937,
    details: "Global automotive manufacturer headquartered in Toyota City, Japan.",
    links: {
      patch: { small: "https://logo.clearbit.com/toyota-global.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Toyota",
      webcast: "https://www.toyota-global.com/"
    }
  },
  {
    id: "103",
    name: "Nintendo",
    industry: "Gaming",
    location: "Japan",
    founded: 1889,
    details: "Video game company headquartered in Kyoto, Japan.",
    links: {
      patch: { small: "https://logo.clearbit.com/nintendo.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Nintendo",
      webcast: "https://www.nintendo.com/"
    }
  },
  {
    id: "104",
    name: "Hitachi",
    industry: "Technology",
    location: "Japan",
    founded: 1910,
    details: "Multinational conglomerate company headquartered in Tokyo, Japan.",
    links: {
      patch: { small: "https://logo.clearbit.com/hitachi.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Hitachi",
      webcast: "https://www.hitachi.com/"
    }
  },

  {
    id: "201",
    name: "Siemens",
    industry: "Conglomerate",
    location: "Germany",
    founded: 1847,
    details: "Global technology and engineering company headquartered in Munich, Germany.",
    links: {
      patch: { small: "https://logo.clearbit.com/siemens.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Siemens",
      webcast: "https://new.siemens.com/"
    }
  },
  {
    id: "202",
    name: "SAP",
    industry: "Software",
    location: "Germany",
    founded: 1972,
    details: "Global enterprise software company headquartered in Walldorf, Germany.",
    links: {
      patch: { small: "https://logo.clearbit.com/sap.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/SAP_SE",
      webcast: "https://www.sap.com/"
    }
  },
  {
    id: "203",
    name: "BMW",
    industry: "Automotive",
    location: "Germany",
    founded: 1916,
    details: "Luxury vehicle manufacturer headquartered in Munich, Germany.",
    links: {
      patch: { small: "https://logo.clearbit.com/bmw.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/BMW",
      webcast: "https://www.bmw.com/"
    }
  },
  {
    id: "204",
    name: "Adidas",
    industry: "Sportswear",
    location: "Germany",
    founded: 1949,
    details: "Global sportswear manufacturer headquartered in Herzogenaurach, Germany.",
    links: {
      patch: { small: "https://logo.clearbit.com/adidas.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Adidas",
      webcast: "https://www.adidas.com/"
    }
  }
,
  {
    id: "205",
    name: "Nike",
    industry: "Sportswear",
    location: "Germany",
    founded: 1964,
    details: "Global leader in athletic footwear, apparel, and equipment, headquartered in Beaverton, Oregon.",
    links: {
      patch: { small: "https://logo.clearbit.com/nike.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Nike,_Inc.",
      webcast: "https://www.nike.com/"
    }
  },
  {
    id: "206",
    name: "Puma",
    industry: "Sportswear",
    location: "Germany",
    founded: 1948,
    details: "German multinational corporation known for designing and manufacturing athletic and casual footwear, apparel, and accessories.",
    links: {
      patch: { small: "https://logo.clearbit.com/puma.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Puma_(brand)",
      webcast: "https://www.puma.com/"
    }
  },
  {
    id: "207",
    name: "Under Armour",
    industry: "Sportswear",
    location: "Germany",
    founded: 1996,
    details: "American company that manufactures footwear, sports, and casual apparel, known for its moisture-wicking technology.",
    links: {
      patch: { small: "https://logo.clearbit.com/underarmour.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Under_Armour",
      webcast: "https://www.underarmour.com/"
    }
  },
  {
    id: "208",
    name: "Reebok",
    industry: "Sportswear",
    location: "Germanys",
    founded: 1958,
    details: "Global athletic footwear and apparel company, originally founded in the UK, now based in Boston, Massachusetts.",
    links: {
      patch: { small: "https://logo.clearbit.com/reebok.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Reebok",
      webcast: "https://www.reebok.com/"
    }
  },
  {
    id: "209",
    name: "New Balance",
    industry: "Sportswear",
    location: "Germany",
    founded: 1906,
    details: "American multinational corporation known for its athletic shoes, apparel, and accessories, with a commitment to domestic manufacturing.",
    links: {
      patch: { small: "https://logo.clearbit.com/newbalance.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/New_Balance",
      webcast: "https://www.newbalance.com/"
    }
  },
  {
    id: "210",
    name: "ASICS",
    industry: "Sportswear",
    location: "Germany",
    founded: 1949,
    details: "Japanese multinational corporation that produces sports equipment and footwear, known for its GEL cushioning technology.",
    links: {
      patch: { small: "https://logo.clearbit.com/asics.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/ASICS",
      webcast: "https://www.asics.com/"
    }
  },
  {
    id: "211",
    name: "Converse",
    industry: "Sportswear",
    location: "Germany",
    founded: 1908,
    details: "American shoe company known for its Chuck Taylor All-Star sneakers, now a subsidiary of Nike.",
    links: {
      patch: { small: "https://logo.clearbit.com/converse.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Converse_(brand)",
      webcast: "https://www.converse.com/"
    }
  },
  {
    id: "212",
    name: "Vans",
    industry: "Sportswear",
    location: "Germany",
    founded: 1966,
    details: "American manufacturer of skateboarding shoes and apparel, known for its iconic slip-ons and checkerboard patterns.",
    links: {
      patch: { small: "https://logo.clearbit.com/vans.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Vans",
      webcast: "https://www.vans.com/"
    }
  },


  {
    id: "301",
    name: "BP (British Petroleum)",
    industry: "Energy",
    location: "UK",
    founded: 1909,
    details: "Global oil and gas company headquartered in London, UK.",
    links: {
      patch: { small: "https://logo.clearbit.com/bp.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/BP",
      webcast: "https://www.bp.com/"
    }
  },
  {
    id: "302",
    name: "Unilever",
    industry: "Consumer Goods",
    location: "UK",
    founded: 1929,
    details: "Multinational consumer goods company headquartered in London, UK.",
    links: {
      patch: { small: "https://logo.clearbit.com/unilever.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Unilever",
      webcast: "https://www.unilever.com/"
    }
  },
  {
    id: "303",
    name: "Rolls-Royce",
    industry: "Engineering",
    location: "UK",
    founded: 1906,
    details: "Engineering company known for aircraft engines and luxury cars.",
    links: {
      patch: { small: "https://logo.clearbit.com/rolls-royce.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Rolls-Royce",
      webcast: "https://www.rolls-royce.com/"
    }
  },
  {
    id: "304",
    name: "GlaxoSmithKline (GSK)",
    industry: "Pharmaceuticals",
    location: "UK",
    founded: 2000,
    details: "Global healthcare company headquartered in Brentford, UK.",
    links: {
      patch: { small: "https://logo.clearbit.com/gsk.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/GlaxoSmithKline",
      webcast: "https://www.gsk.com/"
    }
  },
  
  {
    id: "301",
    name: "Pfizer",
    industry: "Pharmaceuticals",
    location: "USA",
    founded: 1849,
    details: "Global biopharmaceutical company headquartered in New York City, known for developing vaccines and treatments across various therapeutic areas.",
    links: {
      patch: { small: "https://logo.clearbit.com/pfizer.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Pfizer",
      webcast: "https://www.pfizer.com/"
    }
  },
  {
    id: "302",
    name: "Johnson & Johnson",
    industry: "Pharmaceuticals",
    location: "USA",
    founded: 1886,
    details: "Multinational corporation headquartered in New Jersey, engaged in the research, development, manufacture, and sale of healthcare products.",
    links: {
      patch: { small: "https://logo.clearbit.com/jnj.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Johnson_%26_Johnson",
      webcast: "https://www.jnj.com/"
    }
  },
  {
    id: "303",
    name: "Merck & Co.",
    industry: "Pharmaceuticals",
    location: "USA",
    founded: 1891,
    details: "Global healthcare company headquartered in Rahway, New Jersey, known for its prescription medicines, vaccines, biologic therapies, and animal health products.",
    links: {
      patch: { small: "https://logo.clearbit.com/merck.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Merck_%26_Co.",
      webcast: "https://www.merck.com/"
    }
  },
  {
    id: "304",
    name: "AbbVie",
    industry: "Pharmaceuticals",
    location: "USA",
    founded: 2013,
    details: "Biopharmaceutical company headquartered in North Chicago, Illinois, focusing on immunology, oncology, neuroscience, eye care, virology, and women's health.",
    links: {
      patch: { small: "https://logo.clearbit.com/abbvie.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/AbbVie",
      webcast: "https://www.abbvie.com/"
    }
  },
  {
    id: "305",
    name: "Eli Lilly and Company",
    industry: "Pharmaceuticals",
    location: "USA",
    founded: 1876,
    details: "Global healthcare company headquartered in Indianapolis, Indiana, known for its innovations in diabetes, oncology, immunology, and neuroscience.",
    links: {
      patch: { small: "https://logo.clearbit.com/lilly.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Eli_Lilly_and_Company",
      webcast: "https://www.lilly.com/"
    }
  },
  {
    id: "306",
    name: "Bristol Myers Squibb",
    industry: "Pharmaceuticals",
    location: "USA",
    founded: 1858,
    details: "Global biopharmaceutical company headquartered in New York City, focusing on oncology, immunology, cardiovascular diseases, and fibrosis.",
    links: {
      patch: { small: "https://logo.clearbit.com/bms.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Bristol_Myers_Squibb",
      webcast: "https://www.bms.com/"
    }
  },
  {
    id: "307",
    name: "Amgen",
    industry: "Biotechnology",
    location: "USA",
    founded: 1980,
    details: "Biotechnology company headquartered in Thousand Oaks, California, known for its innovations in oncology, nephrology, and inflammation.",
    links: {
      patch: { small: "https://logo.clearbit.com/amgen.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Amgen",
      webcast: "https://www.amgen.com/"
    }
  },
  {
    id: "308",
    name: "Gilead Sciences",
    industry: "Biotechnology",
    location: "USA",
    founded: 1987,
    details: "Biopharmaceutical company headquartered in Foster City, California, focusing on antiviral drugs used in the treatment of HIV/AIDS, hepatitis B, hepatitis C, influenza, and COVID-19.",
    links: {
      patch: { small: "https://logo.clearbit.com/gilead.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Gilead_Sciences",
      webcast: "https://www.gilead.com/"
    }
  },
  {
    id: "309",
    name: "Regeneron Pharmaceuticals",
    industry: "Biotechnology",
    location: "USA",
    founded: 1988,
    details: "Biotechnology company headquartered in Tarrytown, New York, known for its innovations in ophthalmology, immunology, and oncology.",
    links: {
      patch: { small: "https://logo.clearbit.com/regeneron.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Regeneron_Pharmaceuticals",
      webcast: "https://www.regeneron.com/"
    }
  },
   {
    id: "401",
    name: "Bayer",
    industry: "Pharmaceuticals",
    location: "Germany",
    founded: 1863,
    details: "Global life sciences company headquartered in Leverkusen, Germany, focusing on healthcare and agriculture products.",
    links: {
      patch: { small: "https://logo.clearbit.com/bayer.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Bayer",
      webcast: "https://www.bayer.com/"
    }
  },
  {
    id: "402",
    name: "Boehringer Ingelheim",
    industry: "Pharmaceuticals",
    location: "Germany",
    founded: 1885,
    details: "Family-owned global pharmaceutical company headquartered in Ingelheim, Germany, focusing on human pharmaceuticals, animal health, and biopharmaceutical contract manufacturing.",
    links: {
      patch: { small: "https://logo.clearbit.com/boehringer-ingelheim.com?size=128" },
      wikipedia: "https://en.wikipedia.org/wiki/Boehringer_Ingelheim",
      webcast: "https://www.boehringer-ingelheim.com/"
    }
  }


];


  // Merge logos into each company object using COMPANY_LOGOS mapping
  const result = companies.map(c => {
    // prefer exact mapping by name, otherwise try meaningful fallback by domain lookup:
    const logoFromMap = COMPANY_LOGOS[c.name];
    if (logoFromMap) {
      c.links.patch.small = logoFromMap;
      return c;
    }

    // Fallback heuristics: try to build a logoUrl from the webcast domain if present
    try {
      const url = c.links && c.links.webcast ? new URL(c.links.webcast) : null;
      if (url && url.hostname) {
        c.links.patch.small = logoUrl(url.hostname, 128);
      } else {
        c.links.patch.small = "https://via.placeholder.com/128?text=Logo";
      }
    } catch (e) {
      c.links.patch.small = "https://via.placeholder.com/128?text=Logo";
    }
    return c;
  });

  return result;
}

export async function fetchRockets() {
  return [];
}
