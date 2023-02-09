import '../App.css';
import classes from "./Header.module.css";


function Header() {
    return (
        <div className={classes.header}>
            <img src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/4a14e7b2de7f6eaf5a6c98cb8c00b8de.png" alt="Logo"/>
        </div>
    );
}



export default Header;
