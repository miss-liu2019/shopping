import React from 'react'
import { Pagination, Icon } from 'antd-mobile';
import './css/sorter.css'
import { observer, inject } from 'mobx-react';

const locale = {
    prevText: 'Prev',
    nextText: 'Next',
  };
@inject("ProductStore")
@observer
  class Sorter extends React.Component{
      constructor(){
          super();
          this.state={
              current:1 //当前页数        
          }
      }
      componentWillMount(){
        this.props.ProductStore.getList()
      }
      //页数发生改变触发此方法,接受传入的页数
      changePage(page){
        //调用获取数据的方法,传入当前页数
        this.props.ProductStore.getList({pageid:page})
        //改变当前页数
        this.setState({
          current:page
        })
        
      }
      render(){
        //获取总条数和每页数据大小 , 通过向上取整,用总条数除以每页数据大小获取总页数
        let {pagesize,totalCount} = this.props.ProductStore.product
        let pageMux = Math.ceil(totalCount/pagesize) //总页数
          return(
            <div className="pagination-container" >
            {/* 最大页数 */}
            <Pagination total={pageMux}   
              className="custom-pagination-with-icon"
              // 最小页数
              current={this.state.current}
              locale={{
                prevText: (<span className="arrow-align"><Icon type="left" />上一页</span>),
                nextText: (<span className="arrow-align">下一页<Icon type="right" /></span>),
              }}
              //发生改变时触发方法,传入当前页数
              onChange={this.changePage.bind(this)}
            />
        
          </div>
          )
      }
  }
  export default Sorter