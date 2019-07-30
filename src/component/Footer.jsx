import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
          <>
            <div className="footer">
              <NavLink to="/sua" activeClassName="active">
                刷新
              </NavLink>
              <NavLink to="/fen">分类</NavLink>
              <NavLink to="/fa">发现</NavLink>
              <NavLink to="/shopping">购物车</NavLink>
              <NavLink to="/my">我的</NavLink>
            </div>
          </>
        );
    }
}

export default Footer;