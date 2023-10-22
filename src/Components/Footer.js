import RmaLogo from "./RmaLogo";

const Footer = () => {
	return (
        <footer className="bck_blue">
        <div className="footer_logo">
            <RmaLogo
                link={true}
                width="50px"
                height="70px"
            />
        </div>
        <div className="footer_descl">
           Real Madird 2023 
        </div>
    </footer> 
	);
};
export default Footer;
