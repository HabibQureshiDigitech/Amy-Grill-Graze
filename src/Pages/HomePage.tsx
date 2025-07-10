import ExploreHistory from "../Components/ExploreHistory"
import Headers from "../Components/Headers"
import MenuShowcase from "../Components/MenuShowCase"
import SeasonalSpecials from "../Components/SeasonalSpecials"

function HomePage() {
  return (
    <div>
       <Headers />
       <MenuShowcase />
       <SeasonalSpecials />
       <ExploreHistory />

    </div>
  )
}

export default HomePage
