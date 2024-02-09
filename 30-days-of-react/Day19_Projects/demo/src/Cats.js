import React, { useCallback, useEffect, useState } from 'react'
import CatImage from './assets/imgs/favicon.b50dbf31ffe4c58626a5.gif'
import { InputGroup, Button, Input } from 'reactstrap'

const Cat = () => {
  const [avgWeight, setAvgWeight] = useState();
  const [avgLife, setAvgLife] = useState();
  const [cats, setCats] = useState([])
  const [cat, setCat] = useState()
  const [id, setId] = useState('')

  const fetchCats = useCallback(() => {
    let totalWeight = 0;
    let totalLife = 0;
    fetch('https://api.thecatapi.com/v1/breeds')
      .then(res => res.json()).then(res => {
        res.forEach(cat => {
          let weightRange = cat.weight.metric.split('-').map(parseFloat)
          let weight = (weightRange[0] + weightRange[1]) / 2;
          let lifeRange = cat.life_span.split('-').map(parseFloat)
          let life = (lifeRange[0] + lifeRange[1]) / 2;

          totalWeight += weight;
          totalLife += life;
        })

        const avg_life = totalLife / res.length;
        const avg_weight = totalWeight / res.length;
        setAvgLife(avg_life.toFixed(2))
        setAvgWeight(avg_weight.toFixed(2))
        setCats(res)
      })
  }, [])

  const fetchCat = useCallback(() => {
    id && fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${id}`)
      .then(res => res.json())
      .then(res => {
        setCat(res)
      })
  }, [id])

  useEffect(() => {
    fetchCats()
  }, [fetchCats])

  return (
    <div className='header-wrapper'>
      <img className='cat-icon' src={CatImage} alt='cat' />
      <h1 className='cats-header-title'>Cats Paradise</h1>
      <p>There are {cats.length} cat breeds </p>
      <small className='cat-summary'>On average a cat can weight about <strong className='average'>{avgWeight}</strong> Kg and lives <strong className='average'>{avgLife}</strong> years.</small>
      <InputGroup>
        <Input value={id} onChange={e => setId(e.target.value)} />
        <Button onClick={fetchCat}>Search</Button>
      </InputGroup>
      {
        cat && <img style={{ marginTop: '16px' }} alt='cat' src={cat?.[0]?.url} />
      }
    </div>
  )
}

export default Cat