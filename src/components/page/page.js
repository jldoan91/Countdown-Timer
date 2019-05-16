import React from 'react';
import styles from './page.css';


const Page = class Page extends React.Component {
    constructor (props){
      super(props);
      this.state = {
        theme: 'light'
      }
      this.toggleTheme = this.toggleTheme.bind(this);
    }
    
    toggleTheme(){
      this.setState({
        theme: this.state.theme === 'dark' ? 'light' : 'dark'
      })
    }
    
    render(){
      return (
      <div className={`${styles.container} ${styles[this.state.theme]}`}>
         
        <div className={`${styles.button}`} onClick={this.toggleTheme}>
          Switch to {this.state.theme == 'dark' ? 'Light' : 'Dark'}  
        </div>
        <h3 className={`${styles.title} ${styles[this.state.theme]}`}>My Header</h3>
        <ul className={`${styles.list} ${styles[this.state.theme]}`}>
          <li>List </li>
          <li>Of </li>
          <li>Things</li>
          <li>{this.props.text}</li>
        </ul>
          
          <div className={`${styles.box} ${styles[this.state.theme]}`}>
              Another Container
          </div>
      </div>
      )
    }
  }

  export default Page;
  