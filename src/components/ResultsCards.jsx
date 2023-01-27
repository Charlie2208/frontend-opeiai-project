

const ResultsCards = ({ listRoutines }) => {

  let listArray = [];

  if(listRoutines.length > 0 ){
    listArray = listRoutines.split("\n")
    .map((listRoutines, index) => {
      return {
        number: index + 1,
        instruction: listRoutines.trim()
      }
    })
    console.log(listArray)
  }
  return (
    <ul>
      {listArray.map((item,index)=><li key={index}>{item.instruction}</li>)}
    </ul>
  )
}
export default ResultsCards