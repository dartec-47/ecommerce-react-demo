import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export const api = new WooCommerceRestApi({
    url: "https://ecommerce-react-demo.x10.mx/wp/",
    consumerKey: "ck_0fbeec789c4e12780070d60ebaccf11245dba721",
    consumerSecret: "cs_ba3eb67352f860a6ca7102fd9aca0b5242fcbd71",
    wpAPI: true,
    version: "wc/v3"
});