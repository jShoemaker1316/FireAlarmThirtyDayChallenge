import alarm from './alarm.gif'

const Loader = () => {
  return (
    <div className="loader">
        <img src={alarm} alt="Loading" />
        <h1>Fetching Data</h1>
    </div>
  )
}

export default Loader