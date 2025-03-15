
import { contentcreationStepData, faqs } from "@data/services/content-creation-content-designing";

const { default: Breadcrumb } = require("@components/common/breadcrumb/breadcrumb");
const { default: FooterOne } = require("@layout/footers/footer-one");
const { Header } = require("@layout/index");

const index = ({ item }) => {
    return (
        <>
            <Header />
          <h1>SuccessFull</h1>
            <FooterOne />
        </>
    );
};


export default index
