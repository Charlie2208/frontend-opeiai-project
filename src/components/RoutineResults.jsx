import { Ripples } from '@uiball/loaders'
import ResultsCards from './ResultsCards'

const RoutineResults = ({ listRoutines, isLoading }) => {
  return (
    <div className="container max-w-5xl mx-auto px-2 py-6">
      <div>
        {isLoading ? 
          <Ripples size={100} speed={2} color="black" /> : 
          <ResultsCards listRoutines={listRoutines}  />
        }
      </div>
    </div>
  )
}
export default RoutineResults

{/* <ResultsCards resultado={listRoutines}   /> */}

{/* <ResultsCards resultado={listRoutines} /> */}

