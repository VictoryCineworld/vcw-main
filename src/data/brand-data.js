const { default: BrandSvgFour } = require("@svg/brand-svg-four");
const { default: BrandSvgOne } = require("@svg/brand-svg-one");
const { default: BrandSvgThere } = require("@svg/brand-svg-there");
const { default: BrandSvgTwo } = require("@svg/brand-svg-two");



const brandData = [
    {
        id: 1,
        brandSvg: <BrandSvgOne />
    },
    {
        id: 2,
        brandSvg: <BrandSvgTwo />
    },
    {
        id: 3,
        brandSvg: <BrandSvgThere />
    },
    {
        id: 4,
        brandSvg: <BrandSvgFour />
    },
    {
        id: 5,
        brandSvg: <BrandSvgTwo />
    },
    {
        id: 6,
        brandSvg: <BrandSvgThere />
    },
]
export default brandData;