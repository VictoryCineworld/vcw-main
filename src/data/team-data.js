import teamImgOne from '@assets/img/team/f-1.jpg';
import teamImgTwo from '@assets/img/team/f-2.jpg';
import teamImgThere from '@assets/img/team/director3.jpg';
import teamImgFour from '@assets/img/team/director4.jpg';

import teamImgFive from '@assets/img/team/img-1.jpg';
import teamImgSix from '@assets/img/team/img-2.jpg';
import teamImgSeven from '@assets/img/team/img-3.jpg';
import teamImgEight from '@assets/img/team/img-4.jpg';



const teamData = [
    {
        id: 1,
        teamImg: teamImgOne,
        director: 'Gaurav',
        designation: 'Founder',
        teamName: 'Gaurav Pawar',
        socialIcons: [
            {
                id: 1,
                icon: 'fa-brands fa-facebook-f',
                url: 'https://www.facebook.com/gaurav.pawar.3323',
            },
            // {
            //     id: 2,
            //     icon: 'fa-brands fa-twitter',
            //     url: 'https://twitter.com/',
            // },
            {
                id: 3,
                icon: 'fa-brands fa-instagram',
                url: 'https://www.instagram.com/gauravcpawar?igsh=anFtOWV3c2Rnenpz',
            },
            {
                id: 4,
                icon: 'fa-brands fa-linkedin',
                url: 'https://www.linkedin.com/in/gaurav-pawar-635693141/',
            },
        ],
        delay: '0.3s'
    },
    {
        id: 2,
        teamImg: teamImgTwo,
        director: 'Gunjan',
        designation: 'Founder',
        teamName: "Gunjan Kela",
        socialIcons: [
            {
                id: 1,
                icon: 'fa-brands fa-facebook-f',
                url: 'https://www.facebook.com/gunjan.kela.31?rdid=DFPlPVaOggAjKt86&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F12CriheHp2r%2F',
            },
            // {
            //     id: 2,
            //     icon: 'fa-brands fa-twitter',
            //     url: 'https://twitter.com/',
            // },
            {
                id: 3,
                icon: 'fa-brands fa-instagram',
                url: 'https://www.instagram.com/gunjankelaa/',
            },
            {
                id: 4,
                icon: 'fa-brands fa-linkedin',
                url: 'https://www.linkedin.com/in/gunjan-kela-674a5b286/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            },
        ],
        delay: '0.4s'
    },
    {
        id: 3,
        teamImg: teamImgThere,
        director: 'Ledesma',
        designation: 'Makeup Artist',
        teamName: 'Ledesma Mildred',
        socialIcons: [
            {
                id: 1,
                icon: 'fa-brands fa-facebook-f',
                url: 'https://www.facebook.com/',
            },
            // {
            //     id: 2,
            //     icon: 'fa-brands fa-twitter',
            //     url: 'https://twitter.com/',
            // },
            {
                id: 3,
                icon: 'fa-brands fa-instagram',
                url: 'https://www.instagram.com/',
            },
            {
                id: 4,
                icon: 'fa-brands fa-linkedin',
                url: 'https://www.pinterest.com/',
            },
        ],
        delay: '0.5s'
    },
    {
        id: 4,
        teamImg: teamImgFour,
        director: 'Stephen',
        designation: 'Script Writer',
        teamName: 'Stephen Ketchum',
        socialIcons: [
            {
                id: 1,
                icon: 'fa-brands fa-facebook-f',
                url: 'https://www.facebook.com/',
            },
            // {
            //     id: 2,
            //     icon: 'fa-brands fa-twitter',
            //     url: 'https://twitter.com/',
            // },
            {
                id: 3,
                icon: 'fa-brands fa-instagram',
                url: 'https://www.instagram.com/',
            },
            {
                id: 4,
                icon: 'fa-brands fa-linkedin',
                url: 'https://www.pinterest.com/',
            },
        ],
        delay: '0.6s'
    },
    //home-there-data
    {
        id: 5,
        teamImg: teamImgFive,
        teamName: 'Cristiana Angel',
        designation: 'VEDIO EDITOR',
        teamItemClass: 'fm-team-item p-relative',
    },
    {
        id: 6,
        teamImg: teamImgSix,
        teamName: 'Ira Banana',
        designation: 'DIRECTOR',
        teamItemClass: 'fm-team-item p-relative active',
    },
    {
        id: 7,
        teamImg: teamImgSeven,
        teamName: 'Andres Man',
        designation: 'CAMERAMAN',
        teamItemClass: 'fm-team-item p-relative',
    },
    {
        id: 8,
        teamImg: teamImgEight,
        teamName: 'Charley Boxes',
        designation: 'VOICE MAKOVER',
        teamItemClass: 'fm-team-item p-relative',
    },


]
export default teamData;