import React from 'react'
import day3Demo from './images/day3_demo.jpg'

const UserCard = () => {
  const skills = [
    'HTML',
    'CSS',
    'Sass',
    'JS',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'Flask',
    'Django',
    'Numpy',
    'Pandas',
    'Data Analysis',
    'MYSQL',
    'GraphQL',
    'D3.js',
    'Gatsby',
    'Docker',
    'Heroku',
    'Git'
  ]
  return (
    <div className='userCard'>
      <div className='user-info'>
        <img src={day3Demo} alt="" />
        <h4>ASABENEH YETAYEH</h4>
        <p>Senior Developer, Finland</p>
      </div>
      <section>
        <h4>SKILLS</h4>
        <div className='tag-wrapper'>
          {
            skills.map(skill => (<div className='tag' key={skill}>{skill}</div>))
          }
        </div>
      </section>
      <footer>
        Joined on Aug 30, 2020
      </footer>
    </div>
  )
}

export default UserCard
