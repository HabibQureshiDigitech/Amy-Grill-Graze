import Crafting from '../Components/Crafting'
import Footer from '../Components/Footer'
import Headers from '../Components/Headers'
import MenuShowcase from '../Components/MenuShowCase'
import Savor from '../Components/Savor'
import SecureSpot from '../Components/SecureSpot'

function HomePage() {
  return (
    <div>
       <Headers />
       <MenuShowcase />
       <Crafting/>
       <Savor/>
       <SecureSpot/>
       <Footer />
    </div>
  )
}

export default HomePage
