
function Card(props) {
  return (
    <div className="border border-primary border-3">
      <div className="border border-3 border-primary">
        {(typeof props.data === 'undefined') ? (
          <div>
            <p className="m-0">
              Welcome to your deck! Enter your favorite player's name above to
              get your first card.
            </p>
          </div>
        ) : (
          props.data.map((data, i) => (
            <p className="m-0 border border-1 p-2" key={i}> {data}</p>
          ))
        )}
      </div>
    </div>
  )
}

export default Card