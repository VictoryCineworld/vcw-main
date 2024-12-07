
import Logo from '@assets/img/logo/logo.png';
import GalleryOne from '@assets/img/gallery/01.jpg';
import GalleryTwo from '@assets/img/gallery/02.jpg';
import GalleryThere from '@assets/img/gallery/03.jpg';
import GalleryFour from '@assets/img/gallery/04.jpg';
import GalleryFive from '@assets/img/gallery/05.jpg';
import GallerySix from '@assets/img/gallery/06.jpg';

const footerData = {
    description: {
        id: 1,
        logo: Logo,
        description: 'Lorem ipsum dolor amet consectetur adipisicing elit sed do eiusmod',
    },

    gallery: {
        id: 2,
        title: 'Our Gallery',
         galleryData:[
            {
               id:1,
               image:GalleryOne
            },
            {
               id:2,
               image:GalleryTwo
            },
            {
               id:3,
               image:GalleryThere
            },
            {
               id:4,
               image:GalleryFour
            },
            {
               id:5,
               image:GalleryFive
            },
            {
               id:6,
               image:GallerySix
            },
            
         ]
    },

    socialLink: {
        id: 3,
        title:'Follow Me',
        description: 'Connect me with social media',
        socialIcons: [
            {
                id: 1,
                icon: 'fa-brands fa-facebook-f',
                url: 'https://www.facebook.com/',
            },
            {
                id: 2,
                icon: 'fa-brands fa-twitter',
                url: 'https://twitter.com/',
            },
            {
                id: 3,
                icon: 'fa-brands fa-instagram',
                url: 'https://www.instagram.com/',
            },
            {
                id: 4,
                icon: 'fa-brands fa-pinterest-p',
                url: 'https://www.pinterest.com/',
            },
        ]
    },
    quickLinks: {
        id: 4,
        title: 'Contact Us',
        address: [
            //home-one-data
            {
                id: 1,
                contactInfo: 'https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873',
                contact: 'Broadway, NY 10013 Bournemouth',
                addressWrapperClass:'fa-sharp fa-solid fa-location-dot'
            },
            {
                id: 2,
                contactInfo: 'tel:+821236545690',
                contact: '+821 (2365) 45690',
                addressWrapperClass:'fa-sharp fa-solid fa-phone'
            },
            {
                id: 3,
                contactInfo: 'mailto:hello@faimemedia.com',
                contact: 'hello@faimemedia.com',
                addressWrapperClass:'fa-sharp fa-solid fa-envelope'
            },
            //home-two-data
            {
                id: 4,
                contactInfo: 'mailto:hello@faimemedia.com',
                contact: 'hello@faimemedia.com',
                contactClass:'contact-mail',
                addressWrapperClass:'fm-contact-mail',
                contactTimeClass:'fm-contact-hours',
                contactTime:'Response within 24hrs'
            },
            {
                id: 5,
                contactInfo: 'tel:915550303420',
                contact: '+91 555 0303 420',
                contactClass:'contact-call',
                addressWrapperClass:'fm-contact-call',
                contactTimeClass:'fm-contact-time',
                contactTime:'Mon - Fri / 9 am - 5:30 pm'
            },

        ]
    },
}
   

export default footerData;