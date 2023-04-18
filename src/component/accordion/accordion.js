import "./according.styles.scss"

export const Accordion = ({title, body}) => {
  return (
      <div className="accordion-container">
          <h2>{ title }</h2>

          <div className="accordion-details">
              <p>{body }</p>
          </div>

          <div className="white-bar"/>
      </div>
  )
}
