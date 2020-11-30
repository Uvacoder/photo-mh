import Header from './components/ui/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from './components/screens/HomeScreen'
import Footer from './components/ui/Footer'
import NewbornsScreen from './components/screens/NewbornsScreen'
import WeddingsScreen from './components/screens/WeddingsScreen'
import ContactScreen from './components/screens/ContactScreen'
import SimpleReactLightbox from 'simple-react-lightbox'

function App() {
  return (
    <SimpleReactLightbox>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/newborns' component={NewbornsScreen} />
          <Route exact path='/weddings' component={WeddingsScreen} />
          <Route exact path='/contact' component={ContactScreen} />
        </Switch>
        <Footer />
      </Router>
    </SimpleReactLightbox>
  )
}

export default App
