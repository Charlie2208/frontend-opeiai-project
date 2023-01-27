

const ResultsCards = ({ resultado }) => {
  return (
    <div className="w-full rounded shadow-sm">
        <ul>
            <li className="text-gray-900 text-xl">{resultado}</li>
        </ul> 
    </div>
  )
}

export default ResultsCards
