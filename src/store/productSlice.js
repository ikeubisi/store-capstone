import { createSlice } from "@reduxjs/toolkit";

// Products being sold
const productSlice = createSlice({
    name: "products",
    initialState: [{
            id: "1",
            name: "Spoon",
            description: "Wooden Spoon",
            price: 1,
            img: "https://m.media-amazon.com/images/I/61moD4yrLOL.jpg",
        },
        {
            id: "2",
            name: "Fork",
            description: "Metal Fork 100% stainless steel",
            price: 1,
            img: "https://m.media-amazon.com/images/I/61z0LVrrowL._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: "3",
            name: "Knife",
            description: "Plastic Knife 100% germ free",
            price: 1,
            img: "data:image/webp;base64,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",
        },
        {
            id: "4",
            name: "Spork",
            description: "Metal Spork made from titanium",
            price: 1,
            img: "https://m.media-amazon.com/images/I/81H7YgQZjiL._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: "5",
            name: "Plate",
            description: "Plastic Plate, totally unbreakable",
            price: 2,
            img: "https://raven.contrado.app/resources/images/2017-12/75876/melamine-plastic-plate-design-reverse-side-208618_l.jpg",
        },
        {
            id: "6",
            name: "Cup",
            description: "Clay Cup made by hand",
            price: 2,
            img: "https://www.minimax.com.au/cdn/shop/products/dwell-340ml-clay-mug-985663.jpg?v=1631892087",
        },
        {
            id: "7",
            name: "Bowl",
            description: "Wooden Bowl made from pine",
            price: 2,
            img: "https://www.ikea.com/gb/en/images/products/blanda-matt-serving-bowl-bamboo__0711988_pe728640_s5.jpg",
        },
        {
            id: "8",
            name: "Mug",
            description: "Metal Mug with 5 year guarantee",
            price: 3,
            img: "https://m.media-amazon.com/images/I/61SJPoBcisL._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: "9",
            name: "Ladle",
            description: "Metal Ladle, can handle any heat",
            price: 4,
            img: "https://m.media-amazon.com/images/I/61nM4lieuzL.jpg",
        },
        {
            id: "10",
            name: "Glass",
            description: "Crystal Glass that's dishwasher safe",
            price: 5,
            img: "https://api-prod.royaldesign.se/api/products/image/6/koziol-crystal-glass-l-0",
        },
    ],
});

export default productSlice.reducer;