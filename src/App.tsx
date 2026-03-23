import Accordian from "./Components/Accordian/Index.tsx"

import ImageSlider from "./Components/Image-Slider/Index.tsx"
import ColorIndex from "./Components/RandomColor/Index.tsx"
import StarRating from "./Components/Star-Rating/Index.tsx"
import LoadMoreData from "./Components/Load-More-Data/LoadMoreData.tsx"
import TreeMenu from "./Components/Tree-Menu/Index.tsx"
import sideMenuData from "./Components/Tree-Menu/Data.ts"
import QrGenerator from "./Components/qr-code-generator/index.tsx"
import ThemeCharger from "./Components/Light-Dark-Mode/index.tsx"
import ScrollIndicator from "./Components/Scroll-Indicator/index.tsx"
import TabItems from "./Components/Tabs/tabItems.tsx"
import ModalTest from "./Components/Custom-model-popUp/modal-test.tsx"

// import FeatureFlags from "./Components/Feature-Flag/Index.tsx"
// import FeatureFlagGlobalState from "./Components/Feature-Flag/Context/index.tsx"

import ProfileFinder from "./Components/Github-profile-finder/index.tsx"
import UseFetchHookTest from "./Components/use-fetch/test.tsx"
import UseOnClickOutSideTest from "./Components/use-outside-click/test.tsx"
import UseWindowReSizeTest from "./Components/use-window-resize/test.tsx"

import ScrollToSection from "./Components/scroll-to-section"

import ScrollToTopAndBottom from "./Components/scroll-to-top"






function App() {


  return (
    <div>
      <Accordian />

      <ColorIndex />

      <StarRating noOfStars={10} />

      <ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={10} />

      <LoadMoreData />

      <TreeMenu sideMenuData={sideMenuData} />

      <QrGenerator />

      <ThemeCharger />

      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />

      <TabItems />

      <ModalTest />

      <ProfileFinder />

      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      <UseFetchHookTest />

      <UseOnClickOutSideTest />

      <UseWindowReSizeTest />

      <ScrollToTopAndBottom />

      <ScrollToSection />
    </div>
  )
}

export default App
