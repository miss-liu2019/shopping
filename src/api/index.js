import axios from 'axios'
export const getindexmenu = (params) => {
    return axios({
        url: 'http://106.12.79.128:1234/api/getindexmenu',
        params: params,
        method: 'get'
    })
}

export const getmoneyctrl = (params) => {
    return axios({
        url: 'http://106.12.79.128:1234/api/getmoneyctrl',
        params: params,
        method: 'get'
    })
}

//获取凑单品区域
export const Getgsshoparea = (params) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getgsshoparea",
        method: "get",
        params
    })
}


//获取凑单品店铺
export const productstore = (params) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getgsshop",
        method: "get",
        params
    })
}


//获取凑单品商品列表
export const cdpproductlist = (op1, op2) => {
    let params = new URLSearchParams();
    params.append('shopid ', op1)
    params.append('areaid ', op2)
    return axios({
        url: "http://106.12.79.128:1234/api/getgsproduct",
        data: params,
        method: "get"
    })
}


// 获取品牌大全标题
export const Getbrands = (params) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getbrandtitle",
        method: "get",
        params
    })
}


// 获取品牌标题对应的十大品牌
export const getbrandslists = (brandtitleid) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getbrand",
        params: {
            brandtitleid
        },
        method: "get"
    })
}

// 获取品牌标题对应的十大品牌的销量排行商品列表
export const getTenListData = (op1, op2) => {
    let params = new URLSearchParams();
    params.append("brandtitleid", op1);
    params.append("pagesize ", op2);
    return axios({
        url: "http://106.12.79.128:1234/api/getbrandproductlist",
        params,
        method: "get"
    });
};


// 获取销量排行商品的评论
export const getspeack = (productid) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getproductcom",
        params: {
            productid
        },
        method: "get"
    })
}

// 获取单个商品详情
export const getproductdetail = (productid) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getproduct",
        params: {
            productid
        },
        method: "get"
    })
}


// 阿坤
export const Getlist = (params) => {
    return axios({
        url: 'http://106.12.79.128:1234/api/getbaicaijiatitle',
        method: 'get',
        params
    })
}

// 阿坤
export const Product = (id) => {
    let params = new URLSearchParams();
    params.append('titleid', id)
    return axios({
        url: 'http://106.12.79.128:1234/api/getbaicaijiaproduct',
        method: 'get',
        params
    })
}


// 2.2.1 分类标题API
export const getCategoryTitle = () => {
    return axios({
        url: "http://106.12.79.128:1234/api/getcategorytitle",
        method: "get"
    })
}

// 2.2.2 分类列表API
export const getCategory = (titleid) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getcategory",
        method: "get",
        params: {
            titleid
        }
    })
}

// 2.4.1 根据分类id获取分类名称API
export const getCategoryName = (categoryid) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getcategorybyid",
        method: "get",
        params: {
            categoryid
        }
    })
}

// 2.4.2 商品列表API
export const getProList = (categoryid, pageid) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getproductlist",
        method: "get",
        params: {
            categoryid,
            pageid
        }
    })
}

// 2.6.1 获取商品详情API
export const getProDetail = (productid) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getproduct",
        method: "get",
        params: {
            productid
        }
    })
}

// 2.6.2 获取商品评论API
export const getProComment = (productid) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getproductcom",
        method: "get",
        params: {
            productid
        }
    })
}

// 7.2.1 优惠劵标题API
export const getCouponTitles = () => {
    return axios({
        url: "http://106.12.79.128:1234/api/getcoupon",
        method: "get"
    })
}

// 7.2.2 优惠劵列表API
export const getCouponLists = (couponid) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getcouponproduct",
        method: "get",
        params: {
            couponid
        }
    })
}

//获取省钱控的参数接口
export const getSaveMoney = (params) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getmoneyctrl",
        //get请求传递参数
        params,
        method: 'get'
    })
}

//国内折扣的接口
export const getDiscount = (params) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getinlanddiscount",
        //get请求传递参数
        params,
        method: 'get'
    })
}
//海淘详情页接口
export const getSaveMoneyDetail = (params) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getmoneyctrlproduct",
        //get请求传递参数
        params,
        method: 'get'
    })
}
//国内折扣详情页接口
export const getDomesticDiscountDetail = (params) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getdiscountproduct",
        //get请求传递参数
        params,
        method: 'get'
    })
}
export const test = (params) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getproductcom",
        //get请求传递参数
        params,
        method: 'get'
    })
}

// 陶
export const getSiteNav = (params) => {
    return axios({
        url: "http://106.12.79.128:1234/api/getsitenav",
        params: params,
        method: 'get'
    })
}


// 登入
// export const login = (username, password) => {
//     return axios({
//         url: "http://106.12.79.128:1901/users/login",
//         method: "post",
//         params: {
//             username,
//             password
//         }
//     })
// }
export const login = (data) => {
    console.log(data);
    return axios({
        url: "http://106.12.79.128:1901/users/login",
        method: "post",
        data: data
    })
}
