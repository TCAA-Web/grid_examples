import './App.css'
import { GridAutoFlow } from './components/GridAutoShrink/GridAutoFlow'
import { GridColumns } from './components/GridColumns/GridColumns'
import { GridPositions } from './components/GridPositions/GridPositions'
import { GridRows } from './components/GridRows/GridRows'

function App() {

  return (
    <>
      <GridColumns/>
      <GridRows/>
      <GridPositions/>
      <GridAutoFlow/>
    </>
  )
}

export default App
