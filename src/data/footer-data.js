
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
        description: 'We can film your project whether it is a commercial advertise, a short film or a document film.',
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
        title:'Follow Us',
        description: 'Connect me with social media',
        socialIcons: [
            {
                id: 1,
                icon: 'fa-brands fa-facebook-f',
                url: 'https://www.facebook.com/profile.php?id=61568906940789&mibextid=ZbWKwL',
            },
            {
                id: 2,
                icon: 'fa-brands fa-behance',
                url: 'https://www.behance.net/victory15',
            },
            {
                id: 3,
                icon: 'fa-brands fa-instagram',
                url: 'https://www.instagram.com/victory_cineworld/',
            },
            {
                id: 4,
                icon: 'fa-brands fa-linkedin',
                url: 'https://www.linkedin.com/company/victorycineworld/',
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
                contactInfo: 'https://g.co/kgs/i5GCh8R',
                contact: 'India  |  USA  ',
                addressWrapperClass:'fa-sharp fa-solid fa-location-dot'
            },
            {
                id: 2,
                contactInfo: 'tel:+91 968 989 6355',
                contact: '+91 968 989 6355',
                addressWrapperClass:'fa-sharp fa-solid fa-phone'
            },
            {
                id: 3,
                contactInfo: 'mailto:hello@victorycineworld.com',
                contact: 'hello@victorycineworld.com',
                addressWrapperClass:'fa-sharp fa-solid fa-envelope'
            },
            //home-two-data
            {
                id: 4,
                contactInfo: 'mailto:hello@victorycineworld.com',
                contact: 'hello@victorycineworld.com',
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