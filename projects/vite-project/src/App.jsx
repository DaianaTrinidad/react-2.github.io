import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
      userName: 'trinidad',
      name: 'Daiana Trinidad Puig',
      isFollowing: true
    },
    {
      userName: 'sebastian',
      name: 'Sebastian Pondilo ',
      isFollowing: false
    },
    {
      userName: 'nico',
      name: 'Nicolas Hernandez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]
  
  export function App () {
    return (
      <section className='App'>
        {
          users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
        }
      </section>
    )
  }