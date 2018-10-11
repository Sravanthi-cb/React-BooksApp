import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BookTab from './Tabs';
import Search from './Search';

class Main extends Component {
  render () {
      return (
      <Router>
        <div>
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div>
            {/* Shelf Detail Pages */}
   
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                <li><Link to="/">Currently Reading</Link></li>
                <li><Link to="/WantToRead">Want To Read</Link></li>
                <li><Link to="/Read">Read</Link></li>
                <li><Link to="/Search">Search</Link></li>
                </ul>
                </nav>
  
          </div>
        
     
        <Switch>
         <Route exact path="/" render={() => (
          <BookTab 
          books={this.props.state.books}
          moveShelf={this.props.moveShelf}
          tabName='currentlyReading'
        />
        )}/>

        <Route  path="/WantToRead" render={() => (
          <BookTab 
          books={this.props.state.books}
          moveShelf={this.props.moveShelf}
          tabName='wantToRead'
        />
        )}/>

        <Route path="/Read" render={() => (
          <BookTab 
          books={this.props.state.books}
          moveShelf={this.props.moveShelf}
          tabName='read'/>
        )}/>
        
        <Route path="/Search" render={() => (
          <Search
          moveShelf={this.props.moveShelf}
          books={this.props.state.books}
        />
        )}/>
        </Switch> 
        </div>
        </Router> 
      );
  }
}

export default Main;