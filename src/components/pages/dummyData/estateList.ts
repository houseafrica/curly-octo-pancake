interface EstateItem {
    id: number,
    imageUrl: string,
    name: string,
    address: string
}

interface PropertyItem {
    id: number,
    imageUrl: string,
    name: string,
    address: string,
    dimension: string,
    validated: boolean,
    allocated: boolean
}

const data: EstateItem[] = [
    {
        id: 1,
        imageUrl: "https://via.placeholder.com/250x150?text=placeholder+image",
        name: "sky high estate",
        address: "Opp first marine gate, Osogbo, Lagos, Nigeria"
    },
    {
        id: 2,
        imageUrl: "https://via.placeholder.com/250x150?text=placeholder+image",
        name: "sky high estate",
        address: "Opp first marine gate, Osogbo, Lagos, Nigeria"
    },
    {
        id: 3,
        imageUrl: "https://via.placeholder.com/250x150?text=placeholder+image",
        name: "sky high estate",
        address: "Opp first marine gate, Osogbo, Lagos, Nigeria"
    },
    {
        id: 4,
        imageUrl: "https://via.placeholder.com/250x150?text=placeholder+image",
        name: "sky high estate",
        address: "Opp first marine gate, Osogbo, Lagos, Nigeria"
    },
    {
        id: 5,
        imageUrl: "https://via.placeholder.com/250x150?text=placeholder+image",
        name: "sky high estate",
        address: "Opp first marine gate, Osogbo, Lagos, Nigeria"
    },
    {
        id: 6,
        imageUrl: "https://via.placeholder.com/250x150?text=placeholder+image",
        name: "sky high estate",
        address: "Opp first marine gate, Osogbo, Lagos, Nigeria"
    },
    {
        id: 7,
        imageUrl: "https://via.placeholder.com/250x150?text=placeholder+image",
        name: "sky high estate",
        address: "Opp first marine gate, Osogbo, Lagos, Nigeria"
    },
    {
        id: 8,
        imageUrl: "https://via.placeholder.com/250x150?text=placeholder+image",
        name: "sky high estate",
        address: "Opp first marine gate, Osogbo, Lagos, Nigeria"
    },
    {
        id: 9,
        imageUrl: "https://via.placeholder.com/250x150?text=placeholder+image",
        name: "sky high estate",
        address: "Opp first marine gate, Osogbo, Lagos, Nigeria"
    }
];

export const estateProperties: Array<PropertyItem> = [
    {
        id: 1,
        imageUrl: "https://via.placeholder.com/250x150?text=placeholder+image",
        name: "4 Bedroom Flat",
        address: "Chevron estate, Lekki, Lagos",
        dimension: "N/A",
        validated: false,
        allocated: false
    },
    {
        id: 2,
        imageUrl: "https://via.placeholder.com/300x150?text=placeholder+image",
        name: "4 Bedroom Flat",
        address: "Chevron estate, Lekki, Lagos",
        dimension: "N/A",
        validated: false,
        allocated: false
    }
]


export default data;