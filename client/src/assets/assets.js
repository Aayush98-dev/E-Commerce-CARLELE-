import logo from "./logo.svg";
import lg2 from "./lg2.svg";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg"
import close_icon from "./close_icon.svg"
import users_icon from "./users_icon.svg"
import car_icon from "./car_icon.svg"
import location_icon from "./location_icon.svg"
import fuel_icon from "./fuel_icon.svg"
import addIcon from "./addIcon.svg"
import carIcon from "./carIcon.svg"
import carIconColored from "./carIconColored.svg"
import dashboardIcon from "./dashboardIcon.svg"
import dashboardIconColored from "./dashboardIconColored.svg"
import addIconColored from "./addIconColored.svg"
import listIcon from "./listIcon.svg"
import listIconColored from "./listIconColored.svg"
import cautionIconColored from "./cautionIconColored.svg"
import arrow_icon from "./arrow_icon.svg"
import star_icon from "./star_icon.svg"
import check_icon from "./check_icon.svg"
import tick_icon from "./tick_icon.svg"
import delete_icon from "./delete_icon.svg"
import eye_icon from "./eye_icon.svg"
import eye_close_icon from "./eye_close_icon.svg"
import filter_icon from "./filter_icon.svg"
import edit_icon from "./edit_icon.svg"
import calendar_icon_colored from "./calendar_icon_colored.svg"
import location_icon_colored from "./location_icon_colored.svg"
import testimonial_image_1 from "./testimonial_image_1.png"
import testimonial_image_2 from "./testimonial_image_2.png"
import main_car from "./main_car.png"
import banner_car_image from "./banner_car_image.png"
import user_profile from "./user_profile.png"
import upload_icon from "./upload_icon.svg"
import car_image1 from "./car_image1.png"
import car_image2 from "./car_image2.png"
import car_image3 from "./car_image3.png"
import car_image4 from "./car_image4.png"
import car_image5 from "./car_image5.png"
import car_image6 from "./car_image6.png"
import car_image7 from "./car_image7.png"
import car_image8 from "./car_image8.png"
import car_image9 from "./car_image9.png"


export const cityList = ['Delhi', 'Lucknow', 'Mumbai', 'Kanpur', 'Pune', 'jaipur', 'Hyderabad', 'Chandigarh']

export const assets = {
    logo,
    lg2,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    menu_icon,
    search_icon,
    close_icon,
    users_icon,
    edit_icon,
    car_icon,
    location_icon,
    fuel_icon,
    addIcon,
    carIcon,
    carIconColored,
    dashboardIcon,
    dashboardIconColored,
    addIconColored,
    listIcon,
    listIconColored,
    cautionIconColored,
    calendar_icon_colored,
    location_icon_colored,
    arrow_icon,
    star_icon,
    check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
    filter_icon,
    testimonial_image_1,
    testimonial_image_2,
    main_car,
    banner_car_image,
    car_image1,
    upload_icon,
    user_profile,
    car_image2,
    car_image3,
    car_image4,
    car_image5,
    car_image6,
    car_image7,
    car_image8,
    car_image9
}

export const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "My Bookings", path: "/my-bookings" },
]

export const ownerMenuLinks = [
    { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: "Add car", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored },
    { name: "Manage Cars", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored },
    { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]

export const dummyUserData = {
  "_id": "6847f7cab3d8daecdb517095",
  "name": "AyushSingh",
  "email": "admin@example.com",
  "role": "owner",
  "image": user_profile,
}

export const dummyCarData = [
    {
        "_id": "67ff5bc069c03d4e45f30b77",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "BMW",
        "model": "X5",
        "image": car_image1,
        "year": 2006,
        "category": "SUV",
        "seating_capacity": 4,
        "fuel_type": "Hybrid",
        "transmission": "Semi-Automatic",
        "pricePerDay": 300,
        "location": "Delhi",
        "description": "The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
    {
        "_id": "67ff6b758f1b3684286a2a65",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Toyota",
        "model": "Corolla",
        "image": car_image2,
        "year": 2021,
        "category": "Sedan",
        "seating_capacity": 4,
        "fuel_type": "Diesel",
        "transmission": "Manual",
        "pricePerDay": 130,
        "location": "Kanpur",
        "description": "The Toyota Corolla is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T08:33:57.993Z",
    },
    {
        "_id": "67ff6b9f8f1b3684286a2a68",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Jeep ",
        "model": "Wrangler",
        "image": car_image3,
        "year": 2023,
        "category": "SUV",
        "seating_capacity": 4,
        "fuel_type": "Hybrid",
        "transmission": "Automatic",
        "pricePerDay": 200,
        "location": "Lucknow",
        "description": "The Jeep Wrangler is a mid-size luxury SUV produced by Jeep. The Wrangler made its debut in 2003 as the first SUV ever produced by Jeep.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T08:34:39.592Z",
    },
    {
        "_id": "68009c93a3f5fc6338ea7e34",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Ford",
        "model": "Neo 6",
        "image": car_image4,
        "year": 2022,
        "category": "Sedan",
        "seating_capacity": 2,
        "fuel_type": "Diesel",
        "transmission": "Semi-Automatic",
        "pricePerDay": 209,
        "location": "Mumbai",
        "description": "This is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
        "isAvaliable": true,
        "createdAt": "2025-04-17T06:15:47.318Z",
    },
    {
        "_id": "67ff7b102b7f8f9a3d4b1c03",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Mercedes-Benz",
        "model": "C-Class",
        "image": car_image5,
        "year": 2020,
        "category": "Sedan",
        "seating_capacity": 5,
        "fuel_type": "Diesel",
        "transmission": "Automatic",
        "pricePerDay": 280,
        "location": "Pune",
        "description": "The Mercedes-Benz C-Class blends luxury, performance, and technology in one of the most popular executive sedans worldwide.",
        "isAvaliable": false,
        "createdAt": "2025-04-17T12:44:11.321Z"
    },
    {
        "_id": "67ff7b932b7f8f9a3d4b1c04",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Mahindra",
        "model": "Thar",
        "image": car_image6,
        "year": 2022,
        "category": "SUV",
        "seating_capacity": 4,
        "fuel_type": "Diesel",
        "transmission": "Manual",
        "pricePerDay": 170,
        "location": "Jaipur",
        "description": "The Mahindra Thar is a rugged off-road SUV known for its adventure-ready design and excellent off-roading capabilities.",
        "isAvaliable": true,
        "createdAt": "2025-04-17T13:25:00.901Z"
    },
    {
        "_id": "67ff7c1d2b7f8f9a3d4b1c05",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Tesla",
        "model": "Model 3",
        "image": car_image7,
        "year": 2024,
        "category": "Sedan",
        "seating_capacity": 5,
        "fuel_type": "Electric",
        "transmission": "Automatic",
        "pricePerDay": 400,
        "location": "Hyderabad",
        "description": "The Tesla Model 3 is a fully electric sedan offering outstanding performance, zero emissions, and advanced autopilot features.",
        "isAvaliable": true,
        "createdAt": "2025-04-17T14:10:28.645Z"
    },
    {
        "_id": "67ff7c992b7f8f9a3d4b1c06",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Ford",
        "model": "Endeavour",
        "image": car_image8,
        "year": 2018,
        "category": "SUV",
        "seating_capacity": 7,
        "fuel_type": "Diesel",
        "transmission": "Automatic",
        "pricePerDay": 200,
        "location": "Chandigarh",
        "description": "The Ford Endeavour is a powerful full-size SUV built for both city comfort and off-road adventure with premium interiors.",
        "isAvaliable": false,
        "createdAt": "2025-04-17T15:19:42.219Z"
    },
        {
        "_id": "6800abcd1234abcd5678ef01",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Audi",
        "model": "Q7",
        "image": car_image9,
        "year": 2023,
        "category": "SUV",
        "seating_capacity": 5,
        "fuel_type": "Hybrid",
        "transmission": "Automatic",
        "pricePerDay": 350,
        "location": "Bangalore",
        "description": "Audi Q7 is a luxury SUV offering comfort, performance, and advanced tech features.",
        "isAvaliable": true,
        "createdAt": "2025-04-18T10:00:00.000Z"
    }
];

export const dummyMyBookingsData = [
    {
        "_id": "68482bcc98eb9722b7751f70",
        "car": dummyCarData[0],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-13T00:00:00.000Z",
        "returnDate": "2025-06-14T00:00:00.000Z",
        "status": "confirmed",
        "price": 440,
        "createdAt": "2025-06-10T12:57:48.244Z",
    },
    {
        "_id": "68482bb598eb9722b7751f60",
        "car": dummyCarData[1],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-12T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 130,
        "createdAt": "2025-06-10T12:57:25.613Z",
    },
    {
        "_id": "684800fa0fb481c5cfd92e56",
        "car": dummyCarData[2],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 600,
        "createdAt": "2025-06-10T09:55:06.379Z",
    },
    {
        "_id": "6847fe790fb481c5cfd92d94",
        "car": dummyCarData[3],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "confirmed",
        "price": 440,
        "createdAt": "2025-06-10T09:44:25.410Z",
    },
    {
        "_id": "684810000fb481c5cfd92e70",
        "car": dummyCarData[4],
        "user": "6847f7cab3d8daecdb517096",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-15T00:00:00.000Z",
        "returnDate": "2025-06-16T00:00:00.000Z",
        "status": "pending",
        "price": 280,
        "createdAt": "2025-06-12T10:00:00.000Z"
    },
    {
        "_id": "684810110fb481c5cfd92e71",
        "car": dummyCarData[5],
        "user": "6847f7cab3d8daecdb517097",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-17T00:00:00.000Z",
        "returnDate": "2025-06-18T00:00:00.000Z",
        "status": "confirmed",
        "price": 170,
        "createdAt": "2025-06-12T11:00:00.000Z"
    },
    {
        "_id": "684810220fb481c5cfd92e72",
        "car": dummyCarData[6],
        "user": "6847f7cab3d8daecdb517098",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-19T00:00:00.000Z",
        "returnDate": "2025-06-20T00:00:00.000Z",
        "status": "pending",
        "price": 400,
        "createdAt": "2025-06-12T12:00:00.000Z"
    },
    {
        "_id": "684810330fb481c5cfd92e73",
        "car": dummyCarData[7],
        "user": "6847f7cab3d8daecdb517099",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-21T00:00:00.000Z",
        "returnDate": "2025-06-22T00:00:00.000Z",
        "status": "confirmed",
        "price": 200,
        "createdAt": "2025-06-12T13:00:00.000Z"
    },
        {
        "_id": "684810440fb481c5cfd92e74",
        "car": dummyCarData[8],
        "user": "6847f7cab3d8daecdb517100",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-23T00:00:00.000Z",
        "returnDate": "2025-06-24T00:00:00.000Z",
        "status": "pending",
        "price": 350,
        "createdAt": "2025-06-13T10:00:00.000Z"
    }
]

export const dummyDashboardData = {
    "totalCars": 12,
    "totalBookings": 12,
    "pendingBookings": 6,
    "completedBookings": 6,
    "recentBookings": [
        dummyMyBookingsData[8],
        dummyMyBookingsData[9],
        dummyMyBookingsData[10],
        dummyMyBookingsData[11]
    ],
    "monthlyRevenue": 1580
};

