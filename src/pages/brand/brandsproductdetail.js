import React from "react"
import { observer, inject } from "mobx-react"
import Nav from './nav3'
import "../../assets/css/brands/brands.css"
@inject('BrandsStore')
@observer
class BrandLists extends React.Component {
    componentDidMount() {
        let { BrandsStore } = this.props
        let productid = this.props.location.search.split("?").splice(1, 1)
        BrandsStore.getTenListData(productid, 10)
    }
    jump(id, price, e) {
        // console.log(price, e);
        this.props.history.push("/comment?" + "id=" + id + "&price=" + price.slice(1, -3))
    }
    onchange() {
        this.props.history.go(-1)
    }

    render() {
        let { getcommentlists } = this.props.BrandsStore
        return (
            <div>
               <Nav/>
                <ul className="ul">
                    {getcommentlists.map(item => {
                        let imgscr = item.productImg.split("=")[1].split(" alt")[0]
                        var regex = /"/g
                        let imgsrc1 = imgscr.replace(regex, '')
                        return (
                            <li key={item._id}>
                                <div className='img_container' onClick={this.jump.bind(this, item.productId, item.productPrice)}>
                                    <img src={imgsrc1} alt="" />
                                </div>
                                <div style={{ width: "300px" }} className='product_msg'>
                                    <p onClick={this.jump.bind(this, item.productId, item.productPrice)}> {item.productName}</p>
                                    <p onClick={this.jump.bind(this, item.productId, item.productPrice)}> {item.brandName}</p>
                                    <p><span className='pro_price'>{item.productPrice}</span></p>
                                    <p><span>{item.productQuote}</span><span>{item.productCom}</span></p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default BrandLists



// likebooks(item) {
//     if (!localStorage.getItem("token")) {
//       this.$message({
//         message: "你还没有登陆哦，3秒后自动跳转到登陆页",
//         type: "warning"
//       });
//       setTimeout(() => {
//         this.$router.push("/login");
//       }, 1500);
//     } else {
//       this.bookarr.filter(item => {
//         return this.bookidnums.push(item.bookId);
//       });
//       if (this.bookidnums.includes(item.bookId)) {
//         this.$message({
//           message: "已经收藏啦，前往我的书架查看哦",
//           type: "success"
//         });
//       } else {
//         if (!localStorage.localbooks) {
//           localStorage.localbooks = [];
//         } else {
//           this.bookarr = JSON.parse(localStorage.localbooks);
//         }
//         let obj = {};
//         obj.bookId = item.bookId;
//         obj.bookImage = item.bookImage;
//         obj.bookName = item.bookName;
//         obj.classificationName = item.classificationName;
//         obj.writerName = item.writerName;
//         obj.lastUpdateTime = item.lastUpdateTime;
//         this.bookarr.push(obj);
//         localStorage.localbooks = JSON.stringify(this.bookarr);
//         this.$message({ message: "添加收藏成功", type: "success" });
//       }
//     }
//   }