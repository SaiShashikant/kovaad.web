export const navItems = [
    {name: "Home", link: "#home"},
    {name: "Company", link: "#about"},
    {name: "Learn More", link: "#services"},
    {name: "Projects", link: "#contact"},
    {name: "Solutions", link: "#contact"},
    {name: "Responsibility", link: "#contact"},
];

export const gridItems = [
    {
        id: 1,
        title: [{plain:"Ko-VaaD",highlighted: ""}],
        description: ["A tool to help and practice effective communication."],
        imgClassName: "w-full h-full object-cover",
        className: " w-[90%]",
        titleClassName: "justify-center",
        img: "/group.jpg",
        spareImg: "",
        buttonLink: "#home"
    },
    {
        id: 2,
        title:  [{plain:"Social ",highlighted: "Communication"}],
        subtitle: "What is it?",
        description: ["Any communication that is mindfully directed towards a person, for a purpose other than just own need fulfillment is Social Communication.",
            "These can be simply sharing something interesting, taking permission, or sharing information. While doing so, the individual needs to use both verbal and non-verbal forms of communication in an integrated manner, guided by social perception and social cognition (thinking) ",
            "When an individual attempts to communicate without an understanding of social cognition, language appears to be irrelevant, repetitive, and non-communicative."],
        className: " w-[90%]",
        imgClassName: "w-full h-full object-cover",
        titleClassName: "justify-center",
        img: "/successful_communication.png",
        spareImg: "",
        buttonLink: "beta.kovaad.ai",
        buttonName: "Learn More",
    },
    {
        id: 3,
        heading: "Expertise",
        title:[{plain:"Our Focus Areas",highlighted: ""}] ,
        description: ["Social Communication is targeted through each of these: "],
        className: " w-[90%]",
        img: "/macbook.jpeg",
        spareImg: "",
        buttonLink: ""
    },
    {
        id: 4,
        sno: "01",
        title:[{plain: "Purposed Communication",highlighted: ""}],
        description: ["A lot of communication that happens has a specific reason or aim behind it. Everyone uses many different kinds of purposes in their everyday interactions and it is this range that increases the quality of interaction. The individuals who use few or a single purpose in all their communications, display a restricted and repetitive interaction/ communication style",
            "Moreover, these targeted communication pieces are relatively more structured, specific, and shorter in length unlike short conversations/ small talk, making them more amenable to training."],
        className: " w-[90%]",
        imgClassName: "w-3/4 h-3/4 object-cover mx-auto",
        titleClassName: "justify-center",
        img: "/phone.jpg",
        spareImg: "",
        buttonLink: ""
    },
    {
        id: 5,
        sno: "02",
        title: [{plain:"Modification",highlighted: ""}],
        description: ["As an individual learns how to communicate for a variety of reasons, he also learns to communicate in a ‘variety of places’ with a ‘variety of people’. The people he communicates with differ in the emotional closeness, relationship with the individual as well as their age vis-a-vis the individual. Effective communication would require understanding these and modifying what and how they speak. This would further change when the individual is talking to those same people in different places – private or public, formal or informal. They need to modify",
            "a) their way of speaking (tone of voice);",
            "b) choice of words they use to convey the same message: eg having learned to say no, the way of saying no will be different when said to a teacher/ boss, vis-a-vis a friend or a parent. In the absence of this, the communication can sound disrespectful, rude, or even casual.",
            "c) what they talk about"],
        className: " w-[90%]",
        imgClassName: "w-3/4 h-3/4 object-cover mx-auto",
        titleClassName: "justify-center",
        img: "/girl_thumps_up.jpg",
        spareImg: "",
        buttonLink: ""
    },
    {
        id: 6,
        sno: "03",
        title: [{plain:"Conversation Structure",highlighted: ""}],
        description: ["Much like everything else in life, there are explicit rules to having conversations, starting from how to join in the existing conversation; how much I speak; picking up the unstated topic in the conversation; connecting my ideas in response to the conversation partner; how long to continue on the topic and exiting or closing the topic. Individuals facing concerns with social communication often need guidance and practice in each of these rules before they can smoothly use them in everyday conversations."],
        className: " w-[95%]",
        imgClassName: "w-ful h-3/4 object-fit mx-auto",
        titleClassName: "justify-center",
        img: "/conversation_structure_plain.png",
        spareImg: "",
        buttonLink: ""
    },
    {
        id: 7,
        sno: "04",
        title:[{plain:"Building Conversation Content",highlighted: ""}] ,
        description: ["Even though most kids/ individuals feel excited to share about a topic of their interest, they lack the ideas of what to share, so they end up either only asking questions or listing facts about their topic, without assimilating what the other has said. They may also sound repetitive or just ‘boring’. To be able to talk effectively, one needs to share more experiences, and opinions and show interest in knowing the about the other."],
        className: " w-[95%]",
        imgClassName: "w-full h-3/4 object-fill mx-auto",
        titleClassName: "justify-center",
        img: "/sai_tennis_academy.png",
        spareImg: "",
        buttonLink: ""
    },
    {
        id: 8,
        sno: "05",
        title: [{plain:"Situation Specific Conversations",highlighted: ""}],
        description: ["Practicing everyday conversation skills relevant to specific situations like buying a ticket; going to a barber shop; ordering food in a restaurant etc. is also a need for most individuals who struggle with social communication, to be able to live independently and improve their quality of life."],
        className: " w-[90%]",
        imgClassName: "w-3/4 h-3/4 object-fill mx-auto",
        titleClassName: "justify-center",
        img: "/kids-birthday-party.webp",
        spareImg: "",
        buttonLink: ""
    },
    {
        id: 9,
        title: [{plain:"We",highlighted:" Access"},{plain:", We",highlighted:" Suggest"},{plain:" & We",highlighted:" Train"}],
        titles:[],
        description: [
            {sno: "01", desc: "Which modules"},
            {sno: "02", desc: "Type of Facilitation"},
            {sno: "03", desc: "Kind of Sessions"},
            {sno: "04", desc: "Checklists"},
            {sno: "05", desc: "Visual Tracker to assess skills"}],
        className: " w-[90%]",
        imgClassName: "w-full h-full object-contain",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
        buttonLink: ""
    }
]

export const footer = {
    quickLinks: [{link: "home", title: "Home"},
        {link: "about", title: "About"},
        {link: "services", title: "Services"},
        {link: "contact", title: "Contact"}],
    supportLinks: [{link: "faq", title: "FAQ"},
        {link: "privacy", title: "Privacy Policy"},
        {link: "terms", title: "Terms of Service"}],
    contactLinks: [{link: "itservices@kovaad.ai", title: "itservices@kovaad.ai"},
        {link: "+1 234 567 890", title: "+1 234 567 890"}],
}

export const AppConstants ={
    Links:{
        Home:"/" as string,
        AboutUs : "/aboutus" as string,
        Pricing: "/pricing" as string,
        Reports: "/reports" as string,
        Blogs: "/blogs" as string,
        ContactUs: "/contactus" as string,
        Subscription: "/subscription" as string,
        Billing: "/billing" as string,
        Support: "/support" as string,
    }
}

export const KovaadLink="https://beta.kovaad.ai"