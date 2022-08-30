const dataItems = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1515081774057-84dcf72d0cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
        stat: "",
    },
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1515081774057-84dcf72d0cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
        stat: "",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1096&q=80",
        stat: "",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1096&q=80",
        stat: "",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1531257240678-d5b1922e672d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        stat: "",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1531257240678-d5b1922e672d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        stat: "",
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        stat: "",
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        stat: "",
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        stat: "",
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        stat: "",
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1454793147212-9e7e57e89a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=364&q=80",
        stat: "",
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1454793147212-9e7e57e89a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=364&q=80",
        stat: "",
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1538168407380-1d74b45cf8ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        stat: "",
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1538168407380-1d74b45cf8ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        stat: "",
    },
    {
        id: 8,
        img: "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
        stat: "",
    },
    {
        id: 8,
        img: "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
        stat: "",
    },
];



const mediumDataItems = [...dataItems]
    // .sort(() => Math.random() - 0.5)
const lowDataItems = [...dataItems].slice(0, 12)
    // .sort(() => Math.random() - 0.5)

export {
    lowDataItems,
    mediumDataItems
}