import { React, useEffect, useState } from 'react'
import axios from 'axios'
import './styles.scss'

// 'fearAndGreed' is abbreviated to 'fng'
const FearAndGreed = () => {
  const [fngNumberScore, setFngNumberScore] = useState('')
  const [fngValueClassification, setFngValueClassification] = useState('')

  useEffect(() => {
    axios
      .get('https://api.alternative.me/fng/')
      .then(result => {
        setFngNumberScore(result.data.data[0].value)
        setFngValueClassification(result.data.data[0].value_classification)
      })

      .catch(error => console.error(error))
  }, [])

  return (
    <section className="fear-and-greed">
      <h4>
        Fear and Greed Index is&nbsp;
        <b className="fng-number-score">{fngNumberScore}</b>
      </h4>
      <h3
        className={`${fngValueClassification
          .replace(/\s/g, '-')
          .toLowerCase()}`}
      >
        {fngValueClassification}
      </h3>
    </section>
  )
}

export default FearAndGreed
