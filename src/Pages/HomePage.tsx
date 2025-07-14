
import Crafting from '../Components/Crafting'
import Footer from '../Components/Footer'
// import Headers from '../Components/Headers'
// import MenuShowcase from '../Components/MenuShowCase'
import Savor from '../Components/Savor'
import SecureSpot from '../Components/SecureSpot'

import ExploreHistory from "../Components/ExploreHistory"
// import Headers from "../Components/Headers"
// import MenuShowcase from "../Components/MenuShowCase"
import SeasonalSpecials from "../Components/SeasonalSpecials"


function HomePage() {
  return (
    <div>
       <Headers />
       <MenuShowcase />
       <SeasonalSpecials />
       
       <ExploreHistory />
       <Crafting/>
       <Savor/>
       <SecureSpot/>
       <Footer />

    </div>
  )
}

export default HomePage
