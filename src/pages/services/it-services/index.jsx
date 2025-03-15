
import FaqSection from "@components/newService/Faq";
import ParaHeading from "@components/newService/Para-Heading";
import { faqs } from "@data/services/it-services";

const { default: Breadcrumb } = require("@components/common/breadcrumb/breadcrumb");
const { default: FooterOne } = require("@layout/footers/footer-one");
const { Header } = require("@layout/index");

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb title="IT Services" subTitle="Services" />
                <div className="container section-spacing-bottom wow fadeInUp mt-75" data-wow-delay="0.3s">

                    <ParaHeading title="" content={`At Victory Cineworld, we specialize in crafting stunning, functional, and user-centric websites. Our team of skilled web developers is dedicated to delivering exceptional results for businesses of all sizes. Whether you need a simple website or a complex web application, we have the expertise to bring your vision to life. From e-commerce platforms to corporate websites, we offer a wide range of web development services tailored to your specific needs. 

Our focus on user experience and search engine optimization ensures that your website not only looks great but also performs well. We work closely with our clients to understand their unique requirements and deliver solutions that exceed expectations. 
`} />

                    <FaqSection title={"Frequently Asked Questions"} faqs={faqs} />
                </div>
            </main>
            <FooterOne />
        </>
    );
};


export default index
