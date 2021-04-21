import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PropTypes from "prop-types";
// Preloader
import Preloader from './components/layouts/Preloader'
// Pages
import Hometwo from './components/pages/Hometwo'
// import About from './components/pages/About'
import Portfoliotwo from './components/pages/Portfoliotwo'
import Portfoliodetail from './components/pages/Portfoliodetail'
import Servicetwo from './components/pages/Servicetwo'
import Servicedetail from './components/pages/Servicedetail'
import Contact from './components/pages/Contact'
// import Faq from './components/pages/Faq'



import {
  multilanguage,  
  loadLanguages
} from 'redux-multilanguage'
import {connect} from 'react-redux'


class App extends Component {

  state = {language: 'en'}
  componentDidMount(){
    this.loadLanguages()
  }
  loadLanguages(){
    this.props.dispatch(loadLanguages({
      languages: {
        sp: require('./translations/spanish.json'),
        po: require('./translations/portuguese.json'),
        ch: require('./translations/chinese.json'),
        tk: require('./translations/turkish.json'),
        en: require('./translations/english.json'),
        fr: require('./translations/french.json')
      }
    }))
  }

  render(){
    return (
      <Router>
        <Preloader />
        <Switch>
          <Route path="/" exact component={Hometwo} />
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/portfolio" component={Portfoliotwo} /> */}
          {/* <Route path="/portfoliodetail" component={Portfoliodetail} /> */}
          <Route path="/services" exact render={() =>  <Servicetwo/>} />
          {/* <Route path="/services/:name" render={(routeProps) => <Servicedetail {...routeProps} page={routeProps.match.params.name} />}/> */}
          {/* <Route path="/servicedetail" component={Servicedetail} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
          {/* <Route path="/faq" component={Faq} /> */}
        </Switch>
      </Router>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(multilanguage(App))